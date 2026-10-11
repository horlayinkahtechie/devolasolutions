import { getEduAdminDb } from "../../../../_lib/firebase-admin";
import { COLLECTIONS } from "../../../../_data/schema";
import { requireUserApi } from "../../../../_lib/auth";
import { getPlaybackUrl, r2Configured } from "../../../../_lib/r2";

/* The access-control chokepoint the brief calls for:
     authenticated user + active enrollment + correct course + correct lesson
   lessonId is the only client-supplied input. courseId is read from the
   lesson document itself, server-side — never trusted from the client —
   which is what stops the "/course-a/lesson-1 -> /course-b/lesson-1" IDOR
   the brief specifically warns about: swapping the URL doesn't change
   which course this lesson's enrollment check runs against. */
export async function GET(_request, { params }) {
  if (!r2Configured) {
    return Response.json({ success: false, message: "Video storage isn't configured yet." }, { status: 503 });
  }

  try {
    const { lessonId } = await params;
    const db = getEduAdminDb();

    const lessonSnap = await db.collection(COLLECTIONS.LESSONS).doc(lessonId).get();
    if (!lessonSnap.exists) {
      return Response.json({ success: false, message: "Lesson not found." }, { status: 404 });
    }
    const lesson = lessonSnap.data();

    if (!lesson.isPreview) {
      const { session, response } = await requireUserApi();
      if (response) return response;

      const enrollmentSnap = await db
        .collection(COLLECTIONS.ENROLLMENTS)
        .where("userId", "==", session.uid)
        .where("courseId", "==", lesson.courseId)
        .where("status", "==", "active")
        .limit(1)
        .get();

      if (enrollmentSnap.empty) {
        return Response.json(
          { success: false, message: "You don't have access to this course." },
          { status: 403 }
        );
      }
    }

    if (!lesson.videoAssetId) {
      return Response.json({ success: false, message: "This lesson has no video yet." }, { status: 404 });
    }

    const videoSnap = await db.collection(COLLECTIONS.VIDEO_ASSETS).doc(lesson.videoAssetId).get();
    if (!videoSnap.exists || videoSnap.data().status !== "ready") {
      return Response.json({ success: false, message: "Video isn't ready yet." }, { status: 404 });
    }

    const url = await getPlaybackUrl(videoSnap.data().key);
    return Response.json({ success: true, url });
  } catch (err) {
    // Firestore/R2 unreachable, misconfigured, etc. — never leak the raw
    // error (it can contain project IDs, internal URLs) to the client.
    console.error("playback-url failed:", err);
    return Response.json(
      { success: false, message: "Something went wrong loading this video. Please try again." },
      { status: 503 }
    );
  }
}

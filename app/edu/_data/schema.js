/* ─────────────────────────────────────────────
   FIRESTORE SCHEMA — single source of truth for
   collection names and document shapes used by
   the education platform. Phase 2+ code should
   import COLLECTIONS from here rather than typing
   collection name strings directly.

   This mirrors app/_data/solutions.jsx's role for
   the marketing site: one file to read to
   understand the whole data model.
───────────────────────────────────────────── */

export const COLLECTIONS = {
  USERS: "eduUsers",
  COURSES: "eduCourses",
  MODULES: "eduModules",
  LESSONS: "eduLessons",
  LESSON_RESOURCES: "eduLessonResources",
  ENROLLMENTS: "eduEnrollments",
  PAYMENTS: "eduPayments",
  VIDEO_ASSETS: "eduVideoAssets",
  LESSON_PROGRESS: "eduLessonProgress",
  CATEGORIES: "eduCategories",
  MARKETING_PREFERENCES: "eduMarketingPreferences",
  AUDIT_LOGS: "eduAuditLogs",
  RATE_LIMITS: "eduRateLimits",
  LOGIN_TOKENS: "eduLoginTokens",
};

/**
 * @typedef {Object} EduUser
 * @property {string} uid - Firebase Auth uid (doc id).
 * @property {string} name
 * @property {string} email
 * @property {boolean} isAdmin - Mirrors the `role: "admin"` custom claim for
 *   easy admin-list queries; the custom claim (checked server-side on every
 *   request) is the actual source of authority, this field is a read model.
 * @property {number} createdAt - ms epoch.
 * @property {number} updatedAt - ms epoch.
 * @property {number|null} lastLoginAt - ms epoch.
 */

/**
 * @typedef {Object} EduCategory
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 */

/**
 * @typedef {"draft"|"published"|"archived"} CourseStatus
 *
 * @typedef {Object} EduCourse
 * @property {string} id
 * @property {string} slug - unique, used in /courses/[slug].
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} fullDescription
 * @property {string|null} thumbnailUrl
 * @property {string|null} coverImageUrl
 * @property {string|null} categoryId
 * @property {"beginner"|"intermediate"|"advanced"|"all-levels"} level
 * @property {string} language
 * @property {string} instructorName - single-instructor platform; stored as
 *   plain text rather than a separate instructors collection (per brief:
 *   keep it simple, Devola Solutions is the only instructor).
 * @property {string[]} requirements
 * @property {string[]} targetAudience
 * @property {string[]} learningOutcomes
 * @property {{question: string, answer: string}[]} faqs
 * @property {CourseStatus} status
 * @property {number} regularPriceNGN
 * @property {number|null} promoPriceNGN
 * @property {number|null} promoStartAt - ms epoch.
 * @property {number|null} promoEndAt - ms epoch. Promo is only "live" when
 *   promoPriceNGN is set AND now is between promoStartAt/promoEndAt — this
 *   is computed at read time (see _lib/pricing.js in a later phase), never
 *   trust a stored "isDiscounted" boolean that could go stale.
 * @property {number} totalLessons - denormalised count, recomputed whenever
 *   the curriculum changes, so the public listing doesn't need to fan out
 *   into modules/lessons just to show a count.
 * @property {number} totalDurationSeconds - denormalised, same reason.
 * @property {number} createdAt
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} EduModule
 * @property {string} id
 * @property {string} courseId
 * @property {string} title
 * @property {number} order
 */

/**
 * @typedef {Object} EduLesson
 * @property {string} id
 * @property {string} courseId
 * @property {string} moduleId
 * @property {string} title
 * @property {string} description
 * @property {number} order
 * @property {number} durationSeconds
 * @property {boolean} isPreview - if true, playable with no auth/enrollment.
 * @property {boolean} isEnabled
 * @property {string|null} videoAssetId - FK into eduVideoAssets.
 */

/**
 * @typedef {Object} EduLessonResource
 * @property {string} id
 * @property {string} lessonId
 * @property {string} title
 * @property {string} fileUrl
 */

/**
 * @typedef {"r2"} VideoProvider
 *
 * @typedef {Object} EduVideoAsset
 * @property {string} id
 * @property {VideoProvider} provider
 * @property {string} key - R2 object key, e.g. "lesson-videos/<uuid>.mp4".
 * @property {string} originalFilename
 * @property {number} sizeBytes
 * @property {"pending"|"ready"|"error"} status - "pending" until the
 *   browser's direct PUT to R2 completes and the admin confirms it (see
 *   the upload-url route) — lets the UI show an uploading state and
 *   catch an abandoned upload rather than silently linking a lesson to
 *   a key that was never actually written.
 */

/**
 * @typedef {"active"|"revoked"|"refunded"|"expired"} EnrollmentStatus
 *
 * @typedef {Object} EduEnrollment
 * @property {string} id
 * @property {string} userId
 * @property {string} courseId
 * @property {string} paymentId
 * @property {EnrollmentStatus} status
 * @property {number} purchasedAt
 * @property {number|null} expiresAt - null = lifetime access.
 */

/**
 * @typedef {"pending"|"successful"|"failed"} PaymentStatus
 *
 * @typedef {Object} EduPayment
 * @property {string} id
 * @property {string} userId
 * @property {string} courseId
 * @property {string} provider - e.g. "paystack".
 * @property {string} reference - provider's transaction reference.
 * @property {number} amount
 * @property {string} currency
 * @property {PaymentStatus} status
 * @property {Object} providerResponse - raw verified response, for audits.
 * @property {number} createdAt
 */

/**
 * @typedef {Object} EduLessonProgress
 * @property {string} id - `${userId}_${lessonId}`, so it's naturally unique
 *   and upsert-able without a query first.
 * @property {string} userId
 * @property {string} courseId
 * @property {string} lessonId
 * @property {number} positionSeconds
 * @property {number} durationSeconds
 * @property {boolean} completed
 * @property {number} lastWatchedAt
 */

/**
 * @typedef {Object} EduMarketingPreference
 * @property {string} userId
 * @property {boolean} transactionalOnly - true = opted out of marketing,
 *   still receives transactional email (receipts, login links). Opt-out
 *   should never block transactional sends, per the brief.
 * @property {number} updatedAt
 */

/**
 * @typedef {Object} EduAuditLogEntry
 * @property {string} id
 * @property {string} adminUid
 * @property {string} adminEmail
 * @property {string} action - e.g. "course.publish", "enrollment.revoke".
 * @property {string|null} targetId
 * @property {Object} metadata
 * @property {number} createdAt
 */

export {};

import Image from "next/image";
import Link from "next/link";
import FinalCTA from "../_components/FinalCTA";
import { textReviews, screenshotReviews } from "../_data/reviews";

const Label = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 mb-5">
    <span className="w-6 h-0.5 bg-[#FF5C00] inline-block rounded-full" />
    <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest">
      {text}
    </span>
  </div>
);

const initialsOf = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ReviewCard = ({ review }) => {
  const content = (
    <div className="relative rounded-3xl border border-slate-100 bg-white p-8 flex flex-col justify-between min-h-60 overflow-hidden h-full">
      <span className="absolute top-3 right-6 text-[6rem] font-black leading-none select-none pointer-events-none text-slate-100">
        &ldquo;
      </span>
      <p className="relative z-10 text-base leading-relaxed font-medium text-slate-800 mb-7">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-black shrink-0">
            {initialsOf(review.name)}
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">{review.name}</div>
            <div className="text-xs text-slate-500 mt-0.5">{review.role}</div>
          </div>
        </div>
        {review.href && (
          <span className="text-xs font-bold text-[#FF5C00] shrink-0">
            {review.external ? "Visit site ↗" : "View project →"}
          </span>
        )}
      </div>
    </div>
  );

  if (!review.href) return content;

  return (
    <Link
      href={review.href}
      target={review.external ? "_blank" : undefined}
      rel={review.external ? "noopener noreferrer" : undefined}
      className="block h-full"
    >
      {content}
    </Link>
  );
};

const Reviews = () => {
  return (
    <div className="bg-[#fafafa]">
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-36 pb-16">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-10">
            <Link href="/" className="hover:text-[#FF5C00] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Reviews</span>
          </div>

          <Label text="Client Reviews" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.0] mb-6 max-w-3xl">
            Real Clients.
            <br />
            <span className="text-[#FF5C00]">Real Results.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Every review on this page is from a business we have actually
            built for — most link straight through to the live project or
            case study so you can see the work for yourself.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          SCREENSHOT REVIEWS (hidden until populated)
      ══════════════════════════════ */}
      {screenshotReviews.length > 0 && (
        <section className="py-16 px-6 md:px-12 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <Label text="Straight From Clients" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
                In Their Own Words.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {screenshotReviews.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-100 bg-[#fafafa] overflow-hidden"
                >
                  <div className="relative w-full aspect-[4/5] bg-slate-100">
                    <Image
                      src={r.image}
                      alt={`Review from ${r.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  {(r.name || r.role) && (
                    <div className="p-4">
                      {r.name && (
                        <div className="text-sm font-bold text-slate-900">{r.name}</div>
                      )}
                      {r.role && (
                        <div className="text-xs text-slate-500 mt-0.5">{r.role}</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════
          TEXT REVIEWS
      ══════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Label text="What Clients Say" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Real Feedback, Not Stock Quotes.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {textReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Reviews;

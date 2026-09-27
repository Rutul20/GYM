/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { type FC } from "react";
import { MEMBER_REVIEWS } from "../../data/gymWebsite.data";
import type { MemberReview } from "../../types/gymWebsite.types";

export const MemberReviews: FC = () => {
  return (
    <section id="reviews" className="py-24 bg-industrial-950 border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-volt" />
              <span className="font-mono text-xs text-volt uppercase tracking-widest font-semibold">
                // MEMBER FIELD AUDITS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black">
              VERIFIED GOOGLE REVIEWS (4.9★)
            </h2>
          </div>
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            MOST TRUSTED GYM IN VADODARA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MEMBER_REVIEWS.map((review: MemberReview) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 bg-industrial-900 border border-industrial-800 flex flex-col justify-between hover:border-white transition-colors"
            >
              <div>
                <div className="flex gap-1 text-volt text-sm mb-4">
                  {Array.from({ length: review.rating }).map((_, i: number) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-zinc-300 font-sans text-sm italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-industrial-800/80">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-display text-lg text-white font-bold leading-tight">
                      {review.name}
                    </h5>
                    <span className="font-mono text-[9px] text-zinc-200 bg-white/10 border border-white/20 px-1.5 py-0.5 uppercase tracking-wider font-semibold">
                      VERIFIED
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 block mt-0.5">
                    {review.achievement}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

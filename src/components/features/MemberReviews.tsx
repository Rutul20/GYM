/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { type FC } from "react";
import { MEMBER_REVIEWS } from "../../data/gymWebsite.data";
import type { MemberReview } from "../../types/gymWebsite.types";

export const MemberReviews: FC = () => {
  return (
    <section id="reviews" className="relative py-14 sm:py-20 md:py-24 bg-[radial-gradient(ellipse_at_top,_#0a1636_0%,_#050914_60%,_#03050a_100%)] border-t border-industrial-800/80 overflow-hidden">
      {/* Subtle dual atmospheric ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cobalt/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-none bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest font-semibold">
                // MEMBER FIELD AUDITS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black">
              VERIFIED GOOGLE REVIEWS (<span className="text-cyan-400">4.9★</span>)
            </h2>
          </div>
          <span className="font-mono text-xs text-cyan-200/70 uppercase tracking-widest bg-cobalt/10 border border-cobalt/30 px-3 py-1.5 self-start md:self-auto">
            MOST TRUSTED GYM IN VADODARA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MEMBER_REVIEWS.map((review: MemberReview) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 bg-[#091428]/80 backdrop-blur-md border border-cyan-500/20 flex flex-col justify-between hover:border-white transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group relative overflow-hidden"
            >
              {/* Giant Quotation Watermark */}
              <span className="absolute top-1 right-4 font-serif text-7xl text-cyan-400/5 select-none pointer-events-none">
                “
              </span>

              <div className="relative z-10">
                <div className="flex gap-1 text-amber-400 text-sm mb-4">
                  {Array.from({ length: review.rating }).map((_, i: number) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-zinc-200 font-sans text-sm italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/15 relative z-10">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-display text-lg text-white font-bold leading-tight group-hover:text-cyan-300 transition-colors">
                      {review.name}
                    </h5>
                    <span className="font-mono text-[9px] text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-1.5 py-0.5 uppercase tracking-wider font-semibold">
                      VERIFIED
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400/80 block mt-0.5">
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

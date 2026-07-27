import { MarktLogo } from './Icons';

export const ComparisonPanel = () => {
     const rows = [
          { label: 'Product Discovery', left: '—', center: 'Social feed, creator content, and live selling', right: 'Mostly static listings and search results' },
          { label: 'Buyer Confidence', left: '—', center: 'Real seller presence, conversation, and richer context', right: 'Limited context beyond photos and short descriptions' },
          { label: 'Seller-Buyer Interaction', left: '—', center: 'Chat, comments, and live questions before checkout', right: 'Minimal real-time interaction' },
          { label: 'Shopping Experience', left: '—', center: 'Feels like a real market, but on your phone', right: 'Transactional and impersonal' },
          { label: 'Checkout Flow', left: '—', center: 'Native in-app checkout with secure payments', right: 'Often fragmented across pages or external flows' },
          { label: 'Seller Growth', left: '—', center: 'Build an audience and turn buyers into followers', right: 'Every listing competes in isolation' },
          { label: 'Overall Feel', left: '—', center: 'Human, interactive, and trust-driven', right: 'Functional, but generic' },
     ];
     return (
          <section className="py-xl px-4 sm:px-6">
               <div className="max-w-7xl mx-auto">
                    <div className="rounded-lg overflow-hidden bg-white/80 dark:bg-zinc-950/70 shadow-kinetic backdrop-blur-sm">
                         {/* Desktop three-column layout */}
                         <div className="hidden lg:grid lg:grid-cols-[0.9fr_1.1fr_1.1fr]">
                              {/* Labels column */}
                              <div className="bg-neutral/50 dark:bg-zinc-950/70">
                                   <div className="px-6 py-6">
                                        <h3 className="text-lg font-bold font-display text-secondary dark:text-zinc-50">What Matters</h3>
                                   </div>
                                   <div className="divide-y divide-black/5 dark:divide-zinc-800">
                                        {rows.map((r) => (
                                             <div key={r.label} className="px-6 py-5 text-sm text-tertiary dark:text-zinc-400">
                                                  {r.label}
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Markt column */}
                              <div className="bg-primary text-white">
                                   <div className="px-6 py-6 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-DEFAULT flex items-center justify-center">
                                             <MarktLogo className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-lg font-black font-display">Markt</h3>
                                   </div>
                                   <div className="divide-y divide-white/10">
                                        {rows.map((r) => (
                                             <div key={r.label} className="px-6 py-5 text-sm">
                                                  {r.center}
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Competitors column */}
                              <div className="bg-neutral/20 dark:bg-zinc-950/50">
                                   <div className="px-6 py-6 flex items-center gap-4">
                                        <h3 className="text-lg font-bold font-display text-secondary dark:text-zinc-50">Traditional Marketplaces</h3>
                                   </div>
                                   <div className="divide-y divide-black/5 dark:divide-zinc-800">
                                        {rows.map((r) => (
                                             <div key={r.label} className="px-6 py-5 text-sm text-tertiary dark:text-zinc-400">
                                                  {r.right}
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         {/* Mobile and tablet layout */}
                         <div className="lg:hidden">
                              <div className="px-4 py-6 sm:px-6">
                                   <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                                        <div className="flex items-center gap-3 min-w-0">
                                             <div className="w-10 h-10 rounded-DEFAULT bg-primary flex items-center justify-center text-white">
                                                  <MarktLogo className="w-6 h-6" />
                                             </div>
                                             <div className="min-w-0">
                                                  <div className="text-sm font-black font-display text-secondary dark:text-zinc-50">Markt</div>
                                                  <div className="text-xs text-tertiary dark:text-zinc-400">Social commerce</div>
                                             </div>
                                        </div>
                                        <div className="text-sm font-bold text-secondary dark:text-zinc-50">Traditional Marketplaces</div>
                                   </div>
                                   <div className="flex flex-col gap-3">
                                        {rows.map((r) => (
                                             <div key={r.label} className="rounded-lg bg-white dark:bg-zinc-900 p-4 sm:p-5 shadow-sm border border-transparent dark:border-zinc-800">
                                                  <div className="text-sm font-medium text-tertiary dark:text-zinc-400 mb-3">{r.label}</div>
                                                  <div className="grid gap-3 sm:grid-cols-2">
                                                       <div className="rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white">
                                                            {r.center}
                                                       </div>
                                                       <div className="rounded-lg bg-neutral/70 dark:bg-zinc-800 px-4 py-3 text-sm text-secondary dark:text-zinc-300">
                                                            {r.right}
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default ComparisonPanel;

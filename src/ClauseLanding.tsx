import { ArrowDown, ArrowUpRight, ScanLine, ShieldCheck, BookOpen, Check } from 'lucide-react';

export function ClauseLanding({onTry}:{onTry:()=>void}) {
 return <div className="clause-landing">
  <header className="landing-nav"><a href="#" aria-label="Clause home"><img src="./clause-wordmark.svg" alt="Clause"/></a><a href="#how-clause-works">How it works</a><button onClick={onTry}>Try the demo <ArrowUpRight size={16}/></button></header>
  <main>
   <section className="landing-hero">
    <div className="landing-copy"><div className="eyebrow"><span/> READ LESS. UNDERSTAND MORE.</div><h1>The fine print.<br/><em>Finally clear.</em></h1><p>Know what you’re saying yes to. Clause turns lengthy terms and privacy policies into clear explanations, so you can make your next click with confidence.</p><button className="landing-primary" onClick={onTry}>See Clause in action <ArrowUpRight size={18}/></button><small>Explore three sample apps. No signup needed.</small></div>
    <div className="landing-preview" aria-label="Example of a Clause explanation"><div className="preview-top"><img src="./clause-mark.svg" alt=""/><span>clause / insights</span><span className="preview-badge">EXAMPLE</span></div><div className="preview-paper"><span>THE FINE PRINT</span><p>“Paid plans renew automatically each month… Fees already charged are non-refundable…”</p><div className="preview-lines"><i/><i/><i/></div></div><div className="preview-translation"><div><ShieldCheck size={19}/> IN PLAIN ENGLISH</div><h2>Your plan keeps going.<br/>So do the payments.</h2><p>Cancel before your next billing date to avoid another charge. Payments already made generally won’t be refunded.</p><span><Check size={14}/> Linked to the original clause</span></div></div>
    <a className="landing-scroll" href="#how-clause-works">A clearer picture, in three steps <ArrowDown size={16}/></a>
   </section>
   <section className="landing-how" id="how-clause-works"><div className="eyebrow">01 — HOW IT WORKS</div><h2>Three steps.<br/>Zero guesswork.</h2><div className="landing-points">{[
    {number:'01',Icon:ScanLine,title:'Read the fine print.',text:'Choose a privacy policy or terms of service. Clause brings the important details together in a plain-English summary.'},
    {number:'02',Icon:ShieldCheck,title:'Spot what matters.',text:'Take a closer look at data sharing, automatic renewals, cancellation fees, and other clauses that could affect you.'},
    {number:'03',Icon:BookOpen,title:'Understand your yes.',text:'See why each finding matters and jump straight to its original passage. Get the context you need to make your own choice.'}
   ].map(({number,Icon,title,text})=><article key={number}><div className="point-top"><Icon size={25}/><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
   <section className="landing-end"><div><div className="eyebrow">YOUR NEXT CLICK STARTS HERE.</div><h2>Agree with your eyes open.</h2><p>Explore Clause with Socially, VentureHub, or Waypoint.</p></div><button className="landing-primary" onClick={onTry}>Explore the demo <ArrowUpRight size={18}/></button></section>
  </main>
  <footer className="landing-footer"><img src="./clause-wordmark.svg" alt="Clause"/><span>Clarity, not legal advice.</span><small>Demo with sample documents and prepared explanations.</small></footer>
 </div>;
}

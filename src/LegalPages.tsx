import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ChevronDown, FileText, LockKeyhole, Settings2, ShieldCheck } from 'lucide-react';

type Section = {id:string;title:string;text:string;extra:string};
type Props = {kind:'venture'|'waypoint';document:'terms'|'privacy';sections:Section[];selected:string|null;onDocument:(document:'terms'|'privacy')=>void;onHome:()=>void;onCookies:()=>void};
export function LegalPages({kind,document,sections,selected,onDocument,onHome,onCookies}:Props){
 const [open,setOpen]=useState<string[]>([]);
 useEffect(()=>{setOpen(sections.length?[sections[0].id]:[])},[kind,document]);
 useEffect(()=>{if(selected)setOpen(current=>current.includes(selected)?current:[...current,selected])},[selected]);
 const title=document==='terms'?'Terms of Service':'Privacy Policy';
 const jump=(id:string)=>{setOpen(current=>current.includes(id)?current:[...current,id]);window.setTimeout(()=>window.document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'center'}),50)};
 if(kind==='venture')return <div className="venture-legal">
  <div className="vl-breadcrumb"><button onClick={onHome}><ArrowLeft size={13}/> Workspace</button><span>/</span><span>Legal & compliance</span><span>/</span><b>{title}</b></div>
  <div className="vl-heading"><div><div className="vl-label">VENTUREHUB / LEGAL DOCUMENTATION</div><h1>{title}</h1><p>The agreement behind your workspace. All the details, in one place.</p></div></div>
  <nav className="vl-document-nav" aria-label="Legal documents"><button className={document==='terms'?'active':''} onClick={()=>onDocument('terms')}><FileText size={15}/> Terms of Service</button><button className={document==='privacy'?'active':''} onClick={()=>onDocument('privacy')}><LockKeyhole size={15}/> Privacy Policy</button><button onClick={onCookies}><Settings2 size={15}/> Cookie settings</button></nav>
  <div className="vl-reader"><aside className="vl-index"><span>CONTENTS</span>{sections.map((s,i)=><button className={selected===s.id?'active':''} key={s.id} onClick={()=>jump(s.id)}><span>{String(i+1).padStart(2,'0')}</span>{s.title}</button>)}</aside>
   <article className="vl-document"><div className="vl-file-bar"><span><FileText size={14}/> {document==='terms'?'service-agreement':'privacy-policy'}.vh</span><span>v1.0</span></div><div className="vl-document-intro"><h2>{document==='terms'?'Working together, clearly.':'How we handle your business data.'}</h2><p>{document==='terms'?'These terms cover your account, business materials, subscriptions, and use of VentureHub. Read them before starting a workspace.':'This policy describes the information we collect, how we use it, and the controls available to your workspace.'}</p></div>{sections.map((s,i)=><section className={`vl-clause ${selected===s.id?'is-selected':''}`} id={s.id} key={s.id}><div className="vl-clause-heading"><span>{String(i+1).padStart(2,'0')}</span><h3>{s.title}</h3></div>{selected===s.id&&<div className="vl-source"><ShieldCheck size={13}/> Source selected by Clause</div>}<p>{s.text}</p>{s.extra&&<p>{s.extra}</p>}</section>)}<div className="vl-document-end">END OF DOCUMENT <span>VentureHub / {title}</span></div></article>
   <aside className="vl-metadata"><span>DOCUMENT DETAILS</span><dl><dt>Effective date</dt><dd>November 1, 2026</dd><dt>Version</dt><dd>1.0 / Current</dd><dt>Coverage</dt><dd>{sections.length} sections</dd></dl><div><FileText size={21}/><h3>Your workspace agreement.</h3><p>Review each section for the terms that apply to your business and account.</p></div></aside>
  </div>
 </div>;
 return null;
}

import { useCallback, useEffect, useState, type SetStateAction } from 'react';

type Analysis = {
 status:'ready'|'scanning'|'complete';
 step:number;
 tab:string;
 selected:string|null;
 expanded:string|null;
};
const initialAnalysis:Analysis={status:'ready',step:0,tab:'overview',selected:null,expanded:null};

// Each site's two documents retain independent results and reading positions.
export function useAnalysis(appId:string,document:'privacy'|'terms') {
 const key=`${appId}:${document}`;
 const [cache,setCache]=useState<Record<string,Analysis>>({});
 const analysis=cache[key]??initialAnalysis;
 const update=useCallback(<K extends keyof Analysis>(field:K,value:SetStateAction<Analysis[K]>)=>{
  setCache(current=>{
   const entry=current[key]??initialAnalysis;
   const next=typeof value==='function'?(value as (previous:Analysis[K])=>Analysis[K])(entry[field]):value;
   return {...current,[key]:{...entry,[field]:next}};
  });
 },[key]);
 const setStatus=useCallback((value:SetStateAction<Analysis['status']>)=>update('status',value),[update]);
 const setTab=useCallback((value:SetStateAction<string>)=>update('tab',value),[update]);
 const setSelected=useCallback((value:SetStateAction<string|null>)=>update('selected',value),[update]);
 const setExpanded=useCallback((value:SetStateAction<string|null>)=>update('expanded',value),[update]);
 const reset=useCallback(()=>setCache(current=>({...current,[key]:{...initialAnalysis}})),[key]);
 useEffect(()=>{
  if(analysis.status!=='scanning')return;
  update('step',0);
  const progress=window.setInterval(()=>update('step',step=>Math.min(step+1,3)),650);
  const complete=window.setTimeout(()=>{
   setCache(current=>({...current,[key]:{...(current[key]??initialAnalysis),status:'complete',tab:'overview'}}));
  },2800);
  return()=>{window.clearInterval(progress);window.clearTimeout(complete)};
 },[key,analysis.status,update]);
 return {...analysis,setStatus,setTab,setSelected,setExpanded,reset};
}

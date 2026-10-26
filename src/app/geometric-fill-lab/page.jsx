"use client";
import { useState } from "react";
const patterns=["None","Eight-point star","Infinite lattice"];
function Geometry({type}){
 if(type==="None")return null;
 if(type==="Eight-point star")return <g stroke="#B78A40" strokeWidth="2.6" fill="none">{[0,45].map(a=><rect key={a} x="88" y="88" width="64" height="64" transform={`rotate(${a} 120 120)`}/>)}</g>;
 return <g stroke="#B78A40" strokeWidth="2" fill="none">{Array.from({length:5},(_,i)=>Array.from({length:5},(_,j)=><rect key={i+"-"+j} x={79+i*16} y={79+j*16} width="22" height="22" transform={`rotate(45 ${90+i*16} ${90+j*16})`}/>))}</g>;
}
export default function GeometryPreview(){
 const [pattern,setPattern]=useState("Eight-point star");
 return <main style={{fontFamily:"system-ui",minHeight:"100vh",background:"#f8f6f1",padding:"32px 16px",color:"#222"}}>
 <div style={{maxWidth:760,margin:"auto"}}><h1>ArtofQR | Geometric Fill Lab</h1><p>Experimental preview. The square border is a placeholder for generated Kufic calligraphy. This test explores how geometric motifs sit inside central whitespace.</p>
 <div style={{display:"flex",gap:10,flexWrap:"wrap",margin:"24px 0"}}>{patterns.map(p=><button key={p} onClick={()=>setPattern(p)} style={{padding:"12px 16px",border:"1px solid #777",borderRadius:8,background:pattern===p?"#222":"white",color:pattern===p?"white":"#222",cursor:"pointer"}}>{p}</button>)}</div>
 <div style={{maxWidth:480,margin:"auto",background:"white",padding:20}}><svg viewBox="0 0 240 240" width="100%" role="img" aria-label={pattern+" inside square Kufic placeholder"}><g stroke="#161616" strokeWidth="13" fill="none" strokeLinejoin="miter"><path d="M18 68V18H100M140 18H222V68M222 172V222H140M100 222H18V172"/><path d="M18 93H68V18M172 18V68H222M222 147H172V222M68 222V172H18"/></g><Geometry type={pattern}/></svg></div>
 <p style={{marginTop:24,fontSize:14,color:"#555"}}>Prototype only. Actual Kufic glyph generation, whitespace detection, collision avoidance, and export integration are next steps.</p></div></main>;
}
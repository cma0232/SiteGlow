"use client";

import { useMemo, useState } from "react";

type Lead = {
  id:number; name:string; city:string; rating:number; reviews:number; tech:string; siteAge:string;
  sales:number; delivery:number; effort:string; pages:number; status:string; risk:"Low"|"Medium"|"High";
  email:string; issue:string; services:string[];
};

const initialLeads: Lead[] = [
  {id:1,name:"Northstar Handyman",city:"Seattle, WA",rating:4.9,reviews:186,tech:"Static HTML",siteAge:"Looks like 2011",sales:93,delivery:96,effort:"2–3h",pages:5,status:"Qualified",risk:"Low",email:"mike@northstarhandyman.com",issue:"Tiny text, no mobile layout, buried quote CTA",services:["Repairs","Carpentry","Painting"]},
  {id:2,name:"Evergreen Home Repair",city:"Bellevue, WA",rating:4.8,reviews:92,tech:"Wix",siteAge:"Looks like 2015",sales:87,delivery:88,effort:"3–4h",pages:7,status:"Qualified",risk:"Low",email:"hello@evergreenrepair.com",issue:"Strong reviews but weak hierarchy and dated imagery",services:["Drywall","Doors","Assembly"]},
  {id:3,name:"Quick Fix Handyman",city:"Tacoma, WA",rating:4.7,reviews:64,tech:"Squarespace",siteAge:"Looks like 2016",sales:81,delivery:84,effort:"4–5h",pages:9,status:"Review",risk:"Medium",email:"contact@quickfixwa.com",issue:"Mobile works, but services and proof are hard to scan",services:["Maintenance","Decks","Fences"]},
  {id:4,name:"Rain City Repairs",city:"Seattle, WA",rating:4.9,reviews:241,tech:"WordPress",siteAge:"Looks like 2013",sales:95,delivery:58,effort:"10–14h",pages:24,status:"Rejected",risk:"High",email:"office@raincityrepairs.com",issue:"Plugin-heavy booking flow and 24 indexed pages",services:["Remodeling","Electrical","Plumbing"]},
  {id:5,name:"Sound Home Services",city:"Renton, WA",rating:4.6,reviews:51,tech:"GoDaddy Builder",siteAge:"Looks like 2014",sales:78,delivery:91,effort:"3–4h",pages:6,status:"Qualified",risk:"Low",email:"dan@soundhomeservices.com",issue:"Good content, poor spacing, generic first impression",services:["Punch lists","Fixtures","Repairs"]},
  {id:6,name:"ProCraft Handyman",city:"Kirkland, WA",rating:4.8,reviews:113,tech:"WordPress",siteAge:"Looks like 2018",sales:82,delivery:73,effort:"6–8h",pages:12,status:"Review",risk:"Medium",email:"team@procraftnw.com",issue:"Simple brochure content but theme and form need inspection",services:["Carpentry","Tile","Installations"]},
];

const stages = ["Discover","Evaluate","Demo","Outreach"];

export default function Home() {
  const [activeStage,setActiveStage] = useState("Evaluate");
  const [leads,setLeads] = useState(initialLeads);
  const [selected,setSelected] = useState<Lead>(initialLeads[0]);
  const [query,setQuery] = useState("");
  const [filter,setFilter] = useState("All");
  const [toast,setToast] = useState("");
  const [mailOpen,setMailOpen] = useState(false);

  const visible = useMemo(()=>leads.filter(l =>
    (filter === "All" || l.status === filter) &&
    (l.name.toLowerCase().includes(query.toLowerCase()) || l.city.toLowerCase().includes(query.toLowerCase()))
  ),[leads,query,filter]);

  function notify(message:string){ setToast(message); window.setTimeout(()=>setToast(""),2400); }
  function updateStatus(status:string){
    setLeads(items=>items.map(l=>l.id===selected.id?{...l,status}:l));
    setSelected({...selected,status}); notify(`${selected.name} moved to ${status}`);
  }

  return <main className="app-shell">
    {toast && <div className="toast">✓ {toast}</div>}
    <aside className="sidebar">
      <div className="logo"><span>✦</span>SiteGlow</div>
      <p className="workspace-label">WORKSPACE</p>
      <nav className="side-nav">
        <button className="active"><span>⌁</span>Acquisition flow</button>
        <button><span>▦</span>Lead library <i>{leads.length}</i></button>
        <button><span>◫</span>Demo studio</button>
        <button><span>✉</span>Outreach</button>
        <button><span>↗</span>Analytics</button>
      </nav>
      <div className="weekly">
        <div><span>THIS WEEK</span><b>First $399 customer</b></div>
        <div className="progress"><i /></div>
        <p><b>12</b> / 20 leads reviewed</p>
      </div>
      <div className="user"><span>CM</span><div><b>Changhong Ma</b><small>Owner workspace</small></div><i>•••</i></div>
    </aside>

    <section className="workspace">
      <header className="topbar">
        <div><p>SITEGLOW / ACQUISITION</p><h1>Handyman lead flow</h1></div>
        <div className="top-actions"><button className="ghost">↻ Sync search</button><button className="primary" onClick={()=>notify("New Seattle search queued")}>＋ Find businesses</button></div>
      </header>

      <div className="flowbar">
        {stages.map((stage,index)=><button key={stage} onClick={()=>setActiveStage(stage)} className={activeStage===stage?"active":""}>
          <span>{index+1}</span><div><b>{stage}</b><small>{["Google Maps candidates","Score fit + difficulty","Generate refresh concept","Review + send email"][index]}</small></div><i>{[24,12,4,2][index]}</i>
        </button>)}
      </div>

      <div className="content-grid">
        <section className="lead-panel">
          <div className="panel-title"><div><h2>Website evaluation</h2><p>Ranked by opportunity and delivery confidence</p></div><button className="icon-button">⚙</button></div>
          <div className="filters"><label>⌕<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search leads or city" /></label><div>{["All","Qualified","Review","Rejected"].map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div></div>
          <div className="table-head"><span>BUSINESS</span><span>SALES</span><span>DELIVERY</span><span>EFFORT</span><span>STATUS</span></div>
          <div className="lead-list">{visible.map(lead=><button key={lead.id} className={`lead-row ${selected.id===lead.id?"selected":""}`} onClick={()=>setSelected(lead)}>
            <span className="business"><i>{lead.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</i><div><b>{lead.name}</b><small>★ {lead.rating} ({lead.reviews}) · {lead.city}</small></div></span>
            <span className={`score ${lead.sales>=85?"good":""}`}>{lead.sales}</span><span className={`score ${lead.delivery>=85?"good":lead.delivery<70?"bad":""}`}>{lead.delivery}</span>
            <span className="effort">{lead.effort}</span><span className={`status ${lead.status.toLowerCase()}`}>{lead.status}</span>
          </button>)}</div>
          <div className="panel-foot"><span>Showing {visible.length} of {leads.length} evaluated leads</span><span><b>3</b> strong demo candidates</span></div>
        </section>

        <aside className="detail-panel">
          <div className="detail-top"><span className="company-icon">{selected.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</span><div><small>SELECTED LEAD</small><h3>{selected.name}</h3><a href="#">Open current site ↗</a></div><button>•••</button></div>
          <div className="decision">
            <div><span className={`risk ${selected.risk.toLowerCase()}`}>{selected.risk} delivery risk</span><b>{selected.delivery >= 85 ? "Build the demo" : selected.delivery >= 70 ? "Inspect before demo" : "Skip this lead"}</b><p>{selected.delivery >= 85 ? "High visual upside, healthy business, and technically straightforward." : selected.delivery >= 70 ? "Potentially viable, but confirm the CMS and form behavior first." : "The delivery risk breaks the $399 economics."}</p></div>
            <div className="decision-score"><b>{selected.delivery}</b><small>/ 100</small></div>
          </div>
          <div className="metrics"><div><small>SALES FIT</small><b>{selected.sales}</b></div><div><small>DELIVERY FIT</small><b>{selected.delivery}</b></div><div><small>EST. EFFORT</small><b>{selected.effort}</b></div></div>
          <div className="audit"><h4>Why this score</h4>
            <p><span>Technology</span><b>{selected.tech}</b></p><p><span>Site size</span><b>{selected.pages} pages · flexible scope</b></p><p><span>Visual gap</span><b>{selected.siteAge}</b></p><p><span>Primary issue</span><b>{selected.issue}</b></p>
          </div>
          <div className="signals"><h4>Preserve in refresh</h4><div>{selected.services.map(s=><span key={s}>✓ {s}</span>)}<span>✓ Phone + email links</span><span>✓ Existing indexed URLs</span></div></div>
          <div className="detail-actions">
            <button className="reject" onClick={()=>updateStatus("Rejected")}>Skip lead</button>
            <button className="primary wide" disabled={selected.delivery<70} onClick={()=>window.location.href="/demo/aga"}>Open AGA demo →</button>
          </div>
          <button className="mail-preview" onClick={()=>setMailOpen(!mailOpen)}>✉ Preview outreach email <span>{mailOpen?"−":"+"}</span></button>
          {mailOpen && <div className="email-draft"><small>TO: {selected.email}</small><b>Quick idea for {selected.name}</b><p>Hey! I came across {selected.name} and noticed your great {selected.rating}-star reputation. I put together a quick homepage refresh showing how the site could better reflect the quality of your work. Want me to send it over?</p><button onClick={()=>notify("Email saved to review queue")}>Approve draft</button></div>}
        </aside>
      </div>
    </section>
  </main>;
}

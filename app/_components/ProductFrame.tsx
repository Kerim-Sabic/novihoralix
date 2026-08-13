export function ProductFrame({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "product-frame compact" : "product-frame"} role="img" aria-label="Illustrative Horalix echocardiography review workspace with echo image, measurements, and clinician review controls">
      <div className="product-topbar"><div className="product-word"><i /> HORALIX REVIEW</div><div className="study-state"><span /> Study prepared</div></div>
      <div className="product-body">
        <div className="study-rail" aria-hidden="true"><b>STUDY</b><span className="active">A4C</span><span>A2C</span><span>PLAX</span><span>PSAX</span></div>
        <div className="echo-view">
          <div className="echo-meta"><span>APICAL 4 CHAMBER</span><span>FRAME 42 / 96</span></div>
          <svg viewBox="0 0 520 410" aria-hidden="true">
            <defs>
              <radialGradient id="echoGlow" cx="50%" cy="24%" r="80%"><stop offset="0" stopColor="#d9f6f3" stopOpacity=".76"/><stop offset=".32" stopColor="#8db7bc" stopOpacity=".35"/><stop offset=".72" stopColor="#203942" stopOpacity=".22"/><stop offset="1" stopColor="#050b12" stopOpacity="0"/></radialGradient>
              <filter id="grain"><feTurbulence baseFrequency=".65" numOctaves="3" seed="8"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .17 0"/></filter>
              <clipPath id="sector"><path d="M260 12 C190 92 80 214 42 392 H478 C440 214 330 92 260 12Z"/></clipPath>
            </defs>
            <path d="M260 12 C190 92 80 214 42 392 H478 C440 214 330 92 260 12Z" fill="url(#echoGlow)" opacity=".84"/>
            <g clipPath="url(#sector)"><rect width="520" height="410" filter="url(#grain)" opacity=".92"/><path d="M155 317c14-72 61-165 104-191 52 28 94 113 104 190-53-31-91-42-106-39-23 4-54 20-102 40Z" fill="none" stroke="#c7e1df" strokeOpacity=".58" strokeWidth="5"/><path d="M213 286c-9-47 4-108 43-154 40 39 59 105 49 155-32-22-63-23-92-1Z" fill="#93bac0" fillOpacity=".12" stroke="#98c9c8" strokeOpacity=".5" strokeWidth="3"/></g>
            <path d="M214 286L305 286M260 132L260 305" stroke="#43d5c7" strokeWidth="2" strokeDasharray="7 6"/><circle cx="214" cy="286" r="5" fill="#43d5c7"/><circle cx="305" cy="286" r="5" fill="#43d5c7"/><circle cx="260" cy="132" r="5" fill="#43d5c7"/>
            <text x="318" y="280" fill="#8ff4e9" fontSize="12">LVID 48.2 mm</text><text x="270" y="153" fill="#8ff4e9" fontSize="12">Length 82.4 mm</text>
          </svg>
          <div className="playbar"><span className="play-control" aria-hidden="true">▶</span><span>00:04</span><div><i /></div><span>00:09</span></div>
        </div>
        <div className="measure-panel">
          <div className="panel-heading"><span>Measurements</span><b>Review</b></div>
          <div className="measure-item"><span>LV length</span><b>82.4 <i>mm</i></b><em>Ready</em></div>
          <div className="measure-item"><span>LVID</span><b>48.2 <i>mm</i></b><em>Ready</em></div>
          <div className="measure-item"><span>Septal thickness</span><b>9.1 <i>mm</i></b><em>Review</em></div>
          <div className="measure-item"><span>LA area</span><b>— <i>cm²</i></b><em className="quiet">Not shown</em></div>
          <div className="review-note"><span>Clinician control</span><p>Inspect, adjust, accept, or reject each suggested result.</p></div>
          <div className="approve-control">Prepare for sign-off <span>→</span></div>
        </div>
      </div>
      <div className="illustration-label">Pilot-stage interface · Illustrative · Not patient data · Not for diagnostic use</div>
    </div>
  );
}

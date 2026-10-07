/**
 * Editorial stand-in for a portrait: a sparse plot of the three regions in
 * Paul's career laid out by approximate longitude/latitude. Deliberately not a
 * map — just graticule lines, three marks and their dates.
 *
 * Plot area: x 36–364 for 30°E–140°E, y 60–440 for 5°N–40°S.
 */
export function MeridianGraphic() {
  return (
    <svg
      className="meridian"
      viewBox="0 0 400 500"
      role="img"
      aria-labelledby="meridian-title meridian-desc"
    >
      <title id="meridian-title">Career geography</title>
      <desc id="meridian-desc">
        Three points plotted by longitude and latitude: Kenya, 1999 to 2018; Western Australia,
        2020 onward; Central Australia, 2026 onward.
      </desc>

      {/* Latitude lines: 0°, 10°S, 20°S, 30°S */}
      <g className="meridian__grid">
        <line x1="36" y1="102" x2="364" y2="102" className="meridian__equator" />
        <line x1="36" y1="186" x2="364" y2="186" />
        <line x1="36" y1="271" x2="364" y2="271" />
        <line x1="36" y1="355" x2="364" y2="355" />
        {/* Longitude ticks: 40°E, 80°E, 120°E */}
        <line x1="66" y1="60" x2="66" y2="440" />
        <line x1="185" y1="60" x2="185" y2="440" />
        <line x1="304" y1="60" x2="304" y2="440" />
      </g>

      <g className="meridian__labels">
        <text x="364" y="96" textAnchor="end">
          0°
        </text>
        <text x="364" y="180" textAnchor="end">
          10°S
        </text>
        <text x="364" y="265" textAnchor="end">
          20°S
        </text>
        <text x="364" y="349" textAnchor="end">
          30°S
        </text>
        <text x="66" y="48" textAnchor="middle">
          40°E
        </text>
        <text x="185" y="48" textAnchor="middle">
          80°E
        </text>
        <text x="304" y="48" textAnchor="middle">
          120°E
        </text>
      </g>

      {/* Route: Kenya → Western Australia → Central Australia */}
      <path
        className="meridian__route"
        d="M57 111 C 150 190, 230 330, 292 372 S 335 320, 346 305"
        fill="none"
      />

      {/* Kenya */}
      <g className="meridian__point">
        <circle cx="57" cy="111" r="5" />
        <text x="72" y="108" className="meridian__place">
          Kenya
        </text>
        <text x="72" y="126" className="meridian__dates">
          1999 – 2018
        </text>
      </g>

      {/* Western Australia (Perth / Manjimup) */}
      <g className="meridian__point">
        <circle cx="292" cy="372" r="5" />
        <text x="278" y="398" textAnchor="end" className="meridian__place">
          Western Australia
        </text>
        <text x="278" y="416" textAnchor="end" className="meridian__dates">
          2020 – present
        </text>
      </g>

      {/* Central Australia */}
      <g className="meridian__point meridian__point--current">
        <circle cx="346" cy="305" r="5" />
        <circle cx="346" cy="305" r="11" className="meridian__halo" />
        <text x="332" y="282" textAnchor="end" className="meridian__place">
          Central Australia
        </text>
        <text x="332" y="300" textAnchor="end" className="meridian__dates">
          2026 – present
        </text>
      </g>
    </svg>
  )
}

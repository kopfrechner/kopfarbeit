const rawSvg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="30" fill="#000000"></circle>
  <circle cx="32" cy="32" r="27" fill="#daff00"></circle>
  <circle cx="32" cy="32" r="24" fill="white"></circle>
  <g fill="#daff00">
    <path d="M30 10c0 0-8 2-10 10l10 10V10z"></path>
    <path d="M34 10c0 0 8 2 10 10L34 30V10z"></path>
    <path d="M30 54c0 0-8-2-10-10l10-10v20z"></path>
    <path d="M34 54c0 0 8-2 10-10L34 34v20z"></path>
    <path d="M10 30c0 0 2-8 10-10l10 10H10z"></path>
    <path d="M10 34c0 0 2 8 10 10l10-10H10z"></path>
    <path d="M54 30c0 0-2-8-10-10L34 30h20z"></path>
    <path d="M54 34c0 0-2 8-10 10L34 34h20z"></path>
  </g>
  <circle cx="32" cy="32" r="3" fill="white"></circle>
  <rect x="31" y="8" width="2" height="48" fill="white"></rect>
  <rect x="8" y="31" width="48" height="2" fill="white"></rect>
  <line x1="16" y1="16" x2="48" y2="48" stroke="white" stroke-width="2"></line>
  <line x1="48" y1="16" x2="16" y2="48" stroke="white" stroke-width="2"></line>
  <rect x="20" y="20" width="4" height="4" fill="white" fill-opacity="0.3"></rect>
  <rect x="40" y="24" width="3" height="3" fill="white" fill-opacity="0.2"></rect>
  <rect x="25" y="42" width="2" height="2" fill="white" fill-opacity="0.2"></rect>
</svg>
`;

export const LEMON_HALF_SRC = `data:image/svg+xml;base64,${Buffer.from(rawSvg).toString("base64")}`;

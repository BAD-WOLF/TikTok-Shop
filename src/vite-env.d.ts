/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Declarações de tipos para importações SVG
declare module '*.svg?react' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
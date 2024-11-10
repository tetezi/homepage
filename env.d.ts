/// <reference types="vite/client" />
interface ImportMetaEnv { 
  VITE_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

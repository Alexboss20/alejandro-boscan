// src/store/pageConfigStore.ts
import { atom } from 'nanostores';

export interface PageConfig {
  index:string;
  words: string[];
  backgroundColor: string;
}

export interface PageConfigs {
  [key: string]: PageConfig;
}

// Lista de palabras en japonés
const shuu = ['集', '中', '力', '-', 'S', 'H', 'U', 'U', 'C', 'H', 'U', 'U', '-', 'E', 'N', 'F', 'O', 'Q', 'U', 'E'];
const kyour = ['協', '力', '-', 'K', 'Y', 'O', 'U', 'R', 'Y', 'O', 'K', 'U', '-', 'C', 'O', 'L', 'A', 'B', 'O', 'R', 'A', 'C', 'I', 'Ó', 'N'];
const kaizen = ['改', '善', '-', 'K', 'A', 'I', 'Z', 'E', 'N', '-', 'M', 'E', 'J', 'O', 'R', 'A', '', 'C', 'O', 'N', 'T', 'I', 'N', 'U', 'A'];
const kanzen = ['完', '全', '-', 'K', 'A', 'N', 'Z', 'E', 'N', '-', 'F', 'I', 'N', 'A', 'L', 'I', 'Z', 'A', 'C', 'I', 'Ó', 'N'];
const jiritsu = ['自', '立', '-', 'J', 'I', 'R', 'I', 'T', 'S', 'U', '-', 'A', 'U', 'T', 'O', 'N', 'O', 'M', 'Í', 'A'];
const toumei = ['透', '明', '-', 'T', 'O', 'U', 'M', 'E', 'I', '-', 'T', 'R', 'A', 'N', 'S', 'P', 'A', 'R', 'E', 'N', 'C', 'I', 'A'];
const tekisei = ['適', '性', '-', 'T', 'E', 'K', 'I', 'S', 'E', 'I', '-', 'A', 'D', 'A', 'P', 'T', 'A', 'B', 'I', 'L', 'I', 'D', 'A', 'D'];
const shinrai = ['信', '頼', '-', 'S', 'H', 'I', 'N', 'R', 'A', 'I', '-', 'C', 'O', 'N', 'F', 'I', 'A', 'N', 'Z', 'A'];
const seikaku = ['正', '確', '-', 'S', 'E', 'I', 'K', 'A', 'K', 'U', '-', 'P', 'R', 'E', 'C', 'I', 'S', 'I', 'Ó', 'N'];
const working = ['W','O','R','K','-','I','N','-','P','R','O','G','R','E','S','S','-','W','O','R','K','-','I','N','-','P','R','O','G','R','E','S','S']

export const pageConfigs: PageConfigs = {
  '/': {
    index:'01',
    words: shuu,
    backgroundColor: 'bg-teal-400'
  },
  '/about': {
    index:'02 About me',
    words: kyour,
    backgroundColor: 'bg-blue-200'
  },
  '/javascriptProyect': {
    index:'03 Javascript',
    words: kaizen,
    backgroundColor: 'bg-yellow-400'
  },
  '/reactProyect': {
    index:'04 React',
    words: kanzen,
    backgroundColor: 'bg-blue-400'
  },
  '/astroProyect': {
    index:'05 Astro',
    words: jiritsu,
    backgroundColor: 'bg-pink-200'
  },
  '/figma': {
    index:'06 Figma',
    words: toumei,
    backgroundColor: 'bg-red-200'
  },
  '/blender': {
    index:'07 Blender',
    words: tekisei,
    backgroundColor: 'bg-orange-200'
  },
  '/testimonials': {
    index:'08',
    words: shinrai,
    backgroundColor: 'bg-teal-200'
  },
  '/portfolio': {
    index:'09',
    words: seikaku,
    backgroundColor: 'bg-indigo-200'
  },
  '/working': {
    index:'00',
    words: working,
    backgroundColor: 'bg-red-500'
  }
};

export const $currentPageConfig = atom<PageConfig>(pageConfigs['/']);

export const updatePageConfig = (path: string) => {
  $currentPageConfig.set(pageConfigs[path] || pageConfigs['/']);
};
import { atom } from 'nanostores';
import { TypeCodeGallerySkeleton } from '../types/contentful';
import { EntryCollection } from 'contentful';
import { GetImageResult } from 'astro';

export type ModalData =
  | null
  | {
      index: number;
      type: 'image';
      data: {
        image: GetImageResult;
        description: string | undefined;
      }[];
    }
  | {
      index: number;
      type: 'code';
      data: EntryCollection<TypeCodeGallerySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
    };

export const modalData = atom<ModalData>(null);

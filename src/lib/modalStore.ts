import { atom } from 'nanostores';
import { TypeGallerySkeleton, TypeCodeGallerySkeleton } from '../types/contentful';
import { EntryCollection } from 'contentful';

export type ModalData =
  | null
  | {
      index: number;
      type: 'image';
      data: EntryCollection<TypeGallerySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
    }
  | {
      index: number;
      type: 'code';
      data: EntryCollection<TypeCodeGallerySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
    };

export const modalData = atom<ModalData>(null);

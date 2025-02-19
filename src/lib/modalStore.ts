import { atom } from 'nanostores';
import { TypeCodeGallerySkeleton } from '../types/contentful';
import { EntryCollection } from 'contentful';
import { ImagesType } from '../types/gallery';

export type ModalData =
  | null
  | {
      index: number;
      type: 'image';
      data: ImagesType;
    }
  | {
      index: number;
      type: 'code';
      data: EntryCollection<TypeCodeGallerySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
    };

export const modalData = atom<ModalData>(null);

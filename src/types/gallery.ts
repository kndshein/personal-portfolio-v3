import { Asset } from 'contentful';

export type ImageType = Asset<'WITHOUT_UNRESOLVABLE_LINKS', string>;
export type ImagesType = (Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined)[];

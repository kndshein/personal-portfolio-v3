import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface SnapGalleryFields {
  galleryTitle: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  order?: EntryFieldTypes.Integer;
  coverImage?: EntryFieldTypes.Symbol;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type SnapGalleryType = EntrySkeletonType<SnapGalleryFields>;

export interface DesignGalleryFields {
  galleryTitle: EntryFieldTypes.Symbol;
  order?: EntryFieldTypes.Integer;
  slug: EntryFieldTypes.Symbol;
  coverImage?: EntryFieldTypes.Symbol;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type DesignGalleryType = EntrySkeletonType<DesignGalleryFields>;

export interface CodeGalleryFields {
  title?: EntryFieldTypes.Symbol;
  order?: EntryFieldTypes.Integer;
  image?: EntryFieldTypes.AssetLink;
  preview?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Symbol;
  features?: EntryFieldTypes.Object;
  technologies?: EntryFieldTypes.Object;
  link?: EntryFieldTypes.Object;
}

export type CodeGalleryType = EntrySkeletonType<CodeGalleryFields>;

export interface AboutMeTimelineFields {
  title: EntryFieldTypes.Symbol;
  order: EntryFieldTypes.Integer;
  month: EntryFieldTypes.Symbol;
  year: EntryFieldTypes.Integer;
  event: EntryFieldTypes.RichText;
  duration?: EntryFieldTypes.Symbol;
  link?: EntryFieldTypes.Symbol;
  highlight?: EntryFieldTypes.Boolean;
}

export type AboutMeTimelineType = EntrySkeletonType<AboutMeTimelineFields>;

import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeAboutMeTimelineFields {
  title: EntryFieldTypes.Symbol;
  order: EntryFieldTypes.Integer;
  month: EntryFieldTypes.Symbol;
  year: EntryFieldTypes.Integer;
  event: EntryFieldTypes.RichText;
  duration?: EntryFieldTypes.Symbol;
  link?: EntryFieldTypes.Symbol;
  highlight?: EntryFieldTypes.Boolean;
}

export type TypeAboutMeTimelineSkeleton = EntrySkeletonType<
  TypeAboutMeTimelineFields,
  'aboutMeTimeline'
>;
export type TypeAboutMeTimeline<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAboutMeTimelineSkeleton, Modifiers, Locales>;

export interface TypeCodeGalleryFields {
  title?: EntryFieldTypes.Symbol;
  order?: EntryFieldTypes.Integer;
  image?: EntryFieldTypes.AssetLink;
  preview?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Symbol;
  features?: EntryFieldTypes.Object<{ Features?: string[] }>;
  technologies?: EntryFieldTypes.Object<{ Technologies?: string[] }>;
  link?: EntryFieldTypes.Object<{ GitHub?: string; Livelink?: string }>;
}

export type TypeCodeGallerySkeleton = EntrySkeletonType<TypeCodeGalleryFields, 'codeGallery'>;
export type TypeCodeGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCodeGallerySkeleton, Modifiers, Locales>;

export interface GalleryFields {
  galleryTitle: EntryFieldTypes.Symbol;
  order?: EntryFieldTypes.Integer;
  slug: EntryFieldTypes.Symbol;
  coverImage?: EntryFieldTypes.Symbol;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeGallerySkeleton = EntrySkeletonType<GalleryFields, 'designGallery'>;
export type TypeGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeGallerySkeleton, Modifiers, Locales>;

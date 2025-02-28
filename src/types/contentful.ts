//* Copied and modified from TS Content Types Generator, accessible through Contentful

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
  date: EntryFieldTypes.Symbol;
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

export type TechnologyKeys =
  | 'astro'
  | 'framer'
  | 'gatsby'
  | 'jamstack'
  | 'react'
  | 'sass'
  | 'tailwind'
  | 'vite'
  | 'netlify_cms';

export interface TypeCodeGalleryFields {
  title?: EntryFieldTypes.Symbol;
  order?: EntryFieldTypes.Integer;
  coverImage: EntryFieldTypes.AssetLink;
  previewVideo: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Symbol;
  technologies?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<TechnologyKeys>>;
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
  coverImage: EntryFieldTypes.AssetLink;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeGallerySkeleton = EntrySkeletonType<GalleryFields, 'designGallery' | 'snapGallery'>;
export type TypeGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeGallerySkeleton, Modifiers, Locales>;

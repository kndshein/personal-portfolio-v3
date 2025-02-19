export type ImageType = Asset<'WITHOUT_UNRESOLVABLE_LINKS', string>;
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type ImagesType = (Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined)[];

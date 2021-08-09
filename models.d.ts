/**
 * Possible stages of the preview component.
 */
export declare const PREVIEW_STAGES: readonly ["install", "splashScreen", "name", "shortName", "themeColor", "shortcuts", "display", "categories", "shareTarget"];
export declare type PreviewStage = typeof PREVIEW_STAGES[number];
/**
 * The description messages on each preview screen.
 */
export declare type ScreenDescriptions = Partial<Partial<Record<PreviewStage, Record<Platform, string>>>>;
/**
 * Titles of each preview screen.
 */
export declare type ScreenTitles = Partial<Record<PreviewStage, string>>;
/**
 * Supported platforms.
 */
export declare type Platform = 'windows' | 'android' | 'iOS';
/**
 * Reference: https://www.w3.org/TR/image-resource/#dom-imageresource
 */
export declare type ImageResource = {
    src: string;
    sizes?: string;
    type?: string;
    label?: string;
};
/**
 * Shortcut object in a manifest.json file
 */
export declare type Shortcut = {
    name: string;
    url: string;
    short_name?: string;
    description?: string;
    icons?: ImageResource[];
};
/**
 * Possible values of the display attribute.
 */
export declare type Display = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
/**
 * Web app manifest.
 */
export interface Manifest {
    name: string;
    short_name?: string;
    icons: ImageResource[];
    display?: Display;
    orientation?: 'any' | 'natural' | 'landscape' | 'landscape-primary' | 'landscape-secondary' | 'portrait' | 'portrait-primary' | 'portrait-secondary';
    dir?: 'auto' | 'ltr' | 'rtl';
    lang?: string;
    theme_color?: string;
    related_applications?: {
        platform?: string;
        url?: string;
        id?: string;
    }[];
    prefer_related_applications?: boolean;
    background_color?: string;
    shortcuts?: Shortcut[];
    categories?: string[];
    description?: string;
    screenshots?: ImageResource[];
    iarc_rating_id?: string;
}
//# sourceMappingURL=models.d.ts.map
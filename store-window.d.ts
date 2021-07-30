import { LitElement } from 'lit';
import { ImageResource } from './models';
export declare class StoreWindow extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * If true, the store window is open.
     */
    isWindowOpen: boolean;
    /**
     * Callback fired when closing the window.
     */
    onClose: () => void;
    /**
     * The application icon's URL.
     */
    iconUrl?: string;
    /**
     * The application's name (the short name is used as a fallback).
     */
    appName?: string;
    /**
     * The description attribute on the manifest.
     */
    description?: string;
    /**
     * The site's URL.
     */
    siteUrl: string;
    /**
     * The screenshots attribute on the manifest.
     */
    screenshots?: ImageResource[];
    /**
     * The categories attribute on the manifest.
     */
    categories?: string[];
    /**
     * @param src - The src property of the screenshot
     * @returns The icon URL for the respective screenshot
     */
    private getImageUrl;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=store-window.d.ts.map
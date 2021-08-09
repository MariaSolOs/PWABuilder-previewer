import { LitElement } from 'lit';
import './screens/install-screen.js';
import './screens/splash-screen.js';
import './screens/name-screen.js';
import './screens/shortname-screen.js';
import './screens/themecolor-screen.js';
import './screens/shortcuts-screen.js';
import './screens/display-screen.js';
import './screens/categories-screen.js';
import './screens/sharetarget-screen.js';
import { PreviewStage, Manifest, Platform } from './models';
export declare class ManifestPreviewer extends LitElement {
    static styles: import("lit").CSSResultGroup;
    private handleToggleEnlarge;
    /**
     * The website's URL.
     */
    private siteUrl;
    /**
     * The current preview screen.
     */
    stage: PreviewStage;
    /**
     * The input web manifest.
     */
    manifest: Manifest;
    /**
     * The url where the manifest resides.
     */
    manifestUrl: string;
    /**
     * The currently selected platform.
     */
    platform: Platform;
    /**
     * The screen description texts.
     */
    descriptions: Partial<Partial<Record<"name" | "install" | "splashScreen" | "shortName" | "themeColor" | "shortcuts" | "display" | "categories" | "shareTarget", Record<Platform, string>>>>;
    /**
     * The titles of each preview screen.
     */
    titles: Partial<Record<"name" | "install" | "splashScreen" | "shortName" | "themeColor" | "shortcuts" | "display" | "categories" | "shareTarget", string>>;
    /**
     * Text of the enlarge screen feature.
     */
    enlargeText: string;
    /**
     * Callback fired when requesting to enlarge the preview.
     */
    onEnlarge: () => void;
    /**
     * The component's main title.
     */
    cardTitle: string;
    /**
     * The URL used for icon previews.
     */
    private iconUrl;
    /**
     * If true, the preview content is displayed in full screen.
     */
    isInFullScreen: boolean;
    /**
     * The content to display when in full screen.
     */
    content: Element;
    firstUpdated(): void;
    private setDefaultDescriptions;
    private setDefaultTitles;
    /**
     * Changes the platform currently being previewed.
     */
    private handlePlatformChange;
    /**
     * Navigates to the next preview screen.
     */
    private handleNavigateRight;
    /**
     * Navigates to the previous preview screen.
     */
    private handleNavigateLeft;
    updated(changedProps: Map<string, any>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleFullScreenChange;
    private screenContent;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "manifest-previewer": ManifestPreviewer;
    }
}
//# sourceMappingURL=manifest-previewer.d.ts.map
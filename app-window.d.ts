import { LitElement } from 'lit';
import type { Display } from './models';
export declare class AppWindow extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * If true, show the application's window.
     */
    isWindowOpen: boolean;
    /**
     * Callback fired when closing the window.
     */
    onClose: () => void;
    /**
     * The background color attribute on the manifest.
     */
    backgroundColor?: string;
    /**
     * The theme color attribute on the manifest.
     */
    themeColor?: string;
    /**
     * The name attribute on the manifest.
     */
    appName?: string;
    /**
     * The application icon's URL.
     */
    iconUrl?: string;
    /**
     * The application's URL.
     */
    siteUrl: string;
    /**
     * The display attribute on the manifest.
     */
    display: Display;
    /**
     * Colors for making sure the text is visible.
     */
    private contrastingBackgroundColor;
    private contrastingThemeColor;
    firstUpdated(): void;
    displayPreview(): import("lit").TemplateResult<1> | null;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=app-window.d.ts.map
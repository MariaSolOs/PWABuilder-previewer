import { LitElement } from 'lit';
import './app-window.js';
import './start-menu.js';
import './code-editor.js';
import './jump-list.js';
import './store-window.js';
import './explanation-text.js';
import { Manifest, Explanations } from './models';
export declare class PWASimulator extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * The site's web manifest.
     */
    manifest?: Manifest;
    /**
     * The website's URL
     */
    siteUrl: string;
    /**
     * If true, the code editor is hidden.
     */
    hideEditor: boolean;
    /**
     * The duration (in ms) of the explanation message display, after
     * which it fades out.
     */
    explanationDisplayTime: number;
    /**
     * Object containing the explanation messages
     */
    explanations: Explanations;
    private explanationMessage;
    private isExplanationFadingIn;
    private isExplanationFadingOut;
    /**
     * The URL used for icon previews, or undefined if the manifest specifies no icons.
     */
    private iconUrl;
    /**
     * If true, the application's window is open.
     */
    private isAppOpen;
    /**
    * If true, the start menu is open.
    */
    private isMenuOpen;
    /**
     * If true, the jump list is open.
     */
    private isJumplistOpen;
    /**
     * If true, the MSFT store window is open.
     */
    private isStoreOpen;
    /**
     * Used for displaying API/syntax errors.
     */
    private errorMessage;
    constructor();
    firstUpdated(): void;
    updated(changedProperties: Map<string, any>): void;
    /**
     * To show the jump list when right-clicking, disable the default
     * context menu.
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleContextMenuDisable;
    private handleSiteInputChange;
    private handleSearchManifest;
    private handleNewExplanation;
    private openAppWindow;
    private closeAppWindow;
    private openStartMenu;
    private closeStartMenu;
    private openJumplist;
    private closeJumplist;
    private openStore;
    private closeStore;
    /**
     * Depending on the click, open the jump list or application when clicking
     * taskbar icon.
     */
    private handleTaskbarClick;
    /**
     * When clicking on the backgroud image, close the menus.
     */
    private handleBackdropClick;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pwa-simulator': PWASimulator;
    }
}
//# sourceMappingURL=pwa-simulator.d.ts.map
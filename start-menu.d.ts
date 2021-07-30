import { LitElement } from 'lit';
export declare class StartMenu extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * If true, show the application's window.
     */
    isMenuOpen: boolean;
    /**
     * The name specified on the manifest.
     */
    appName?: string;
    /**
     * The application icon's URL.
     */
    iconUrl?: string;
    /**
     * Callback fired when closing the window.
     */
    onClose: () => void;
    /**
     * Callback fired when opening the app from the start menu.
     */
    onOpenApp: () => void;
    private handleAppClick;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=start-menu.d.ts.map
import { LitElement } from 'lit';
import type { Shortcut } from './models';
export declare class JumpList extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * If true, the jump list is open.
     */
    isListOpen: boolean;
    /**
     * The shortcuts attribute on the manifest.
     */
    shortcuts?: Shortcut[];
    /**
     * The PWA's URL.
     */
    siteUrl: string;
    private getShortcutIcon;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=jump-list.d.ts.map
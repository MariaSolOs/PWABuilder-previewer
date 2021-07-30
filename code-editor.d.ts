import { LitElement } from 'lit';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
export declare class CodeEditor extends LitElement {
    static styles: import("lit").CSSResultGroup;
    startText?: string;
    editorId: string;
    editorState?: EditorState;
    editorView?: EditorView;
    editorEmitter: EventTarget;
    protected static editorIdGenerator: Generator<number, void, unknown>;
    constructor();
    firstUpdated(): void;
    updateEditor: () => void;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=code-editor.d.ts.map
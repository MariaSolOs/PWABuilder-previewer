import { once } from 'lodash-es';
import debounce from 'lodash-es/debounce';
import { EditorState, StateField, Transaction } from '@codemirror/state';
import { keymap, drawSelection, highlightSpecialChars, highlightActiveLine, EditorView } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { history, historyKeymap } from '@codemirror/history';
import { foldGutter, foldKeymap } from '@codemirror/fold';
import { indentOnInput } from '@codemirror/language';
import { lineNumbers } from '@codemirror/gutter';
import { bracketMatching } from '@codemirror/matchbrackets';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { commentKeymap } from '@codemirror/comment';
import { rectangularSelection } from '@codemirror/rectangular-selection';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { lintKeymap } from '@codemirror/lint';
import { json } from '@codemirror/lang-json';
import { CodeEditorEvents, CodeEditorUpdateEvent } from '../models';

export const emitter = new EventTarget();

export const dispatchEvent = debounce((event: Event) => {
  emitter.dispatchEvent(event);
}, 1500);

export function getEditorState(text: string) {
  setupEditor();

  return EditorState.create({
    doc: text,
    extensions: [
      lineNumbers(),
      foldGutter(),
      drawSelection(),
      indentOnInput(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      highlightSpecialChars(),
      defaultHighlightStyle.fallback,
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      indentOnInput(),
      history(),
      json(),
      keymap.of([
        ...defaultKeymap,
        ...foldKeymap,
        ...historyKeymap,
        ...commentKeymap,
        ...searchKeymap,
        ...lintKeymap,
        ...closeBracketsKeymap,
        ...completionKeymap,
      ]),
      updateStateField,
    ]
  });
}

const setupEditor = once(() => {
  EditorView.baseTheme({});
});

export const updateStateField = StateField.define<number>({
  create() {
    return 0;
  },
  update(val: number, tr: Transaction) {
    if (tr.docChanged) {
      const event = new CustomEvent<CodeEditorUpdateEvent>(
        CodeEditorEvents.update, {
          detail: {
            transaction: tr,
          },
          bubbles: true,
          composed: true
        }
      );
      dispatchEvent(event);
    }

    return tr.docChanged ? val + 1 : val;
  }
});

export const idGenerator = (step = 1, start = 0, end?: number) => {
  let i = start;

  return (function* incrementGen() {
    while (!end || i < end) {
      yield i;
      i += step;
    }
  })();
}

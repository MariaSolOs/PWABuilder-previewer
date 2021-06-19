import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-window')
export class AppWindow extends LitElement {
  static styles = css``;

  /**
   * If true, show the application's window.
   */
  @property({ type: Boolean }) isWindowOpen = false;

  render() {
    return this.isWindowOpen ?
      html`
        <div>

        </div>
      ` : null;
  }
}
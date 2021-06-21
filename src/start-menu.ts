import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('start-menu')
export class StartMenu extends LitElement {
  static styles = css`
  `;

  /**
   * If true, show the application's window.
   */
  @property({ type: Boolean }) isMenuOpen = false;

  /**
   * Callback fired when closing the window.
   */
  @property() onClose = () => {};

  /**
   * The name specified on the manifest.
   */
  @property() appName: string | undefined;

  /**
   * The application icon's URL.
   */
  @property() iconUrl: string | undefined;

  render() {
    return this.isMenuOpen ?
      html`
      ` : null;
  }
}
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('start-menu')
export class StartMenu extends LitElement {
  static styles = css`
    .menu-container {
      position: absolute;
      width: 310px;
      bottom: 15px;
      height: 0;
      left: 0;
      transition: all 400ms ease-in-out;
    }

    .menu-container.open {
      height: 186px;
    }

    img.menu {
      width: 100%;
      height: 100%;
    }
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
    return html`
      <div class=${classMap({ 'menu-container': true, open: this.isMenuOpen })}>
        <img alt="Start menu" src="../assets/images/start-menu.png" class="menu" />
      </div>
    `;
  }
}
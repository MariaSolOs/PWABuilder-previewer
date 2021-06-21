import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('start-menu')
export class StartMenu extends LitElement {
  static styles = css`
    :host {
      --windows-background: #38332f;
    }

    .menu-container {
      position: absolute;
      width: 310px;
      bottom: 19px;
      left: 0;
      height: 186px;
      opacity: 0;
      transform: translateY(205px);
      transition: all 400ms ease-in-out;
    }

    .menu-container.open {
      opacity: 1;
      transform: translateY(0);
    }

    img.menu {
      width: 100%;
      height: 100%;
    }
    
    .hidden {
      background-color: var(--windows-background);
      position: absolute;
      width: 125px;
      height: 72px;
      left: 29px;
      bottom: 68px;
    }

    .app-initial {
      background-color: var(--windows-background);
      color: rgba(255, 255, 255, 0.6);
      text-transform: capitalize;
      position: absolute;
      left: 32px;
      bottom: 142px;
      font-size: 6px;
      width: 7px;
      text-align: center;
    }

    .app-name {
      position: absolute;
      color: rgba(255, 255, 255, 0.6);
      bottom: 127px;
      left: 45px;
      font-size: 6px;
      cursor: pointer;
    }

    .app-icon {
      position: absolute;
      bottom: 124px;
      left: 29px;
      width: 13px;
      height: 13px;
      cursor: pointer;
    }
  `;

  /**
   * If true, show the application's window.
   */
  @property({ type: Boolean }) isMenuOpen = false;

  /**
   * The name specified on the manifest.
   */
  @property() appName: string | undefined;
  
  /**
   * The application icon's URL.
   */
  @property() iconUrl: string | undefined;

  /**
   * Callback fired when closing the window.
   */
  @property() onClose = () => {};

  /**
   * Callback fired when opening the app from the start menu.
   */
  @property() onOpenApp = () => {};

  private handleAppClick = () => {
    this.onOpenApp();
    this.onClose();
  }

  render() {
    return html`
      <div class=${classMap({ 'menu-container': true, open: this.isMenuOpen })}>
        <img alt="Start menu" src="../assets/images/start-menu.png" class="menu" />
        <div class="hidden"></div>
        <div @click=${this.handleAppClick}>
          ${this.appName ? 
            html`
              <div class="app-initial">${this.appName.charAt(0)}</div>
              <div class="app-name">${this.appName}</div>
            ` 
          : null}
          ${this.iconUrl ? html`<img class="app-icon" alt="App icon" src=${this.iconUrl} />` : null}
        </div>
      </div>
    `;
  }
}
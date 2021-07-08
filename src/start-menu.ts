import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('start-menu')
export class StartMenu extends LitElement {
  static styles = css`
    :host {
      --windows-background: #F1F0F6;
    }

    .menu-container {
      position: absolute;
      width: 250px;
      bottom: 22px;
      left: calc(50% - 125px);
      height: 263px;
      opacity: 0;
      transform: translateY(285px);
      transition: all 200ms ease-in-out;
    }

    .menu-container.open {
      opacity: 1;
      transform: translateY(0);
    }

    img.menu {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
    
    .hidden {
      background-color: var(--windows-background);
      position: absolute;
      width: 195px;
      height: 42px;
      left: 24px;
      bottom: 43px;
    }

    .app-info {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--windows-background);
      right: 88px;
      top: 34px;
      max-width: 38px;
      min-width: 31px;
      overflow-x: hidden;
      min-height: 21px;
      justify-content: flex-end;
    }

    .app-name {
      color: rgba(0, 0, 0, 0.6);
      font-size: 5px;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: -0.1px;
      white-space: nowrap;
    }

    .app-icon {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }

    .avatar {
      position: absolute;
      background-color: #EDEEFB;
      display: flex;
      align-items: center;
      font-size: 6.5px;
      bottom: 5px;
      left: 23px;
      width: 59px;
    }

    .avatar img {
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  `;

  /**
   * If true, show the application's window.
   */
  @property({ type: Boolean }) isMenuOpen = false;

  /**
   * The name specified on the manifest.
   */
  @property() appName?: string;
  
  /**
   * The application icon's URL.
   */
  @property() iconUrl?: string;

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
        <div class="app-info" @click=${this.handleAppClick}>
          ${this.iconUrl ? html`<img class="app-icon" alt="App icon" src=${this.iconUrl} />` : null}
          <div class="app-name">${this.appName || 'PWA App'}</div>
        </div>
        <div class="avatar">
          <img alt="User" src="../assets/images/avatar.jpg" />
          Jane Doe
        </div>
      </div>
    `;
  }
}
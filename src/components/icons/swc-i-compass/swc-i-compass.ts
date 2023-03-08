import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-compass')
export class SwcICompass extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M14.512 10.415a6.91 6.91 0 0 1-.25 1.867 7.182 7.182 0 0 1-.704 1.679 6.826 6.826 0 0 1-1.096 1.42 7.169 7.169 0 0 1-1.42 1.096 6.983 6.983 0 0 1-3.55.959 6.893 6.893 0 0 1-1.858-.25 7.03 7.03 0 0 1-4.896-4.904 6.982 6.982 0 0 1 .708-5.404A7.19 7.19 0 0 1 2.542 5.46a6.869 6.869 0 0 1 1.417-1.096 7.135 7.135 0 0 1 1.67-.704q.186-.052.375-.093a1.663 1.663 0 1 1 2.991.002c.123.027.246.057.368.091a7.104 7.104 0 0 1 1.678.704 6.986 6.986 0 0 1 3.472 6.05zm-1.135.002a5.792 5.792 0 0 0-.21-1.565 5.84 5.84 0 0 0-1.509-2.587 5.829 5.829 0 0 0-1.19-.918 5.936 5.936 0 0 0-1.407-.59 5.812 5.812 0 0 0-1.568-.21 5.74 5.74 0 0 0-1.56.21 5.964 5.964 0 0 0-1.4.59 5.758 5.758 0 0 0-1.188.918 6.025 6.025 0 0 0-.918 1.187 5.894 5.894 0 0 0-.594 4.529 5.916 5.916 0 0 0 .594 1.406 5.878 5.878 0 0 0 3.509 2.703 5.765 5.765 0 0 0 1.557.21 5.861 5.861 0 0 0 2.975-.804 5.985 5.985 0 0 0 1.19-.918 5.693 5.693 0 0 0 .918-1.19 6.01 6.01 0 0 0 .59-1.407 5.788 5.788 0 0 0 .21-1.564zM12.099 9.15a4.823 4.823 0 0 1 0 2.533 4.954 4.954 0 0 1-.481 1.148 4.628 4.628 0 0 1-.741.96 4.896 4.896 0 0 1-.97.75 4.805 4.805 0 0 1-1.143.481 4.75 4.75 0 0 1-1.27.17 4.689 4.689 0 0 1-1.26-.17 4.784 4.784 0 0 1-3.333-3.34 4.745 4.745 0 0 1 .48-3.666 4.976 4.976 0 0 1 .75-.97 4.671 4.671 0 0 1 .96-.742 4.866 4.866 0 0 1 1.141-.48 4.67 4.67 0 0 1 1.261-.17 4.735 4.735 0 0 1 1.271.17 4.872 4.872 0 0 1 1.145.48 4.792 4.792 0 0 1 1.711 1.708 4.824 4.824 0 0 1 .48 1.138zm-7.505 1.278a.554.554 0 0 0-1.109 0 .554.554 0 0 0 1.109 0zm5.229-2.521-2.73 1.466a1.859 1.859 0 0 0-.643.643l-1.466 2.73c-.124.23-.037.317.193.194l2.73-1.467a1.862 1.862 0 0 0 .643-.643l1.467-2.73c.123-.23.036-.317-.194-.193zM7.5 9.764a.66.66 0 1 0 .66.66.66.66 0 0 0-.66-.66zm-.56-2.801a.555.555 0 0 0 .554.554h.003a.554.554 0 0 0 0-1.108h-.004a.554.554 0 0 0-.554.554zm.005-4.121a.555.555 0 1 0 .555-.555.555.555 0 0 0-.555.555zM8.06 13.883a.554.554 0 1 0-.555.555h.001a.554.554 0 0 0 .554-.555zm2.9-4.02a.554.554 0 1 0 .555.554.554.554 0 0 0-.555-.553z"/></svg>`;
  }
}
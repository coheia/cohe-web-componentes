import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-camera')
export class SwcICamera extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-0.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M16.205 6.813v7.29a1.118 1.118 0 0 1-1.115 1.115H2.91a1.118 1.118 0 0 1-1.115-1.115v-7.29A1.118 1.118 0 0 1 2.91 5.698h2.902v-.365a1.118 1.118 0 0 1 1.115-1.115h4.146a1.118 1.118 0 0 1 1.115 1.115v.365h2.902a1.118 1.118 0 0 1 1.115 1.115zm-3.789 3.645A3.416 3.416 0 1 0 9 13.874a3.416 3.416 0 0 0 3.416-3.416zM10.627 8.83A2.301 2.301 0 1 1 9 8.157a2.286 2.286 0 0 1 1.627.674zm-.643-3.262a.558.558 0 1 0 .558-.557.558.558 0 0 0-.558.557z"/></svg>`;
  }
}
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-write')
export class SwcIWrite extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M5.9 4.544 2.534 7.912 1.225 6.604a1.111 1.111 0 0 1 0-1.567l1.8-1.8a1.112 1.112 0 0 1 1.568 0zm7.926 11.565a.456.456 0 0 1-.099-.011l-3.419-.77a1.96 1.96 0 0 1-.77-.412v.001l-3.709-3.71-2.512-2.511 1.71-1.71 6.22 6.221-1.181 1.182a1.294 1.294 0 0 0 .406.213l1.508.339.95-.95-.34-1.508a1.278 1.278 0 0 0-.213-.405l-.345.345-6.222-6.22.874-.875L9.197 7.84l1.751 1.752 1.957 1.958a1.962 1.962 0 0 1 .412.77l.77 3.419c.05.22-.065.37-.26.37z"/></svg>`;
  }
}
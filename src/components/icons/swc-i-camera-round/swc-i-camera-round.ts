import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-camera-round')
export class SwcICameraRound extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-2.874-2.287a.803.803 0 0 0-.8-.8h-2.054v-.251a.802.802 0 0 0-.8-.8h-2.93a.802.802 0 0 0-.8.8v.25H4.186a.802.802 0 0 0-.8.8v5.166a.802.802 0 0 0 .8.8h8.639a.803.803 0 0 0 .8-.8zm-2.692 2.582a2.427 2.427 0 1 1-2.428-2.427 2.428 2.428 0 0 1 2.428 2.427zm-4.055 0a1.627 1.627 0 1 0 1.627-1.627A1.63 1.63 0 0 0 6.88 9.795zm2.75-3.931a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4z"/></svg>`;
  }
}
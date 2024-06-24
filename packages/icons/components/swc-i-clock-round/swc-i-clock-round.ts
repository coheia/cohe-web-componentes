import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-clock-round')
export class SwcIClockRound extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${this.color}" width="${this.size}" height="${this.size}" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path fill-rule="evenodd" d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-2.81 0A5.106 5.106 0 1 1 8.5 4.477a5.106 5.106 0 0 1 5.106 5.106zm-.792 0A4.315 4.315 0 1 1 8.5 5.268a4.315 4.315 0 0 1 4.315 4.315zm-2.163-.992a.396.396 0 0 0-.386-.661.75.75 0 0 0-.305.233l-.414.414-.649.648v-2.51a.67.67 0 0 0-.056-.365.399.399 0 0 0-.735.196c-.009.232 0 .465 0 .697v2.933a.402.402 0 0 0 .258.376c.296.11.495-.169.677-.35l.998-.998.612-.613z"/></svg>`;
  }
}
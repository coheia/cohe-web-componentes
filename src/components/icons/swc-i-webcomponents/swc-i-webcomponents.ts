import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('swc-i-webcomponents')
export class SwcIWebcomponents extends LitElement {
  @property({type: String}) size = '16px';
  @property({type: String}) color = 'currentColor';

  render() {
    return html`<?xml version="1.0" encoding="UTF-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="${this.size}" height="${this.size}" viewBox="0 -23.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
            <stop stop-color="#2A3B8F" offset="0%">
</stop>
            <stop stop-color="#29ABE2" offset="100%">
</stop>
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-2">
            <stop stop-color="#2A3B8F" offset="0%">
</stop>
            <stop stop-color="#29ABE2" offset="100%">
</stop>
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-3">
            <stop stop-color="#B4D44E" offset="0%">
</stop>
            <stop stop-color="#E7F716" offset="100%">
</stop>
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-4">
            <stop stop-color="#B4D44E" offset="0%">
</stop>
            <stop stop-color="#E7F716" offset="100%">
</stop>
        </linearGradient>
    </defs>
    <g>
        <polygon fill="#166DA5" points="255.996595 104.028579 228.191722 150.849429 189.200979 103.389387 228.191722 57.2077286">
</polygon>
        <polygon fill="#8FDB69" points="225.155557 158.839336 182.809054 108.18333 157.401153 150.689631 196.871289 208.376754">
</polygon>
        <polygon fill="#166DA5" points="224.676163 48.8982261 182.809054 99.7140297 157.401153 57.2077286 196.871289 0.159798124">
</polygon>
        <polygon fill="url(#linearGradient-1)" opacity="0.95" points="96.9974616 48.8982261 224.676163 48.8982261 196.551693 0.159798124 125.121931 0.159798124">
</polygon>
        <polyline fill="url(#linearGradient-2)" opacity="0.95" points="182.809054 99.8738278 253.439825 99.8738278 228.031924 57.0479304 157.241354 57.0479304">
</polyline>
        <polygon fill="url(#linearGradient-3)" opacity="0.95" points="225.155557 158.999134 96.8376634 158.999134 124.962133 207.737562 196.871289 207.737562">
</polygon>
        <polygon fill="#010101" points="124.962133 207.737562 64.8780385 103.868781 125.761124 0 59.9242967 0 0 103.868781 59.9242967 207.737562">
</polygon>
        <polyline fill="url(#linearGradient-4)" opacity="0.95" points="182.809054 108.023532 253.439825 108.023532 228.031924 150.849429 157.241354 150.849429">
</polyline>
    </g>
</svg>`;
  }
}
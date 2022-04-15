import '../src/button.js';
import '../src/header.js';
import '../src/toggle.js';

import { LitElement, html, css } from 'lit';
import {typography_base} from '../src/typography';
import {colors} from '../src/colors';

class EntryPoint extends LitElement {

    static get styles() {
        return [typography_base, colors, css`
            :host{
                display: block;
                width: calc(100vw - 20px);
                height: calc(100vh - 20px);
                background-color: var(--color-white);
                padding: 10px; 
            }
        `]
    }

    render() {
        return html`
            <n-h1>A Heading</n-h1>
            <n-h2>A Sub Heading</n-h2>
            <n-p>A paragraph that may contain some interesting information. We'll see.</n-p>
            <n-h3>A Sub Sub Heading</n-h3>
            <n-p>Possibly more information. Most likely rambling.</n-p>
            <n-h3>Buttons</n-h3>
            <n-button>Regular</n-button>
            <n-button-primary>Primary</n-button-primary>
            <n-button-hollow>Hollow</n-button-hollow>
            <n-h3>Toggle</n-h3>
            <n-toggle></n-toggle>
        `
    }
}

customElements.define('entry-point', EntryPoint);
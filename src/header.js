import { template, style, compose } from "lipu-wan-tomo";
import {html, css} from 'lit';
import { h_1, h_2, h_3 } from "./typography";

customElements.define('n-h1', compose([
    template(html`
        <h1><slot></slot></h1>
    `),
    style(h_1)
]));

customElements.define('n-h2', compose([
    template(html`
        <h2><slot></slot></h2>
    `),
    style(h_2)
]));

customElements.define('n-h3', compose([
    template(html`
        <h3><slot></slot></h3>
    `),
    style(h_3)
]));
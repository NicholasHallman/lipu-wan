import { compose, template, style } from 'lipu-wan-tomo';
import { css, html } from 'lit';
import { colors } from './colors';

export const typography_base = css`
    h1, h2, h3, span, p, button, ::slotted(*) {
        font-family: 'Poppins', sans-serif;
    }
`;

export const p = [typography_base, css`
    :host {
        font-weight: 300;
        font-size: 1rem;
    }
`];

export const button = [colors, typography_base, css`
    button {
        font-weight: 400;
        font-size: 1rem;
        color: var(--color-char);
    }
`];

export const span = p;

export const h_1 = [typography_base, css`
    :host {
        font-weight: 600;
        font-size: 1.4rem;
    }
`];

export const h_2 = [typography_base, css`
    :host {
        font-weight: 600;
        font-size: 1.2rem;
    }
`];

export const h_3 = [typography_base, css`
    :host {
        font-weight: 600;
        font-size: 1.1rem;
    }
`];

customElements.define('n-p', compose([
    template(html`<p><slot></slot></p>`),
    style(p)
]));
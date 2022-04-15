import { template, style, compose } from "lipu-wan-tomo";
import { html, css } from 'lit'
import { button } from './typography.js';
import { colors } from './colors.js';

const base_style = css`
    button {
        background-color: var(--color-snow);
        border-radius: 5px;
        border: solid 2px var(--color-snow);
        outline: none;
        padding: 10px 15px;
        transition: background-color .2s, border .2s, box-shadow .2s;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-grey);
        border: solid 2px var(--color-grey);
    }

    button:focus {
        box-shadow: 0px 0px 0px 2px var(--color-char),
            inset 0px 0px 0px 1px var(--color-white);
        border: solid 2px var(--color-white);
    }
`

const baseButton = compose([
    template(html`
        <button>
            <slot></slot>
        </button>
    `),
    style([button, base_style])
])

customElements.define("n-button", baseButton);

customElements.define("n-button-primary", style([colors,
    css`
    button {
        background-color: var(--color-sky);
        border: solid 2px var(--color-sky);
        color: var(--color-snow);
    }

    button:hover {
        background-color: var(--color-lapis);
        border: solid 2px var(--color-lapis);
    }
`])(baseButton));

customElements.define("n-button-hollow", style([colors, css`
    button {
        border: solid 2px var(--color-sky);
        background-color: transparent;
    }

    button:hover {
        background-color: var(--color-lapis);
        border: solid 2px var(--color-lapis);
        color: var(--color-snow);
    }
`])(baseButton));
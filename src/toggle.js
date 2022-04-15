import { a11y, compose, style, template, event, properties } from "lipu-wan-tomo";
import { css, svg } from 'lit';

const Toggle = compose([
    template(svg`
        <svg width="80px" height="40px">
            <circle cx="60px" cy="20px" r="18px"></circle>
            <circle cx="20px" cy="20px" r="18px"></circle>
            <rect x="20px" y="2px" width="40px" height="36px"></rect>
            <line x1="20px" y1="2px" x2="60px" y2="2px"></line>
            <line x1="20px" y1="38px" x2="60px" y2="38px"></line>
            <circle class="toggle" cx="20px" cy="20px" r="14px"></circle>
        </svg>
    `),
    style(css`
        :host {
            cursor: pointer;
        }
        circle {
            stroke: var(--color-grey);
            stroke-width: 2px;
            fill: var(--color-white);
            transition: fill .2s;
        }
        line {
            stroke: var(--color-grey);
            stroke-width: 2px;
        }
        rect {
            fill: var(--color-white);
            transition: fill .2s;
        }
        circle.toggle {
            fill: var(--color-grey);
            transform: translate(0px, 0px);
            stroke: transparent;
            stroke-width: 0px;
            transition: transform .2s, fill .2s;
        }

        :host([on]) circle.toggle {
            fill: var(--color-white);
            transform: translate(40px, 0px);
        }

        :host([on]) circle {
            fill: var(--color-sky);
            stroke: var(--color-sky);
        }

        :host([on]) rect {
            fill: var(--color-sky);
        }

        :host([on]) line {
            stroke: var(--color-sky);
        }
    `),
    a11y({
        role: "button",
        tabindex: 0,
        label: "toggle off"
    }),
    properties({
        on: {type: Boolean, attribute: true, reflect: true}
    }),
    event({
        click: function(e) {
            this.on = !this.on;
            this.label = `toggle ${this.on ? "on" : "off"}`;
        }
    })
]);

customElements.define("n-toggle", Toggle);
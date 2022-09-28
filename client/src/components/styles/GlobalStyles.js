import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Variables */
:root {
    --color-primary: #007066;
    --color-secondary: #b64f00;
    --color-background: #121212;
    --color-surface: #2b2b2b;
    --color-surface-light: #737373;
    --color-error: #cf6679;
    --color-on-primary: #000000;
    --color-on-secondary: #000000;
    --color-on-background: #ffffff;
    --color-on-surface: #ffffff;
    --color-on-error: #000000;

    --color-alliance: #4580f7;
    --color-horde: #cf1d1d;

    --color-death-knight: #c41e3a;
    --color-demon-hunter: #a330c9;
    --color-druid: #ff7c0a;
    --color-evoker: #33937f;
    --color-hunter: #aad372;
    --color-mage: #3fc7eb;
    --color-monk: #00ff98;
    --color-paladin: #f48cba;
    --color-priest: #ffffff;
    --color-rogue: #fff468;
    --color-shaman: #0070dd;
    --color-warlock: #8788ee;
    --color-warrior: #c69b6d;

    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Poppins', sans-serif; 
}

/* CSS Reset */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

* {
    box-sizing: border-box;
    font-family: var(--font-body);
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
    color: var(--color-on-background);
	font-size: 100%;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
    background: var(--color-background);
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
}
`;

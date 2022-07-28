import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Variables */
:root {
    --color-primary: #bb86fc;
    --color-primary-variant: #3700b3;
    --color-secondary: #03dac6;
    --color-background: #121212;
    --color-surface: #292929;
    --color-error: #cf6679;
    --color-on-primary: #000000;
    --color-on-secondary: #000000;
    --color-on-background: #ffffff;
    --color-on-surface: #ffffff;
    --color-on-error: #000000;

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

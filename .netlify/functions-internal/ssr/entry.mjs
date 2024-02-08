import { renderers } from './renderers.mjs';
import { manifest } from './manifest_jHm4lIA2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_nOcH2IKS.mjs');
const _page1 = () => import('./chunks/index_t_HkTH7U.mjs');
const _page2 = () => import('./chunks/machining-drilling_JVv45grN.mjs');
const _page3 = () => import('./chunks/machining-milling_4ASCPWwS.mjs');
const _page4 = () => import('./chunks/machining-turning_Ebp-YD_7.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/machining-drilling.astro", _page2],
    ["src/pages/machining-milling.astro", _page3],
    ["src/pages/machining-turning.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7369a190-6d0a-45eb-93ef-f6a872ee2df7"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };

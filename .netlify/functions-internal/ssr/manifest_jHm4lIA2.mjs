import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DrCKNKbK.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.PPEqDhA6.js"}],"styles":[{"type":"external","src":"/_astro/index.FvOF2zoJ.css"},{"type":"inline","content":".section-sc[data-astro-cid-tycjxryy]{display:flex;flex-direction:column;justify-content:center;align-items:center}.section-qs[data-astro-cid-tycjxryy]{width:min(100%,700px);margin-right:auto;margin-left:auto;padding-bottom:30px;padding-inline:7%}.section-qs[data-astro-cid-tycjxryy] ul[data-astro-cid-tycjxryy]{padding:0;display:flex;flex-direction:column;position:relative;overflow:hidden}.list__item[data-astro-cid-tycjxryy]{display:flex;flex-direction:column;padding:0;cursor:pointer;border-bottom:1px solid grey}.qs-ans[data-astro-cid-tycjxryy]{height:0px;width:100%;margin:0;color:#0d0e16;overflow:hidden;transition:height ease-in .3s}.ans-show[data-astro-cid-tycjxryy]{height:100px;margin-bottom:5px}.icon-rotate[data-astro-cid-tycjxryy]{transform:rotate(0)}.item__title[data-astro-cid-tycjxryy]{margin:0;padding-block:10px}.container[data-astro-cid-brdylwhd]{overflow:hidden;width:100%}table[data-astro-cid-brdylwhd]{width:100%;box-shadow:0 0 20px #0000001a;border-radius:4px;background:#b9b7b7}thead[data-astro-cid-brdylwhd]{border-radius:4px}th[data-astro-cid-brdylwhd],td[data-astro-cid-brdylwhd]{padding:15px;background-color:#fff3;color:#fff}th[data-astro-cid-brdylwhd]{text-align:left}thead[data-astro-cid-brdylwhd] th[data-astro-cid-brdylwhd]{background-color:#55608f}tr[data-astro-cid-brdylwhd]:hover{background-color:#ffffff4d}td[data-astro-cid-brdylwhd]{position:relative}td[data-astro-cid-brdylwhd]:hover:before{content:\"\";position:absolute;inset:-9999px 0;background-color:#fff3;z-index:-1}@media screen and (max-width:400px){.container[data-astro-cid-brdylwhd]{padding:15px 15px 0}td[data-astro-cid-brdylwhd]{padding:7px;font-size:.6rem}td[data-astro-cid-brdylwhd]:nth-child(n+3){display:none}}@media (max-width: 769px){td[data-astro-cid-brdylwhd]:nth-child(n+4){display:none}.container[data-astro-cid-brdylwhd]{padding:15px}}.items-container[data-astro-cid-j7pv25f6]{width:100%;display:flex;justify-content:center;align-items:center}.items-container2[data-astro-cid-j7pv25f6]{width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding-top:25px}.item[data-astro-cid-j7pv25f6]{width:min(150px,30%);background-color:#fff;display:flex;gap:15px;flex-direction:column;justify-content:center;align-items:center;height:auto;aspect-ratio:9/10;box-shadow:0 0 4px 2px #00000050;border-radius:4px;position:relative;line-height:1.2}@media screen and (min-width:530px){.item2[data-astro-cid-j7pv25f6]{width:150px;font-size:.9rem;cursor:pointer;transition:all .35s ease}.item2[data-astro-cid-j7pv25f6]:hover{scale:1.08}}.item2[data-astro-cid-j7pv25f6]{background-color:#fff;display:flex;align-items:center;text-align:center;flex-direction:column;border-radius:4px;overflow:hidden;box-shadow:1px 0 6px 4px #0c0c0c65}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bAa0O6CP.js"}],"styles":[{"type":"external","src":"/_astro/index.FvOF2zoJ.css"},{"type":"inline","content":".section-sc[data-astro-cid-47lxtf37]{display:flex;flex-direction:column;justify-content:center;align-items:center}.section-qs[data-astro-cid-47lxtf37]{margin-right:auto;margin-left:auto;padding-bottom:30px}.section-qs[data-astro-cid-47lxtf37] ul[data-astro-cid-47lxtf37]{list-style:DISC;display:flex;flex-direction:column;position:relative;overflow:hidden}.list__item[data-astro-cid-47lxtf37]{display:flex;flex-direction:column;padding:0;cursor:pointer}.qs-ans[data-astro-cid-47lxtf37]{height:0px;width:100%;margin:0;padding:0;color:#0d0e16;overflow:hidden;transition:height ease-in .3s}.ans-show[data-astro-cid-47lxtf37]{height:auto;padding:10px;margin-bottom:5px}.icon-rotate[data-astro-cid-47lxtf37]{transform:rotate(0)}.item__title[data-astro-cid-47lxtf37]{margin:0;padding-block:10px}\n"}],"routeData":{"route":"/machining-drilling","isIndex":false,"type":"page","pattern":"^\\/machining-drilling\\/?$","segments":[[{"content":"machining-drilling","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/machining-drilling.astro","pathname":"/machining-drilling","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bUNNgYNI.js"}],"styles":[{"type":"external","src":"/_astro/index.FvOF2zoJ.css"},{"type":"inline","content":".section-sc[data-astro-cid-vyxjv6oo]{display:flex;flex-direction:column;justify-content:center;align-items:center}.section-qs[data-astro-cid-vyxjv6oo]{margin-right:auto;margin-left:auto;padding-bottom:30px}.section-qs[data-astro-cid-vyxjv6oo] ul[data-astro-cid-vyxjv6oo]{list-style:DISC;display:flex;flex-direction:column;position:relative;overflow:hidden}.list__item[data-astro-cid-vyxjv6oo]{display:flex;flex-direction:column;padding:0;cursor:pointer}.qs-ans[data-astro-cid-vyxjv6oo]{height:0px;width:100%;margin:0;padding:0;color:#0d0e16;overflow:hidden;transition:height ease-in .3s}.ans-show[data-astro-cid-vyxjv6oo]{height:auto;padding:10px;margin-bottom:5px}.icon-rotate[data-astro-cid-vyxjv6oo]{transform:rotate(0)}.item__title[data-astro-cid-vyxjv6oo]{margin:0;padding-block:10px}\n"}],"routeData":{"route":"/machining-milling","isIndex":false,"type":"page","pattern":"^\\/machining-milling\\/?$","segments":[[{"content":"machining-milling","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/machining-milling.astro","pathname":"/machining-milling","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3Tjyjzpw.js"}],"styles":[{"type":"external","src":"/_astro/index.FvOF2zoJ.css"},{"type":"inline","content":".section-sc[data-astro-cid-bbwnuzfe]{display:flex;flex-direction:column;justify-content:center;align-items:center}.section-qs[data-astro-cid-bbwnuzfe]{margin-right:auto;margin-left:auto;padding-bottom:30px}.section-qs[data-astro-cid-bbwnuzfe] ul[data-astro-cid-bbwnuzfe]{list-style:DISC;display:flex;flex-direction:column;position:relative;overflow:hidden}.list__item[data-astro-cid-bbwnuzfe]{display:flex;flex-direction:column;padding:0;cursor:pointer}.qs-ans[data-astro-cid-bbwnuzfe]{height:0px;width:100%;margin:0;padding:0;color:#0d0e16;overflow:hidden;transition:height ease-in .3s}.ans-show[data-astro-cid-bbwnuzfe]{height:auto;padding:10px;margin-bottom:5px}.icon-rotate[data-astro-cid-bbwnuzfe]{transform:rotate(0)}.item__title[data-astro-cid-bbwnuzfe]{margin:0;padding-block:10px}\n"}],"routeData":{"route":"/machining-turning","isIndex":false,"type":"page","pattern":"^\\/machining-turning\\/?$","segments":[[{"content":"machining-turning","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/machining-turning.astro","pathname":"/machining-turning","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Dell/Documents/Dachuan-WebSIte/website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Documents/Dachuan-WebSIte/website/src/pages/machining-drilling.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Documents/Dachuan-WebSIte/website/src/pages/machining-milling.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Documents/Dachuan-WebSIte/website/src/pages/machining-turning.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_IIHI3Kfv.mjs","/src/pages/machining-milling.astro":"chunks/pages/machining-milling_s77eYoAv.mjs","/src/pages/machining-turning.astro":"chunks/pages/machining-turning_42kw41di.mjs","\u0000@astrojs-manifest":"manifest_jHm4lIA2.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_nOcH2IKS.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_t_HkTH7U.mjs","\u0000@astro-page:src/pages/machining-drilling@_@astro":"chunks/machining-drilling_JVv45grN.mjs","\u0000@astro-page:src/pages/machining-milling@_@astro":"chunks/machining-milling_4ASCPWwS.mjs","\u0000@astro-page:src/pages/machining-turning@_@astro":"chunks/machining-turning_Ebp-YD_7.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.bUNNgYNI.js","/astro/hoisted.js?q=2":"_astro/hoisted.bAa0O6CP.js","/astro/hoisted.js?q=1":"_astro/hoisted.3Tjyjzpw.js","/astro/hoisted.js?q=3":"_astro/hoisted.PPEqDhA6.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.FvOF2zoJ.css","/favicon.svg","/video/misumi-video.mp4","/video/upload-svgrepo-com (1).svg","/_astro/hoisted.3Tjyjzpw.js","/_astro/hoisted.bAa0O6CP.js","/_astro/hoisted.bUNNgYNI.js","/_astro/hoisted.PPEqDhA6.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.Q0fD8L-D.js","/img/assurance.svg","/img/banner-cn-2.png","/img/banner-en-3.jpg","/img/banner-en-3.webp","/img/box4-pic1.png","/img/box4-pic3.png","/img/box4-pic4.png","/img/check.svg","/img/drilling1.svg","/img/fast-delivery.svg","/img/garantia.png","/img/Group 64.svg","/img/logo-favicon.png","/img/logo.png","/img/masive.svg","/img/menu.svg","/img/miling1.svg","/img/OIP-C (1) 1.svg","/img/order-parts.svg","/img/order.svg","/img/secure-svgrepo-com.svg","/img/settings-configuration-svgrepo-com.svg","/img/settings.svg","/img/spanflug.webp","/img/time-stopwatch-watch-svgrepo-com.svg","/img/turning.svg","/img/Vector 1.svg","/img/wishlist-svgrepo-com.svg"],"buildFormat":"directory"});

export { manifest };

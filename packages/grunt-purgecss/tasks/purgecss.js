"use strict";var t=require("purgecss");function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e=[]){return e.filter((e=>!!t.file.exists(e)||(t.log.warn(`Source file "${e}" not found.`),!1)))}module.exports=function(e){e.registerMultiTask("purgecss","Grunt plugin for PurgeCSS",(function(){const s=this.async(),i=this.options(t.defaultOptions);for(const t of this.files){const o=r(e,t.src);(new n.default).purge({...i,css:o}).then((n=>{if(void 0===t.dest)throw new Error("Destination file not found");e.file.write(t.dest,n[0].css),e.log.writeln(`File "${t.dest}" created.`),s()})).catch((()=>{s(!1)}))}}))};

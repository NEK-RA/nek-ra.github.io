(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{385:function(t,e,r){var map={"./assets/avatars/jonsi64.jpg":386,"./assets/avatars/nekra64.jpg":387,"./assets/project/blog/icon.png":388,"./assets/project/q32/icon.png":389,"./assets/rj-l.png":252,"./assets/variables.scss":390};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=385},386:function(t,e,r){t.exports=r.p+"img/jonsi64.158d72f.jpg"},387:function(t,e,r){t.exports=r.p+"img/nekra64.ae02340.jpg"},388:function(t,e,r){t.exports=r.p+"img/icon.f58597e.png"},389:function(t,e,r){t.exports=r.p+"img/icon.2f184de.png"},390:function(t,e,r){var content=r(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("22618b18",content,!0,{sourceMap:!1})},391:function(t,e,r){(e=r(8)(!1)).push([t.i,"",""]),t.exports=e},395:function(t,e,r){"use strict";r.r(e);var n={props:{project:{type:Object,required:!0,default:function(){return{}}}},computed:{platformIcon:function(){var t="";switch(this.project.platform){case"ANDROID":t="mdi-tablet-cellphone";break;case"WEB":t="mdi-web";break;case"WINDOWS":t="mdi-laptop";break;case"LINUX":t="mdi-linux"}return t},statusIcon:function(){var t="";switch(this.project.status){case"ARCHIVED":t="mdi-archive";break;case"ACTIVE":t="mdi-check";break;case"FROZEN":t="mdi-snowflake";break;case"SUPPORT":t="mdi-bug";break;case"DEVELOPMENT":t="mdi-trello"}return t},statusColor:function(){var t="";switch(this.project.status){case"ARCHIVED":t="brown";break;case"ACTIVE":t="green darken-4";break;case"FROZEN":t="blue lighten-3";break;case"SUPPORT":t="orange darken-2";break;case"DEVELOPMENT":t="blue-grey"}return t},langColor:function(){var t="";switch(this.project.lang){case"MULTILANGUAGE":t="green darken-4";break;default:t="blue darken-4"}return t},platformColor:function(){var t="";switch(this.project.platform){case"CROSSPLATFORM":t="green darken-4";break;default:t="blue darken-4"}return t}},methods:{specified:function(t){var e=!1;return""!==t&&null!=t&&(e=!0),e}}},o=r(79),l=r(120),c=r.n(l),f=r(180),m=r(392),v=r(369),d=r(181),j=r(145),h=r(182),_=r(113),k=r(185),x=r(71),C=r(370),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto mb-1 mt-1"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("v-list",{attrs:{"three-line":""}},[n("v-list-item",[n("v-list-item-avatar",{attrs:{size:"64"}},[n("v-img",{attrs:{src:"asset"===t.project.icon.type?r(385)("./assets"+t.project.icon.url):t.project.icon.url}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(t.project.title)+"\n              "),t.specified(t.project.version)?n("span",{staticClass:"ml-1"},[t._v("\n                v"+t._s(t.project.version)+"\n              ")]):t._e()]),t._v(" "),n("v-list-item-subtitle",[t._v("\n              "+t._s(t.project.description)+"\n            ")])],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4",md:"4","align-self":"center"}},[t.specified(t.project.status)?n("v-chip",{staticClass:"ml-1 mt-1 mb-1 mr-1",attrs:{small:"",label:"",color:t.statusColor}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          "+t._s(t.statusIcon)+"\n        ")]),t._v("\n        "+t._s(t.project.status)+"\n      ")],1):t._e(),t._v(" "),t.specified(t.project.lang)?n("v-chip",{staticClass:"ml-1 mt-1 mb-1 mr-1",attrs:{small:"",label:"",color:t.langColor}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          mdi-flag\n        ")]),t._v("\n        "+t._s(t.project.lang)+"\n      ")],1):t._e(),t._v(" "),t.specified(t.project.platform)?n("v-chip",{staticClass:"ml-1 mt-1 mb-1 mr-1",attrs:{small:"",label:"",color:t.platformColor}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          "+t._s(t.platformIcon)+"\n        ")]),t._v("\n        "+t._s(t.project.platform)+"\n      ")],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VChip:m.a,VCol:v.a,VIcon:d.a,VImg:j.a,VList:h.a,VListItem:_.a,VListItemAvatar:k.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VRow:C.a})},408:function(t,e,r){var content=r(428);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("5b9879fa",content,!0,{sourceMap:!1})},427:function(t,e,r){"use strict";r(408)},428:function(t,e,r){(e=r(8)(!1)).push([t.i,"a[data-v-43515bb5]{text-decoration:none}",""]),t.exports=e},462:function(t,e,r){"use strict";r.r(e);r(54),r(80);var n=r(16),o={components:{ProjectLabel:r(395).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("projects").only(["title","description","icon","version","platform","lang","status","slug"]).sortBy("status").fetch();case 3:return n=e.sent,e.abrupt("return",{projects:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{pageTitle:"My projects",pageKeywords:["NEK-RA","Ryoidenshi Aokigahara","projects","peronal projects"],filter:{platform:"All",status:"All",lang:"All"},platforms:["All","Web","Android","Windows","Linux"],statuses:["All","Active","Development","Frozen","Support","Archived"],langs:["All","English","Russian","Multilanguage"]}},computed:{filteredProjects:function(){var t=this,e=this.projects;return"All"!==this.filter.platform&&(e=e.filter((function(e){return e.platform===t.filter.platform.toUpperCase()}))),"All"!==this.filter.status&&(e=e.filter((function(e){return e.status===t.filter.status.toUpperCase()}))),"All"!==this.filter.lang&&(e=e.filter((function(e){return e.lang===t.filter.lang.toUpperCase()}))),e}},mounted:function(){this.$store.dispatch("layout/updateTitle",this.pageTitle)},head:function(){return{title:"My Projects",meta:[{hid:"description",name:"description",content:"Projects of NEK-RA. Here you can see status, locale and platform of projects"},{hid:"keywords",name:"keywords",content:this.pageKeywords}]}}},l=(r(427),r(79)),c=r(120),f=r.n(c),m=r(180),v=r(369),d=r(453),j=r(454),h=r(455),_=r(456),k=r(182),x=r(113),C=r(370),V=r(459),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[r("v-card",[r("v-expansion-panels",[r("v-expansion-panel",[r("v-expansion-panel-header",[t._v("\n            Filters\n          ")]),t._v(" "),r("v-expansion-panel-content",[r("v-list",{attrs:{"three-line":""}},[r("v-list-item",[r("v-select",{attrs:{items:t.langs,label:"Language",outlined:""},model:{value:t.filter.lang,callback:function(e){t.$set(t.filter,"lang",e)},expression:"filter.lang"}})],1),t._v(" "),r("v-list-item",[r("v-select",{attrs:{items:t.platforms,label:"Platform",outlined:""},model:{value:t.filter.platform,callback:function(e){t.$set(t.filter,"platform",e)},expression:"filter.platform"}})],1),t._v(" "),r("v-list-item",[r("v-select",{attrs:{items:t.statuses,label:"Status",outlined:""},model:{value:t.filter.status,callback:function(e){t.$set(t.filter,"status",e)},expression:"filter.status"}})],1)],1)],1)],1)],1)],1),t._v(" "),t._l(t.filteredProjects,(function(t){return r("nuxt-link",{key:t.path,attrs:{to:"/projects/"+t.slug,exact:"",router:"","no-prefetch":""}},[r("ProjectLabel",{attrs:{project:t}})],1)}))],2)],1)}),[],!1,null,"43515bb5",null);e.default=component.exports;f()(component,{ProjectLabel:r(395).default}),f()(component,{VCard:m.a,VCol:v.a,VExpansionPanel:d.a,VExpansionPanelContent:j.a,VExpansionPanelHeader:h.a,VExpansionPanels:_.a,VList:k.a,VListItem:x.a,VRow:C.a,VSelect:V.a})}}]);
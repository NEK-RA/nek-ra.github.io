(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{403:function(t,e,r){var map={"./assets/avatars/jonsi64.jpg":404,"./assets/avatars/nekra64.jpg":405,"./assets/project/blog/icon.png":406,"./assets/project/q32/icon.png":407,"./assets/rj-l.png":272};function n(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=403},404:function(t,e,r){t.exports=r.p+"img/jonsi64.706c232.jpg"},405:function(t,e,r){t.exports=r.p+"img/nekra64.5adec1c.jpg"},406:function(t,e,r){t.exports=r.p+"img/icon.944322c.png"},407:function(t,e,r){t.exports=r.p+"img/icon.94caddd.png"},409:function(t,e,r){"use strict";r.r(e);var n={props:{project:{type:Object,required:!0,default:function(){return{}}}},computed:{platformIcon:function(){var t="";switch(this.project.platform){case"ANDROID":t="mdi-tablet-cellphone";break;case"WEB":t="mdi-web";break;case"WINDOWS":t="mdi-laptop";break;case"LINUX":t="mdi-linux"}return t},statusIcon:function(){var t="";switch(this.project.status){case"ARCHIVED":t="mdi-archive";break;case"ACTIVE":t="mdi-check";break;case"FROZEN":t="mdi-snowflake";break;case"SUPPORT":t="mdi-bug";break;case"DEVELOPMENT":t="mdi-trello"}return t},statusColor:function(){var t="";switch(this.project.status){case"ARCHIVED":t="brown";break;case"ACTIVE":t="green darken-4";break;case"FROZEN":t="blue lighten-3";break;case"SUPPORT":t="orange darken-2";break;case"DEVELOPMENT":t="blue-grey"}return t},langColor:function(){var t="";switch(this.project.lang){case"MULTILANGUAGE":t="green darken-4";break;default:t="blue darken-4"}return t},platformColor:function(){var t="";switch(this.project.platform){case"CROSSPLATFORM":t="green darken-4";break;default:t="blue darken-4"}return t}},methods:{specified:function(t){var e=!1;return""!==t&&null!=t&&(e=!0),e}}},l=r(89),o=r(122),c=r.n(o),f=r(183),m=r(408),d=r(387),v=r(184),j=r(151),h=r(185),_=r(117),k=r(189),C=r(82),x=r(388),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto mb-1 mt-1"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("v-list",{attrs:{"three-line":""}},[n("v-list-item",[n("v-list-item-avatar",{attrs:{size:"64"}},[n("v-img",{attrs:{src:"asset"===t.project.icon.type?r(403)("./assets"+t.project.icon.url):t.project.icon.url}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(t.project.title)+"\n              "),t.specified(t.project.version)?n("span",{staticClass:"ml-1"},[t._v("\n                v"+t._s(t.project.version)+"\n              ")]):t._e()]),t._v(" "),n("v-list-item-subtitle",[t._v("\n              "+t._s(t.project.description)+"\n            ")])],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4",md:"4","align-self":"center"}},[t.specified(t.project.status)?n("v-chip",{staticClass:"ml-1 mt-1 mb-1 mr-1",attrs:{small:"",label:"",color:t.statusColor}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          "+t._s(t.statusIcon)+"\n        ")]),t._v("\n        "+t._s(t.project.status)+"\n      ")],1):t._e(),t._v(" "),t.specified(t.project.lang)?n("v-chip",{staticClass:"ml-1 mt-1 mb-1 mr-1",attrs:{small:"",label:"",color:t.langColor}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          mdi-flag\n        ")]),t._v("\n        "+t._s(t.project.lang)+"\n      ")],1):t._e(),t._v(" "),t.specified(t.project.platform)?n("v-chip",{staticClass:"ml-1 mt-1 mb-1 mr-1",attrs:{small:"",label:"",color:t.platformColor}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          "+t._s(t.platformIcon)+"\n        ")]),t._v("\n        "+t._s(t.project.platform)+"\n      ")],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VChip:m.a,VCol:d.a,VIcon:v.a,VImg:j.a,VList:h.a,VListItem:_.a,VListItemAvatar:k.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VRow:x.a})},425:function(t,e,r){var content=r(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5b9879fa",content,!0,{sourceMap:!1})},444:function(t,e,r){"use strict";r(425)},445:function(t,e,r){var n=r(15)(!1);n.push([t.i,"a[data-v-43515bb5]{text-decoration:none}",""]),t.exports=n},480:function(t,e,r){"use strict";r.r(e);var n=r(24),l=(r(7),r(90),{components:{ProjectLabel:r(409).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("projects").only(["title","description","icon","version","platform","lang","status","slug"]).sortBy("status").fetch();case 3:return n=e.sent,e.abrupt("return",{projects:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{pageTitle:"My projects",pageKeywords:["NEK-RA","Ryoidenshi Aokigahara","projects","peronal projects"],filter:{platform:"All",status:"All",lang:"All"},platforms:["All","Web","Android","Windows","Linux"],statuses:["All","Active","Development","Frozen","Support","Archived"],langs:["All","English","Russian","Multilanguage"]}},computed:{filteredProjects:function(){var t=this,e=this.projects;return"All"!==this.filter.platform&&(e=e.filter((function(e){return e.platform===t.filter.platform.toUpperCase()}))),"All"!==this.filter.status&&(e=e.filter((function(e){return e.status===t.filter.status.toUpperCase()}))),"All"!==this.filter.lang&&(e=e.filter((function(e){return e.lang===t.filter.lang.toUpperCase()}))),e}},mounted:function(){this.$store.dispatch("layout/updateTitle",this.pageTitle)},head:function(){return{title:"My Projects",meta:[{hid:"description",name:"description",content:"Projects of NEK-RA. Here you can see status, locale and platform of projects"},{hid:"keywords",name:"keywords",content:this.pageKeywords}]}}}),o=(r(444),r(89)),c=r(122),f=r.n(c),m=r(183),d=r(387),v=r(471),j=r(472),h=r(473),_=r(474),k=r(185),C=r(117),x=r(388),V=r(477),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[r("v-card",[r("v-expansion-panels",[r("v-expansion-panel",[r("v-expansion-panel-header",[t._v("\n            Filters\n          ")]),t._v(" "),r("v-expansion-panel-content",[r("v-list",{attrs:{"three-line":""}},[r("v-list-item",[r("v-select",{attrs:{items:t.langs,label:"Language",outlined:""},model:{value:t.filter.lang,callback:function(e){t.$set(t.filter,"lang",e)},expression:"filter.lang"}})],1),t._v(" "),r("v-list-item",[r("v-select",{attrs:{items:t.platforms,label:"Platform",outlined:""},model:{value:t.filter.platform,callback:function(e){t.$set(t.filter,"platform",e)},expression:"filter.platform"}})],1),t._v(" "),r("v-list-item",[r("v-select",{attrs:{items:t.statuses,label:"Status",outlined:""},model:{value:t.filter.status,callback:function(e){t.$set(t.filter,"status",e)},expression:"filter.status"}})],1)],1)],1)],1)],1)],1),t._v(" "),t._l(t.filteredProjects,(function(t){return r("nuxt-link",{key:t.path,attrs:{to:"/projects/"+t.slug,exact:"",router:"","no-prefetch":""}},[r("ProjectLabel",{attrs:{project:t}})],1)}))],2)],1)}),[],!1,null,"43515bb5",null);e.default=component.exports;f()(component,{ProjectLabel:r(409).default}),f()(component,{VCard:m.a,VCol:d.a,VExpansionPanel:v.a,VExpansionPanelContent:j.a,VExpansionPanelHeader:h.a,VExpansionPanels:_.a,VList:k.a,VListItem:C.a,VRow:x.a,VSelect:V.a})}}]);
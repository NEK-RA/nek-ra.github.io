(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{361:function(t,e,r){"use strict";var o=r(189);e.a=o.a},383:function(t,e,r){var content=r(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("5db1c400",content,!0,{sourceMap:!1})},384:function(t,e,r){(e=r(8)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},400:function(t,e,r){"use strict";r(29);var o=r(2),n=(r(383),r(89)),l=r(361),c=r(78),d=r(50),h=r(23),v=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(5),_=r(6);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(n.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},401:function(t,e,r){var content=r(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("e302bd26",content,!0,{sourceMap:!1})},406:function(t,e,r){"use strict";r.r(e);var o={props:{post:{type:Object,required:!0,default:function(){return{}}}}},n=r(79),l=r(120),c=r.n(l),d=r(180),h=r(96),v=r(392),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto mb-1 mt-1"},[r("v-card-title",[t._v("\n    "+t._s(t.post.title)+"\n  ")]),t._v(" "),r("v-card-text",[t._v("\n    "+t._s(new Date(t.post.posted).toLocaleString())+"\n    "),t._l(t.post.tags,(function(e,o){return r("v-chip",{key:o,staticClass:"ml-1 mr-1",attrs:{small:""}},[t._v("\n      "+t._s(e)+"\n    ")])})),r("br"),t._v("\n    "+t._s(t.post.description)+"\n  ")],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:h.a,VCardTitle:h.b,VChip:v.a})},409:function(t,e,r){"use strict";r(401)},410:function(t,e,r){(e=r(8)(!1)).push([t.i,"a[data-v-2333365a]{text-decoration:none}",""]),t.exports=e},451:function(t,e,r){"use strict";r.r(e);r(254),r(255),r(54),r(34),r(29),r(17),r(47),r(191),r(55),r(51),r(80);var o=r(15),n={components:{PostLabel:r(406).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("blog").only(["title","description","slug","posted","tags"]).sortBy("posted","desc").fetch();case 3:return o=e.sent,n=[],o.forEach((function(t){t.tags.forEach((function(t){n.includes(t)||n.push(t)}))})),e.abrupt("return",{tags:n,posts:o});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{pageTitle:"Blog",selected:[],search:""}},computed:{filteredPosts:function(){var t=this,e=this.posts;0!==this.selected.length&&(e=e.filter((function(e){return t.includeAll(e.tags,t.selected)})));var r=this.search.trim().toLowerCase();return 0!==this.search.trim().length&&(e=e.filter((function(t){return t.title.toLowerCase().includes(r)||t.description.toLowerCase().includes(r)}))),e}},mounted:function(){this.$store.dispatch("layout/updateTitle",this.pageTitle)},methods:{includeAll:function(t,e){for(var r=!0,i=0;i<e.length;i++)if(!t.includes(e[i])){r=!1;break}return r}},head:function(){return{title:this.pageTitle,meta:[{hid:"description",name:"description",content:"Small blog of NEK-RA. Also here will be news about projects"}]}}},l=(r(409),r(79)),c=r(120),d=r.n(c),h=r(400),v=r(180),f=r(392),_=r(369),m=r(445),x=r(446),y=r(447),w=r(448),C=r(370),k=r(441),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[r("v-card",[r("v-expansion-panels",[r("v-expansion-panel",[r("v-expansion-panel-header",[t._v("\n            Search and tag filter\n          ")]),t._v(" "),r("v-expansion-panel-content",[r("v-alert",{attrs:{type:"info",color:"grey darken-3",dense:"",dismissible:""}},[t._v("\n              Search is working only with "),r("u",[t._v("post title and description")])]),t._v(" "),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search posts","single-line":"",outlined:"",placeholder:"Search for ..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("v-alert",{attrs:{type:"info",color:"grey darken-3",dense:"",dismissible:""}},[t._v("\n              You will see posts which contain "),r("u",[t._v("all selected tags")])]),t._v("\n            Selected tags:\n            "),t._l(t.selected,(function(e,o){return r("v-chip",{key:"selected"+o,staticClass:"ml-1 mt-1 mr-1 mb-1",attrs:{small:"",close:""},on:{"click:close":function(e){return t.selected.splice(o,1)}}},[t._v("\n              "+t._s(e)+"\n            ")])})),t._v(" "),r("br"),t._v("\n            All tags:\n            "),t._l(t.tags,(function(e,o){return[t.selected.includes(e)?t._e():r("v-chip",{key:"all"+o,staticClass:"ml-1 mt-1 mr-1 mb-1",attrs:{small:""},on:{click:function(r){return t.selected.push(e)}}},[t._v("\n                "+t._s(e)+"\n              ")])]}))],2)],1)],1)],1),t._v(" "),0===t.filteredPosts.length?r("v-alert",{staticClass:"mt-2",attrs:{type:"info",color:"grey darken-3",prominent:""}},[t._v("\n      Sorry, but there are no posts which contain all selected tags or search query :c\n    ")]):t._e(),t._v(" "),t._l(t.filteredPosts,(function(t){return r("nuxt-link",{key:t.slug,attrs:{to:"/blog/"+t.slug,exact:"",router:"","no-prefetch":""}},[r("PostLabel",{attrs:{post:t}})],1)}))],2)],1)}),[],!1,null,"2333365a",null);e.default=component.exports;d()(component,{PostLabel:r(406).default}),d()(component,{VAlert:h.a,VCard:v.a,VChip:f.a,VCol:_.a,VExpansionPanel:m.a,VExpansionPanelContent:x.a,VExpansionPanelHeader:y.a,VExpansionPanels:w.a,VRow:C.a,VTextField:k.a})}}]);
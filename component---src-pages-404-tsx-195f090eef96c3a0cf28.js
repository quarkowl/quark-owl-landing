(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{247:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(243),o=a.n(r),i=a(295),c=function(){return n.createElement("div",{id:"main",className:o.a.container},n.createElement("div",{className:o.a.messageContainer},n.createElement("h1",null,"Something went wrong."),n.createElement("div",{className:o.a.row},n.createElement("img",{src:"logo.svg",alt:"company logo",className:o.a.mainImage}),n.createElement("div",{className:o.a.infoContainer},n.createElement("h1",{className:o.a.error},"404"),n.createElement("h3",{className:o.a.message},"Sorry, we can't find the page."),n.createElement("a",{className:o.a.message,href:"/"},"Back to Home")))),n.createElement(i.a,null))},l=a(297);e.default=function(){return n.createElement(n.Fragment,null,n.createElement(l.a,{title:"Quark Owl LTD - Not Found"}),n.createElement(c,null))}},252:function(t,e,a){"use strict";var n=a(1),r=a.n(n),o=a(160),i=a(130);e.a=function(t,e){return Object(o.a)(t,r()({defaultTheme:i.a},e))}},253:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r});a(19);function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function r(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.reduce(function(t,e){return null==e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];t.apply(this,n),e.apply(this,n)}},function(){})}},261:function(t,e,a){"use strict";var n=a(296),r=function(){return n.data.site.siteMetadata},o=(a(178),a(179),a(0)),i={state:!1,setState:function(t){var e=this;this.state=t,this.setters.forEach(function(t){return t(e.state)})},setters:[]};i.setState=i.setState.bind(i);var c=function(){var t=Object(o.useState)(i.state),e=t[0],a=t[1];i.setters.includes(a)||i.setters.push(a),Object(o.useEffect)(function(){return function(){i.setters=i.setters.filter(function(t){return t!==a})}},[]);return[e,function(t){i.setState(void 0!==t?t:!e)}]};a.d(e,"a",function(){return r}),a.d(e,"b",function(){return c})},295:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var n=a(0),r=a(251),o=a(384),i=a(261),c=Object(r.a)(function(t){return{footer:{backgroundColor:t.palette.grey[100],padding:t.spacing(6)}}});function l(){var t=Object(i.a)(),e=t.copyright,a=t.short_name,r=c(void 0);return n.createElement("footer",{className:r.footer},n.createElement(o.a,{variant:"h6",align:"center",gutterBottom:!0},a),n.createElement(o.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},e))}},296:function(t){t.exports={data:{site:{siteMetadata:{url:"https://quarkowl.com",title:"QuarkOwl LTD - JavaScript Engineering Solutions",short_name:"QuarkOwl",description:"Software Engineering company established in 2016. Specialities: JavaScript with NodeJS, IoT, Artificial Intelligence",theme_color:"#00b9f1",copyright:"© QuarkOwl 2019. All rights reserved.",disqusShortname:"",contactFormUrl:"https://docs.google.com/forms/d/e/1FAIpQLSfo-91_RaJoixJTWJJ5uA4JI0Ms7jkpO1YlhigUH6cDYQRI_Q/formResponse",author:{name:"QuarkOwl LTD",photo:"/logo.svg",contacts:{email:"quarkowl@gmail.com",twitter:"quarkowl",github:"quarkowl",rss:"/rss.xml"}},menu:{contact:{id:"contact",label:"Contact",order:1},services:{id:"about",label:"Services",order:3},technologies:{id:"technologies",label:"Technologies",order:2}}}}}}},297:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(132),i=a(261);e.a=function(t){var e=t.title,a=Object(i.a)(),n=a.title,c=a.description,l=a.theme_color,s=a.url,m=a.author,p=e||n,u=""+s+m.photo;return r.a.createElement("div",null,"s",r.a.createElement(o.Helmet,null,r.a.createElement("title",null,p),r.a.createElement("meta",{name:"description",content:c}),r.a.createElement("meta",{name:"msapplication-TileColor",content:l}),r.a.createElement("meta",{name:"theme-color",content:l}),r.a.createElement("meta",{name:"image",content:u}),r.a.createElement("link",{rel:"canonical",href:s}),r.a.createElement("meta",{property:"og:url",content:s}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:p}),r.a.createElement("meta",{property:"og:description",content:c}),r.a.createElement("meta",{property:"og:image",content:u}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:m.contacts.twitter}),r.a.createElement("meta",{name:"twitter:title",content:p}),r.a.createElement("meta",{name:"twitter:description",content:c}),r.a.createElement("meta",{name:"twitter:image",content:u})))}},384:function(t,e,a){"use strict";var n=a(1),r=a.n(n),o=a(5),i=a.n(o),c=a(0),l=a.n(c),s=a(91),m=a(252),p=a(253),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},h=l.a.forwardRef(function(t,e){var a=t.align,n=void 0===a?"inherit":a,o=t.classes,c=t.className,m=t.color,h=void 0===m?"initial":m,g=t.component,d=t.display,y=void 0===d?"initial":d,f=t.gutterBottom,v=void 0!==f&&f,b=t.noWrap,E=void 0!==b&&b,w=t.paragraph,S=void 0!==w&&w,O=(t.theme,t.variant),k=void 0===O?"body1":O,N=t.variantMapping,j=void 0===N?u:N,x=i()(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","theme","variant","variantMapping"]),T=g||(S?"p":j[k]||u[k])||"span";return l.a.createElement(T,r()({className:Object(s.a)(o.root,c,"inherit"!==k&&o[k],"initial"!==h&&o["color".concat(Object(p.a)(h))],E&&o.noWrap,v&&o.gutterBottom,S&&o.paragraph,"inherit"!==n&&o["align".concat(Object(p.a)(n))],"initial"!==y&&o["display".concat(Object(p.a)(y))]),ref:e},x))});e.a=Object(m.a)(function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography",withTheme:!0})(h)}}]);
//# sourceMappingURL=component---src-pages-404-tsx-195f090eef96c3a0cf28.js.map
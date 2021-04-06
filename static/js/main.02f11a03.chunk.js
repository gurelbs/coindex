(this.webpackJsonpcoindex=this.webpackJsonpcoindex||[]).push([[0],{117:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),r=t(20),s=t.n(r),i=(t(60),t(31),t(8)),j=t(0);function l(){return Object(j.jsx)("div",{className:"logo-wrap",children:Object(j.jsx)(i.b,{to:"/",className:"logo",children:"Coindex"})})}function o(){return Object(j.jsx)("div",{className:"serach-box",children:Object(j.jsx)("input",{type:"text",placeholder:"Search Cryptocurrency...",autoFocus:!0})})}function h(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"menu",children:[{path:"/cryptocurrencies",name:"Cryptocurrencies"},{path:"/exchanges",name:"Exchanges"},{path:"/watchlist",name:"Watchlist"},{path:"/news",name:"News"},{path:"/about",name:"About"}].map((function(e){return Object(j.jsx)(i.b,{to:e.path,activeclassname:"active",exact:"true",children:e.name},e.path)}))}),Object(j.jsx)(o,{})]})}var d=t(5),m=t.n(d),b=t(13),u=t(6),x=t(14),p=t.n(x),O=t(25),f=t.n(O);function g(e){var c=e.cryptocurrencies,t=e.marketCap,a=e.exchanges;return Object(j.jsxs)("section",{className:"global-data-section",children:[Object(j.jsxs)("div",{className:"details-num-card",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(f.a,{end:c||""})}),Object(j.jsx)("h2",{children:"Cryptocurrencies"})]}),Object(j.jsxs)("div",{className:"details-num-card",children:[Object(j.jsxs)("h1",{children:["$",Object(j.jsx)(f.a,{start:0,decimals:0,separator:",",end:t||""})]}),Object(j.jsx)("h2",{children:"Global Market Cap"})]}),Object(j.jsxs)("div",{className:"details-num-card",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(f.a,{end:a||""})}),Object(j.jsx)("h2",{children:"Exchanges"})]})]})}t(96);function _(e){var c=e.data,t=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(e)};return Object(j.jsx)("div",{className:"table-wrap",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"name"}),Object(j.jsx)("th",{children:"price"}),Object(j.jsx)("th",{children:"market cap"}),Object(j.jsx)("th",{children:"change 24h"}),Object(j.jsx)("th",{children:"high 24h"}),Object(j.jsx)("th",{children:"low 24h"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e,c){return Object(j.jsxs)("tr",{className:"tr-wrap",children:[Object(j.jsx)("td",{className:"coin-name-td",children:Object(j.jsx)(i.b,{to:"/cryptocurrencies/".concat(e.id),children:Object(j.jsxs)("div",{className:"card-flex",children:[Object(j.jsx)("img",{src:e.image,alt:"".concat(e.name,"-icon img")}),Object(j.jsxs)("div",{className:"coin-name",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsxs)("div",{className:"coin-mini-details",children:[Object(j.jsx)("p",{className:"rank",children:e.market_cap_rank}),Object(j.jsx)("p",{className:"symbol-name",children:e.symbol})]})]})]})})}),Object(j.jsx)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:t(e.current_price)}),Object(j.jsx)("td",{children:t(e.market_cap.toFixed())}),Object(j.jsxs)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:[e.market_cap_change_percentage_24h.toFixed(2),"%"]}),Object(j.jsx)("td",{children:t(e.high_24h)}),Object(j.jsx)("td",{children:t(e.low_24h)})]},c)}))})]})})}t(97),t(98);var v=function(){return Object(j.jsx)("div",{className:"spinner-wrap",children:Object(j.jsx)("div",{className:"spinner"})})};function N(){var e=Object(a.useState)({}),c=Object(u.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],l=s[1],o=Object(a.useState)(!1),h=Object(u.a)(o,2),d=h[0],x=h[1],O=new p.a;Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(m.a.mark((function e(){var c,t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,O.global();case 3:return c=e.sent,t=c.data,e.next=7,t.data;case 7:a=e.sent,n({exchanges:a.markets,cryptocurrencies:a.active_cryptocurrencies,marketCap:a.total_market_cap.usd}),x(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(b.a)(m.a.mark((function e(){var c,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,O.coins.markets();case 3:c=e.sent,(t=c.data).map((function(e){return{id:e.id,name:e.name,image:e.image,market_cap_rank:e.market_cap_rank,symbol:e.symbol,market_cap_change_percentage_24h:e.market_cap_change_percentage_24h,high_24h:e.high_24h,low_24h:e.low_24h}})),l(t),x(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),c()}),[]);var f=t.cryptocurrencies,N=t.exchanges,y=t.marketCap;return Object(j.jsx)("div",{className:"page homepage",children:Object(j.jsxs)("div",{children:[d?Object(j.jsx)(v,{}):Object(j.jsx)(g,{cryptocurrencies:f,marketCap:y,exchanges:N}),d?Object(j.jsx)(v,{}):Object(j.jsx)(_,{data:i})]})})}function y(){var e=Object(a.useState)([]),c=Object(u.a)(e,2),t=(c[0],c[1]),n=Object(a.useState)(null),r=Object(u.a)(n,2),s=r[0],l=r[1],o=Object(a.useState)(!1),h=Object(u.a)(o,2),d=(h[0],h[1]),x=new p.a;Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(m.a.mark((function e(){var c,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,x.coins.list();case 3:c=e.sent,a=c.data,n=a.map((function(e){return e.id})),t(n),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O(),e()}),[]);var O=function(){var e=Object(b.a)(m.a.mark((function e(){var c,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.coins.markets();case 2:c=e.sent,t=c.data,console.log(t),t.map((function(e){return{id:e.id,name:e.name,image:e.image,market_cap_rank:e.market_cap_rank,symbol:e.symbol,market_cap_change_percentage_24h:e.market_cap_change_percentage_24h,high_24h:e.high_24h,low_24h:e.low_24h}})),l(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(e)};return Object(j.jsx)("div",{className:"page",children:Object(j.jsx)("div",{className:"table-fluid",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"name"}),Object(j.jsx)("th",{children:"price"}),Object(j.jsx)("th",{children:"market cap"}),Object(j.jsx)("th",{children:"change 24h"}),Object(j.jsx)("th",{children:"high 24h"}),Object(j.jsx)("th",{children:"low 24h"})]})}),Object(j.jsx)("tbody",{children:s?s.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("tr",{className:"tr-wrap",children:[Object(j.jsx)("td",{className:"coin-name-td",children:Object(j.jsx)(i.b,{to:"/cryptocurrencies/".concat(e.id),children:Object(j.jsxs)("div",{className:"card-flex",children:[Object(j.jsx)("img",{src:e.image,alt:"".concat(e.name,"-icon img")}),Object(j.jsxs)("div",{className:"coin-name",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsxs)("div",{className:"coin-mini-details",children:[Object(j.jsx)("p",{className:"rank",children:e.market_cap_rank}),Object(j.jsx)("p",{className:"symbol-name",children:e.symbol})]})]})]})})}),Object(j.jsx)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:f(e.current_price)||0}),Object(j.jsx)("td",{children:f(e.market_cap.toFixed()||0)}),Object(j.jsxs)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:[e.market_cap_change_percentage_24h.toFixed(2),"%"]}),Object(j.jsx)("td",{children:f(e.high_24h)}),Object(j.jsx)("td",{children:f(e.low_24h)})]},e.id)})})):Object(j.jsx)(v,{})})]})})})}function k(){return Object(j.jsx)("div",{className:"page",children:"Watchlist page"})}function w(){var e=new p.a,c=Object(a.useState)([]),t=Object(u.a)(c,2),n=t[0],r=t[1],s=Object(a.useState)(!1),l=Object(u.a)(s,2),o=l[0],h=l[1];Object(a.useEffect)((function(){var c=function(){var c=Object(b.a)(m.a.mark((function c(){var t,a,n;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return h(!0),c.next=3,e.exchanges.all();case 3:t=c.sent,a=t.data,n=a.map((function(e){return{id:e.id,name:e.name,img:e.image,country:e.country,vol24:e.trade_volume_24h_btc_normalized,score:e.trust_score_rank,url:e.url,year:e.year_established}})),r(n),h(!1);case 8:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();try{c()}catch(t){console.error(t)}}),[]);return Object(j.jsx)("div",{className:"page",children:o?Object(j.jsx)(v,{}):Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"score"}),Object(j.jsx)("th",{children:"exchange name"}),Object(j.jsx)("th",{children:"Volume(24h)"}),Object(j.jsx)("th",{children:"year established  "})]})}),Object(j.jsx)("tbody",{children:n.map((function(e){return Object(j.jsxs)("tr",{className:"tr-wrap",children:[Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:e.score||"-"})}),Object(j.jsx)("td",{children:Object(j.jsx)("h1",{children:Object(j.jsx)(i.b,{to:"/exchanges/".concat(e.id),children:e.name||"-"})})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:(c=e.vol24,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(c)||"-")})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:e.year||"-"})})]},e.id);var c}))})]})})}function C(){return Object(j.jsx)("div",{className:"page",children:"About page"})}function F(){return Object(j.jsx)("div",{className:"page",children:"News page"})}t(99);var S=function(e){var c,t=e.data,a=t.change24>0?"rgb(0, 210, 0)":"rgb(255, 101, 0)";return Object(j.jsxs)("div",{"data-name":t.id,className:"card",children:[Object(j.jsxs)("section",{className:"card-cover",children:[Object(j.jsxs)("div",{className:"data-basic",children:[Object(j.jsxs)("div",{className:"data-basic-details",children:[Object(j.jsx)("img",{className:"coin-symbol-img",src:t.img,alt:"coin"}),Object(j.jsx)("h1",{className:"coin-name",children:t.name}),Object(j.jsx)("p",{className:"coin-symbol",children:t.symbol})]}),Object(j.jsxs)("div",{className:"cards-details-btns",children:[Object(j.jsxs)("p",{className:"data-basic-rank",children:["rank #",t.rank]}),Object(j.jsx)("a",{className:"data-basic-link",target:"_blank",href:t.hpLink,children:"homepage"})]})]}),Object(j.jsxs)("div",{className:"data-price-wrap",children:[Object(j.jsxs)("p",{className:"data-price-txt",children:[t.name," Price",Object(j.jsxs)("span",{className:"data-price-symbol",children:["(",t.symbol,")"]})]}),Object(j.jsx)("h1",{style:{color:a},className:"data-price",children:(c=t.price,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(c))}),Object(j.jsxs)("p",{style:{color:a},className:"data-price-change",children:[Object(j.jsx)("span",{class:"fas ".concat(t.change24>0?"fa-sort-up":t.change24<0?"fa-sort-down":"")}),function(e){return new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:2}).format(e)}(t.change24),"%"]})]})]}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"coin-description",children:Object(j.jsx)("p",{dangerouslySetInnerHTML:function(e){return{__html:e}}(t.description)})})})]})},D=t(24),E=t.n(D);function U(e){var c=new p.a,t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){var t=E.a.CancelToken.source();return function(){var t=Object(b.a)(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.match.params.id,t.next=3,c.coins.fetch(a);case 3:n=t.sent,r=n.data,s({id:r.id,change24:r.market_data.price_change_percentage_24h,img:r.image.large,name:r.name,symbol:r.symbol,rank:r.market_cap_rank,hpLink:r.links.homepage[0],price:r.market_data.current_price.usd,description:r.description.en});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){return t.cancel()}}),[]),Object(j.jsx)("div",{className:"page",children:r?Object(j.jsx)(S,{data:r}):Object(j.jsx)(v,{})})}var I=function(e){return Object(j.jsxs)("div",{children:["ExchangeCard ",e]})};function A(e){new p.a;var c=Object(a.useState)([]),t=Object(u.a)(c,2),n=t[0];t[1];return Object(a.useEffect)((function(){var c=E.a.CancelToken.source();return function(){var c=e.match.params.id;console.log(c,1)}(),function(){return c.cancel()}}),[]),Object(j.jsx)("div",{className:"page",children:Object(j.jsx)(I,{data:n})})}function L(){return Object(j.jsx)("div",{children:"404 page Not Found"})}var M=t(120),T=t(119),W=t(3);function H(){var e=[{path:"/cryptocurrencies",name:"Cryptocurrencies",Component:y},{path:"/cryptocurrencies/:id",name:"CoinCard",Component:U},{path:"/exchanges",name:"Exchanges",Component:w},{path:"/exchanges/:id",name:"Exchanges",Component:A},{path:"/watchlist",name:"Watchlist",Component:k},{path:"/news",name:"News",Component:F},{path:"/about",name:"About",Component:C},{path:"/",name:"HomePage",Component:N}];return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(W.a,{render:function(c){var t=c.location;return Object(j.jsx)(M.a,{children:Object(j.jsx)(T.a,{timeout:200,classNames:"page",unmountOnExit:!0,children:Object(j.jsxs)(W.c,{location:t,children:[e.map((function(e){var c=e.path,t=e.Component;return Object(j.jsx)(W.a,{path:c,component:t,exact:!0})})),Object(j.jsx)(W.a,{component:L})]})},t.key)})}})]})})}s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root"))},31:function(e,c,t){},60:function(e,c,t){},75:function(e,c){},77:function(e,c){},96:function(e,c,t){},97:function(e,c,t){},98:function(e,c,t){},99:function(e,c,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.02f11a03.chunk.js.map
(this.webpackJsonpcoindex=this.webpackJsonpcoindex||[]).push([[0],{117:function(e,c,t){},118:function(e,c,t){},119:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),r=t(21),s=t.n(r),i=(t(61),t(31),t(8)),j=t(0);function l(){return Object(j.jsx)("div",{className:"logo-wrap",children:Object(j.jsx)(i.b,{to:"/",className:"logo",children:"Coindex"})})}function d(){return Object(j.jsx)("div",{className:"serach-box",children:Object(j.jsx)("input",{type:"text",placeholder:"Search Cryptocurrency...",autoFocus:!0})})}function h(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"menu",children:[{path:"/cryptocurrencies",name:"Cryptocurrencies"},{path:"/exchanges",name:"Exchanges"},{path:"/watchlist",name:"Watchlist"},{path:"/news",name:"News"},{path:"/about",name:"About"}].map((function(e){return Object(j.jsx)(i.b,{to:e.path,activeclassname:"active",exact:"true",children:e.name},e.path)}))}),Object(j.jsx)(d,{})]})}var o=t(2),b=t.n(o),m=t(7),u=t(4),x=t(13),O=t.n(x),p=t(25),f=t.n(p);function g(e){var c=e.cryptocurrencies,t=e.marketCap,a=e.exchanges;return Object(j.jsxs)("section",{className:"global-data-section",children:[Object(j.jsxs)("div",{className:"details-num-card",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(f.a,{end:c||""})}),Object(j.jsx)("h2",{children:"Cryptocurrencies"})]}),Object(j.jsxs)("div",{className:"details-num-card",children:[Object(j.jsxs)("h1",{children:["$",Object(j.jsx)(f.a,{start:0,decimals:0,separator:",",end:t||""})]}),Object(j.jsx)("h2",{children:"Global Market Cap"})]}),Object(j.jsxs)("div",{className:"details-num-card",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(f.a,{end:a||""})}),Object(j.jsx)("h2",{children:"Exchanges"})]})]})}t(97);function v(e){var c=e.data,t=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(e)};return Object(j.jsx)("div",{className:"table-wrap",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"name"}),Object(j.jsx)("th",{children:"price"}),Object(j.jsx)("th",{children:"market cap"}),Object(j.jsx)("th",{children:"change 24h"}),Object(j.jsx)("th",{children:"high 24h"}),Object(j.jsx)("th",{children:"low 24h"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e,c){return Object(j.jsxs)("tr",{className:"tr-wrap",children:[Object(j.jsx)("td",{className:"coin-name-td",children:Object(j.jsx)(i.b,{to:"/cryptocurrencies/".concat(e.id),children:Object(j.jsxs)("div",{className:"card-flex",children:[Object(j.jsx)("img",{src:e.image,alt:"".concat(e.name,"-icon img")}),Object(j.jsxs)("div",{className:"coin-name",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsxs)("div",{className:"coin-mini-details",children:[Object(j.jsx)("p",{className:"rank",children:e.market_cap_rank}),Object(j.jsx)("p",{className:"symbol-name",children:e.symbol})]})]})]})})}),Object(j.jsx)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:t(e.current_price)}),Object(j.jsx)("td",{children:t(e.market_cap.toFixed())}),Object(j.jsxs)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:[e.market_cap_change_percentage_24h.toFixed(2),"%"]}),Object(j.jsx)("td",{children:t(e.high_24h)}),Object(j.jsx)("td",{children:t(e.low_24h)})]},c)}))})]})})}t(98),t(99);var _=function(){return Object(j.jsx)("div",{className:"spinner-wrap",children:Object(j.jsx)("div",{className:"spinner"})})};function N(){var e=Object(a.useState)({}),c=Object(u.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],l=s[1],d=Object(a.useState)(!1),h=Object(u.a)(d,2),o=h[0],x=h[1],p=new O.a;Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(){var c,t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,p.global();case 3:return c=e.sent,t=c.data,e.next=7,t.data;case 7:a=e.sent,n({exchanges:a.markets,cryptocurrencies:a.active_cryptocurrencies,marketCap:a.total_market_cap.usd}),x(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(m.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,p.coins.markets();case 3:c=e.sent,(t=c.data).map((function(e){return{id:e.id,name:e.name,image:e.image,market_cap_rank:e.market_cap_rank,symbol:e.symbol,market_cap_change_percentage_24h:e.market_cap_change_percentage_24h,high_24h:e.high_24h,low_24h:e.low_24h}})),l(t),x(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),c()}),[]);var f=t.cryptocurrencies,N=t.exchanges,y=t.marketCap;return Object(j.jsx)("div",{className:"page homepage",children:Object(j.jsxs)("div",{children:[o?Object(j.jsx)(_,{}):Object(j.jsx)(g,{cryptocurrencies:f,marketCap:y,exchanges:N}),o?Object(j.jsx)(_,{}):Object(j.jsx)(v,{data:i})]})})}function y(){var e=Object(a.useState)([]),c=Object(u.a)(e,2),t=(c[0],c[1]),n=Object(a.useState)(null),r=Object(u.a)(n,2),s=r[0],l=r[1],d=Object(a.useState)(!1),h=Object(u.a)(d,2),o=(h[0],h[1]),x=new O.a;Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(){var c,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,x.coins.list();case 3:c=e.sent,a=c.data,n=a.map((function(e){return e.id})),t(n),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p(),e()}),[]);var p=function(){var e=Object(m.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.coins.markets();case 2:c=e.sent,t=c.data,console.log(t),t.map((function(e){return{id:e.id,name:e.name,image:e.image,market_cap_rank:e.market_cap_rank,symbol:e.symbol,market_cap_change_percentage_24h:e.market_cap_change_percentage_24h,high_24h:e.high_24h,low_24h:e.low_24h}})),l(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(e)};return Object(j.jsx)("div",{className:"page",children:Object(j.jsx)("div",{className:"table-fluid",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"name"}),Object(j.jsx)("th",{children:"price"}),Object(j.jsx)("th",{children:"market cap"}),Object(j.jsx)("th",{children:"change 24h"}),Object(j.jsx)("th",{children:"high 24h"}),Object(j.jsx)("th",{children:"low 24h"})]})}),Object(j.jsx)("tbody",{children:s?s.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("tr",{className:"tr-wrap",children:[Object(j.jsx)("td",{className:"coin-name-td",children:Object(j.jsx)(i.b,{to:"/cryptocurrencies/".concat(e.id),children:Object(j.jsxs)("div",{className:"card-flex",children:[Object(j.jsx)("img",{src:e.image,alt:"".concat(e.name,"-icon img")}),Object(j.jsxs)("div",{className:"coin-name",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsxs)("div",{className:"coin-mini-details",children:[Object(j.jsx)("p",{className:"rank",children:e.market_cap_rank}),Object(j.jsx)("p",{className:"symbol-name",children:e.symbol})]})]})]})})}),Object(j.jsx)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:f(e.current_price)||0}),Object(j.jsx)("td",{children:f(e.market_cap.toFixed()||0)}),Object(j.jsxs)("td",{className:"bold",style:{color:e.market_cap_change_percentage_24h<0?"#cf4f4f":"#107210"},children:[e.market_cap_change_percentage_24h.toFixed(2),"%"]}),Object(j.jsx)("td",{children:f(e.high_24h)}),Object(j.jsx)("td",{children:f(e.low_24h)})]},e.id)})})):Object(j.jsx)(_,{})})]})})})}function k(){return Object(j.jsx)("div",{className:"page",children:"Watchlist page"})}t(46);function w(){var e=new O.a,c=Object(a.useState)([]),t=Object(u.a)(c,2),n=t[0],r=t[1],s=Object(a.useState)(0),l=Object(u.a)(s,2),d=l[0],h=l[1],o=Object(a.useState)(!1),x=Object(u.a)(o,2),p=x[0],f=x[1];Object(a.useEffect)((function(){var c=function(){var c=Object(m.a)(b.a.mark((function c(){var t,a,n,s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return f(!0),c.next=3,e.exchanges.all();case 3:return t=c.sent,a=t.data,c.next=7,e.simple.price({ids:"bitcoin",vs_currencies:"usd"});case 7:n=c.sent,s=a.map((function(e){return{id:e.id,name:e.name,img:e.image,vol24:e.trade_volume_24h_btc_normalized,score:e.trust_score_rank,url:e.url,year:e.year_established}})),h(n.data.bitcoin.usd),r(s),f(!1);case 12:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();try{c()}catch(t){console.error(t)}}),[]);return Object(j.jsx)("div",{className:"page",children:p?Object(j.jsx)(_,{}):Object(j.jsxs)("table",{className:"exchanges-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"exchange name"}),Object(j.jsxs)("th",{colSpan:2,children:["Volume(24h) price",Object(j.jsxs)("div",{className:"flex-th-price",children:[Object(j.jsx)("td",{children:"btc"}),Object(j.jsx)("td",{children:"usd"})]})]}),Object(j.jsx)("th",{children:"year established"})]})}),Object(j.jsx)("tbody",{children:n.map((function(e){return Object(j.jsxs)("tr",{className:"tr-wrap",children:[Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:e.score||"-"})}),Object(j.jsxs)("td",{className:"flex-td",children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{className:"exchange-img",src:e.img,alt:"".concat(e.name," symbol")})}),Object(j.jsx)("h1",{children:Object(j.jsx)(i.b,{to:"/exchanges/".concat(e.id),children:e.name||"-"})})]}),Object(j.jsx)("td",{className:"left-price",children:Object(j.jsxs)("p",{children:[e.vol24.toFixed()||"-"," ",Object(j.jsx)("span",{className:"btc-tag",children:"BTC"})," "]})}),Object(j.jsx)("td",{className:"right-price",children:Object(j.jsx)("p",{children:(c=e.vol24*d,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(c))})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:e.year||"-"})})]},e.id);var c}))})]})})}function F(){return Object(j.jsx)("div",{className:"page",children:"About page"})}var S=t(20),C=t.n(S);t(117);function D(){var e=Object(a.useState)([]),c=Object(u.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(),s=Object(u.a)(r,2),i=s[0],l=s[1],d="https://newsapi.org/v2/everything?q=crypto&apiKey=".concat("e4183f2f5ed74608bc654d9def3ab4fb");return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,C.a.get(d);case 3:c=e.sent,t=c.data,n(t.articles),l(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsx)("div",{className:"page",children:i?Object(j.jsx)(_,{}):Object(j.jsxs)("div",{className:"news-wrap",children:[t.map((function(e,c){return Object(j.jsx)("div",{className:"news-card",children:Object(j.jsxs)("a",{href:e.url,target:"_blank",children:[Object(j.jsx)("span",{className:"news-tagname",children:e.source.name}),Object(j.jsx)("img",{src:e.urlToImage,alt:""}),Object(j.jsx)("h1",{children:e.title})]})},c)})),console.log(t)]})})}t(118);var E=function(e){var c,t=e.data,a=t.change24>0?"rgb(0, 210, 0)":"rgb(255, 101, 0)";return Object(j.jsxs)("div",{"data-name":t.id,className:"card",children:[Object(j.jsxs)("section",{className:"card-cover",children:[Object(j.jsxs)("div",{className:"data-basic",children:[Object(j.jsxs)("div",{className:"data-basic-details",children:[Object(j.jsx)("img",{className:"coin-symbol-img",src:t.img,alt:"coin"}),Object(j.jsx)("h1",{className:"coin-name",children:t.name}),Object(j.jsx)("p",{className:"coin-symbol",children:t.symbol})]}),Object(j.jsxs)("div",{className:"cards-details-btns",children:[Object(j.jsxs)("p",{className:"data-basic-rank",children:["rank #",t.rank]}),Object(j.jsx)("a",{className:"data-basic-link",target:"_blank",href:t.hpLink,children:"homepage"})]})]}),Object(j.jsxs)("div",{className:"data-price-wrap",children:[Object(j.jsxs)("p",{className:"data-price-txt",children:[t.name," Price",Object(j.jsxs)("span",{className:"data-price-symbol",children:["(",t.symbol,")"]})]}),Object(j.jsx)("h1",{style:{color:a},className:"data-price",children:(c=t.price,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(c))}),Object(j.jsxs)("p",{style:{color:a},className:"data-price-change",children:[Object(j.jsx)("span",{class:"fas ".concat(t.change24>0?"fa-sort-up":t.change24<0?"fa-sort-down":"")}),function(e){return new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:2}).format(e)}(t.change24),"%"]})]})]}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"coin-description",children:Object(j.jsx)("p",{dangerouslySetInnerHTML:function(e){return{__html:e}}(t.description)})})})]})};function U(e){var c=new O.a,t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){var t=C.a.CancelToken.source();return function(){var t=Object(m.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.match.params.id,t.next=3,c.coins.fetch(a);case 3:n=t.sent,r=n.data,s({id:r.id,change24:r.market_data.price_change_percentage_24h,img:r.image.large,name:r.name,symbol:r.symbol,rank:r.market_cap_rank,hpLink:r.links.homepage[0],price:r.market_data.current_price.usd,description:r.description.en});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){return t.cancel()}}),[]),Object(j.jsx)("div",{className:"page",children:r?Object(j.jsx)(E,{data:r}):Object(j.jsx)(_,{})})}var I=function(e){var c=e.data,t=new O.a,n=Object(a.useState)(null),r=Object(u.a)(n,2),s=r[0],l=r[1];Object(a.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.simple.price({ids:"bitcoin",vs_currencies:"usd"});case 2:c=e.sent,l(c.data.bitcoin.usd);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),c.id;var d=c.name,h=c.country,o=c.img,x=(c.score,c.scoreRank),p=(c.year,c.urls),f=c.tickers,g=c.btcTradeVolume24h,v=c.notice,_=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2}).format(e)},N=function(e){return new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:2}).format(e)};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"exchange-card",children:[Object(j.jsxs)("div",{className:"exchange-card-flexdiv",children:[Object(j.jsx)("h1",{className:"exchange-card-name",children:d}),Object(j.jsx)("img",{src:o,alt:"".concat(d,"-icon")})]}),Object(j.jsxs)("div",{className:"exchange-card-prices",children:[Object(j.jsx)("p",{className:"usd-price",children:_(g*s)}),Object(j.jsxs)("p",{className:"btc-price",children:[g.toFixed(2)," BTC"]})]}),Object(j.jsx)("div",{className:"exchange-card-score",children:Object(j.jsx)("p",{children:v})})]}),Object(j.jsxs)("div",{className:"exchanges-links-wrap",children:[Object(j.jsxs)("p",{className:"tag",children:["Rank: ",Object(j.jsx)("span",{className:"score-bg",children:x})]}),p.map((function(e,c){return""!==e&&Object(j.jsx)("p",{className:"exchanges-links tag",children:Object(j.jsxs)("a",{href:e,children:[Object(j.jsx)("i",{class:"fas fa-link"}),d," link ",c+1]})},c)})),Object(j.jsxs)("p",{className:"tag",children:["country: ",h]})]}),Object(j.jsxs)("table",{className:"exchanges-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Currency"}),Object(j.jsx)("th",{children:"Pair"}),Object(j.jsx)("th",{children:"spread"}),Object(j.jsxs)("th",{colspan:3,children:["Price",Object(j.jsxs)("div",{className:"flex-th-price",children:[Object(j.jsx)("td",{children:"btc"}),Object(j.jsx)("td",{children:"eth"}),Object(j.jsx)("td",{children:"usd"})]})]}),Object(j.jsxs)("th",{colspan:3,children:["converted volume",Object(j.jsxs)("div",{className:"flex-th-price",children:[Object(j.jsx)("td",{children:"btc"}),Object(j.jsx)("td",{children:"eth"}),Object(j.jsx)("td",{children:"usd"})]})]}),Object(j.jsx)("th",{children:"trust score"})]})}),Object(j.jsx)("tbody",{children:f.map((function(e,c){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:c+1}),Object(j.jsx)("td",{children:Object(j.jsx)(i.b,{to:"/cryptocurrencies/".concat(e.coin_id),children:e.coin_id&&e.coin_id.split("-").join(" ")})}),Object(j.jsx)("td",{children:Object(j.jsxs)("a",{href:e.trade_url,children:[e.base,"/",e.target]})}),Object(j.jsxs)("td",{children:[e.bid_ask_spread_percentage.toFixed(3),"%"]}),Object(j.jsx)("td",{children:e.converted_last.btc}),Object(j.jsx)("td",{children:e.converted_last.eth}),Object(j.jsx)("td",{children:_(e.converted_last.usd)}),Object(j.jsx)("td",{children:N(e.converted_volume.btc)}),Object(j.jsx)("td",{children:N(e.converted_volume.eth)}),Object(j.jsx)("td",{children:_(e.converted_volume.usd)}),Object(j.jsx)("td",{children:e.trust_score?Object(j.jsx)("i",{children:"\u2714"}):Object(j.jsx)("i",{children:"\u2716"})})]},c)}))})]})]})};function T(e){var c=new O.a,t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(!0),l=Object(u.a)(i,2),d=l[0],h=l[1];return Object(a.useEffect)((function(){var t=C.a.CancelToken.source(),a=e.match.params.id;return function(){var e=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,c.exchanges.fetch(a);case 3:t=e.sent,n=t.data,s({id:a,name:n.name,country:n.country,img:n.image,score:n.trust_score,scoreRank:n.trust_score_rank,year:n.year_established||"",urls:[n.url,n.facebook_url,n.other_url_1,n.other_url_2],tickers:n.tickers,btcTradeVolume24h:(n.trade_volume_24h_btc+n.trade_volume_24h_btc_normalized)/2,notice:n.alert_notice}),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){return t.cancel()}}),[]),Object(j.jsx)("div",{className:"page",children:d?Object(j.jsx)(_,{}):Object(j.jsx)(I,{data:r})})}function P(){return Object(j.jsx)("div",{children:"404 page Not Found"})}var A=t(122),B=t(121),L=t(5);function M(){var e=[{path:"/cryptocurrencies",name:"Cryptocurrencies",Component:y},{path:"/cryptocurrencies/:id",name:"CoinCard",Component:U},{path:"/exchanges",name:"Exchanges",Component:w},{path:"/exchanges/:id",name:"Exchanges",Component:T},{path:"/watchlist",name:"Watchlist",Component:k},{path:"/news",name:"News",Component:D},{path:"/about",name:"About",Component:F},{path:"/",name:"HomePage",Component:N}];return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(L.a,{render:function(c){var t=c.location;return Object(j.jsx)(A.a,{children:Object(j.jsx)(B.a,{timeout:200,classNames:"page",unmountOnExit:!0,children:Object(j.jsxs)(L.c,{location:t,children:[e.map((function(e){var c=e.path,t=e.Component;return Object(j.jsx)(L.a,{path:c,component:t,exact:!0})})),Object(j.jsx)(L.a,{component:P})]})},t.key)})}})]})})}s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))},31:function(e,c,t){},46:function(e,c,t){},61:function(e,c,t){},76:function(e,c){},78:function(e,c){},97:function(e,c,t){},98:function(e,c,t){},99:function(e,c,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.f4e00583.chunk.js.map
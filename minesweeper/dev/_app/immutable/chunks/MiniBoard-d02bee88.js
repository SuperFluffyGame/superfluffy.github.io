var J=Object.defineProperty;var R=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(R(e,typeof t!="symbol"?t+"":t,n),n);import{d as f,w as b}from"./singletons-6ded0c3e.js";import{N as G,S as T,i as F,s as D,k as A,l as k,m as L,h as w,n as M,b as V,A as S,M as X,O as h}from"./index-61ba0940.js";function Y(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}var u=(e=>(e.Closed="closed",e.Opened="opened",e.Flagged="flagged",e))(u||{}),d=(e=>(e.Empty="empty",e.Mine="mine",e))(d||{}),q=(e=>(e.Playing="playing",e.Won="won",e.Lost="lost",e))(q||{}),U,Z,$;class y{}U=8,Z=12,$=16,_(y,U,{width:8,height:8,numMines:10}),_(y,Z,{width:12,height:12,numMines:20}),_(y,$,{width:16,height:16,numMines:40});const te=e=>{const t=Array(e.width*e.height);for(let s=0;s<e.height*e.width;s++)t[s]={state:"closed",numNeighborMines:0,type:"empty"};const n={board:t,...e,firstMove:!0,state:"playing",lostToCell:-1,title:"Save Game "};for(let s=0;s<e.numMines;s++)B(n);return j(n),n},B=e=>{const t=[];for(let s=0;s<e.width*e.height;s++)e.board[s].type==="empty"&&t.push(s);const n=t[Y(0,t.length)];e.board[n].type="mine"},j=e=>{for(let t=0;t<(e==null?void 0:e.width);t++)for(let n=0;n<(e==null?void 0:e.height);n++){let s=0;for(let l=0;l<9;l++){const a=Math.floor(l/3)-1,r=l%3-1,c=t+a,o=n+r;if(c<0||c>=e.width||o<0||o>=e.height)continue;const p=o*e.width+c;e.board[p].type==="mine"&&(s+=1)}const i=n*e.width+t;e.board[i].numNeighborMines=s}};f.disable_scroll_handling;const ne=f.goto;f.invalidate;f.invalidateAll;f.prefetch;f.prefetch_routes;f.before_navigate;f.after_navigate;const P="MINESWEEPER_SAVE_SLOTS",E="MINESWEEPER_SAVE_GAME",H=e=>{let t=localStorage[E+`_${e}`];return t?JSON.parse(t):null},W=(e,t)=>{C(e),localStorage[E+`_${e}`]=JSON.stringify(t)},C=e=>{localStorage.removeItem(E+`_${e}`)},se="v0.0.2";let v=b(null);v.subscribe(e=>{if(typeof window<"u"&&e!=null){let t=G(m);W(t,e)}});let m=b(-1);m.subscribe(e=>{typeof window<"u"&&e!=null&&e!=-1&&v.set(H(e))});let g=b(null);g.subscribe(e=>{typeof window<"u"&&e!=null&&(localStorage[P]=JSON.stringify(e))});var I;typeof window<"u"&&g.set(JSON.parse((I=localStorage[P])!=null?I:"[]"));const le=e=>{g.update(t=>(t.splice(t.indexOf(e),1),t)),C(e)},ie=e=>{let t=G(g),n;for(let s=0;;s++)if(t.indexOf(s)===-1){n=s;break}e.title+=n,W(n,e),m.set(-1),m.set(n),g.update(s=>{var i;return(i=s==null?void 0:s.push)==null||i.call(s,n),s}),v.set(e)};function N(e,t,n){const s=e.slice();return s[2]=t[n],s[4]=n,s}function O(e){let t;return{c(){t=A("div"),this.h()},l(n){t=k(n,"DIV",{class:!0}),L(t).forEach(w),this.h()},h(){M(t,"class","svelte-bu3tdx"),h(t,"cell",e[2]),h(t,"open",e[2].state===u.Opened),h(t,"empty",e[2].type!==d.Mine||e[2].type===d.Mine&&!e[0]),h(t,"mine",e[2].type===d.Mine&&e[0]),h(t,"flag",e[2].state===u.Flagged&&!e[0]),h(t,"clicked-mine",e[1].lostToCell===e[4]&&e[0])},m(n,s){V(n,t,s)},p(n,s){s&2&&h(t,"cell",n[2]),s&2&&h(t,"open",n[2].state===u.Opened),s&3&&h(t,"empty",n[2].type!==d.Mine||n[2].type===d.Mine&&!n[0]),s&3&&h(t,"mine",n[2].type===d.Mine&&n[0]),s&3&&h(t,"flag",n[2].state===u.Flagged&&!n[0]),s&3&&h(t,"clicked-mine",n[1].lostToCell===n[4]&&n[0])},d(n){n&&w(t)}}}function K(e){let t,n,s=e[1].board,i=[];for(let l=0;l<s.length;l+=1)i[l]=O(N(e,s,l));return{c(){t=A("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){t=k(l,"DIV",{class:!0,style:!0});var a=L(t);for(let r=0;r<i.length;r+=1)i[r].l(a);a.forEach(w),this.h()},h(){var l,a;M(t,"class","wrapper svelte-bu3tdx"),M(t,"style",n=`grid-template-columns: repeat(${(l=e[1].width)!=null?l:2}, 1fr); grid-template-rows: repeat(${(a=e[1].height)!=null?a:2}, 1fr);`)},m(l,a){V(l,t,a);for(let r=0;r<i.length;r+=1)i[r].m(t,null)},p(l,[a]){var r,c;if(a&3){s=l[1].board;let o;for(o=0;o<s.length;o+=1){const p=N(l,s,o);i[o]?i[o].p(p,a):(i[o]=O(p),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=s.length}a&2&&n!==(n=`grid-template-columns: repeat(${(r=l[1].width)!=null?r:2}, 1fr); grid-template-rows: repeat(${(c=l[1].height)!=null?c:2}, 1fr);`)&&M(t,"style",n)},i:S,o:S,d(l){l&&w(t),X(i,l)}}}function Q(e,t,n){let{showMines:s=!1}=t,{game:i}=t;return e.$$set=l=>{"showMines"in l&&n(0,s=l.showMines),"game"in l&&n(1,i=l.game)},[s,i]}class oe extends T{constructor(t){super(),F(this,t,Q,K,D,{showMines:0,game:1})}}export{y as B,u as C,q as G,oe as M,ie as a,d as b,m as c,le as d,v as e,ne as g,H as l,te as n,j as r,B as s,g as u,se as v};
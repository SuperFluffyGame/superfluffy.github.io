import{S as Cs,i as Ms,s as Ns,v as I,w as V,x as j,f as J,t as K,y as Q,H as Bs,a as E,c as b,b as F,h as c,k as f,q as $,l as i,m as _,r as g,n as v,G as t,u as w,a0 as zs,a7 as Ps}from"../../../chunks/index-4f1aec18.js";import{S as qs,f as Is,v as k,B as Nt,t as _t}from"../../../chunks/MiniBoard-aaa8c6ea.js";import{S as Vs,C as Os}from"../../../chunks/Card-6ce3c7a3.js";function Hs(a,e,s){const l=a.slice();return l[6]=e[s],l[8]=s,l}function js(a){let e,s;return e=new Vs({}),{c(){I(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,o){j(e,l,o),s=!0},i(l){s||(J(e.$$.fragment,l),s=!0)},o(l){K(e.$$.fragment,l),s=!1},d(l){Q(e,l)}}}function Js(a){var Bt,zt,Pt,qt,It,Vt,jt,Jt,Kt,Qt,Ut,Xt,Yt,Zt,xt,es,ts,ss,ls,as,rs,os,cs,ns,ds,ms,us,fs,is,_s,vs,hs,$s,gs,ps,ys,Es,bs,Ts;let e,s,l,o,n,u,T,L,D,S,m,d,r,h,W,P,q,vt,U,_e=k(((zt=(Bt=a[1])==null?void 0:Bt.easy.gamesWon)!=null?zt:0)+((qt=(Pt=a[1])==null?void 0:Pt.easy.gamesLost)!=null?qt:0))+"",xe,ht,X,ve=k(((Vt=(It=a[1])==null?void 0:It.medium.gamesWon)!=null?Vt:0)+((Jt=(jt=a[1])==null?void 0:jt.medium.gamesLost)!=null?Jt:0))+"",et,$t,Y,he=k(((Qt=(Kt=a[1])==null?void 0:Kt.hard.gamesWon)!=null?Qt:0)+((Xt=(Ut=a[1])==null?void 0:Ut.hard.gamesLost)!=null?Xt:0))+"",tt,gt,R,Z,pt,yt,x,$e=k((Zt=(Yt=a[1])==null?void 0:Yt.easy.gamesWon)!=null?Zt:0)+"",st,Et,ee,ge=k((es=(xt=a[1])==null?void 0:xt.medium.gamesWon)!=null?es:0)+"",lt,bt,te,pe=k((ss=(ts=a[1])==null?void 0:ts.hard.gamesWon)!=null?ss:0)+"",at,Tt,G,se,Dt,Lt,le,ye=k((as=(ls=a[1])==null?void 0:ls.easy.gamesLost)!=null?as:0)+"",rt,kt,ae,Ee=k((os=(rs=a[1])==null?void 0:rs.medium.gamesLost)!=null?os:0)+"",ot,Wt,re,be=k((ns=(cs=a[1])==null?void 0:cs.hard.gamesLost)!=null?ns:0)+"",ct,wt,O,oe,St,Ft,ce,Te=k((ms=(ds=a[1])==null?void 0:ds.easy.cellsOpened)!=null?ms:0)+"",nt,Rt,ne,De=k((fs=(us=a[1])==null?void 0:us.medium.cellsOpened)!=null?fs:0)+"",dt,Gt,de,Le=k((_s=(is=a[1])==null?void 0:is.hard.cellsOpened)!=null?_s:0)+"",mt,Ot,H,me,Ht,At,ue,ke=(((hs=(vs=a[1])==null?void 0:vs.easy.gamesWon)!=null?hs:0)/a[2](($s=a[1])==null?void 0:$s.easy.gamesLost)).toFixed(2)+"",ut,Ct,fe,We=(((ps=(gs=a[1])==null?void 0:gs.medium.gamesWon)!=null?ps:0)/a[2]((ys=a[1])==null?void 0:ys.medium.gamesLost)).toFixed(2)+"",ft,Mt,ie,we=(((bs=(Es=a[1])==null?void 0:Es.hard.gamesWon)!=null?bs:0)/a[2]((Ts=a[1])==null?void 0:Ts.hard.gamesLost)).toFixed(2)+"",it;return{c(){e=f("table"),s=f("thead"),l=f("tr"),o=f("td"),n=E(),u=f("td"),T=$("Easy"),L=E(),D=f("td"),S=$("Medium"),m=E(),d=f("td"),r=$("Hard"),h=E(),W=f("tr"),P=f("td"),q=$("Games Played"),vt=E(),U=f("td"),xe=$(_e),ht=E(),X=f("td"),et=$(ve),$t=E(),Y=f("td"),tt=$(he),gt=E(),R=f("tr"),Z=f("td"),pt=$("Games Won:"),yt=E(),x=f("td"),st=$($e),Et=E(),ee=f("td"),lt=$(ge),bt=E(),te=f("td"),at=$(pe),Tt=E(),G=f("tr"),se=f("td"),Dt=$("Games Lost:"),Lt=E(),le=f("td"),rt=$(ye),kt=E(),ae=f("td"),ot=$(Ee),Wt=E(),re=f("td"),ct=$(be),wt=E(),O=f("tr"),oe=f("td"),St=$("Cells Opened:"),Ft=E(),ce=f("td"),nt=$(Te),Rt=E(),ne=f("td"),dt=$(De),Gt=E(),de=f("td"),mt=$(Le),Ot=E(),H=f("tr"),me=f("td"),Ht=$("Win / Loss:"),At=E(),ue=f("td"),ut=$(ke),Ct=E(),fe=f("td"),ft=$(We),Mt=E(),ie=f("td"),it=$(we),this.h()},l(p){e=i(p,"TABLE",{class:!0});var y=_(e);s=i(y,"THEAD",{class:!0});var Se=_(s);l=i(Se,"TR",{class:!0});var A=_(l);o=i(A,"TD",{class:!0}),_(o).forEach(c),n=b(A),u=i(A,"TD",{class:!0});var Fe=_(u);T=g(Fe,"Easy"),Fe.forEach(c),L=b(A),D=i(A,"TD",{class:!0});var Re=_(D);S=g(Re,"Medium"),Re.forEach(c),m=b(A),d=i(A,"TD",{class:!0});var Ge=_(d);r=g(Ge,"Hard"),Ge.forEach(c),A.forEach(c),Se.forEach(c),h=b(y),W=i(y,"TR",{class:!0});var C=_(W);P=i(C,"TD",{class:!0});var Oe=_(P);q=g(Oe,"Games Played"),Oe.forEach(c),vt=b(C),U=i(C,"TD",{class:!0});var He=_(U);xe=g(He,_e),He.forEach(c),ht=b(C),X=i(C,"TD",{class:!0});var Ae=_(X);et=g(Ae,ve),Ae.forEach(c),$t=b(C),Y=i(C,"TD",{class:!0});var Ce=_(Y);tt=g(Ce,he),Ce.forEach(c),C.forEach(c),gt=b(y),R=i(y,"TR",{class:!0});var M=_(R);Z=i(M,"TD",{class:!0});var Me=_(Z);pt=g(Me,"Games Won:"),Me.forEach(c),yt=b(M),x=i(M,"TD",{class:!0});var Ne=_(x);st=g(Ne,$e),Ne.forEach(c),Et=b(M),ee=i(M,"TD",{class:!0});var Be=_(ee);lt=g(Be,ge),Be.forEach(c),bt=b(M),te=i(M,"TD",{class:!0});var ze=_(te);at=g(ze,pe),ze.forEach(c),M.forEach(c),Tt=b(y),G=i(y,"TR",{class:!0});var N=_(G);se=i(N,"TD",{class:!0});var Pe=_(se);Dt=g(Pe,"Games Lost:"),Pe.forEach(c),Lt=b(N),le=i(N,"TD",{class:!0});var qe=_(le);rt=g(qe,ye),qe.forEach(c),kt=b(N),ae=i(N,"TD",{class:!0});var Ie=_(ae);ot=g(Ie,Ee),Ie.forEach(c),Wt=b(N),re=i(N,"TD",{class:!0});var Ve=_(re);ct=g(Ve,be),Ve.forEach(c),N.forEach(c),wt=b(y),O=i(y,"TR",{class:!0});var B=_(O);oe=i(B,"TD",{class:!0});var je=_(oe);St=g(je,"Cells Opened:"),je.forEach(c),Ft=b(B),ce=i(B,"TD",{class:!0});var Je=_(ce);nt=g(Je,Te),Je.forEach(c),Rt=b(B),ne=i(B,"TD",{class:!0});var Ke=_(ne);dt=g(Ke,De),Ke.forEach(c),Gt=b(B),de=i(B,"TD",{class:!0});var Qe=_(de);mt=g(Qe,Le),Qe.forEach(c),B.forEach(c),Ot=b(y),H=i(y,"TR",{class:!0});var z=_(H);me=i(z,"TD",{class:!0});var Ue=_(me);Ht=g(Ue,"Win / Loss:"),Ue.forEach(c),At=b(z),ue=i(z,"TD",{class:!0});var Xe=_(ue);ut=g(Xe,ke),Xe.forEach(c),Ct=b(z),fe=i(z,"TD",{class:!0});var Ye=_(fe);ft=g(Ye,We),Ye.forEach(c),Mt=b(z),ie=i(z,"TD",{class:!0});var Ze=_(ie);it=g(Ze,we),Ze.forEach(c),z.forEach(c),y.forEach(c),this.h()},h(){v(o,"class","svelte-5cyomc"),v(u,"class","svelte-5cyomc"),v(D,"class","svelte-5cyomc"),v(d,"class","svelte-5cyomc"),v(l,"class","svelte-5cyomc"),v(s,"class","svelte-5cyomc"),v(P,"class","svelte-5cyomc"),v(U,"class","svelte-5cyomc"),v(X,"class","svelte-5cyomc"),v(Y,"class","svelte-5cyomc"),v(W,"class","svelte-5cyomc"),v(Z,"class","svelte-5cyomc"),v(x,"class","svelte-5cyomc"),v(ee,"class","svelte-5cyomc"),v(te,"class","svelte-5cyomc"),v(R,"class","svelte-5cyomc"),v(se,"class","svelte-5cyomc"),v(le,"class","svelte-5cyomc"),v(ae,"class","svelte-5cyomc"),v(re,"class","svelte-5cyomc"),v(G,"class","svelte-5cyomc"),v(oe,"class","svelte-5cyomc"),v(ce,"class","svelte-5cyomc"),v(ne,"class","svelte-5cyomc"),v(de,"class","svelte-5cyomc"),v(O,"class","svelte-5cyomc"),v(me,"class","svelte-5cyomc"),v(ue,"class","svelte-5cyomc"),v(fe,"class","svelte-5cyomc"),v(ie,"class","svelte-5cyomc"),v(H,"class","svelte-5cyomc"),v(e,"class","svelte-5cyomc")},m(p,y){F(p,e,y),t(e,s),t(s,l),t(l,o),t(l,n),t(l,u),t(u,T),t(l,L),t(l,D),t(D,S),t(l,m),t(l,d),t(d,r),t(e,h),t(e,W),t(W,P),t(P,q),t(W,vt),t(W,U),t(U,xe),t(W,ht),t(W,X),t(X,et),t(W,$t),t(W,Y),t(Y,tt),t(e,gt),t(e,R),t(R,Z),t(Z,pt),t(R,yt),t(R,x),t(x,st),t(R,Et),t(R,ee),t(ee,lt),t(R,bt),t(R,te),t(te,at),t(e,Tt),t(e,G),t(G,se),t(se,Dt),t(G,Lt),t(G,le),t(le,rt),t(G,kt),t(G,ae),t(ae,ot),t(G,Wt),t(G,re),t(re,ct),t(e,wt),t(e,O),t(O,oe),t(oe,St),t(O,Ft),t(O,ce),t(ce,nt),t(O,Rt),t(O,ne),t(ne,dt),t(O,Gt),t(O,de),t(de,mt),t(e,Ot),t(e,H),t(H,me),t(me,Ht),t(H,At),t(H,ue),t(ue,ut),t(H,Ct),t(H,fe),t(fe,ft),t(H,Mt),t(H,ie),t(ie,it)},p(p,y){var Se,A,Fe,Re,Ge,C,Oe,He,Ae,Ce,M,Me,Ne,Be,ze,N,Pe,qe,Ie,Ve,B,je,Je,Ke,Qe,z,Ue,Xe,Ye,Ze,Ds,Ls,ks,Ws,ws,Ss,Fs,Rs,Gs;y&2&&_e!==(_e=k(((A=(Se=p[1])==null?void 0:Se.easy.gamesWon)!=null?A:0)+((Re=(Fe=p[1])==null?void 0:Fe.easy.gamesLost)!=null?Re:0))+"")&&w(xe,_e),y&2&&ve!==(ve=k(((C=(Ge=p[1])==null?void 0:Ge.medium.gamesWon)!=null?C:0)+((He=(Oe=p[1])==null?void 0:Oe.medium.gamesLost)!=null?He:0))+"")&&w(et,ve),y&2&&he!==(he=k(((Ce=(Ae=p[1])==null?void 0:Ae.hard.gamesWon)!=null?Ce:0)+((Me=(M=p[1])==null?void 0:M.hard.gamesLost)!=null?Me:0))+"")&&w(tt,he),y&2&&$e!==($e=k((Be=(Ne=p[1])==null?void 0:Ne.easy.gamesWon)!=null?Be:0)+"")&&w(st,$e),y&2&&ge!==(ge=k((N=(ze=p[1])==null?void 0:ze.medium.gamesWon)!=null?N:0)+"")&&w(lt,ge),y&2&&pe!==(pe=k((qe=(Pe=p[1])==null?void 0:Pe.hard.gamesWon)!=null?qe:0)+"")&&w(at,pe),y&2&&ye!==(ye=k((Ve=(Ie=p[1])==null?void 0:Ie.easy.gamesLost)!=null?Ve:0)+"")&&w(rt,ye),y&2&&Ee!==(Ee=k((je=(B=p[1])==null?void 0:B.medium.gamesLost)!=null?je:0)+"")&&w(ot,Ee),y&2&&be!==(be=k((Ke=(Je=p[1])==null?void 0:Je.hard.gamesLost)!=null?Ke:0)+"")&&w(ct,be),y&2&&Te!==(Te=k((z=(Qe=p[1])==null?void 0:Qe.easy.cellsOpened)!=null?z:0)+"")&&w(nt,Te),y&2&&De!==(De=k((Xe=(Ue=p[1])==null?void 0:Ue.medium.cellsOpened)!=null?Xe:0)+"")&&w(dt,De),y&2&&Le!==(Le=k((Ze=(Ye=p[1])==null?void 0:Ye.hard.cellsOpened)!=null?Ze:0)+"")&&w(mt,Le),y&2&&ke!==(ke=(((Ls=(Ds=p[1])==null?void 0:Ds.easy.gamesWon)!=null?Ls:0)/p[2]((ks=p[1])==null?void 0:ks.easy.gamesLost)).toFixed(2)+"")&&w(ut,ke),y&2&&We!==(We=(((ws=(Ws=p[1])==null?void 0:Ws.medium.gamesWon)!=null?ws:0)/p[2]((Ss=p[1])==null?void 0:Ss.medium.gamesLost)).toFixed(2)+"")&&w(ft,We),y&2&&we!==(we=(((Rs=(Fs=p[1])==null?void 0:Fs.hard.gamesWon)!=null?Rs:0)/p[2]((Gs=p[1])==null?void 0:Gs.hard.gamesLost)).toFixed(2)+"")&&w(it,we)},d(p){p&&c(e)}}}function Ks(a){let e;return{c(){e=$("Easy")},l(s){e=g(s,"Easy")},m(s,l){F(s,e,l)},d(s){s&&c(e)}}}function Qs(a){let e;return{c(){e=$("Medium")},l(s){e=g(s,"Medium")},m(s,l){F(s,e,l)},d(s){s&&c(e)}}}function Us(a){let e;return{c(){e=$("Hard")},l(s){e=g(s,"Hard")},m(s,l){F(s,e,l)},d(s){s&&c(e)}}}function Xs(a){let e,s,l;return{c(){e=$("No times for "),s=$(a[0]),l=$(".")},l(o){e=g(o,"No times for "),s=g(o,a[0]),l=g(o,".")},m(o,n){F(o,e,n),F(o,s,n),F(o,l,n)},p(o,n){n&1&&w(s,o[0])},d(o){o&&c(e),o&&c(s),o&&c(l)}}}function Ys(a){let e,s,l=_t(+a[1][a[0]].averageTime.toFixed(2))+"",o,n,u,T=[],L=new Map,D=a[1][a[0]].times.slice(0,10);const S=m=>m[8];for(let m=0;m<D.length;m+=1){let d=Hs(a,D,m),r=S(d);L.set(r,T[m]=As(r,d))}return{c(){e=f("h4"),s=$("Average: "),o=$(l),n=E(),u=f("table");for(let m=0;m<T.length;m+=1)T[m].c();this.h()},l(m){e=i(m,"H4",{});var d=_(e);s=g(d,"Average: "),o=g(d,l),d.forEach(c),n=b(m),u=i(m,"TABLE",{class:!0});var r=_(u);for(let h=0;h<T.length;h+=1)T[h].l(r);r.forEach(c),this.h()},h(){v(u,"class","svelte-5cyomc")},m(m,d){F(m,e,d),t(e,s),t(e,o),F(m,n,d),F(m,u,d);for(let r=0;r<T.length;r+=1)T[r].m(u,null)},p(m,d){d&3&&l!==(l=_t(+m[1][m[0]].averageTime.toFixed(2))+"")&&w(o,l),d&3&&(D=m[1][m[0]].times.slice(0,10),T=zs(T,d,S,1,m,D,L,u,Ps,As,null,Hs))},d(m){m&&c(e),m&&c(n),m&&c(u);for(let d=0;d<T.length;d+=1)T[d].d()}}}function As(a,e){let s,l,o=e[8]+1+"",n,u,T,L,D=_t(e[6])+"",S,m;return{key:a,first:null,c(){s=f("tr"),l=f("td"),n=$(o),u=$("."),T=E(),L=f("td"),S=$(D),m=E(),this.h()},l(d){s=i(d,"TR",{class:!0});var r=_(s);l=i(r,"TD",{class:!0});var h=_(l);n=g(h,o),u=g(h,"."),h.forEach(c),T=b(r),L=i(r,"TD",{class:!0});var W=_(L);S=g(W,D),W.forEach(c),m=b(r),r.forEach(c),this.h()},h(){v(l,"class","svelte-5cyomc"),v(L,"class","svelte-5cyomc"),v(s,"class","svelte-5cyomc"),this.first=s},m(d,r){F(d,s,r),t(s,l),t(l,n),t(l,u),t(s,T),t(s,L),t(L,S),t(s,m)},p(d,r){e=d,r&3&&o!==(o=e[8]+1+"")&&w(n,o),r&3&&D!==(D=_t(e[6])+"")&&w(S,D)},d(d){d&&c(s)}}}function Zs(a){let e,s,l,o,n,u,T,L,D;s=new Nt({props:{type:"text",size:"verysmall",style:"border-width: 0.1rem; border-color: "+(a[0]==="easy"?"var(--accent)":null),$$slots:{default:[Ks]},$$scope:{ctx:a}}}),s.$on("click",a[3]),o=new Nt({props:{type:"text",size:"verysmall",style:"border-width: 0.1rem; border-color: "+(a[0]==="medium"?"var(--accent)":null),$$slots:{default:[Qs]},$$scope:{ctx:a}}}),o.$on("click",a[4]),u=new Nt({props:{type:"text",size:"verysmall",style:"border-width: 0.1rem; border-color: "+(a[0]==="hard"?"var(--accent)":null),$$slots:{default:[Us]},$$scope:{ctx:a}}}),u.$on("click",a[5]);function S(r,h){return r[1]&&r[1][r[0]].times.length!==0?Ys:Xs}let m=S(a),d=m(a);return{c(){e=f("div"),I(s.$$.fragment),l=E(),I(o.$$.fragment),n=E(),I(u.$$.fragment),T=E(),L=f("div"),d.c(),this.h()},l(r){e=i(r,"DIV",{class:!0});var h=_(e);V(s.$$.fragment,h),l=b(h),V(o.$$.fragment,h),n=b(h),V(u.$$.fragment,h),h.forEach(c),T=b(r),L=i(r,"DIV",{class:!0});var W=_(L);d.l(W),W.forEach(c),this.h()},h(){v(e,"class","diff-select svelte-5cyomc"),v(L,"class","times svelte-5cyomc")},m(r,h){F(r,e,h),j(s,e,null),t(e,l),j(o,e,null),t(e,n),j(u,e,null),F(r,T,h),F(r,L,h),d.m(L,null),D=!0},p(r,h){const W={};h&1&&(W.style="border-width: 0.1rem; border-color: "+(r[0]==="easy"?"var(--accent)":null)),h&512&&(W.$$scope={dirty:h,ctx:r}),s.$set(W);const P={};h&1&&(P.style="border-width: 0.1rem; border-color: "+(r[0]==="medium"?"var(--accent)":null)),h&512&&(P.$$scope={dirty:h,ctx:r}),o.$set(P);const q={};h&1&&(q.style="border-width: 0.1rem; border-color: "+(r[0]==="hard"?"var(--accent)":null)),h&512&&(q.$$scope={dirty:h,ctx:r}),u.$set(q),m===(m=S(r))&&d?d.p(r,h):(d.d(1),d=m(r),d&&(d.c(),d.m(L,null)))},i(r){D||(J(s.$$.fragment,r),J(o.$$.fragment,r),J(u.$$.fragment,r),D=!0)},o(r){K(s.$$.fragment,r),K(o.$$.fragment,r),K(u.$$.fragment,r),D=!1},d(r){r&&c(e),Q(s),Q(o),Q(u),r&&c(T),r&&c(L),d.d()}}}function xs(a){let e,s,l,o;return e=new Os({props:{title:"Stats",centered:!0,$$slots:{default:[Js]},$$scope:{ctx:a}}}),l=new Os({props:{title:"Times",centered:!0,$$slots:{default:[Zs]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=E(),I(l.$$.fragment)},l(n){V(e.$$.fragment,n),s=b(n),V(l.$$.fragment,n)},m(n,u){j(e,n,u),F(n,s,u),j(l,n,u),o=!0},p(n,u){const T={};u&514&&(T.$$scope={dirty:u,ctx:n}),e.$set(T);const L={};u&515&&(L.$$scope={dirty:u,ctx:n}),l.$set(L)},i(n){o||(J(e.$$.fragment,n),J(l.$$.fragment,n),o=!0)},o(n){K(e.$$.fragment,n),K(l.$$.fragment,n),o=!1},d(n){Q(e,n),n&&c(s),Q(l,n)}}}function el(a){let e,s;return e=new qs({props:{$$slots:{content:[xs],sidebar:[js]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,o){j(e,l,o),s=!0},p(l,[o]){const n={};o&515&&(n.$$scope={dirty:o,ctx:l}),e.$set(n)},i(l){s||(J(e.$$.fragment,l),s=!0)},o(l){K(e.$$.fragment,l),s=!1},d(l){Q(e,l)}}}function tl(a,e,s){let l;Bs(a,Is,D=>s(1,l=D));let o="easy";return[o,l,D=>{const S=D!=null?D:0;return S===0?1:S},()=>s(0,o="easy"),()=>s(0,o="medium"),()=>s(0,o="hard")]}class rl extends Cs{constructor(e){super(),Ms(this,e,tl,el,Ns,{})}}export{rl as default};
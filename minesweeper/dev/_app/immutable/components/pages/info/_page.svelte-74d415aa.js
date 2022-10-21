import{S as U,i as V,s as W,v as F,w as I,x as H,f as R,t as Y,y as L,a as x,c as G,b as f,h as o,k as y,q as u,l as v,m as _,r as m,G as i,A as Q}from"../../../chunks/index-5591f0db.js";import{S as X,C as J}from"../../../chunks/Card-b10dace3.js";import{S as Z}from"../../../chunks/MiniBoard-05bfd2be.js";function ee(C){let e,s;return e=new X({}),{c(){F(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){H(e,t,a),s=!0},i(t){s||(R(e.$$.fragment,t),s=!0)},o(t){Y(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function te(C){let e,s,t,a,l,c,w,b,h,E,M,P,g,k,r,$,d,O,T,S,q;return{c(){e=y("h3"),s=u("Minesweeper"),t=x(),a=y("p"),l=y("strong"),c=u("PC:"),w=u(` Left click to open a cell. Right click to flag\r
                a cell. You can use the select buttons on the side panel to change\r
                the left click action.`),b=x(),h=y("p"),E=y("strong"),M=u("Mobile:"),P=u(` Touch a cell to open it. On some devices\r
                you can hold to flag a cell. On devices that don't support this,\r
                use the select buttons on the side panel to change the left click\r
                action.`),g=x(),k=y("p"),r=u(`Click anywhere to begin. You are guaranteed to have at least a\r
                3x3 of non mines on your first click. The number in a cell shows\r
                how many mines are in the surrounding 8 cells. Once all non mine\r
                cells have been opened, you have won. If you click a mine, then\r
                you lose.`),$=x(),d=y("h3"),O=u("Save Games"),T=x(),S=y("p"),q=u(`Every game you play will be saved unless you disable the\r
                checkbox. From the main menus, you can start playing any save\r
                game or delete them. If you have a lot, you can turn on\r
                multiselect mode to delete multiple at a time. Click the edit\r
                icon to change the name of the save game.`)},l(n){e=v(n,"H3",{});var p=_(e);s=m(p,"Minesweeper"),p.forEach(o),t=G(n),a=v(n,"P",{});var K=_(a);l=v(K,"STRONG",{});var A=_(l);c=m(A,"PC:"),A.forEach(o),w=m(K,` Left click to open a cell. Right click to flag\r
                a cell. You can use the select buttons on the side panel to change\r
                the left click action.`),K.forEach(o),b=G(n),h=v(n,"P",{});var N=_(h);E=v(N,"STRONG",{});var j=_(E);M=m(j,"Mobile:"),j.forEach(o),P=m(N,` Touch a cell to open it. On some devices\r
                you can hold to flag a cell. On devices that don't support this,\r
                use the select buttons on the side panel to change the left click\r
                action.`),N.forEach(o),g=G(n),k=v(n,"P",{});var z=_(k);r=m(z,`Click anywhere to begin. You are guaranteed to have at least a\r
                3x3 of non mines on your first click. The number in a cell shows\r
                how many mines are in the surrounding 8 cells. Once all non mine\r
                cells have been opened, you have won. If you click a mine, then\r
                you lose.`),z.forEach(o),$=G(n),d=v(n,"H3",{});var B=_(d);O=m(B,"Save Games"),B.forEach(o),T=G(n),S=v(n,"P",{});var D=_(S);q=m(D,`Every game you play will be saved unless you disable the\r
                checkbox. From the main menus, you can start playing any save\r
                game or delete them. If you have a lot, you can turn on\r
                multiselect mode to delete multiple at a time. Click the edit\r
                icon to change the name of the save game.`),D.forEach(o)},m(n,p){f(n,e,p),i(e,s),f(n,t,p),f(n,a,p),i(a,l),i(l,c),i(a,w),f(n,b,p),f(n,h,p),i(h,E),i(E,M),i(h,P),f(n,g,p),f(n,k,p),i(k,r),f(n,$,p),f(n,d,p),i(d,O),f(n,T,p),f(n,S,p),i(S,q)},p:Q,d(n){n&&o(e),n&&o(t),n&&o(a),n&&o(b),n&&o(h),n&&o(g),n&&o(k),n&&o($),n&&o(d),n&&o(T),n&&o(S)}}}function ne(C){let e,s,t,a,l,c,w,b,h,E,M,P,g,k;return{c(){e=y("p"),s=u("Made with SvelteKit."),t=x(),a=y("p"),l=u("Code by "),c=y("em"),w=u("SuperFluffyGame#1889"),b=u(`, design help by\r
                `),h=y("em"),E=u("TheMelonHead286#8044"),M=u("."),P=x(),g=y("p"),k=u("Icons by Google Fonts.")},l(r){e=v(r,"P",{});var $=_(e);s=m($,"Made with SvelteKit."),$.forEach(o),t=G(r),a=v(r,"P",{});var d=_(a);l=m(d,"Code by "),c=v(d,"EM",{});var O=_(c);w=m(O,"SuperFluffyGame#1889"),O.forEach(o),b=m(d,`, design help by\r
                `),h=v(d,"EM",{});var T=_(h);E=m(T,"TheMelonHead286#8044"),T.forEach(o),M=m(d,"."),d.forEach(o),P=G(r),g=v(r,"P",{});var S=_(g);k=m(S,"Icons by Google Fonts."),S.forEach(o)},m(r,$){f(r,e,$),i(e,s),f(r,t,$),f(r,a,$),i(a,l),i(a,c),i(c,w),i(a,b),i(a,h),i(h,E),i(a,M),f(r,P,$),f(r,g,$),i(g,k)},p:Q,d(r){r&&o(e),r&&o(t),r&&o(a),r&&o(P),r&&o(g)}}}function le(C){let e,s,t,a;return e=new J({props:{title:"How To Play",$$slots:{default:[te]},$$scope:{ctx:C}}}),t=new J({props:{title:"Credits",$$slots:{default:[ne]},$$scope:{ctx:C}}}),{c(){F(e.$$.fragment),s=x(),F(t.$$.fragment)},l(l){I(e.$$.fragment,l),s=G(l),I(t.$$.fragment,l)},m(l,c){H(e,l,c),f(l,s,c),H(t,l,c),a=!0},p(l,c){const w={};c&1&&(w.$$scope={dirty:c,ctx:l}),e.$set(w);const b={};c&1&&(b.$$scope={dirty:c,ctx:l}),t.$set(b)},i(l){a||(R(e.$$.fragment,l),R(t.$$.fragment,l),a=!0)},o(l){Y(e.$$.fragment,l),Y(t.$$.fragment,l),a=!1},d(l){L(e,l),l&&o(s),L(t,l)}}}function ae(C){let e,s;return e=new Z({props:{$$slots:{content:[le],sidebar:[ee]},$$scope:{ctx:C}}}),{c(){F(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){H(e,t,a),s=!0},p(t,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(R(e.$$.fragment,t),s=!0)},o(t){Y(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}class ie extends U{constructor(e){super(),V(this,e,null,ae,W,{})}}export{ie as default};

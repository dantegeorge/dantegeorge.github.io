(self.webpackChunkreact_web3auth_modal=self.webpackChunkreact_web3auth_modal||[]).push([[921],{84656:function(r,n,e){"use strict";e.r(n),e.d(n,{getED25519Key:function(){return u}});var a=e(93433),t=e(83201),f=e.n(t),c=e(19778).Buffer,o=f().lowlevel;function u(r){var n;n="string"===typeof r?c.from(r,"hex"):r;var e=new Uint8Array(64),t=[o.gf(),o.gf(),o.gf(),o.gf()],f=new Uint8Array([].concat((0,a.Z)(new Uint8Array(n)),(0,a.Z)(new Uint8Array(32)))),u=new Uint8Array(32);o.crypto_hash(e,f,32),e[0]&=248,e[31]&=127,e[31]|=64,o.scalarbase(t,e),o.pack(u,t);for(var i=0;i<32;i+=1)f[i+32]=u[i];return{sk:c.from(f),pk:c.from(u)}}},78848:function(){}}]);
//# sourceMappingURL=921.d5a6dbb7.chunk.js.map
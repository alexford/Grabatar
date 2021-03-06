////////////////////////
//// Grabatar.js
//// By Alex Ford
//// http://github.com/alexford/grabatar
////
//// Usage:
////
//// Grabatar.src('alexford87@me.com',40,true)
//// // returns 


window.Grabatar = {
  urls: [],

  options: {
    secure: false,
    d: 'mm'
  },

  src: function(email, size) {
    if (!email) return;
    var cacheHash = email + size + (this.options.secure ? "s" : "");

    if (!this.urls[cacheHash]) {
      var url = (this.options.secure ? 'https://secure' : 'http://www') + '.gravatar.com/avatar/'
      url+=md5(email)+'?d='+encodeURIComponent(this.options.d);
      if (size) {
        url+=('&s='+size);
      }
      this.urls[cacheHash]=url;
    }

    return this.urls[cacheHash];
  },

  setup: function(options) {
    for (var attrname in options) {
      this.options[attrname] = options[attrname];
    }
  }
};

////////////////////////
//// Utility Functions

// http://kevin.vanzonneveld.net
// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: sowberry
// +    tweaked by: Jack
// +   bugfixed by: Onno Marsman
// +   improved by: Yves Sucaet
// +   bugfixed by: Onno Marsman
// +   bugfixed by: Ulrich
// +   bugfixed by: Rafal Kukawski
// +   improved by: kirilloid
// +   bugfixed by: kirilloid
// *     example 1: utf8_encode('Kevin van Zonneveld');
// *     returns 1: 'Kevin van Zonneveld'
function utf8_encode(e){if(e===null||typeof e==="undefined"){return""}var t=e+"";var n="",r,i,s=0;r=i=0;s=t.length;for(var o=0;o<s;o++){var u=t.charCodeAt(o);var a=null;if(u<128){i++}else if(u>127&&u<2048){a=String.fromCharCode(u>>6|192,u&63|128)}else if(u&63488!=55296){a=String.fromCharCode(u>>12|224,u>>6&63|128,u&63|128)}else{if(u&64512!=55296){throw new RangeError("Unmatched trail surrogate at "+o)}var f=t.charCodeAt(++o);if(f&64512!=56320){throw new RangeError("Unmatched lead surrogate at "+(o-1))}u=((u&1023)<<10)+(f&1023)+65536;a=String.fromCharCode(u>>18|240,u>>12&63|128,u>>6&63|128,u&63|128)}if(a!==null){if(i>r){n+=t.slice(r,i)}n+=a;r=i=o+1}}if(i>r){n+=t.slice(r,s)}return n}


// http://kevin.vanzonneveld.net
// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
// + namespaced by: Michael White (http://getsprink.com)
// +    tweaked by: Jack
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +      input by: Brett Zamir (http://brett-zamir.me)
// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// -    depends on: utf8_encode
// *     example 1: md5('Kevin van Zonneveld');
// *     returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'
function md5(e){var t;var n=function(e,t){return e<<t|e>>>32-t};var r=function(e,t){var n,r,i,s,o;i=e&2147483648;s=t&2147483648;n=e&1073741824;r=t&1073741824;o=(e&1073741823)+(t&1073741823);if(n&r){return o^2147483648^i^s}if(n|r){if(o&1073741824){return o^3221225472^i^s}else{return o^1073741824^i^s}}else{return o^i^s}};var i=function(e,t,n){return e&t|~e&n};var s=function(e,t,n){return e&n|t&~n};var o=function(e,t,n){return e^t^n};var u=function(e,t,n){return t^(e|~n)};var a=function(e,t,s,o,u,a,f){e=r(e,r(r(i(t,s,o),u),f));return r(n(e,a),t)};var f=function(e,t,i,o,u,a,f){e=r(e,r(r(s(t,i,o),u),f));return r(n(e,a),t)};var l=function(e,t,i,s,u,a,f){e=r(e,r(r(o(t,i,s),u),f));return r(n(e,a),t)};var c=function(e,t,i,s,o,a,f){e=r(e,r(r(u(t,i,s),o),f));return r(n(e,a),t)};var h=function(e){var t;var n=e.length;var r=n+8;var i=(r-r%64)/64;var s=(i+1)*16;var o=new Array(s-1);var u=0;var a=0;while(a<n){t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|e.charCodeAt(a)<<u;a++}t=(a-a%4)/4;u=a%4*8;o[t]=o[t]|128<<u;o[s-2]=n<<3;o[s-1]=n>>>29;return o};var p=function(e){var t="",n="",r,i;for(i=0;i<=3;i++){r=e>>>i*8&255;n="0"+r.toString(16);t=t+n.substr(n.length-2,2)}return t};var d=[],v,m,g,y,b,w,E,S,x,T=7,N=12,C=17,k=22,L=5,A=9,O=14,M=20,_=4,D=11,P=16,H=23,B=6,j=10,F=15,I=21;e=this.utf8_encode(e);d=h(e);w=1732584193;E=4023233417;S=2562383102;x=271733878;t=d.length;for(v=0;v<t;v+=16){m=w;g=E;y=S;b=x;w=a(w,E,S,x,d[v+0],T,3614090360);x=a(x,w,E,S,d[v+1],N,3905402710);S=a(S,x,w,E,d[v+2],C,606105819);E=a(E,S,x,w,d[v+3],k,3250441966);w=a(w,E,S,x,d[v+4],T,4118548399);x=a(x,w,E,S,d[v+5],N,1200080426);S=a(S,x,w,E,d[v+6],C,2821735955);E=a(E,S,x,w,d[v+7],k,4249261313);w=a(w,E,S,x,d[v+8],T,1770035416);x=a(x,w,E,S,d[v+9],N,2336552879);S=a(S,x,w,E,d[v+10],C,4294925233);E=a(E,S,x,w,d[v+11],k,2304563134);w=a(w,E,S,x,d[v+12],T,1804603682);x=a(x,w,E,S,d[v+13],N,4254626195);S=a(S,x,w,E,d[v+14],C,2792965006);E=a(E,S,x,w,d[v+15],k,1236535329);w=f(w,E,S,x,d[v+1],L,4129170786);x=f(x,w,E,S,d[v+6],A,3225465664);S=f(S,x,w,E,d[v+11],O,643717713);E=f(E,S,x,w,d[v+0],M,3921069994);w=f(w,E,S,x,d[v+5],L,3593408605);x=f(x,w,E,S,d[v+10],A,38016083);S=f(S,x,w,E,d[v+15],O,3634488961);E=f(E,S,x,w,d[v+4],M,3889429448);w=f(w,E,S,x,d[v+9],L,568446438);x=f(x,w,E,S,d[v+14],A,3275163606);S=f(S,x,w,E,d[v+3],O,4107603335);E=f(E,S,x,w,d[v+8],M,1163531501);w=f(w,E,S,x,d[v+13],L,2850285829);x=f(x,w,E,S,d[v+2],A,4243563512);S=f(S,x,w,E,d[v+7],O,1735328473);E=f(E,S,x,w,d[v+12],M,2368359562);w=l(w,E,S,x,d[v+5],_,4294588738);x=l(x,w,E,S,d[v+8],D,2272392833);S=l(S,x,w,E,d[v+11],P,1839030562);E=l(E,S,x,w,d[v+14],H,4259657740);w=l(w,E,S,x,d[v+1],_,2763975236);x=l(x,w,E,S,d[v+4],D,1272893353);S=l(S,x,w,E,d[v+7],P,4139469664);E=l(E,S,x,w,d[v+10],H,3200236656);w=l(w,E,S,x,d[v+13],_,681279174);x=l(x,w,E,S,d[v+0],D,3936430074);S=l(S,x,w,E,d[v+3],P,3572445317);E=l(E,S,x,w,d[v+6],H,76029189);w=l(w,E,S,x,d[v+9],_,3654602809);x=l(x,w,E,S,d[v+12],D,3873151461);S=l(S,x,w,E,d[v+15],P,530742520);E=l(E,S,x,w,d[v+2],H,3299628645);w=c(w,E,S,x,d[v+0],B,4096336452);x=c(x,w,E,S,d[v+7],j,1126891415);S=c(S,x,w,E,d[v+14],F,2878612391);E=c(E,S,x,w,d[v+5],I,4237533241);w=c(w,E,S,x,d[v+12],B,1700485571);x=c(x,w,E,S,d[v+3],j,2399980690);S=c(S,x,w,E,d[v+10],F,4293915773);E=c(E,S,x,w,d[v+1],I,2240044497);w=c(w,E,S,x,d[v+8],B,1873313359);x=c(x,w,E,S,d[v+15],j,4264355552);S=c(S,x,w,E,d[v+6],F,2734768916);E=c(E,S,x,w,d[v+13],I,1309151649);w=c(w,E,S,x,d[v+4],B,4149444226);x=c(x,w,E,S,d[v+11],j,3174756917);S=c(S,x,w,E,d[v+2],F,718787259);E=c(E,S,x,w,d[v+9],I,3951481745);w=r(w,m);E=r(E,g);S=r(S,y);x=r(x,b)}var q=p(w)+p(E)+p(S)+p(x);return q.toLowerCase()}

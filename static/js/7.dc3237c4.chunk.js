(this.webpackJsonpwebglfun=this.webpackJsonpwebglfun||[]).push([[7],{329:function(e,n,t){"use strict";t.r(n);var i=t(33),s=t(1),c=t(0),r=t(30),a=t(46),o=t(72),l=t(48),v="\nuniform float time;\nuniform float sides;\nuniform vec4 resolution;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nfloat pi = 3.141592653589793238;\n\nfloat circleshape(vec2 position, float radius, vec2 center){\n    float x = length(position-center);\n    float sg = sin(150.*(x) + 1.5*time)*0.2;\n    return step(0.1, sg) + step(-0.19,sg);\n}   \n\nvoid main(){\n    vec2 uv = vUv;\n    vec3 col = vec3(0.);\n    uv *= sides;  \n    vec2 gv = fract(uv)-.5;\n    gl_FragColor = vec4(uv,0., 1.0);    \n    if(gv.x>.48 ||gv.y>.48) \n        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n    else \n        gl_FragColor = vec4(col, 1.0);  \n}\n",u="\nuniform float time;\nuniform float sides;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nfloat PI = 3.141592653589793238;\nvoid main(){    \n  vUv = uv;\n \tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",j=t(109);t(144);function d(e){var n=e.sides,t=new r.ShaderMaterial({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:r.DoubleSide,vertexShader:u,fragmentShader:v,uniforms:{resolution:{type:"v4",value:new r.Vector4},sides:{type:"f",value:5}}});return Object(a.f)((function(){t.uniforms.sides.value=n})),Object(s.jsx)("mesh",{material:t,children:Object(s.jsx)("planeBufferGeometry",{args:[3,3,3]})})}n.default=function(e){var n=e.inspiration,t=Object(c.useState)({count:5}),r=Object(i.a)(t,2),f=r[0],b=r[1];return Object(c.useEffect)((function(){return document.title="ConcentricCircle",function(){document.title="WebGlfun"}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(a.a,{gl:{antialias:!1,alpha:!1},camera:{position:[0,0,2],near:.001,far:1e3},onCreated:function(e){return e.gl.setClearColor("white")},children:[Object(s.jsx)("ambientLight",{}),Object(s.jsx)("pointLight",{position:[150,150,150],intensity:.55}),Object(s.jsx)(c.Suspense,{children:Object(s.jsx)(d,{sides:f.count})}),Object(s.jsx)(o.a,{})]}),n&&Object(s.jsxs)("div",{className:"inspiration",children:["Inspired from ",Object(s.jsx)("a",{href:n,children:"post"})]}),"      ",Object(s.jsx)(l.a,{vertex:u,fragment:v,styles:{bottom:0,right:0}}),Object(s.jsx)("div",{className:"gui",children:Object(s.jsx)(j.b,{data:f,onUpdate:function(e){b({count:e.count})},children:Object(s.jsx)(j.a,{path:"count",label:"Sides ",min:5,max:15,step:1})})})]})}},48:function(e,n,t){"use strict";var i=t(33),s=t(1),c=t(0);n.a=function(e){var n=e.vertex,t=e.fragment,r=e.styles,a=Object(c.useState)("none"),o=Object(i.a)(a,2),l=o[0],v=o[1],u=Object(c.useState)(t),j=Object(i.a)(u,2),d=j[0],f=j[1],b=Object(c.useState)(""),m=Object(i.a)(b,2),h=m[0],g=m[1],x=function(e){f("fragment"===e?t:n),g("fragment"===e?"fragment":"vertex"),v("block")};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"shaders-section",style:void 0===r?{top:0,right:0}:r,children:[t&&Object(s.jsx)("button",{onClick:function(){return x("fragment")},children:"fragment"}),n&&Object(s.jsx)("button",{onClick:function(){return x("vertex")},children:"vertex"})]}),Object(s.jsxs)("div",{className:"shader-overlay-container",style:{display:l},children:[Object(s.jsx)("div",{className:"close",onClick:function(){v("none")},children:"close"}),Object(s.jsxs)("div",{className:"shader-overlay",children:[Object(s.jsxs)("h1",{children:[h," shader"]}),Object(s.jsx)("pre",{children:d})]})]})]})}}}]);
//# sourceMappingURL=7.dc3237c4.chunk.js.map
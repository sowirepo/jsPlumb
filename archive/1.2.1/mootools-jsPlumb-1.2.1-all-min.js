(function(){var u=function(){var g=this,i=/MSIE/.test(navigator.userAgent)&&!window.opera,q=null,m=function(){d.repaintEverything()},j=true,k={},f={},h=[],n={},w={},H=true,C=[],E="DEFAULT",J=1200,D={},ba=function(a,b){var c=D[a];if(!c){c={};D[a]=c}b=b||"DEFAULT";var e=c[b];if(!e){e=0;c[b]=e}c[b]++},Q=function(a,b,c){var e=function(o,r){if(o===r)return true;else if(typeof o=="object"&&typeof r=="object"){var t=true;for(var v in o)if(!e(o[v],r[v])){t=false;break}for(v in r)if(!e(r[v],o[v])){t=false;
break}return t}};c=+c||0;for(var l=a.length;c<l;c++)if(e(a[c],b))return c;return-1},R=function(a,b,c){var e=a[b];if(e==null){e=[];a[b]=e}e.push(c);return e},S=function(a,b){var c=F(a,"id"),e=k[c];if(e){var l=""+(new Date).getTime();ba("draw");N(c,b);for(var o=h[c],r=C[c],t=0;t<e.length;t++){var v=e[t],z=v.anchor.compute([o.left,o.top],r,v);v.paint(z);v=v.connections;for(z=0;z<v.length;z++)v[z].paint(c,b,false,l)}}},ea=function(a,b){var c=null;if(typeof a=="object"&&a.length){c=[];for(var e=0;e<a.length;e++){var l=
x(a[e]),o=F(l,"id");c.push(b(l,o))}}else{l=x(a);o=F(l,"id");c=b(l,o)}return c},X={},x=function(a){if(typeof a=="string"){var b=X[a];if(!b){b=d.CurrentLibrary.getElementObject(a);X[a]=b}return b}else return d.CurrentLibrary.getElementObject(a)},F=function(a,b){var c=x(a);return d.CurrentLibrary.getAttribute(c,b)},Y=function(a,b,c){a=x(a);d.CurrentLibrary.setAttribute(a,b,c)},fa=function(a){a=x(a);return d.CurrentLibrary.getOffset(a)},ga=function(a){a=x(a);return d.CurrentLibrary.getSize(a)},ca=function(a){a=
x(a);var b=F(a,"id");if(!b){b="_jsPlumb_"+new String((new Date).getTime());Y(a,"id",b)}return b},T=function(a,b,c){if(b=b==null?H:b)if(d.CurrentLibrary.isDragSupported(a)){c=c||g.Defaults.DragOptions||d.Defaults.DragOptions;c=d.extend({},c);b=d.CurrentLibrary.dragEvents.drag;c[b]=K(c[b],function(){var e=d.CurrentLibrary.getUIPosition(arguments);S(a,e);e=x(a);d.CurrentLibrary.addClass(e,"jsPlumb_dragged")});b=w[ca(a)];c.disabled=b==null?false:!b;d.CurrentLibrary.initDraggable(a,c)}},ha=function(a,
b){var c=document.createElement("canvas"),e=c;b?d.CurrentLibrary.appendElement(e,b):document.body.appendChild(e);c.style.position="absolute";if(a)c.className=a;ca(c);if(i){d.sizeCanvas(c,0,0,J,J);c=G_vmlCanvasManager.initElement(c)}return c},da=function(a,b){var c=k[a];if(c&&c.length)for(var e=0;e<c.length;e++)for(var l=0;l<c[e].connections.length;l++)if(b(c[e].connections[l]))return},L=function(a,b){if(a!=null)if(b)d.CurrentLibrary.removeElement(a,b);else try{document.body.removeChild(a)}catch(c){}},
U=function(a,b,c){a=a[b];if(a!=null){c=Q(a,c);if(c>=0){delete a[c];a.splice(c,1);return true}}return false},ia=function(a,b){var c=F(a,"id");da(c,function(e){e.canvas.style.display=b})},la=function(a){da(a,function(b){b.canvas.style.display="none"==b.canvas.style.display?"block":"none"})},N=function(a,b,c){if(c||b==null){b=x(a);C[a]=ga(b);h[a]=fa(b)}else h[a]=b},K=function(a,b){a=a||function(){};b=b||function(){};return function(){try{b.apply(this,arguments)}catch(c){}try{a.apply(this,arguments)}catch(e){}}},
ja=function(a){var b=this;this.x=a.x||0;this.y=a.y||0;var c=a.orientation||[0,0],e=null;this.offsets=a.offsets||[0,0];this.compute=function(l,o,r){ba("anchor compute");e=[l[0]+b.x*o[0]+b.offsets[0],l[1]+b.y*o[1]+b.offsets[1]];o=r?r.container:null;l={left:0,top:0};if(o!=null){var t=x(o);o=fa(t);r=d.CurrentLibrary.getScrollLeft(t);t=d.CurrentLibrary.getScrollTop(t);l.left=o.left-r;l.top=o.top-t;e[0]-=l.left;e[1]-=l.top}return e};this.getOrientation=function(){return c};this.equals=function(l){if(!l)return false;
var o=l.getOrientation(),r=this.getOrientation();return this.x==l.x&&this.y==l.y&&this.offsets[0]==l.offsets[0]&&this.offsets[1]==l.offsets[1]&&r[0]==o[0]&&r[1]==o[1]}},ma=function(a){var b=a.reference,c=ga(x(a.referenceCanvas)),e=0,l=0,o=null;this.compute=function(r){l=e=0;return[r[0]+c[0]/2,r[1]+c[1]/2]};this.getOrientation=function(){if(o)return o;else{var r=b.getOrientation();return[Math.abs(r[0])*e*-1,Math.abs(r[1])*l*-1]}};this.over=function(r){o=r.getOrientation()};this.out=function(){o=null}},
ka=function(a){var b=this,c=new String("_jsplumb_c_"+(new Date).getTime());this.getId=function(){return c};this.container=a.container||g.Defaults.Container;this.source=x(a.source);this.target=x(a.target);this.sourceId=F(this.source,"id");this.targetId=F(this.target,"id");this.endpointsOnTop=a.endpointsOnTop!=null?a.endpointsOnTop:true;this.scope=a.scope;this.endpoints=[];this.endpointStyles=[];var e=function(r,t,v,z){if(r){b.endpoints[t]=r;r.addConnection(b)}else{if(!v.endpoints)v.endpoints=[null,
null];r=v.endpoints[t]||v.endpoint||g.Defaults.Endpoints[t]||d.Defaults.Endpoints[t]||g.Defaults.Endpoint||d.Defaults.Endpoint||new d.Endpoints.Dot;if(!v.endpointStyles)v.endpointStyles=[null,null];v=new Z({style:v.endpointStyles[t]||v.endpointStyle||g.Defaults.EndpointStyles[t]||d.Defaults.EndpointStyles[t]||g.Defaults.EndpointStyle||d.Defaults.EndpointStyle,endpoint:r,connections:[b],anchor:v.anchors?v.anchors[t]:g.Defaults.Anchors[t]||d.Defaults.Anchors[t]||g.Defaults.Anchor||d.Defaults.Anchor||
d.Anchors.BottomCenter,source:z,container:b.container});return b.endpoints[t]=v}},l=e(a.sourceEndpoint,0,a,b.source);l&&R(k,this.sourceId,l);(e=e(a.targetEndpoint,1,a,b.target))&&R(k,this.targetId,e);if(!this.scope)this.scope=this.endpoints[0].scope;this.connector=this.endpoints[0].connector||this.endpoints[1].connector||a.connector||g.Defaults.Connector||d.Defaults.Connector||new d.Connectors.Bezier;this.paintStyle=this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||a.paintStyle||
g.Defaults.PaintStyle||d.Defaults.PaintStyle;N(this.sourceId);N(this.targetId);e=h[this.sourceId];l=C[this.sourceId];e=this.endpoints[0].anchor.compute([e.left,e.top],l,this.endpoints[0]);this.endpoints[0].paint(e);e=h[this.targetId];l=C[this.targetId];e=this.endpoints[1].anchor.compute([e.left,e.top],l,this.endpoints[1]);this.endpoints[1].paint(e);var o=ha(d.connectorClass,b.container);this.canvas=o;this.paint=function(r,t,v){q&&q.debug("Painting Connection; element in motion is "+r+"; ui is ["+
t+"]; recalc is ["+v+"]");var z=r!=this.sourceId,I=z?this.sourceId:this.targetId,y=z?0:1,s=z?1:0;if(this.canvas.getContext){N(r,t,v);N(I);v=h[r];t=h[I];r=C[r];var aa=C[I];I=o.getContext("2d");v=this.endpoints[s].anchor.compute([v.left,v.top],r,this.endpoints[s]);this.endpoints[s].anchor.getOrientation();t=this.endpoints[y].anchor.compute([t.left,t.top],aa,this.endpoints[y]);this.endpoints[y].anchor.getOrientation();y=this.connector.compute(v,t,this.endpoints[s].anchor,this.endpoints[y].anchor,this.paintStyle.lineWidth);
d.sizeCanvas(o,y[0],y[1],y[2],y[3]);d.extend(I,this.paintStyle);if(this.paintStyle.gradient&&!i){z=z?I.createLinearGradient(y[4],y[5],y[6],y[7]):I.createLinearGradient(y[6],y[7],y[4],y[5]);for(s=0;s<this.paintStyle.gradient.stops.length;s++)z.addColorStop(this.paintStyle.gradient.stops[s][0],this.paintStyle.gradient.stops[s][1]);I.strokeStyle=z}this.connector.paint(y,I)}};this.repaint=function(){this.paint(this.sourceId,null,true)};T(b.source,a.draggable,a.dragOptions);T(b.target,a.draggable,a.dragOptions);
this.source.resize&&this.source.resize(function(){d.repaint(b.sourceId)})},Z=function(a){a=a||{};d.extend({},a);var b=this,c=new String("_jsplumb_e_"+(new Date).getTime());this.getId=function(){return c};b.anchor=a.anchor||d.Anchors.TopCenter;var e=a.endpoint||new d.Endpoints.Dot,l=a.style||g.Defaults.EndpointStyle||d.Defaults.EndpointStyle;this.connectorStyle=a.connectorStyle;this.connector=a.connector;var o=a.source;this.container=a.container||d.Defaults.Container;var r=F(o,"id"),t=a.maxConnections||
1;this.canvas=a.canvas||ha(d.endpointClass,this.container);this.connections=a.connections||[];this.scope=a.scope||E;var v=a.reattach||false,z=null,I=null;this.addConnection=function(p){b.connections.push(p)};this.removeConnection=function(p){p=Q(b.connections,p);p>=0&&b.connections.splice(p,1)};this.makeInPlaceCopy=function(){return new Z({anchor:b.anchor,source:o,style:l,endpoint:e})};this.isConnectedTo=function(p){var G=false;if(p)for(var A=0;A<b.connections.length;A++)if(b.connections[A].endpoints[1]==
p){G=true;break}return G};this.isFloating=function(){return z!=null};this.isFull=function(){return t<1?false:b.connections.length>=t};this.equals=function(p){return this.anchor.equals(p.anchor)&&true};this.paint=function(p,G,A){q&&q.debug("Painting Endpoint with elementId ["+r+"]; anchorPoint is ["+p+"]");if(p==null){p=h[r];var O=C[r];if(p==null||O==null){N(r);p=h[r];O=C[r]}p=b.anchor.compute([p.left,p.top],O,b)}e.paint(p,b.anchor.getOrientation(),A||b.canvas,l,G||l)};if(a.isSource&&d.CurrentLibrary.isDragSupported(o)){var y=
null;var s=c=null,aa=false,P=null,B=a.dragOptions||{},M=d.extend({},d.CurrentLibrary.defaultDragOptions);B=d.extend(M,B);B.scope=B.scope||b.scope;M=d.CurrentLibrary.dragEvents.start;var V=d.CurrentLibrary.dragEvents.stop,W=d.CurrentLibrary.dragEvents.drag;B[M]=K(B[M],function(){I=b.makeInPlaceCopy();I.paint();y=document.createElement("div");var p=x(y);document.body.appendChild(y);var G=""+new String((new Date).getTime());Y(p,"id",G);N(G);Y(x(b.canvas),"dragId",G);Y(x(b.canvas),"elId",r);var A=new ma({reference:b.anchor,
referenceCanvas:b.canvas});z=new Z({style:{fillStyle:"rgba(0,0,0,0)"},endpoint:e,anchor:A,source:p});s=b.connections.length==0||b.connections.length<t?null:b.connections[0];if(s==null)s=new ka({sourceEndpoint:b,targetEndpoint:z,source:x(o),target:x(y),anchors:[b.anchor,A],paintStyle:a.connectorStyle,connector:a.connector});else{aa=true;p=s.sourceId==r?0:1;s.floatingAnchorIndex=p;b.removeConnection(s);if(p==0){P=[s.source,s.sourceId];s.source=x(y);s.sourceId=G}else{P=[s.target,s.targetId];s.target=
x(y);s.targetId=G}s.suspendedEndpoint=s.endpoints[p];s.endpoints[p]=z}n[G]=s;z.addConnection(s);R(k,G,z)});B[W]=K(B[W],function(){var p=d.CurrentLibrary.getUIPosition(arguments);S(x(y),p)});B[V]=K(B[V],function(){U(k,c,z);var p=[y,z.canvas];for(var G in p)L(p[G],void 0);L(I.canvas,o);p=s.floatingAnchorIndex==null?1:s.floatingAnchorIndex;if(s.endpoints[p]==z)if(aa&&s.suspendedEndpoint)if(v){s.floatingAnchorIndex=null;if(p==0){s.source=P[0];s.sourceId=P[1]}else{s.target=P[0];s.targetId=P[1]}s.endpoints[p]=
s.suspendedEndpoint;s.suspendedEndpoint.addConnection(s);d.repaint(P[1])}else{s.endpoints[0].removeConnection(s);s.endpoints[1].removeConnection(s);L(s.canvas);U(f,s.scope,s)}else{L(s.canvas);b.removeConnection(s)}s=null;delete z;delete I;b.paint()});M=x(b.canvas);d.CurrentLibrary.initDraggable(M,B)}if(a.isTarget&&d.CurrentLibrary.isDropSupported(o)){B=a.dropOptions||g.Defaults.DropOptions||d.Defaults.DropOptions;B=d.extend({},B);B.scope=B.scope||b.scope;M=d.CurrentLibrary.dragEvents.drop;V=d.CurrentLibrary.dragEvents.over;
W=d.CurrentLibrary.dragEvents.out;B[M]=K(B[M],function(){var p=d.CurrentLibrary.getDragObject(arguments),G=F(x(p),"dragId");p=F(x(p),"elId");var A=n[G],O=A.floatingAnchorIndex==null?1:A.floatingAnchorIndex;if(O==0){A.source=o;A.sourceId=r}else{A.target=o;A.targetId=r}A.endpoints[O].removeConnection(A);A.suspendedEndpoint&&A.suspendedEndpoint.removeConnection(A);A.endpoints[O]=b;b.addConnection(A);R(f,A.scope,A);T(o,a.draggable,{});d.repaint(p);delete n[G]});B[V]=K(B[V],function(){var p=d.CurrentLibrary.getDragObject(arguments);
p=F(x(p),"dragId");p=n[p];p.endpoints[p.floatingAnchorIndex==null?1:p.floatingAnchorIndex].anchor.over(b.anchor)});B[W]=K(B[W],function(){var p=d.CurrentLibrary.getDragObject(arguments);p=F(x(p),"dragId");p=n[p];p.endpoints[p.floatingAnchorIndex==null?1:p.floatingAnchorIndex].anchor.out()});d.CurrentLibrary.initDroppable(x(b.canvas),B)}return b};this.Defaults={Anchor:null,Anchors:[null,null],Connector:null,Container:null,DragOptions:{},DropOptions:{},Endpoint:null,Endpoints:[null,null],EndpointStyle:{fillStyle:null},
EndpointStyles:[null,null],MaxConnections:null,PaintStyle:{lineWidth:10,strokeStyle:"red"},Scope:"_jsPlumb_DefaultScope"};this.connectorClass="_jsPlumb_connector";this.endpointClass="_jsPlumb_endpoint";this.Anchors={};this.Connectors={};this.Endpoints={};this.addEndpoint=function(a,b){b=d.extend({},b);var c=x(a),e=F(c,"id");b.source=c;N(e);c=new Z(b);R(k,e,c);var l=h[e];e=c.anchor.compute([l.left,l.top],C[e],c);c.paint(e);return c};this.addEndpoints=function(a,b){for(var c=[],e=0;e<b.length;e++)c.push(d.addEndpoint(a,
b[e]));return c};this.animate=function(a,b,c){var e=x(a),l=F(a,"id");c=c||{};a=d.CurrentLibrary.dragEvents.step;var o=d.CurrentLibrary.dragEvents.complete;c[a]=K(c[a],function(){g.repaint(l)});c[o]=K(c[o],function(){g.repaint(l)});d.CurrentLibrary.animate(e,b,c)};this.clearCache=function(){delete X;X={}};this.connect=function(a){if(!(a.sourceEndpoint&&a.sourceEndpoint.isFull()))if(!(a.targetEndpoint&&a.targetEndpoint.isFull())){a=new ka(a);R(f,a.scope,a);S(a.source);return a}};this.detach=function(a,
b){da(a,function(c){if(c.sourceId==a&&c.targetId==b||c.targetId==a&&c.sourceId==b){L(c.canvas,c.container);c.endpoints[0].removeConnection(c);c.endpoints[1].removeConnection(c);U(f,c.scope,c);return true}})};this.detachAll=function(a){a=F(a,"id");if((a=k[a])&&a.length)for(var b=0;b<a.length;b++){var c=a[b].connections.length;if(c>0)for(var e=0;e<c;e++){var l=a[b].connections[0];L(l.canvas,l.container);l.endpoints[0].removeConnection(l);l.endpoints[1].removeConnection(l);U(f,l.scope,l)}}};this.detachEverything=
function(){for(var a in k){var b=k[a];if(b&&b.length)for(var c=0;c<b.length;c++){var e=b[c].connections.length;if(e>0)for(var l=0;l<e;l++){var o=b[c].connections[0];L(o.canvas,o.container);o.endpoints[0].removeConnection(o);o.endpoints[1].removeConnection(o)}}}delete f;f={}};this.draggable=function(a,b){if(typeof a=="object"&&a.length)for(var c=0;c<a.length;c++){var e=x(a[c]);e&&T(e,true,b)}else(e=x(a))&&T(e,true,b)};this.extend=function(a,b){return d.CurrentLibrary.extend(a,b)};this.getConnections=
function(a){var b={};a=a||{};var c=function(t){var v=[];if(t)if(typeof t=="string")v.push(t);else v=t;return v},e=c(a.scope),l=c(a.source);a=c(a.target);for(var o in f)if(e.length>0?Q(e,o)!=-1:true){b[o]=[];for(c=0;c<f[o].length;c++){var r=f[o][c];(l.length>0?Q(l,r.sourceId)!=-1:true)&&(a.length>0?Q(a,r.targetId)!=-1:true)&&b[o].push({sourceId:r.sourceId,targetId:r.targetId})}}return b};this.getDefaultScope=function(){return E};this.hide=function(a){ia(a,"none")};this.makeAnchor=function(a,b){var c=
{};if(arguments.length==1)d.extend(c,a);else{c={x:a,y:b};if(arguments.length>=4)c.orientation=[arguments[2],arguments[3]];if(arguments.length==6)c.offsets=[arguments[4],arguments[5]]}var e=new ja(c);e.clone=function(){return new ja(c)};return e};this.repaint=function(a){var b=function(e){e=x(e);S(e)};if(typeof a=="object")for(var c=0;c<a.length;c++)b(a[c]);else b(a)};this.repaintEverything=function(){for(var a in k)S(x(a))};this.removeAllEndpoints=function(a){a=F(a,"id");d.detachAll(a);var b=k[a];
for(var c in b)L(b[c].canvas);k[a]=[]};this.removeEveryEndpoint=function(){for(var a in k){var b=k[a];if(b&&b.length)for(var c=0;c<b.length;c++)L(b[c].canvas,b[c].container)}delete k;k={}};this.removeEndpoint=function(a,b){var c=F(a,"id");k[c]&&U(k,c,b)&&L(b.canvas)};this.reset=function(){this.detachEverything();this.removeEveryEndpoint();this.clearCache()};this.setAutomaticRepaint=function(a){j=a};this.setDefaultNewCanvasSize=function(a){J=a};this.setDefaultScope=function(a){E=a};this.setDraggable=
function(a,b){return ea(a,function(c,e){w[e]=b;d.CurrentLibrary.isDragSupported(c)&&d.CurrentLibrary.setDraggable(c,b)})};this.setDraggableByDefault=function(a){H=a};this.setDebugLog=function(a){q=a};this.setRepaintFunction=function(a){m=a};this.show=function(a){ia(a,"block")};this.sizeCanvas=function(a,b,c,e,l){if(a){a.style.height=l+"px";a.height=l;a.style.width=e+"px";a.width=e;a.style.left=b+"px";a.style.top=c+"px"}};this.getTestHarness=function(){return{endpointCount:function(a){return(a=k[a])?
a.length:0},connectionCount:function(a){a=a||E;return(a=f[a])?a.length:0},findIndex:Q,getId:ca}};this.toggleVisible=this.toggle=la;this.toggleDraggable=function(a){return ea(a,function(b,c){var e=w[c]==null?H:w[c];e=!e;w[c]=e;d.CurrentLibrary.setDraggable(b,e);return e})};this.unload=function(){delete k;delete h;delete C;delete n;delete w};this.wrap=K;this.trace=ba;this.clearTrace=function(a,b){var c=D[a];if(c)if(b)c[b]=0;else c.DEFAULT=0};this.clearAllTraces=function(){delete D;D={}};this.getTrace=
function(a){return D[a]||{DEFAULT:0}}},d=window.jsPlumb=new u;d.getInstance=function(g){var i=new u;g&&d.extend(i.Defaults,g);return i}})();
(function(){jsPlumb.Anchors.TopCenter=jsPlumb.makeAnchor(0.5,0,0,-1);jsPlumb.Anchors.BottomCenter=jsPlumb.makeAnchor(0.5,1,0,1);jsPlumb.Anchors.LeftMiddle=jsPlumb.makeAnchor(0,0.5,-1,0);jsPlumb.Anchors.RightMiddle=jsPlumb.makeAnchor(1,0.5,1,0);jsPlumb.Anchors.Center=jsPlumb.makeAnchor(0.5,0.5,0,0);jsPlumb.Anchors.TopRight=jsPlumb.makeAnchor(1,0,0,-1);jsPlumb.Anchors.BottomRight=jsPlumb.makeAnchor(1,1,0,1);jsPlumb.Anchors.TopLeft=jsPlumb.makeAnchor(0,0,0,-1);jsPlumb.Anchors.BottomLeft=jsPlumb.makeAnchor(0,
1,0,1);jsPlumb.Connectors.Straight=function(){this.compute=function(u,d,g,i,q){g=Math.abs(u[0]-d[0]);i=Math.abs(u[1]-d[1]);var m=0.45*g,j=0.45*i;g*=1.9;i*=1.9;var k=Math.min(u[0],d[0])-m,f=Math.min(u[1],d[1])-j;if(g<2*q){g=2*q;k=u[0]+(d[0]-u[0])/2-q;m=(g-Math.abs(u[0]-d[0]))/2}if(i<2*q){i=2*q;f=u[1]+(d[1]-u[1])/2-q;j=(i-Math.abs(u[1]-d[1]))/2}return[k,f,g,i,u[0]<d[0]?g-m:m,u[1]<d[1]?i-j:j,u[0]<d[0]?m:g-m,u[1]<d[1]?j:i-j]};this.paint=function(u,d){d.beginPath();d.moveTo(u[4],u[5]);d.lineTo(u[6],u[7]);
d.stroke()}};jsPlumb.Connectors.Bezier=function(u){var d=this;this.majorAnchor=u||150;this.minorAnchor=10;this._findControlPoint=function(g,i,q,m,j){m=m.getOrientation();j=j.getOrientation();var k=[],f=d.majorAnchor,h=d.minorAnchor;if(m[0]!=j[0]||m[1]==j[1]){j[0]==0?k.push(q[0]<i[0]?g[0]+h:g[0]-h):k.push(g[0]+f*j[0]);j[1]==0?k.push(q[1]<i[1]?g[1]+h:g[1]-h):k.push(g[1]+f*m[1])}else{m[0]==0?k.push(i[0]<q[0]?g[0]+h:g[0]-h):k.push(g[0]-f*m[0]);m[1]==0?k.push(i[1]<q[1]?g[1]+h:g[1]-h):k.push(g[1]+f*j[1])}return k};
this.compute=function(g,i,q,m,j){j=j||0;var k=Math.abs(g[0]-i[0])+j,f=Math.abs(g[1]-i[1])+j,h=Math.min(g[0],i[0])-j/2,n=Math.min(g[1],i[1])-j/2,w=g[0]<i[0]?k-j/2:j/2,H=g[1]<i[1]?f-j/2:j/2,C=g[0]<i[0]?j/2:k-j/2;j=g[1]<i[1]?j/2:f-j/2;var E=d._findControlPoint([w,H],g,i,q,m);g=d._findControlPoint([C,j],i,g,m,q);i=Math.min(Math.min(w,C),Math.min(E[0],g[0]));q=Math.max(Math.max(w,C),Math.max(E[0],g[0]));if(q>k)k=q;if(i<0){h+=i;i=Math.abs(i);k+=i;E[0]+=i;w+=i;C+=i;g[0]+=i}i=Math.min(Math.min(H,j),Math.min(E[1],
g[1]));q=Math.max(Math.max(H,j),Math.max(E[1],g[1]));if(q>f)f=q;if(i<0){n+=i;i=Math.abs(i);f+=i;E[1]+=i;H+=i;j+=i;g[1]+=i}return[h,n,k,f,w,H,C,j,E[0],E[1],g[0],g[1]]};this.paint=function(g,i){i.beginPath();i.moveTo(g[4],g[5]);i.bezierCurveTo(g[8],g[9],g[10],g[11],g[6],g[7]);i.stroke()}};jsPlumb.Endpoints.Dot=function(u){u=u||{radius:10};var d=this;this.radius=u.radius;var g=0.5*this.radius,i=this.radius/3,q=function(m){try{return parseInt(m)}catch(j){if(m.substring(m.length-1)=="%")return parseInt(m.substring(0,
m-1))}};this.paint=function(m,j,k,f,h){var n=f.radius||d.radius;jsPlumb.sizeCanvas(k,m[0]-n,m[1]-n,n*2,n*2);m=k.getContext("2d");k=jsPlumb.extend({},f);if(k.fillStyle==null)k.fillStyle=h.strokeStyle;jsPlumb.extend(m,k);h=/MSIE/.test(navigator.userAgent)&&!window.opera;if(f.gradient&&!h){h=f.gradient;k=g;var w=i;if(h.offset)k=q(h.offset);if(h.innerRadius)w=q(h.innerRadius);h=[k,w];j=m.createRadialGradient(n,n,n,n+(j[0]==1?h[0]*-1:h[0]),n+(j[1]==1?h[0]*-1:h[0]),h[1]);for(h=0;h<f.gradient.stops.length;h++)j.addColorStop(f.gradient.stops[h][0],
f.gradient.stops[h][1]);m.fillStyle=j}m.beginPath();m.arc(n,n,n,0,Math.PI*2,true);m.closePath();m.fill()}};jsPlumb.Endpoints.Rectangle=function(u){u=u||{width:20,height:20};var d=this;this.width=u.width;this.height=u.height;this.paint=function(g,i,q,m,j){var k=m.width||d.width,f=m.height||d.height;jsPlumb.sizeCanvas(q,g[0]-k/2,g[1]-f/2,k,f);g=q.getContext("2d");q=jsPlumb.extend({},m);if(q.fillStyle==null)q.fillStyle=j.strokeStyle;jsPlumb.extend(g,q);j=/MSIE/.test(navigator.userAgent)&&!window.opera;
if(m.gradient&&!j){i=g.createLinearGradient(i[0]==1?k:i[0]==0?k/2:0,i[1]==1?f:i[1]==0?f/2:0,i[0]==-1?k:i[0]==0?f/2:0,i[1]==-1?f:i[1]==0?f/2:0);for(j=0;j<m.gradient.stops.length;j++)i.addColorStop(m.gradient.stops[j][0],m.gradient.stops[j][1]);g.fillStyle=i}g.beginPath();g.rect(0,0,k,f);g.closePath();g.fill()}};jsPlumb.Endpoints.Triangle=function(u){u=u||{width:15,height:15};var d=this;this.width=u.width;this.height=u.height;this.paint=function(g,i,q,m){var j=m.width||d.width,k=m.height||d.height;
jsPlumb.sizeCanvas(q,g[0]-j/2,g[1]-k/2,j,k);g=q.getContext("2d");var f=q=0,h=0;if(i[0]==1){q=j;f=k;h=180}if(i[1]==-1){q=j;h=90}if(i[1]==1){f=k;h=-90}g.fillStyle=m.fillStyle;g.translate(q,f);g.rotate(h*Math.PI/180);g.beginPath();g.moveTo(0,0);g.lineTo(j/2,k/2);g.lineTo(0,k);g.closePath();g.fill()}};jsPlumb.Endpoints.Image=function(u){var d=this;this.img=new Image;this.img.onload=function(){d.ready=true};this.img.src=u.url;var g=function(i,q,m,j){q=d.img.width||j.width;j=d.img.height||j.height;jsPlumb.sizeCanvas(m,
i[0]-q/2,i[1]-j/2,q,j);m.getContext("2d").drawImage(d.img,0,0)};this.paint=function(i,q,m,j,k){d.ready?g(i,q,m,j,k):window.setTimeout(function(){d.paint(i,q,m,j,k)},200)}}})();
(function(){var u=new Class({Extends:Fx.Morph,onStep:null,initialize:function(f,h){this.parent(f,h);if(h.onStep)this.onStep=h.onStep},step:function(){this.parent();if(this.onStep)try{this.onStep()}catch(f){}}}),d={},g={},i={},q={},m=function(f,h,n){if(h){var w=h.get("id");if(w)(w=g[w])&&w[n]&&w[n](f,h)}},j=function(f,h){if(f){var n=f.get("id");if(n)if(n=g[n])if(n.hoverClass)h?f.addClass(n.hoverClass):f.removeClass(n.hoverClass)}},k=function(f,h,n){var w=f[h];if(!w){w=[];f[h]=w}w.push(n)};jsPlumb.CurrentLibrary=
{dragEvents:{start:"onStart",stop:"onComplete",drag:"onDrag",step:"onStep",over:"onEnter",out:"onLeave",drop:"onDrop",complete:"onComplete"},appendElement:function(f,h){jsPlumb.CurrentLibrary.getElementObject(h).grab(f)},extend:function(f,h){return $extend(f,h)},getElementObject:function(f){return $(f)},getOffset:function(f){f=f.getPosition();return{left:f.x,top:f.y}},getSize:function(f){f=f.getSize();return[f.x,f.y]},getAttribute:function(f,h){return f.get(h)},setAttribute:function(f,h,n){f.set(h,
n)},addClass:function(f,h){f.addClass(h)},initDraggable:function(f,h){var n=q[f.get("id")];if(!n){var w=0,H=null,C=jsPlumb.Defaults.DragOptions.zIndex||2E3;h.onStart=jsPlumb.wrap(h.onStart,function(){w=this.element.getStyle("z-index");this.element.setStyle("z-index",C);if(jsPlumb.Defaults.DragOptions.cursor){H=this.element.getStyle("cursor");this.element.setStyle("cursor",jsPlumb.Defaults.DragOptions.cursor)}});h.onComplete=jsPlumb.wrap(h.onComplete,function(){this.element.setStyle("z-index",w);H&&
this.element.setStyle("cursor",H)});var E=h.scope||jsPlumb.Defaults.Scope;n=function(J){return J.get("id")!=f.get("id")};n=d[E]?d[E].filter(n):[];h.droppables=n;h.onLeave=jsPlumb.wrap(h.onLeave,function(J,D){if(D){j(D,false);m(J,D,"onLeave")}});h.onEnter=jsPlumb.wrap(h.onEnter,function(J,D){if(D){j(D,true);m(J,D,"onEnter")}});h.onDrop=function(J,D){if(D){j(D,false);m(J,D,"onDrop")}};n=new Drag.Move(f,h);k(i,E,n);k(q,f.get("id"),n);h.disabled&&n.detach()}return n},isDragSupported:function(){return typeof Drag!=
"undefined"},setDraggable:function(f,h){var n=q[f.get("id")];n&&n.each(function(w){h?w.attach():w.detach()})},initDroppable:function(f,h){var n=h.scope||jsPlumb.Defaults.Scope;k(d,n,f);g[f.get("id")]=h;var w=function(H){return H.element!=f};n=i[n]?i[n].filter(w):[];for(w=0;w<n.length;w++)n[w].droppables.push(f)},isDropSupported:function(){if(typeof Drag!=undefined)return typeof Drag.Move!=undefined;return false},animate:function(f,h,n){(new u(f,n)).start(h)},getUIPosition:function(f){f=f[0];return{left:f.offsetLeft,
top:f.offsetTop}},getDragObject:function(f){return f[0]},removeElement:function(f){jsPlumb.CurrentLibrary.getElementObject(f).dispose()},getScrollLeft:function(){return null},getScrollTop:function(){return null}}})();
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){e.exports=n(297)},125:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=n(49),l=n(17),s=function(e,t){var n;return function(){var a=this,r=arguments;clearTimeout(n),n=setTimeout(function(){return e.apply(a,r)},t)}},u=n(28),d=n(18),p=n(4),b="INIT_APP",f="SAVE_DOABLE",h="COMPLETE_DOABLE",g="DELETE_DOABLE",m="UPDATE_SECTION_INDEX",v="UPDATE_PAGE_INDEX",O="CREATE_OPTION",w=function(e,t){return{type:v,indexes:{newPageIndex:e,sectionIndex:t}}},x={pageIndexes:[0,0,0],sectionIndex:0,doables:[{id:0,name:"get almond milk",notes:"http://amzn.eu/d/0KIJc45",isResult:!1,area:"",context:"",deadline:"",schedule:"",reminder:"",createdAt:Date.now()},{id:1,name:"rule the world",notes:"",isResult:!1,area:"personal",context:"",deadline:"",schedule:"",reminder:"",createdAt:Date.now()},{id:2,name:"call mom",notes:"+41 12 345 67 89",isResult:!1,area:"",context:"",deadline:"",schedule:"",reminder:"",createdAt:Date.now()}],areas:{personal:{name:"Personal"}},contexts:{codeworks:{name:"Office"},home:{name:"Home"},commute:{name:"Commute"}}},y=(n(125),n(23)),j=n(24),E=n(26),S=n(25),I=n(27),C=n(32),k=n.n(C),A=n(38),D=n.n(A),T=n(111),_=n.n(T),P=n(114),N=n.n(P),W=n(112),R=n.n(W),L=n(20),q=n.n(L),F=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).defaultFormState={name:"",notes:"",isResult:"",area:"",context:"",deadline:"",schedule:"",reminder:""},n.state={saveable:!1,data:n.defaultFormState},n.componentWillMount=function(){n.props.isQuickEntry||n.setState(function(e){return Object(p.a)({},e,{data:Object(p.a)({},n.state.data,n.props.data)})})},n.handleSubmit=function(e){e.preventDefault(),n.undebouncedSave(n.state.data),n.setState(function(e){return"quickEntry"in n.props?Object(p.a)({},e,{data:n.defaultFormState,saveable:!1}):Object(p.a)({},e,{saveable:!1})})},n.showToast=function(e,t){Object(L.toast)({message:e,duration:1e3})},n.undebouncedSave=function(e,t){n.props.saveDoable(e),n.showToast("Saved!")},n.save=s(n.undebouncedSave,250),n.handleInputChange=function(e){var t=e.target,a=Object(p.a)({},n.state.data,Object(u.a)({},t.name,t.value)),r=""!==a.name;!n.props.quickEntry&&r&&n.save(a,t),n.setState(function(e){return Object(p.a)({},e,{saveable:r,data:a})})},n.handleSelectChange=function(e,t){var a=e.value,r=Object(p.a)({},n.state.data,Object(u.a)({},t,a));n.props.quickEntry||(n.save(r),n.showToast("Saved!")),n.setState(function(e){return Object(p.a)({},e,{data:r})})},n.handleContextChange=function(e){n.handleSelectChange(e,"context")},n.handleAreaChange=function(e){n.handleSelectChange(e,"area")},n.handleCreateOption=function(e,t){var a=e.replace(/\W/g,"").toLowerCase();n.props.createOption(Object(u.a)({},a,{name:e}),t),n.handleSelectChange({value:a},t)},n.handleCreateOptionArea=function(e){n.handleCreateOption(e,"area")},n.handleCreateOptionContext=function(e){n.handleCreateOption(e,"context")},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.state.data,t=e.name,n=e.notes,a=e.area;return r.a.createElement("form",Object.assign({noValidate:!0},U(!!this.props.quickEntry).form,{onSubmit:this.handleSubmit}),r.a.createElement(D.a,Object.assign({name:"name",type:"text",placeholder:"what needs doing?",fullWidth:!0,required:!0,autoFocus:this.props.autofocus,value:t,onChange:this.handleInputChange,multiline:!0,disableUnderline:!0},U().name)),r.a.createElement(_.a,Object.assign({name:"notes",label:"Notes",fullWidth:!0,multiline:!0,value:n,onChange:this.handleInputChange},U().input)),!this.props.quickEntry&&r.a.createElement(R.a,{isSearchable:!0,styles:U().reactSelect,options:Object.entries(this.props.areas).map(function(e){return{value:e[0],label:e[1].name}}),value:a?{label:this.props.areas[a].name,value:a}:"",onChange:this.handleAreaChange,onCreateOption:this.handleCreateOptionArea,placeholder:"Select Area..."}),this.props.quickEntry&&r.a.createElement(N.a,Object.assign({type:"submit",variant:"contained",disabled:!this.state.saveable},U().button),"Save"))}}]),t}(a.Component),U=function(e){return{form:{style:{maxWidth:"800px",height:"".concat(window.innerHeight,"px"),margin:"0 auto",padding:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxSizing:"border-box",paddingBottom:e?"calc(31.8% + 30px)":"31.8%",background:"#cb9078"}},name:{style:{margin:"8px 0",fontSize:"1.618rem"}},input:{style:{margin:"8px 0",overflow:"hidden",width:"100%",position:"relative",color:"#eca690"}},button:{style:{background:"#ffe1e1de",marginTop:"10px"}},reactSelect:{container:function(){return{position:"relative",width:"100%",margin:"8px 0"}},control:function(e){return Object(p.a)({},e,{borderColor:"rgba(0,0,0,0.42)",backgroundColor:"transparent"})},placeholder:function(e){return Object(p.a)({},e,{color:"rgba(0,0,0,0.42)"})},indicatorSeparator:function(e){return Object(p.a)({},e,{backgroundColor:"rgba(0,0,0,0.42)"})},dropdownIndicator:function(e){return Object(p.a)({},e,{color:"rgba(0,0,0,0.42)"})},clearIndicator:function(e){return Object(p.a)({},e,{color:"rgba(0,0,0,0.42)"})}}}},z=Object(l.b)(function(e,t){return{areas:e.areas,contexts:e.contexts,data:e.doables.find(function(e){return e.id===t.doableId})}},function(e){return{saveDoable:function(t){return e(function(e){return{type:f,doable:e}}(t))},createOption:function(t,n){return e(function(e,t){return{type:O,data:{option:e,type:t}}}(t,n))}}})(F),B=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={pageIndex:0},n.renderReviewables=function(e){return e.map(function(e){return r.a.createElement(z,{key:e.id,doableId:e.id})})},n.handleChangeIndex=function(e){console.log(n.props.handleChangeIndex),n.props.handleChangeIndex(e,1)},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",M.container,r.a.createElement(k.a,{enableMouseEvents:!0,onChangeIndex:this.handleChangeIndex},this.renderReviewables(this.props.reviewables)))}}]),t}(a.Component),M={stepper:{style:{width:"100%",position:"absolute",bottom:0,justifyContent:"center",backgroundColor:"transparent"}},container:{style:{position:"relative"}}},X=B,J=(n(295),function(e){switch(e){case"complete":return{style:{textDecoration:"line-through",color:"rgba(0,0,0,0.42)",backgroundColor:"#cb9078",opacity:"0.5"}};default:return{style:{backgroundColor:"#cb9078"}}}}),V=function(e){var t=e.item;document.querySelectorAll(".mbsc-lv-item div:not([class])").forEach(function(e){return e.style.display="none"});var n=t.id,a=t.name,o=t.status;return r.a.createElement("li",Object.assign({"data-id":n},J(o)),a)};var G={container:{style:{maxWidth:"800px",height:"100vh",boxSizing:"border-box",background:"#cb9078",margin:"0 auto",color:"rgba(0,0,0,0.87)"}},header:{style:{color:"rgba(0,0,0,0.87)"}},list:{style:{backgroundColor:"#cb9078"}},frm:{style:{backgroundColor:"transparent",fontSize:"5rem"}}},H=Object(l.b)(function(e){return e},function(e){return{completeDoable:function(t){return e(function(e){return{type:h,id:e}}(t))},deleteDoable:function(t){return e(function(e){return{type:g,id:e}}(t))}}},function(e,t,n){return Object(p.a)({},n,{area:e.areas[n.area].name,doables:e.doables.filter(function(e){return e.area===n.area})},t)})(function(e){return r.a.createElement(q.a.Form,Object.assign({theme:"material",lang:"de"},G.frm),r.a.createElement(q.a.FormGroup,G.container,r.a.createElement(q.a.FormGroupTitle,G.header,e.area),r.a.createElement(q.a.Listview,Object.assign({theme:"material",lang:"de",itemType:V,data:e.doables,sortable:{handle:"left"},stages:{left:[{percent:30,icon:"checkmark",color:"green",action:function(t){var n=t.target;e.completeDoable(n.getAttribute("data-id")),q.a.toast({message:"Done"})}}],right:[{percent:-40,icon:"remove",color:"red",action:function(t,n){var a=t.target;e.deleteDoable(a.getAttribute("data-id")),q.a.toast({message:"Deleted"})}}]},undoText:"Undo",navigateOnDrop:!0,swipe:function(t){var n=t.target;return"complete"!==e.doables.find(function(e){return e.id===+n.getAttribute("data-id")}).status||"left"},onSortStart:e.disableSwiping,onSortEnd:e.enableSwiping,onSlideStart:e.disableSwiping,onSlideEnd:e.enableSwiping},G.list))))}),K=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={pageIndex:0},n.renderAreas=function(e){return e.map(function(e){return r.a.createElement(H,Object.assign({key:e,area:e},n.props.swipeToggler))})},n.handleChangeIndex=function(e){n.props.updatePageIndex(e,2)},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return document.querySelectorAll(".mbsc-lv-item div:not([class])").forEach(function(e){return e.style.display="none"}),r.a.createElement("div",Q.container,r.a.createElement(k.a,{enableMouseEvents:!0,disabled:this.props.disabled,onChangeIndex:this.handleChangeIndex},this.renderAreas(this.props.areas)))}}]),t}(a.Component),Q={stepper:{style:{width:"100%",position:"absolute",bottom:0,justifyContent:"center",backgroundColor:"transparent"}},container:{style:{position:"relative"}}},$=Object(l.b)(function(e,t){return Object(p.a)({areas:Object(d.a)(new Set(e.doables.map(function(e){return e.area}).filter(function(e){return""!==e})))},t)},function(e){return{updatePageIndex:function(){return e(w.apply(void 0,arguments))}}})(K);var Y={dot:function(e){return{style:Object(p.a)({display:"inline-block",width:"8px",height:"8px",margin:"8px 1px 0",borderRadius:"50%",border:"1px solid #eca690",transition:"all 250ms ease-out"},e&&{border:"none",backgroundColor:"#ffe1e1de"})}},section:function(e){return{style:Object(p.a)({display:"flex",flexDirection:"row"},e&&{})}},label:function(e){return{style:Object(p.a)({margin:0,fontSize:"0.87rem",color:"#eca690",transition:"all 250ms ease-in"},e&&{color:"#ffe1e1de"})}},container:{style:{width:"100%",position:"absolute",bottom:"5px",display:"flex",flexDirection:"column",alignItems:"center",userSelect:"none"}}},Z=Object(l.b)(function(e){return{pageIndexes:e.pageIndexes,sectionIndex:e.sectionIndex,doables:e.doables,reviewables:e.doables.filter(function(e){return""===e.area}),areas:Object(d.a)(new Set(e.doables.map(function(e){return e.area}).filter(function(e){return""!==e})))}},function(e){return{}})(function(e){var t=function(e){return r.a.createElement("div",Y.dot(e.active))},n=function(e,n,a){return Array(e).fill(null).map(function(e,o){return r.a.createElement(t,{key:o,active:n===o&&a})})};return r.a.createElement("div",Y.container,function(a,o){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",Y.section(0===o),r.a.createElement("p",Y.label(0===o),"dr",r.a.createElement(t,{active:0===o}),"p")),(i=1===o,c=a[1],(l=e.reviewables.length)?r.a.createElement("section",Y.section(i),l>1?r.a.createElement("p",Y.label(i),"revi",n(l,c,i)):r.a.createElement("p",Y.label(i),"review")):null),function(e,t,a){return a?r.a.createElement("section",Y.section(e),r.a.createElement("p",Y.label(e),"d",n(a,t,e))):null}(2===o,a[2],e.areas.length));var i,c,l}(e.pageIndexes,e.sectionIndex))}),ee=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={swipeable:!0,sectionIndex:0,reviewIndex:0,areaIndex:0},n.swipeToggler={enableSwiping:function(){return n.setState(Object(p.a)({},n.state,{swipeable:!0}))},disableSwiping:function(){return n.setState(Object(p.a)({},n.state,{swipeable:!1}))}},n.handleChangeSectionIndex=function(e){n.props.updateSectionIndex(e)},n.handleChangePageIndex=function(e,t){n.props.updatePageIndex(e,t)},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"componentWillMount",value:function(){this.props.initApp()}},{key:"render",value:function(){var e=[r.a.createElement(z,{key:"entrySection",quickEntry:!0,autofocus:!0})];return this.props.reviewables.length&&e.push(r.a.createElement(X,{key:"reviewSection",reviewables:Object(d.a)(this.props.reviewables),handleChangeIndex:this.handleChangePageIndex})),this.props.areas.length&&e.push(r.a.createElement($,{key:"areaSection",disabled:!this.state.swipeable,swipeToggler:this.swipeToggler})),r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{axis:"y",containerStyle:{height:"".concat(window.innerHeight,"px")},disabled:!this.state.swipeable,enableMouseEvents:!0,onChangeIndex:this.handleChangeSectionIndex},e),r.a.createElement(Z,null))}}]),t}(a.Component),te=Object(l.b)(function(e){return Object(p.a)({},e,{reviewables:e.doables.filter(function(e){return""===e.area}),areas:Object(d.a)(new Set(e.doables.map(function(e){return e.area}).filter(function(e){return""!==e})))})},function(e){return{updateSectionIndex:function(){return e(function(e){return{type:m,newSectionIndex:e}}.apply(void 0,arguments))},updatePageIndex:function(){return e(w.apply(void 0,arguments))},initApp:function(){return e({type:b,loadedState:t});var t}}})(ee),ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var re=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),oe=Object(c.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(p.a)({},x,e);case f:var n;return n="id"in t.doable?e.doables.map(function(e){return e.id!==t.doable.id?e:t.doable}):Object(d.a)(e.doables).concat([Object(p.a)({id:e.doables.length},t.doable,{createdAt:Date.now()})]),Object(p.a)({},e,{doables:n});case h:return Object(p.a)({},e,{doables:e.doables.map(function(e){return e.id!==+t.id?e:Object(p.a)({},e,{status:"complete"})})});case g:return Object(p.a)({},e,{doables:Object(d.a)(e.doables.filter(function(e){return e.id!==+t.id}))});case m:return Object(p.a)({},e,{sectionIndex:t.newSectionIndex});case v:var a=Object(d.a)(e.pageIndexes);return a[t.indexes.sectionIndex]=t.indexes.newPageIndex,Object(p.a)({},e,{pageIndexes:a});case O:var r=t.data,o=r.option,i=r.type;return Object(p.a)({},e,Object(u.a)({},"".concat(i,"s"),Object(p.a)({},e["".concat(i,"s")],o)));default:return e}},re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());oe.subscribe(s(function(){var e=oe.getState();!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}({doables:e.doables,areas:e.areas,contexts:e.contexts})}),1e3),i.a.render(r.a.createElement(l.a,{store:oe},r.a.createElement(te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/peanuts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/peanuts","/service-worker.js");ne?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ae(t,e)})}}()}},[[116,2,1]]]);
//# sourceMappingURL=main.3b55e217.chunk.js.map
(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(45),a=n.n(i),c=(n(136),n(137),n(20)),o=n(17),l=n(13),d=n(222),j=n(225),u=n(106),m=n.n(u),b=n(218),x=n(224),h=n(107),p=n.n(h),O=n(109),f=n.n(O),g=n(211),v=n(213),w=n(217),y=n(105),C=n.n(y),S=n(104),N=n.n(S),B=n(73),k=n.n(B),D=n(108),F=n.n(D),I=n(212),z=n(15),U=Object(I.a)((function(e){return{middleDiv:{margin:z.isBrowser?"20px 15px 20px 15px":"35px 15px 20px 15px",color:"white",display:"flex",justifyContent:"space-between"},leftDiv:{display:"flex",flexDirection:"column",justifyContent:"space-between",paddingBottom:8,minWidth:z.isBrowser?"150px":100},degreesDiv:{fontSize:z.isBrowser?"100px":"65px",marginTop:z.isBrowser?-24:-18,position:"relative",textAlign:"right"},degreeSymbol:{position:"absolute",fontSize:z.isBrowser?"35px":"23px",right:5,bottom:z.isBrowser?25:17},weatherText:{fontSize:z.isBrowser?22:18,paddingBottom:14,textTransform:"uppercase",fontWeight:"bold"},tableStyle:{width:"100%",marginLeft:z.isBrowser?40:20},tdLeft:{fontSize:z.isBrowser?null:12},td:{padding:z.isBrowser?"8px 8px 8px 8px":"5px 5px 5px 5px",textAlign:"left",fontSize:z.isBrowser?null:12},cityData:{fontSize:z.isBrowser?null:12}}})),_=n(1),T=function(e){var t=e.weatherData,n=e.settings,r=U();return Object(_.jsxs)("div",{className:r.middleDiv,children:[Object(_.jsxs)("div",{className:r.leftDiv,children:[Object(_.jsxs)("div",{className:r.degreesDiv,children:["C"===n.tempUnit?parseInt(t.current.temp_c):parseInt(t.current.temp_f),"\xb0",Object(_.jsx)("span",{className:r.degreeSymbol,children:n.tempUnit})]}),Object(_.jsxs)("div",{className:r.cityData,children:[t.location.name,", ",t.location.country]}),Object(_.jsx)("div",{className:r.cityData,children:t.location.localtime})]}),Object(_.jsx)("table",{className:r.tableStyle,children:Object(_.jsxs)("tbody",{children:[Object(_.jsx)("tr",{children:Object(_.jsx)("td",{className:r.weatherText,colSpan:"2",children:t.current.condition.text})}),Object(_.jsxs)("tr",{children:[Object(_.jsxs)("td",{className:r.tdLeft,children:["Feels Like: \xa0","C"===n.tempUnit?t.current.feelslike_c:t.current.feelslike_f," \xb0"]}),Object(_.jsxs)("td",{className:r.td,children:["Wind:","km"===n.rangeUnit?" ".concat(t.current.wind_kph," kph"):" ".concat(t.current.wind_mph," mph")]})]}),Object(_.jsxs)("tr",{children:[Object(_.jsxs)("td",{className:r.tdLeft,children:["Pressure:","in"===n.pressureUnit?" ".concat(t.current.pressure_in," in"):" ".concat(t.current.pressure_mb," mb")]}),Object(_.jsxs)("td",{className:r.td,children:["Visibility:","km"===n.rangeUnit?" ".concat(t.current.vis_km," km"):" ".concat(t.current.vis_miles," mi")]})]}),Object(_.jsxs)("tr",{children:[Object(_.jsxs)("td",{className:r.tdLeft,children:["Humidity: ",t.current.humidity," %"]}),Object(_.jsxs)("td",{className:r.td,children:["Rain Chance: ",t.forecast.forecastday[0].day.daily_chance_of_rain," %"]})]}),Object(_.jsxs)("tr",{children:[Object(_.jsxs)("td",{className:r.tdLeft,children:["Sunrise: ",t.forecast.forecastday[0].astro.sunrise]}),Object(_.jsxs)("td",{className:r.td,children:["Sunset: ",t.forecast.forecastday[0].astro.sunset]})]})]})})]})},L=n(231),M=n(226),H=n(230),W=n(228),A=n(229),R=n(227),P=n(198),E="https://api.weatherapi.com/v1/forecast.json",J="0efcd722ee444b57849103704210710",q={show:!1,text:"none",closeFunc:function(){return null}},K=Object(r.forwardRef)((function(e,t){return Object(_.jsx)(P.a,Object(c.a)({direction:"up",ref:t},e))})),V=function(e){var t=e.text,n=e.closeFunc;return Object(_.jsxs)(M.a,{open:!0,fullWidth:!0,TransitionComponent:K,keepMounted:!0,onClose:function(){return n(q)},children:[Object(_.jsx)(R.a,{children:"Error"}),Object(_.jsx)(W.a,{children:Object(_.jsx)(A.a,{children:t})}),Object(_.jsx)(H.a,{children:Object(_.jsx)(L.a,{variant:"contained",color:"secondary",onClick:function(){return n(q)},children:"Close"})})]})},G=n(223),Q=n(3),X=n(214),Y=n(100),Z=n.n(Y),$=n(101),ee=n.n($),te=n(99),ne=n.n(te),re=n(102),se=n.n(re),ie=n(103),ae=n.n(ie),ce=Object(I.a)((function(e){return{mainHolder:{display:"grid",gridTemplateColumns:"auto auto auto",alignItems:"center",margin:"0px 12px 0px 12px"},buttons:{margin:"10px 12px 10px 12px"}}})),oe=Object(r.forwardRef)((function(e,t){return Object(_.jsx)(P.a,Object(c.a)({direction:"up",ref:t},e))})),le=function(e){var t=e.data,n=e.setData,s=e.saveFunc,i=e.closeFunc,a=ce(),o=Object(r.useState)(t),j=Object(l.a)(o,2),u=j[0],m=j[1],b=function(e,t){var n=Object(c.a)(Object(c.a)({},u.settings),{},Object(Q.a)({},e,t));m(Object(c.a)(Object(c.a)({},u),{},{settings:n}))};return Object(_.jsxs)(M.a,{open:!0,TransitionComponent:oe,keepMounted:!0,onClose:function(){return i(!1)},children:[Object(_.jsx)(R.a,{children:"Settings"}),Object(_.jsxs)("div",{className:a.mainHolder,children:[Object(_.jsx)(k.a,{sx:{m:1},color:"secondary"}),"Home",Object(_.jsx)(X.a,{sx:{m:1,minWidth:50},variant:"outlined",size:"small",value:u.settings.home,onChange:function(e){return b("home",e.target.value)}}),Object(_.jsx)(ne.a,{sx:{m:1},color:"secondary"}),"Temperature",Object(_.jsx)(d.a,{sx:{m:1,minWidth:50},children:Object(_.jsxs)(v.a,{size:"small",value:u.settings.tempUnit,onChange:function(e){return b("tempUnit",e.target.value)},children:[Object(_.jsx)(w.a,{value:"C",children:"Celsius (C\xb0)"}),Object(_.jsx)(w.a,{value:"F",children:"Fahrenheit (F\xb0)"})]})}),Object(_.jsx)(Z.a,{sx:{m:1},color:"secondary"}),"Speed/Range",Object(_.jsx)(d.a,{sx:{m:1,minWidth:50},children:Object(_.jsxs)(v.a,{size:"small",value:u.settings.rangeUnit,onChange:function(e){return b("rangeUnit",e.target.value)},children:[Object(_.jsx)(w.a,{value:"km",children:"Kilometers (km)"}),Object(_.jsx)(w.a,{value:"mi",children:"Miles (mi)"})]})}),Object(_.jsx)(ee.a,{sx:{m:1},color:"secondary"}),"Pressure",Object(_.jsx)(d.a,{sx:{m:1,minWidth:50},children:Object(_.jsxs)(v.a,{size:"small",value:u.settings.pressureUnit,onChange:function(e){return b("pressureUnit",e.target.value)},children:[Object(_.jsx)(w.a,{value:"in",children:"Inches of mercury (in)"}),Object(_.jsx)(w.a,{value:"mb",children:"Millibars (mb)"})]})})]}),Object(_.jsxs)(H.a,{className:a.buttons,children:[Object(_.jsx)(L.a,{startIcon:Object(_.jsx)(se.a,{}),variant:"contained",color:"warning",className:a.test,onClick:function(){n(u),s(u),i(!1)},children:"Save"}),Object(_.jsx)(L.a,{startIcon:Object(_.jsx)(ae.a,{}),variant:"contained",color:"secondary",onClick:function(){return i(!1)},children:"Close"})]})]})},de=Object(I.a)((function(e){return{mainHolder:{margin:5,padding:5,backgroundColor:"rgb(255 255 255 / 20%)",borderRadius:4,border:"1px solid rgb(255 255 255 / 50%)",fontSize:"0.75rem",color:e.palette.primary.main,height:z.isBrowser?90:null},errorDiv:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},singleDay:{position:"relative",display:"flex",flexDirection:"column",alignItems:"start",height:"100%",justifyContent:z.isBrowser?"space-between":"flex-start"},dayName:{position:"absolute",top:0,right:0},weatherText:{fontSize:"0.65rem"},middleDiv:{display:"flex",alignItems:"end",width:"100%",justifyContent:"space-between"},tempsDiv:{fontSize:z.isBrowser?"0.87rem":"1rem",paddingBottom:z.isBrowser?3:0,margin:z.isBrowser?null:"5px 0px 5px 0px",textAlign:z.isBrowser?"right":"center",width:"100%"},imageStyle:{marginTop:z.isBrowser?-5:0,width:z.isBrowser?55:65,height:z.isBrowser?55:65}}})),je=function(e){var t=e.data,n=e.settings,r=de();return Object(_.jsx)("div",{className:r.mainHolder,children:t?function(){var e=new Date(t.date).toLocaleDateString("en-US",{weekday:"short",day:"2-digit"}),s="".concat(parseInt(t.day.mintemp_c),"\xb0 ").concat(parseInt(t.day.maxtemp_c),"\xb0");return"F"===n.tempUnit&&(s="".concat(parseInt(t.day.mintemp_f),"\xb0 ").concat(parseInt(t.day.maxtemp_f),"\xb0")),z.isBrowser?Object(_.jsxs)("div",{className:r.singleDay,children:[Object(_.jsx)("div",{className:r.dayName,children:e}),Object(_.jsxs)("div",{className:r.middleDiv,children:[Object(_.jsx)("img",{className:r.imageStyle,src:t.day.condition.icon,alt:"weather"}),Object(_.jsx)("div",{className:r.tempsDiv,children:s})]}),Object(_.jsx)("div",{className:r.weatherText,children:t.day.condition.text})]}):Object(_.jsxs)("div",{className:r.singleDay,children:[e,Object(_.jsx)("img",{className:r.imageStyle,src:t.day.condition.icon,alt:"weather"}),Object(_.jsx)("div",{className:r.tempsDiv,children:s}),Object(_.jsx)("div",{className:r.weatherText,children:t.day.condition.text})]})}():Object(_.jsx)("div",{className:r.errorDiv,children:Object(_.jsx)(G.a,{})})})},ue=Object(I.a)((function(e){return{mainDiv:{margin:z.isBrowser?40:0,width:z.isBrowser?550:"100%",height:z.isBrowser?475:"100%",border:"1px solid black",backgroundColor:"#2b3336"},toolbarDiv:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:10},buttonsBar:{display:"flex",alignItems:"center"},searchField:{backgroundColor:"rgb(255 255 255 / 20%)","& .MuiInputBase-input":{color:"white"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"rgb(255 255 255 / 50%)"},width:300},favoritesBar:{margin:"0px 10px 0px 10px",display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:40},selectStyle:{backgroundColor:"rgb(255 255 255 / 20%)",width:300,"& .MuiSvgIcon-root":{color:"white"},"& .MuiInputBase-input":{color:"white"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"rgb(255 255 255 / 50%)"}},progressDiv:{textAlign:"center",margin:"40px 20px 20px 20px"},weekDays:{margin:10,display:"grid",gridTemplateColumns:"25% 25% 25% 25%"},mobileMenu:{position:"fixed",top:15,right:15,display:"flex",flexDirection:"column"}}})),me=JSON.parse(window.localStorage.getItem("weatherSettings"))||{settings:{home:"Pleven",tempUnit:"C",rangeUnit:"km",pressureUnit:"in"},favorites:[{name:"sofia",info:"Sofia, Bulgaria"},{name:"chelyabinsk",info:"Chelyabinsk, Russia"},{name:"dakar",info:"Dakar, Senegal"}]},be=function(){var e=ue(),t=Object(r.useState)(null),n=Object(l.a)(t,2),s=n[0],i=n[1],a=Object(r.useState)(me.settings.home),u=Object(l.a)(a,2),h=u[0],O=u[1],y=Object(r.useState)(!1),S=Object(l.a)(y,2),B=S[0],D=S[1],I=Object(r.useState)(""),U=Object(l.a)(I,2),L=U[0],M=U[1],H=Object(r.useState)(""),W=Object(l.a)(H,2),A=W[0],R=W[1],P=Object(r.useState)(q),K=Object(l.a)(P,2),Q=K[0],X=K[1],Y=Object(r.useState)(me),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(r.useState)(!1),ne=Object(l.a)(te,2),re=ne[0],se=ne[1];Object(r.useEffect)((function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Sofia",t="".concat(E,"?key=").concat(J,"&q=").concat(e,"&days=5&aqi=no&alerts=no&lang=").concat("en","&hour=24");return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log(e.message)}))})(h).then((function(e){e.error?X({show:!0,text:e.error.message,closeFunc:X}):i(e)})).catch((function(e){X({show:!0,text:e.message,closeFunc:X})}))}),[h]);var ie=function(e){return window.localStorage.setItem("weatherSettings",JSON.stringify(e))},ae=function(e){return O(A)};return Object(_.jsxs)("div",{className:e.mainDiv,children:[Object(_.jsxs)("div",{className:e.toolbarDiv,children:[Object(_.jsx)(d.a,{variant:"outlined",children:Object(_.jsx)(b.a,{type:"text",placeholder:"Search",size:"small",className:e.searchField,value:A,onChange:function(e){return R(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?ae(e.key):null},endAdornment:Object(_.jsx)(j.a,{position:"end",children:Object(_.jsx)(x.a,{edge:"end",onClick:ae,children:Object(_.jsx)(m.a,{color:"primary"})})})})}),Object(_.jsxs)("div",{className:z.isBrowser?e.buttonsBar:e.mobileMenu,children:[s?function(e,t){var n=$.favorites.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()})).length;return Object(_.jsx)(g.a,{title:n?"Remove from Favorites":"Add to Favorites",arrow:!0,children:Object(_.jsx)(x.a,{onClick:n?function(){return function(e){var t=$.favorites.filter((function(t){return t.name.toLowerCase()!==e.toLowerCase()}));L===e&&M(t[0].name),ie(Object(c.a)(Object(c.a)({},$),{},{favorites:t})),ee(Object(c.a)(Object(c.a)({},$),{},{favorites:t}))}(e)}:function(){return function(e,t){var n=[].concat(Object(o.a)($.favorites),[{name:e,info:"".concat(e,", ").concat(t)}]);ie(Object(c.a)(Object(c.a)({},$),{},{favorites:n})),ee(Object(c.a)(Object(c.a)({},$),{},{favorites:n}))}(e,t)},size:z.isBrowser?"medium":"small",children:n?Object(_.jsx)(N.a,{color:"primary"}):Object(_.jsx)(C.a,{color:"primary"})})})}(s.location.name,s.location.country):null,Object(_.jsx)(g.a,{title:B?"Hide Favorites":"Show Favorites",arrow:!0,children:Object(_.jsx)(x.a,{onClick:function(){return D(!B)},size:z.isBrowser?"medium":"small",children:Object(_.jsx)(p.a,{color:"primary"})})}),Object(_.jsx)(g.a,{title:"My home place",arrow:!0,children:Object(_.jsx)(x.a,{onClick:function(){return O($.settings.home)},size:z.isBrowser?"medium":"small",children:Object(_.jsx)(k.a,{color:"primary"})})}),Object(_.jsx)(g.a,{title:"Current place",arrow:!0,children:Object(_.jsx)(x.a,{onClick:function(){fetch("https://api.db-ip.com/v2/free/self").then((function(e){return e.json()})).then((function(e){return O(e.city)})).catch((function(e){return X({show:!0,text:e.message,closeFunc:X})}))},size:z.isBrowser?"medium":"small",children:Object(_.jsx)(F.a,{color:"primary"})})}),Object(_.jsx)(g.a,{title:"Settings",arrow:!0,children:Object(_.jsx)(x.a,{onClick:function(){return se(!0)},size:z.isBrowser?"medium":"small",children:Object(_.jsx)(f.a,{color:"primary"})})})]})]}),Object(_.jsx)("div",{className:e.favoritesBar,children:B?Object(_.jsx)(d.a,{className:e.test,children:Object(_.jsx)(v.a,{size:"small",className:e.selectStyle,value:L,onChange:function(e){return t=e.target.value,O(t),void M(t);var t},children:$?$.favorites.map((function(e,t){return Object(_.jsx)(w.a,{value:e.name,children:e.info},t)})):null})}):null}),s?Object(_.jsx)(T,{weatherData:s,settings:$.settings}):Object(_.jsx)("div",{className:e.progressDiv,children:Object(_.jsx)(G.a,{size:"60px"})}),Q.show?Object(_.jsx)(V,{text:Q.text,closeFunc:X}):null,re?Object(_.jsx)(le,{data:$,setData:ee,saveFunc:ie,closeFunc:se}):null,Object(_.jsx)("div",{className:e.weekDays,children:s?s.forecast.forecastday.slice(1).concat(s.forecast.forecastday.slice(1)).map((function(e,t){return Object(_.jsx)(je,{data:e,settings:$.settings},t)})):new Array(4).fill(null).map((function(e,t){return Object(_.jsx)(je,{data:e,settings:$.settings},t)}))})]})},xe=n(207),he=n(220),pe=n(210),Oe=n(208),fe=n(209),ge=Object(xe.a)({palette:{primary:{main:"#FFFFFF"},secondary:Oe.a,warning:fe.a}}),ve=function(e){var t=e.children;return Object(_.jsxs)(he.a,{theme:ge,children:[Object(_.jsx)(pe.a,{}),t]})};var we=function(){return Object(_.jsx)(ve,{children:Object(_.jsx)(be,{})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),i(e),a(e)}))};a.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(we,{})}),document.getElementById("root")),ye()}},[[147,1,2]]]);
//# sourceMappingURL=main.c249eb8b.chunk.js.map
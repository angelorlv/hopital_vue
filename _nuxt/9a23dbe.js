(window.webpackJsonp=window.webpackJsonp||[]).push([[170,17,23,47,56],{358:function(t,e,n){"use strict";n.r(e);var o={props:["label","type","id","autofocus","width","value"],data:function(){return{on_focus:!1,style:{height:40},input:{style:{},model:""}}},methods:{updateInput:function(){this.$emit("input",this.$refs.cinput.value)},focusInput:function(){this.$refs.cinput.focus()}},mounted:function(){},created:function(){}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.input.style},[n("div",{staticClass:"text-xs duration-300 flex items-center font-bold h-4"},[n("label",{staticClass:"z-10 px-1 text-indigo-600",attrs:{for:t.id}},[t._v(" "+t._s(t.label)+" ")])]),t._v(" "),n("input",{ref:"cinput",staticClass:"input-alt w-full duration-300 text-xs",attrs:{autofocus:t.autofocus,id:t.id,type:t.type,placeholder:t.label},domProps:{value:t.value},on:{input:function(e){return t.updateInput()},focus:function(){t.on_focus=!0,t.$emit("focus")},blur:function(){t.on_focus=!1,t.$emit("blur")}}})])}),[],!1,null,"a221d83e",null);e.default=component.exports},359:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("2d1dc0a2",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n(359)},361:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.fade-enter-active,.fade-leave-active{\n  transition:opacity .3s\n}\n.fade-enter,.fade-leave-to{\n  opacity:0\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},362:function(t,e,n){"use strict";n.r(e);var o={props:["value","datas","label","code","placeholder","padding","width"],watch:{datas:function(a){this.$emit("input",void 0===a[0]?null:a[0][this.code])}},data:function(){return{}},methods:{updateInput:function(){this.$emit("input",this.$refs.cinput.value)}},mounted:function(){}},l=(n(360),n(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative flex flex-col"},[t.placeholder?n("div",{staticClass:"text-xs duration-300 flex items-center font-bold",class:t.datas.length>0?" h-4":"h-0"},[t.datas.length>0?n("label",{staticClass:"z-10 px-1 text-indigo-600"},[t._v(" "+t._s(t.placeholder)+" ")]):t._e()]):t._e(),t._v(" "),n("div",[n("select",{ref:"cinput",staticClass:"input-alt w-full duration-300 text-xs",on:{change:function(e){return t.updateInput()}}},t._l(t.datas,(function(e){return n("option",{key:e[t.code],domProps:{value:e[t.code],selected:t.value==e[void 0===t.code?"code":t.code]}},[t._v(" "+t._s(e[void 0===t.label?"label":t.label])+" ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("66a93922",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n(364)},367:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.leaflet-popup .leaflet-popup-content-wrapper{\n  background-color:transparent;\n  box-shadow:none;\n  padding:0\n}\n.leaflet-popup .leaflet-popup-content{\n  width:200px;\n  padding:0\n}\n.leaflet-popup .leaflet-popup-tip-container{\n  top:0;\n  display:none\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},370:function(t,e,n){"use strict";n.r(e);var o=n(3),l=(n(25),n(37),n(61),n(56),n(373),n(374),{}),r={props:["list_coord","load_data"],watch:{load_data:function(a){a&&this.initMap()}},data:function(){return{mymap:{},accessToken:"pk.eyJ1IjoiYW5nZWxvMTQyNyIsImEiOiJja3c0aGExMTIwNmp0Mm9udnY2bGNsZnRoIn0.PiJCKKLMoWzmULCaFs2CqA",layerGroup:{},markers:{},index_selected:-1}},methods:{setLinkPan:function(){return"r-panneau"==this.$route.name?"r/":"a-panneau"==this.$route.name?"a/":"admin-panneau"==this.$route.name?"admin/":""},initMap:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.mymap=l.map("map",{zoomControl:!0}).setView([-19.002846,46.460938],5),l.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiYW5nZWxvMTQyNyIsImEiOiJja3c0aGExMTIwNmp0Mm9udnY2bGNsZnRoIn0.PiJCKKLMoWzmULCaFs2CqA"}).addTo(t.mymap),t.markers=new l.MarkerClusterGroup({iconCreateFunction:function(t){var html='<div style="font-family: \'Roboto Mono\';" class="flex duration-300 hover:w-14 hover:h-14 justify-center rounded-full text-lg items-center bg-opacity-30 bg-indigo-600 w-12 h-12">';return html+='<div class="bg-indigo-600 h-10 w-10 text-gray-100 flex rounded-full justify-center items-center font-bold">'+t.getAllChildMarkers().length+"</div>",html+="</div>",l.divIcon({html:html,className:"mycluster",iconSize:l.point(32,32)})}}),n=function(i){var e=t.list_coord[i];o='<div style="font-family: \'Roboto Mono\';" class="flex duration-300 hover:w-14 hover:h-14 justify-center rounded-full text-lg items-center bg-opacity-10 bg-indigo-600 w-12 h-12">',o+='<span class="material-icons duration-300 text-indigo-600 hover:text-indigo-900 " style="font-size:50px;color:'.concat(e.cat_color,'"> place </span>'),o+="</div>",'<div style="font-family: \'Roboto Mono\';" class="flex duration-300 hover:w-14 hover:h-14 justify-center rounded-full text-lg items-center bg-opacity-10 bg-indigo-600 w-12 h-12">','<span class="material-icons duration-300 text-red-600 hover:text-red-900 " style="font-size:50px;"> place </span>',"</div>";var n=l.divIcon({className:"custom-div-icon",html:o,iconSize:[30,42],iconAnchor:[30,35],popupAnchor:[0,-30]}),r=l.divIcon({className:"custom-div-icon",html:'<div style="font-family: \'Roboto Mono\';" class="flex duration-300 hover:w-14 hover:h-14 justify-center rounded-full text-lg items-center bg-opacity-10 bg-indigo-600 w-12 h-12"><span class="material-icons duration-300 text-red-600 hover:text-red-900 " style="font-size:50px;"> place </span></div>',iconSize:[30,42],iconAnchor:[30,35],popupAnchor:[0,-30]}),c=l.marker([e.lieu_lat,e.lieu_lng],{icon:n});t.mymap.on("click",(function(){t.index_selected=-1,t.markers.eachLayer((function(t){t.setIcon(n)}))}));var d=t;c.on("click",(function(){d.markers.eachLayer((function(t){t.setIcon(n)})),d.index_selected=i,this.setIcon(r)})),t.markers.addLayer(c)},i=0;i<t.list_coord.length;i++)n(i);t.mymap.addLayer(t.markers);case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;l=n(363),n(375),this.load_data&&setTimeout((function(){t.initMap()}),500)}},c=(n(366),n(7)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative",staticStyle:{height:"500px",width:"100%"}},[n("div",{staticStyle:{height:"100%",width:"100%","border-radius":"8px"},attrs:{id:"map"}}),t._v(" "),n("div",{staticClass:"bg-gray-100 flex w-72 rounded-lg absolute top-5 right-5 duration-300",class:-1==t.index_selected?"h-16":"h-48",staticStyle:{"z-index":"1002"}},[-1!=t.index_selected?n("div",{staticClass:"cursor-pointer p-2 flex w-full relative flex-col justify-start items-start",on:{click:function(){"a-search-place"==t.$route.name?t.$router.push("/a/search-place/"+t.list_coord[t.index_selected].pan_id):t.$router.push("/"+t.setLinkPan()+"panneau/"+t.list_coord[t.index_selected].pan_id)}}},[n("div",{staticClass:"flex absolute top-4 left-4"},[n("span",{staticClass:"p-2 rounded-full bg-indigo-600 text-white"},[t._v(" "+t._s(t.list_coord[t.index_selected].pan_publoc_ref)+" ")])]),t._v(" "),null!=t.list_coord[t.index_selected].name_file?n("div",{staticClass:"h-full w-full flex rounded-t"},[n("img",{staticClass:"object-cover flex-grow rounded",attrs:{src:"/api/p/media/"+t.list_coord[t.index_selected].name_min_file,loading:"lazy",crossorigin:"anonymous"}})]):t._e(),t._v(" "),n("div",{staticClass:"flex justify-end items-end font-bold absolute p-2 w-full h-16 bg-gradient-to-t rounded-b-lg from-gray-700 to-transparent via-gray-700 left-0 bottom-0"},[n("span",{staticClass:"py-2 text-gray-200 block w-full"},[t._v(" "+t._s(t.list_coord[t.index_selected].lieu_label)+" ")])])]):n("div",{staticClass:"p-2 flex justify-center items-center text-gray-400"},[n("span",[t._v(" Cliquez sur un marqueur pour plus de détails ")])])])])}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.r(e);var o=n(3),l=(n(25),{props:["pan_id","modif","pl_cur"],watch:{ann_model_search:function(a){a&&this.getAnn()}},data:function(){return{pl:{pan_loc_month:1,pan_loc_date_debut:"e",ann_id:null,pan_loc_ann_label:""},on_focus_ann_label:!1,on_hover_ann_label:!1,show_ann_choose:!1,ann_selected:null,ann_model_search:"",in_select_ann:!1,ann:[]}},methods:{validateLocation:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.pl.pan_id=t.pan_id,e.next=4,t.$axios.$post("api/a/regisseur/location",t.pl);case 4:(n=e.sent).status?t.$emit("validate"):t.showNotif("Erreur",n.message,!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.showErrorConnexion();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},updateLocation:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.pl.pan_id=t.pan_id,e.next=4,t.$axios.$post("api/a/regisseur/location",t.pl);case 4:(n=e.sent).status?t.$emit("validate"):t.showNotif("Erreur",n.message,!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.showErrorConnexion();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAnn:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("api/a/annonceur/like/".concat(t.ann_model_search));case 3:(n=e.sent).status?t.ann=n.anns:t.showNotif("Erreur",n.message,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.showErrorConnexion();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.modif&&(this.pl=this.pl_cur)}}),r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center items-center top-0 left-0 fixed w-screen h-screen bg-white bg-opacity-75"},[n("div",{staticClass:"bg-white rounded-lg border shadow-lg ",style:{width:"500px"}},[n("div",{staticClass:"p-2 flex border-b"},[n("span",[t._v(" "+t._s(t.modif?"Modification de la location":"Edition de location")+" ")]),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),n("button",{staticClass:"bt-back text-sm",on:{click:function(e){return t.$emit("close")}}},[t._v(" Retour ")])]),t._v(" "),n("div",{staticClass:"flex flex-wrap items-end p-2"},[n("div",{staticClass:"m-2"},[n("custom-input",{attrs:{label:"Nombre de mois ...",type:"number"},model:{value:t.pl.pan_loc_month,callback:function(e){t.$set(t.pl,"pan_loc_month",e)},expression:"pl.pan_loc_month"}})],1),t._v(" "),n("div",{staticClass:"m-2"},[n("custom-input",{attrs:{label:"Date de debut ...",type:"date"},model:{value:t.pl.pan_loc_date_debut,callback:function(e){t.$set(t.pl,"pan_loc_date_debut",e)},expression:"pl.pan_loc_date_debut"}})],1),t._v(" "),n("div",{staticClass:"flex flex-col p-2"},[n("span",{staticClass:"text-xs text-indigo-600 font-bold"},[t._v(" Annonceur ")]),t._v(" "),n("span",{staticClass:"p-2 rounded-lg border cursor-pointer",on:{click:function(){t.in_select_ann=!0}}},[t._v(" "+t._s(t.ann_selected?t.ann_selected.ann_label:t.pl.pan_loc_ann_label)+" ")]),t._v(" "),t.in_select_ann?n("div",{staticClass:"z-50 w-screen h-screen absolute top-0 left-0 flex justify-center items-center ",on:{click:function(e){t.in_select_ann=!1}}},[n("div",{staticClass:"shadow-lg bg-white rounded-lg border",staticStyle:{width:"250px"},on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"p-1 border-b"},[n("custom-input",{attrs:{label:"Nom de l'annonceur ..."},model:{value:t.ann_model_search,callback:function(e){t.ann_model_search=e},expression:"ann_model_search"}})],1),t._v(" "),n("div",{staticClass:"flex flex-col overflow-auto",staticStyle:{"max-height":"200px",height:"200px"}},t._l(t.ann,(function(a){return n("span",{key:a.ann_id,staticClass:"p-2 border-b cursor-pointer hover:bg-gray-100",on:{click:function(){t.ann_selected=a,t.pl.ann_id=a.ann_id,t.pl.pan_loc_ann_label=a.ann_label,t.in_select_ann=!1}}},[t._v(" \n                                "+t._s(a.ann_label)+"\n                            ")])})),0)])]):t._e()])]),t._v(" "),t.pl.pan_loc_month>=1&&"e"!=t.pl.pan_loc_date_debut&&""!=t.pl.pan_loc_date_debut?n("div",{staticClass:"p-2 rounded-b-lg border-t bg-gray-50"},[n("div",{staticClass:"text-sm"},[n("span",[t._v(" Date de fin prévisionnelle ")]),t._v(" "),n("span",{staticClass:"bg-indigo-600 text-white rounded-lg p-2"},[t._v("\n                    "+t._s(t.dateToText(t.addMonthToDate(t.pl.pan_loc_date_debut,t.pl.pan_loc_month)))+" ")])]),t._v(" "),n("div",{staticClass:"mt-2 flex border-t pt-2"},[n("span",{staticClass:"flex-grow"}),t._v(" "),n("button",{staticClass:"bt text-sm",on:{click:function(){t.modif?t.updateLocation():t.validateLocation()}}},[t._v(" "+t._s(t.modif?"Modifier":"Louer")+" ")])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomInput:n(358).default})},525:function(t,e,n){"use strict";n.r(e);var o=n(3),l=(n(25),n(21),n(157),{watch:{state_search:function(a){this.getListPanel(),this.pan_id_cur=-1},"filters.search":function(a){this.getListPanel()},"filters.by":function(a,t){"pan_dimension"==a?this.getFormats():"pan_dimension"==t?this.filters.search="":this.getListPanel()}},data:function(){return{reg_panel_list:[],loaded:!1,cur_view:"carte",label_list:[{label:"Ref panneau",key:"pan_ref",width:150},{label:"Etat",key:"pan_state",width:150}],state_search:"tous",list_choice_panel:[{label:"Tous",code:"tous"},{label:"En location",code:"location"},{label:"Disponible",code:"dispo"},{label:"Indisponible",code:"indispo"}],list_col_search:[{label:"Référence",code:"pan_ref"},{label:"Annonceur",code:"ann_label"},{label:"Dimension",code:"pan_dimension"}],in_edit_location:!1,pan_id:null,pan_id_cur:null,on_modif_location:!1,pl_to_modif:{},input_search:"",filters:{search:"",by:"pan_ref"},formats:[]}},methods:{getListPanel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loaded=!1,e.next=4,t.$axios.$get("api/a/regisseur/panel",{params:{state:t.state_search,input:t.filters.search,by:t.filters.by}});case 4:(n=e.sent).status?(t.loaded=!0,t.reg_panel_list=n.panels):t.showNotif("Erreur",n.message,!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.showErrorConnexion();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},finirLocation:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(confirm("Voulez vous vraiment annuler cette location !!?")){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,e.$axios.$delete("api/a/regisseur/location/"+t);case 5:(o=n.sent).status?e.getListPanel():e.showNotif("Erreur",o.message,!0),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),e.showErrorConnexion();case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},setDispo:function(b,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$put("api/a/regisseur/panel/"+t+"/state",{pan_state:b?1:4});case 3:(o=n.sent).status?e.getListPanel():e.showNotif("Erreur",o.message,!0),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),e.showErrorConnexion();case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},setTextState:function(s){return["Nul","Dispo","En réservation","En location","Non Dispo"][parseInt(s)]},getFormats:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("api/a/regisseur/format/all");case 3:(n=e.sent).status?t.formats=n.formats:t.showNotif("Erreur",n.message,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.showErrorConnexion();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getListPanel()}}),r=n(7),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex items-end px-2 py-1 w-full border rounded-lg "},[n("div",{staticClass:"flex justify-center items-center rounded border p-2 mr-2 bg-white "},[n("span",{staticClass:"text-sm"},[t._v("Résultats ")]),t._v(" "),n("span",{staticClass:"ml-2 font-bold"},[t._v(" "+t._s(t.reg_panel_list.length)+" ")])]),t._v(" "),n("div",{staticClass:"mr-2"},[n("c-select",{attrs:{datas:t.list_choice_panel,placeholder:"Etat",label:"label",code:"code"},model:{value:t.state_search,callback:function(e){t.state_search=e},expression:"state_search"}})],1),t._v(" "),n("div",{staticClass:"mx-2"},[n("c-select",{attrs:{datas:t.list_col_search,placeholder:"Par ...",label:"label",code:"code"},model:{value:t.filters.by,callback:function(e){t.$set(t.filters,"by",e)},expression:"filters.by"}})],1),t._v(" "),n("div",{staticClass:"mx-2"},["pan_dimension"!=t.filters.by?n("custom-input",{attrs:{label:"Recherche ..."},model:{value:t.filters.search,callback:function(e){t.$set(t.filters,"search",e)},expression:"filters.search"}}):n("c-select",{attrs:{placeholder:"Formats",datas:t.formats,code:"cat_id",label:"cat_label"},model:{value:t.filters.search,callback:function(e){t.$set(t.filters,"search",e)},expression:"filters.search"}})],1),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),n("div",{staticClass:"flex border rounded"},[n("button",{staticClass:"p-2  bg-gray-50 hover:bg-gray-100 rounded-l flex justify-center items-center",class:"carte"==t.cur_view?"bg-indigo-600 hover:bg-indigo-600 text-white":"",on:{click:function(e){t.cur_view="carte"}}},[n("span",{staticClass:"material-icons"},[t._v(" place ")])]),t._v(" "),n("button",{staticClass:"p-2 bg-gray-50 hover:bg-gray-100 flex justify-center items-center ",class:"liste"==t.cur_view?"bg-indigo-600 hover:bg-indigo-600 text-white":"",on:{click:function(e){t.cur_view="liste"}}},[n("span",{staticClass:"material-icons"},[t._v("list")])]),t._v(" "),n("button",{staticClass:"p-2 bg-gray-50 hover:bg-gray-100 rounded-r flex justify-center items-center",class:"cadre"==t.cur_view?"bg-indigo-600 hover:bg-indigo-600 text-white":"",on:{click:function(e){t.cur_view="cadre"}}},[n("span",{staticClass:"material-icons"},[t._v(" grid_view ")])])])]),t._v(" "),t.reg_panel_list.length>0?n("div",{staticClass:"w-full",staticStyle:{width:"100%"}},["carte"==t.cur_view&&t.loaded?n("div",{staticClass:"w-full my-2 mb-10",staticStyle:{height:"500px",width:"100%"}},[n("div",{staticClass:"bg-gray-300  bg-opacity-30 shadow-lg flex h-full rounded",staticStyle:{width:"100%"}},[n("client-only",[n("map-accueil",{attrs:{list_coord:t.reg_panel_list,load_data:t.loaded}})],1)],1)]):t._e(),t._v(" "),"cadre"==t.cur_view?n("div",{staticClass:"w-full flex flex-wrap justify-center items-center mt-5"},t._l(t.reg_panel_list,(function(p){return n("div",{key:p.pan_id,staticClass:"my-2 min-w-min cursor-pointer transform hover:-translate-y-5 hover:shadow-lg shadow-blue-500 relative duration-300 hover:p-5 mx-2 w-48 h-56 bg-gray-300 rounded flex justify-center items-center",attrs:{index:p.pan_id},on:{click:function(e){return t.$router.push("/r/panneau/"+p.pan_id)}}},[null!=p.name_file?n("div",{staticClass:"h-full w-full flex rounded p-2"},[n("img",{staticClass:"object-cover flex-grow rounded ",attrs:{src:"/api/p/media/"+p.name_min_file,loading:"lazy",crossorigin:"anonymous"}})]):t._e(),t._v(" "),n("div",{staticClass:"absolute w-full p-2 pt-5 flex flex-col bottom-0 bg-gray-300 text-gray-700  rounded-b"},[n("span",{staticClass:"font-bold text-sm"},[t._v(" "+t._s(p.pan_ref)+" ")]),t._v(" "),n("span",{staticClass:"text-gray-500 text-xs"},[t._v(" "+t._s(p.lieu_label)+" ")])])])})),0):t._e(),t._v(" "),"liste"==t.cur_view?n("div",{staticClass:" rounded-t rounded-b mt-5"},t._l(t.reg_panel_list,(function(p){return n("div",{key:p.pan_id,staticClass:"border rounded-lg bg-white mb-2",class:{"border-indigo-600":t.pan_id_cur==p.pan_id}},[n("div",{staticClass:"flex p-2",class:{"border-b":t.pan_id_cur==p.pan_id}},[n("div",{staticClass:"h-14 w-14 mr-2 flex justify-center items-center border rounded"},[p.name_min_file?n("img",{attrs:{src:"/api/p/media/"+p.name_min_file,alt:"",srcset:""}}):n("span",{staticClass:"material-icons"},[t._v(" image ")])]),t._v(" "),n("div",{staticClass:"px-2 py-1 flex flex-col"},[n("div",{staticClass:"flex items-center"},[n("nuxt-link",{staticClass:"hover:text-blue-500 mr-2 underline",attrs:{to:"/r/panneau/"+p.pan_id}},[t._v(" "+t._s(p.pan_ref)+" ")]),t._v(" "),p.pan_validation?n("span",{staticClass:" cursor-pointer material-icons text-sm text-blue-500",attrs:{title:"Panneau validé"}},[t._v(" check_circle ")]):t._e()],1),t._v(" "),n("div",{staticClass:"text-sm text-gray-500"},[3==p.pan_state?n("div",{staticClass:"flex items-center"},[n("span",{},[t._v(" En location ")]),t._v(" "),n("span",{staticClass:"block w-3 h-3 ml-2 rounded-full bg-blue-500"})]):1==p.pan_state?n("div",{staticClass:"flex items-center"},[n("span",{},[t._v(" Disponible ")]),t._v(" "),n("span",{staticClass:"block w-3 h-3 ml-2 rounded-full bg-green-500"})]):2==p.pan_state?n("div",{staticClass:"flex items-center"},[n("span",{},[t._v(" En réservation ")]),t._v(" "),n("span",{staticClass:"block w-3 h-3 ml-2 rounded-full bg-yellow-500"})]):4==p.pan_state?n("div",{staticClass:"flex items-center"},[n("span",{},[t._v(" Pas disponible ")]),t._v(" "),n("span",{staticClass:"block w-3 h-3 ml-2 rounded-full bg-red-500"})]):t._e()])]),t._v(" "),3==p.pan_state?n("div",{staticClass:"flex py-1 px-2 flex-col"},[n("div",{staticClass:"flex flex-col"},[n("span",{staticClass:"text-xs font-bold"},[t._v("Location du ")]),t._v(" "),n("div",{staticClass:"text-sm"},[n("span",{},[t._v(" "+t._s(t.dateToText(p.pan_loc_date_debut))+" ")]),t._v(" "),n("span",{},[t._v(" au ")]),t._v(" "),n("span",{},[t._v(" "+t._s(t.dateToText(t.addMonthToDate(p.pan_loc_date_debut,p.pan_loc_month)))+" ")])])]),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("span",{staticClass:"text-xs font-bold"},[t._v("Société")]),t._v(" "),n("span",{},[t._v(" "+t._s(p.ann_label?p.ann_label:"-")+" ")])])]):t._e(),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),n("div",{},[n("button",{staticClass:"text-xs text-gray-500 underline",on:{click:function(){t.pan_id_cur=t.pan_id_cur==p.pan_id?null:p.pan_id}}},[t._v(" "+t._s(t.pan_id_cur==p.pan_id?"Moins d'action":"Actions")+" ")])])]),t._v(" "),t.pan_id_cur==p.pan_id?n("div",{staticClass:"p-2"},[3==p.pan_state?n("div",{staticClass:"flex"},[n("button",{staticClass:"bt-cancel text-xs mr-2 flex items-center justify-center",on:{click:function(e){return t.finirLocation(p.pan_loc_id)}}},[n("span",{staticClass:"material-icons mr-2"},[t._v("delete")]),t._v(" "),n("span",{},[t._v(" Annuler la location ")])]),t._v(" "),n("button",{staticClass:"bt text-xs flex items-center justify-center",on:{click:function(){t.on_modif_location=!0,t.in_edit_location=!0,t.pl_to_modif={pan_loc_month:p.pan_loc_month,pan_loc_ann_label:p.pan_loc_ann_label,ann_id:p.ann_id,pan_loc_date_debut:p.pan_loc_date_debut}}}},[n("span",{staticClass:"material-icons mr-2"},[t._v("edit")]),t._v(" "),n("span",{},[t._v(" Modifier la location ")])])]):n("div",{},[4==p.pan_state?n("div",{},[n("button",{staticClass:"bt text-sm",on:{click:function(e){return t.setDispo(!0,p.pan_id)}}},[t._v(" Rendre Disponible ")])]):n("div",{staticClass:"flex"},[n("button",{staticClass:"bt text-sm mr-2",on:{click:function(){t.in_edit_location=!0,t.pan_id=p.pan_id}}},[t._v(" Louer ")]),t._v(" "),n("button",{staticClass:"bt text-sm mr-2",on:{click:function(e){return t.setDispo(!1,p.pan_id)}}},[t._v(" Rendre indisponible ")])])])]):t._e()])})),0):t._e(),t._v(" "),t.in_edit_location?n("set-location-reg",{attrs:{modif:t.on_modif_location,pan_id:t.pan_id_cur,pl_cur:t.pl_to_modif},on:{validate:function(){t.getListPanel(),t.in_edit_location=!1},close:function(){t.in_edit_location=!1,t.on_modif_location=!1}}}):t._e()],1):n("div",{staticClass:"flex justify-center items-center"},[n("span",{staticClass:"text-gray-500 text-xl"},[t._v("Aucun Panneau à afficher")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CSelect:n(362).default,CustomInput:n(358).default,MapAccueil:n(370).default,SetLocationReg:n(421).default})}}]);
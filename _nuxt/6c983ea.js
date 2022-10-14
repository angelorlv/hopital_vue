(window.webpackJsonp=window.webpackJsonp||[]).push([[100,24,65],{383:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(25),n(62),{props:["by","val","label_by"],data:function(){return{list_pan:[]}},methods:{getPanelBy:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.parse('{"'.concat(t.by,'":"').concat(t.val,'"}')),e.next=4,t.$axios.$get("api/a/panel/by",{params:n});case 4:(r=e.sent).status?t.list_pan=r.panels:t.showNotif("Erreur",r.message,!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t.showErrorConnexion(),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getPanelBy()}}),l=n(7),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed bg-white bg-opacity-90 top-0 left-0 w-screen h-screen flex justify-center items-center z-50"},[n("div",{staticClass:"border rounded-lg bg-white shadow-lg ",staticStyle:{width:"600px"}},[n("div",{staticClass:"p-2 flex items-center"},[n("span",{},[t._v("Liste des panneaux : "),n("span",{staticClass:"font-bold"},[t._v(t._s(t.label_by))])]),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),n("button",{staticClass:"bt-back",on:{click:function(e){return t.$emit("close")}}},[t._v("Retour")])]),t._v(" "),n("div",{staticClass:"border-t overflow-auto",staticStyle:{height:"300px","max-height":"300px"}},t._l(t.list_pan,(function(p){return n("div",{key:p.pan_id,staticClass:" cursor-pointer flex flex-col p-2 rounded-lg m-2 border hover:bg-gray-100",on:{click:function(e){return t.$router.push("/admin/panneau/"+p.pan_id)}}},[n("span",{staticClass:"font-bold"},[t._v(" "+t._s(p.pan_ref)+" ")]),t._v(" "),n("span",{staticClass:"text-sm"},[t._v(" "+t._s(p.lieu_label)+" ")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},435:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(25),{props:["cat"],data:function(){return{overlay_style:{}}},methods:{init:function(){this.overlay_style={width:"500px"}},delCat:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$delete("api/a/ad/cat/"+t.cat.cat_id+"/"+t.cat.parent_cat_id);case 3:(n=e.sent).status?t.$emit("success"):t.showNotif("Erreur",n.message,!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),t.showErrorConnexion();case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.init()}}),l=n(7),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-80 flex justify-center items-center"},[n("div",{staticClass:"bg-white rounded-lg border shadow-xl",style:t.overlay_style},[n("div",{staticClass:"p-2 flex items-center border-b"},[n("div",{},[n("span",[t._v(" Suppression de la catégorie ")]),t._v(" "),n("span",{staticClass:"font-bold py-1 px-2 bg-indigo-600 text-white rounded-full"},[t._v(" "+t._s(t.cat.cat_label)+" ")])]),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),n("button",{staticClass:"bt-prev-next"},[n("span",{staticClass:"material-icons",on:{click:function(e){return t.$emit("close")}}},[t._v("clear")])])]),t._v(" "),n("div",{staticClass:"p-2 text-sm"},[n("div",{staticClass:"border bg-gray-100 text-gray-700 p-2 rounded-lg bg-opacity-40"},[n("span",{},[t._v(" Cette catégorie est rattachée à  "),n("strong",[t._v(" "+t._s(t.cat.nb_panel)+" ")]),t._v(" panneau   ")]),t._v(" "),n("span",{},[t._v(" et possède "),n("strong",[t._v(" "+t._s(t.cat.nb_sous_cat)+" ")]),t._v("  sous catégorie. ")])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"mt-2 p-2 border-t text-sm flex  items-center"},[n("span",{staticClass:"flex-grow"}),t._v(" "),n("button",{staticClass:"bt-cancel mr-2",on:{click:t.delCat}},[t._v(" Oui ")]),t._v(" "),n("button",{staticClass:"bt-back",on:{click:function(e){return t.$emit("close")}}},[t._v(" Annuler ")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2"},[n("span",[t._v("Voulez vous vraiment supprimer cette catégorie ?")])])}],!1,null,null,null);e.default=component.exports},598:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(25),{layout:"espace",watch:{on_show_list_sous_cat:function(a){a&&this.getSousCat()}},data:function(){return{cat:{},error_on_page:!1,on_show_panel:!1,on_show_list_sous_cat:!1,list_sous_cat:[],cur_cat:null,on_delete_cat:!1}},methods:{getCat:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("api/a/category/"+t.$route.params.id);case 2:(n=e.sent).status?t.cat=n.cat:t.error_on_page=!0;case 4:case"end":return e.stop()}}),e)})))()},getSousCat:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("api/a/category/sous/"+t.$route.params.id);case 3:(n=e.sent).status?t.list_sous_cat=n.list:t.showNotif("Erreur",n.message,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.showErrorConnexion();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getCat()}}),l=n(7),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._m(0),t._v(" "),t.error_on_page?n("div",{staticClass:"flex justify-center items-center"},[n("div",{staticClass:"h-48"}),t._v(" "),t._m(1)]):n("div",{staticClass:"flex justify-center items-center"},[n("div",{staticClass:"flex flex-col justify-center ",style:{width:"600px"}},[n("div",{staticClass:"w-full rounded border mt-5"},[n("div",{staticClass:"flex flex-col border-b p-2"},[n("span",{staticClass:"text-xs font-bold"},[t._v(" Libellé ")]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("span",{staticClass:"text-xl"},[t._v(" "+t._s(null!=t.cat.parent_cat_label?t.cat.parent_cat_label:""))]),t._v(" "),t.cat.parent_cat_label?n("span",{staticClass:"material-icons"},[t._v(" arrow_right ")]):t._e(),t._v(" "),n("span",{staticClass:"text-xl"},[t._v("  "+t._s(null!=t.cat.cat_label?t.cat.cat_label:"-")+" ")])])]),t._v(" "),n("div",{staticClass:"flex flex-col border-b p-2"},[n("span",{staticClass:"text-xs font-bold"},[t._v(" Nombre de panneau ")]),t._v(" "),n("div",{staticClass:"flex"},[n("span",{staticClass:"text-xl mr-5"},[t._v(" "+t._s(t.cat.nb_panel)+" ")]),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),t.cat.nb_panel>0?n("button",{staticClass:"bt text-xs",on:{click:function(){t.on_show_panel=!0,t.p_view.by="cat_id",t.p_view.val=t.cat.cat_id,t.p_view.label_by=t.cat.cat_label}}},[t._v("Voir")]):t._e()])]),t._v(" "),n("div",{staticClass:"flex flex-col p-2"},[n("span",{staticClass:"text-xs font-bold"},[t._v(" Sous Catégorie ")]),t._v(" "),n("div",{staticClass:"flex"},[n("span",{staticClass:"text-xl mr-5"},[t._v(" "+t._s(t.cat.nb_sous_cat)+" ")]),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),t.cat.nb_sous_cat>0?n("button",{staticClass:"bt text-xs",on:{click:function(){t.on_show_list_sous_cat=!t.on_show_list_sous_cat}}},[t._v(" "+t._s(t.on_show_list_sous_cat?"Fermer":"Voir")+" ")]):t._e()]),t._v(" "),t.on_show_list_sous_cat?n("div",{staticClass:"mt-2"},t._l(t.list_sous_cat,(function(e){return n("div",{key:e.key,staticClass:"border-t text-sm"},[n("span",[t._v(" "+t._s(e.cat_label)+" ")]),t._v(" "),n("span",{staticClass:"text-xs"},[t._v(" ("+t._s(e.nb_panel)+") ")])])})),0):t._e()])]),t._v(" "),n("div",{staticClass:"mt-2 border-t flex p-2"},[n("button",{staticClass:"bt",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Retour")]),t._v(" "),n("span",{staticClass:"flex-grow"}),t._v(" "),n("button",{staticClass:"bt-cancel text-sm mr-2",on:{click:function(e){t.on_delete_cat=!0}}},[t._v("Supprimer")]),t._v(" "),n("button",{staticClass:"bt",on:{click:function(e){return t.$router.push("/admin/category/edit/"+t.cat.cat_id)}}},[t._v("Modifier")])])]),t._v(" "),t.on_show_panel?n("view-panel-by",{attrs:{by:t.p_view.by,val:t.p_view.val,label_by:t.p_view.label_by},on:{close:function(e){t.on_show_panel=!1}}}):t._e(),t._v(" "),t.on_delete_cat?n("del-cat",{attrs:{cat:t.cat},on:{close:function(e){t.on_delete_cat=!1},success:function(){t.$router.go(-1),t.showNotif("Suppression","Catégorie supprimer avec Succès")}}}):t._e()],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full h-16 px-2 border-b sticky top-0 bg-white z-20"},[n("div",{staticClass:"flex justify-center items-center"},[n("span",{staticClass:"text-2xl"},[t._v("Catégories")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("span",{staticClass:"text-xl"},[t._v("Erreur pendant l'affichage de la page")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ViewPanelBy:n(383).default,DelCat:n(435).default})}}]);
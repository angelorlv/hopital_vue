(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{612:function(e,t,l){"use strict";l.r(t);l(156);var n={props:["list","reg_id"],data:function(){return{label_list:[{label:"Nom de la société",width:200,key:"reg_label"},{label:"Adresse",width:170,key:"soc_pr_adresse"},{label:"Email",width:170,key:"soc_pr_email"},{label:"Nb. Panneau",width:130,key:"nb_panel"},{label:"Nb. Annonceur",width:130,key:"nb_ann"}],pan_selected_index_list:[]}},methods:{addSpliceSelected:function(i){var e=this.pan_selected_index_list.indexOf(i);-1==e?this.pan_selected_index_list.push(i):this.pan_selected_index_list.splice(e,1)},toggleCheck:function(){},viewPanel:function(e){this.$router.push({name:"admin-regisseur",query:{st:"view",reg_id:e}})}}},r=l(7),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mt-5"},[l("div",{staticClass:"h-full"},[e.list.length>0?l("div",{},[l("div",{staticClass:"flex flex-col  border rounded mb-2"},[l("div",{staticClass:"flex sticky  top-16 bg-gray-100 text-indigo-600"},[l("span",{staticClass:"font-bold border py-1 px-2 cursor-pointer w-8"},[l("input",{attrs:{type:"checkbox"},domProps:{value:0!=e.pan_selected_index_list.length},on:{click:e.toggleCheck}})]),e._v(" "),e._l(e.label_list,(function(t){return l("span",{key:t.label,staticClass:"font-bold border py-1 px-2 cursor-pointer",style:{width:t.width+"px",minWidth:t.width+"px"}},[e._v(" "+e._s(t.label)+" ")])}))],2),e._v(" "),e._l(e.list,(function(p,i){return l("div",{key:p.reg_id,staticClass:"flex mt-1 duration-300 hover:bg-gray-300 hover:bg-opacity-20 items-center h-full border-b",class:{"border border-indigo-600 bg-blue-200 bg-opacity-20 rounded-sm":-1!=e.pan_selected_index_list.indexOf(i),"bg-opacity-30 bg-green-500":-1!=e.reg_id&&e.reg_id==p.reg_id}},[l("div",{staticClass:"py-1 px-2 h-full w-8"},[l("input",{attrs:{type:"checkbox"},domProps:{value:-1!=e.pan_selected_index_list.indexOf(i)},on:{click:function(t){return e.addSpliceSelected(i)}}})]),e._v(" "),e._l(e.label_list,(function(t){return l("div",{key:t.label,staticClass:"py-1 px-2 ",style:{width:t.width+"px",minWidth:t.width+"px"}},[null==p[t.key]?l("span",{},[e._v(" - ")]):l("span",[e._v(" "+e._s(p[t.key])+" ")])])})),e._v(" "),l("div",{staticClass:"py-1 px-2 "},[l("button",{staticClass:"bt text-xs",on:{click:function(t){return e.viewPanel(p.reg_id)}}},[e._v("voir")])])],2)}))],2)]):l("div",{staticClass:"my-16 flex justify-center items-center text-gray-500"},[l("div",{staticClass:"rounded flex flex-col p-2 bg-gray-200 bg-opacity-30 shadow-lg h-32 w-72 justify-center items-center "},[l("span",{staticClass:"material-icons text-4xl"},[e._v(" location_off ")]),e._v(" "),l("span",[e._v(" Aucun régisseur à afficher. ")]),e._v(" "),l("div",{staticClass:"bg-indigo-500 hover:bg-indigo-600 hover:bg-opacity-30 flex justify-center items-center bg-opacity-30 rounded p-2 duration-300 text-indigo-600 font-bold cursor-pointer",on:{click:function(t){return e.$emit("state_content","add")}}},[l("span",{staticClass:"material-icons "},[e._v(" add ")]),e._v(" "),l("span",{},[e._v(" Ajouter un régisseur ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);
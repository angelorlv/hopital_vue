(window.webpackJsonp=window.webpackJsonp||[]).push([[98,23],{358:function(e,t,n){"use strict";n.r(t);var o={props:["label","type","id","autofocus","width","value"],data:function(){return{on_focus:!1,style:{height:40},input:{style:{},model:""}}},methods:{updateInput:function(){this.$emit("input",this.$refs.cinput.value)},focusInput:function(){this.$refs.cinput.focus()}},mounted:function(){},created:function(){}},l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:e.input.style},[n("div",{staticClass:"text-xs duration-300 flex items-center font-bold h-4"},[n("label",{staticClass:"z-10 px-1 text-indigo-600",attrs:{for:e.id}},[e._v(" "+e._s(e.label)+" ")])]),e._v(" "),n("input",{ref:"cinput",staticClass:"input-alt w-full duration-300 text-xs",attrs:{autofocus:e.autofocus,id:e.id,type:e.type,placeholder:e.label},domProps:{value:e.value},on:{input:function(t){return e.updateInput()},focus:function(){e.on_focus=!0,e.$emit("focus")},blur:function(){e.on_focus=!1,e.$emit("blur")}}})])}),[],!1,null,"a221d83e",null);t.default=component.exports},593:function(e,t,n){"use strict";n.r(t);var o=n(3),l=(n(25),{layout:"espace",data:function(){return{info:{show:!1,message:""},ins:{models:{}}}},methods:{getAnn:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("api/a/annonceur/"+e.$route.params.id);case 2:(n=t.sent).status?(e.ins.models=n.annonceur,e.ins.models.pr_pass=""):(e.info.show=!0,e.info.message=n.message);case 4:case"end":return t.stop()}}),t)})))()},updateAnn:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$put("api/a/annonceur/"+e.$route.params.id,e.ins.models);case 2:(n=t.sent).status?e.prev():(e.info.show=!0,e.info.message=n.message);case 4:case"end":return t.stop()}}),t)})))()},prev:function(){this.$router.push({name:"admin-annonceur-id",params:{id:this.$route.params.id}})}},mounted:function(){this.getAnn()}}),c=n(7),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[null==e.$route.params.id?n("div",{staticClass:"flex justify-center items-center flex-col"},[n("div",{staticClass:"h-48"}),e._v(" "),n("div",{staticClass:"flex flex-col p-2 rounded-lg border"},[n("span",[e._v("Ooops ! Cette page est non disponible")]),e._v(" "),n("span",[e._v(" "+e._s(e.$route.name)+" ")])])]):e._e(),e._v(" "),n("div",{},[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"h-24"}),e._v(" "),n("div",{style:{width:"350px"}},[n("div",{staticClass:"h-10"}),e._v(" "),n("div",{staticClass:"flex p-2 "},[n("button",{staticClass:"bt-prev-next",on:{click:e.prev}},[n("span",{staticClass:"material-icons"},[e._v(" navigate_before ")])]),e._v(" "),n("span",{staticClass:"ml-2 text-2xl"},[e._v("Edition Annonceur")])]),e._v(" "),n("div",{staticClass:"duration-300 rounded sticky top-16  bg-red-200 bg-opacity-70 text-red-500 flex justify-center items-center my-2 ",class:{"h-16 p-2 border border-red-500":e.info.show,"h-0":!e.info.show}},[e.info.show?n("span",{},[e._v(" "+e._s(e.info.message)+" ")]):e._e()]),e._v(" "),n("form",{attrs:{action:"/",method:"post"},on:{submit:function(t){return t.preventDefault(),e.updateAnn.apply(null,arguments)}}},[n("div",{},[n("div",{staticClass:"flex flex-col text-sm"},[n("div",{staticClass:"mb-10 mt-2"},[n("span",{staticClass:"block font-bold p-2 mb-2 bg-indigo-600 rounded text-gray-100"},[e._v(" Apropos de la société   ")]),e._v(" "),n("custom-input",{staticClass:"mb-2",attrs:{width:"100%",type:"text",label:"Nom de la Société *",id:"soc_ins"},model:{value:e.ins.models.soc_pr_label,callback:function(t){e.$set(e.ins.models,"soc_pr_label",t)},expression:"ins.models.soc_pr_label"}}),e._v(" "),n("custom-input",{staticClass:"mb-2",attrs:{width:"100%",type:"text",label:"Adresse *",id:"add_ins"},model:{value:e.ins.models.soc_pr_adresse,callback:function(t){e.$set(e.ins.models,"soc_pr_adresse",t)},expression:"ins.models.soc_pr_adresse"}}),e._v(" "),n("custom-input",{staticClass:"mb-2",attrs:{width:"100%",type:"text",label:"NIF (Facultatif)",id:"nif_ins"},model:{value:e.ins.models.soc_pr_nif,callback:function(t){e.$set(e.ins.models,"soc_pr_nif",t)},expression:"ins.models.soc_pr_nif"}}),e._v(" "),n("custom-input",{staticClass:"mb-2",attrs:{width:"100%",type:"text",label:"STAT (Facultatif)",id:"stat_ins"},model:{value:e.ins.models.soc_pr_stat,callback:function(t){e.$set(e.ins.models,"soc_pr_stat",t)},expression:"ins.models.soc_pr_stat"}}),e._v(" "),n("custom-input",{staticClass:"mb-2",attrs:{width:"100%",type:"text",label:"Email de la société",id:"stat_ins"},model:{value:e.ins.models.soc_pr_email,callback:function(t){e.$set(e.ins.models,"soc_pr_email",t)},expression:"ins.models.soc_pr_email"}}),e._v(" "),n("div",{staticClass:"p-2 flex items-center border rounded-lg",class:e.ins.models.ann_is_agence_com?"border-indigo-600":""},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.ins.models.ann_is_agence_com,expression:"ins.models.ann_is_agence_com"}],staticClass:"mr-2",attrs:{type:"checkbox",id:"agence-com"},domProps:{checked:Array.isArray(e.ins.models.ann_is_agence_com)?e._i(e.ins.models.ann_is_agence_com,null)>-1:e.ins.models.ann_is_agence_com},on:{change:function(t){var n=e.ins.models.ann_is_agence_com,o=t.target,l=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&e.$set(e.ins.models,"ann_is_agence_com",n.concat([null])):c>-1&&e.$set(e.ins.models,"ann_is_agence_com",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.ins.models,"ann_is_agence_com",l)}}}),e._v(" "),n("label",{attrs:{for:"agence-com"}},[e._v(" Agence de communication  ")])])],1),e._v(" "),n("div",{},[n("span",{staticClass:"block font-bold p-2 mb-2 bg-indigo-600 rounded text-gray-100"},[e._v(" Les informations de connexion ")]),e._v(" "),n("custom-input",{staticClass:"mb-2",attrs:{width:"100%",type:"text",label:"Login de connexion *",id:"email_ins"},model:{value:e.ins.models.pr_login,callback:function(t){e.$set(e.ins.models,"pr_login",t)},expression:"ins.models.pr_login"}}),e._v(" "),n("custom-input",{staticClass:"mb-2",attrs:{width:"100%",type:"password",label:"Mot de passe *",id:"pass_ins"},model:{value:e.ins.models.pr_pass,callback:function(t){e.$set(e.ins.models,"pr_pass",t)},expression:"ins.models.pr_pass"}})],1)])]),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"h-10"})])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex pt-2 border-t dark:border-gray-600"},[n("div",{}),e._v(" "),n("div",{staticClass:"flex-grow"}),e._v(" "),n("div",{},[n("button",{staticClass:"bt"},[e._v(" Enregistrer ")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomInput:n(358).default})}}]);
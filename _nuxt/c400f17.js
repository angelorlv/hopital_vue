(window.webpackJsonp=window.webpackJsonp||[]).push([[163,23],{358:function(e,t,o){"use strict";o.r(t);var r={props:["label","type","id","autofocus","width","value"],data:function(){return{on_focus:!1,style:{height:40},input:{style:{},model:""}}},methods:{updateInput:function(){this.$emit("input",this.$refs.cinput.value)},focusInput:function(){this.$refs.cinput.focus()}},mounted:function(){},created:function(){}},n=o(7),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{style:e.input.style},[o("div",{staticClass:"text-xs duration-300 flex items-center font-bold h-4"},[o("label",{staticClass:"z-10 px-1 text-indigo-600",attrs:{for:e.id}},[e._v(" "+e._s(e.label)+" ")])]),e._v(" "),o("input",{ref:"cinput",staticClass:"input-alt w-full duration-300 text-xs",attrs:{autofocus:e.autofocus,id:e.id,type:e.type,placeholder:e.label},domProps:{value:e.value},on:{input:function(t){return e.updateInput()},focus:function(){e.on_focus=!0,e.$emit("focus")},blur:function(){e.on_focus=!1,e.$emit("blur")}}})])}),[],!1,null,"a221d83e",null);t.default=component.exports},399:function(e,t,o){var content=o(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(27).default)("4e39eec6",content,!0,{sourceMap:!1})},446:function(e,t,o){"use strict";o(399)},447:function(e,t,o){var r=o(26)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.bt-modif-cancel[data-v-14a3beeb]{\n  margin-left:0.5rem;\n  border-radius:0.5rem;\n  border-width:1px;\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity))\n}\n.bt-modif-cancel[data-v-14a3beeb]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity))\n}\n.bt-modif-cancel[data-v-14a3beeb]{\n  padding:0.5rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  transition-duration:300ms\n}\n.bt-modif-validate[data-v-14a3beeb]{\n  margin-left:0.5rem;\n  border-radius:0.5rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity))\n}\n.bt-modif-validate[data-v-14a3beeb]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(29, 78, 216, var(--tw-bg-opacity))\n}\n.bt-modif-validate[data-v-14a3beeb]{\n  padding:0.5rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  transition-duration:300ms\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},520:function(e,t,o){"use strict";o.r(t);var r=o(3),n=(o(13),o(25),{data:function(){return{on_error_page:!1,reg:{},list_info:[{label:"Login de Connexion",code:"pr_login"},{label:"Nom Commercial",code:"soc_pr_label"},{label:"NIF",code:"soc_pr_nif"},{label:"STAT",code:"soc_pr_stat"},{label:"Email",code:"soc_pr_email"},{label:"Adresse",code:"soc_pr_adresse"},{label:"Facebook",code:"soc_pr_facebook"},{label:"Telephone",code:"soc_pr_tel"},{label:"Linkedin",code:"soc_pr_linkedin"},{label:"Whatsapp",code:"soc_pr_whatsapp"}],id_info_to_modif:-1,photo_profil_src:null,photo_profil_id:null,on_valid_photo:!1,in_change_pass:!1,change_pass:{now_pass:"",new_pass:""}}},methods:{getReg:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$get("api/a/regisseur/profil");case 3:(o=t.sent).status?(e.reg=o.regisseur,null!=e.reg.file_profil&&(e.photo_profil_src="api/p/media/"+e.reg.name_file),e.$store.commit("profil/set",{key:"pr_login",value:e.reg.pr_login})):e.on_error_page=!0,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.on_error_page=!0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},modifProfil:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.id_info_to_modif,n={key:(r=e).list_info[o].code,value:e.reg[r.list_info[o].code]},t.prev=3,t.next=6,e.$axios.$put("api/a/regisseur/profil/det/"+e.reg.reg_id,n);case 6:t.sent.status?(e.getReg(),e.id_info_to_modif=-1):e.showNotif("Erreur","Erreur de modification.",!0),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.showErrorConnexion();case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},validPass:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$put("api/a/regisseur/profil/pass",{data:{new_pass:e.change_pass.new_pass,old_pass:e.change_pass.now_pass}});case 3:(o=t.sent).status?e.in_change_pass=!1:e.showNotif("Erreur",o.message,!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.showErrorConnexion();case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},changePhotoProfil:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.reg.file_profil=e.photo_profil_id,t.prev=1,t.next=4,e.$axios.$put("api/a/regisseur/profil/det/"+e.reg.reg_id,{key:"file_profil",value:e.reg.file_profil});case 4:t.sent.status?(e.getReg(),e.id_info_to_modif=-1,e.on_valid_photo=!1):e.showNotif("Erreur","Erreur de modification.",!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.showErrorConnexion();case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},upload_image:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var image,r,n,data,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log("Upload"),0!=e.target.files.length){o.next=3;break}return o.abrupt("return");case 3:return image=e.target.files[0],(r=new FileReader).readAsDataURL(image),t.on_load_image=!0,o.next=9,new Promise((function(e,t){r.onload=function(t){e(t.target.result)}}));case 9:return n=o.sent,t.photo_profil_src=n,(data=new FormData).append("name",t.makeid(8)),data.append("file",image),o.next=16,t.$axios.$post("api/a/uploads",data).then((function(e){return t.on_load_image=!1,t.on_valid_photo=!0,e}));case 16:(l=o.sent).status?t.photo_profil_id=l.file_id:t.showNotif("Erreur de connexion",l.message);case 18:case"end":return o.stop()}}),o)})))()},delete_image:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e.photo_profil_id){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.$axios.$delete("api/a/uploads/"+e.photo_profil_id);case 5:(o=t.sent).status?(e.photo_profil_src=null,e.photo_profil_id=null):e.showNotif("Erreur",o.message,!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.showErrorConnexion();case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()},delChange:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$delete("api/a/uploads/"+e.photo_profil_id);case 3:t.sent,e.photo_profil_src="api/p/media/"+e.reg.name_file,e.on_valid_photo=!1,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.showErrorConnexion();case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},mounted:function(){this.getReg()}}),l=(o(446),o(7)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col "},[e.on_error_page?o("div",{staticClass:"flex flex-col rounded-lg",staticStyle:{width:"50%"}},[e._m(1)]):o("div",{staticClass:"flex flex-col lg:flex-row justify-center items-center px-10 py-5 w-full"},[o("div",{staticClass:" lg:w-2/3 w-full px-5"},[e.$store.state.profil.pr_validate?o("div",{}):o("div",{staticClass:"p-5 border bg-gray-50 bg-opacity-30 shadow-lg mb-5 border-blue-500 rounded-lg"},[o("span",{staticClass:" underline font-semibold text-blue-500"},[e._v(" Votre profil est en attente de validation ")]),e._v(" "),e._m(0)])]),e._v(" "),o("div",{staticClass:" lg:w-1/3 w-full bg-white bg-opacity-70 shadow-lg rounded-lg "},[o("div",{staticClass:"rounded-t-lg mb-2 flex border-b justify-center items-center  h-32 hover:bg-indigo-50 flex-col relative"},[null==e.photo_profil_src?o("span",{staticClass:"text-gray-400 underline"},[e._v("Aucune image")]):e._e(),e._v(" "),null!=e.photo_profil_src?o("div",{staticClass:"h-full w-full flex"},[o("img",{staticClass:"object-cover rounded-t-lg flex-grow",attrs:{src:e.photo_profil_src,alt:"",srcset:""}})]):e._e(),e._v(" "),e.on_valid_photo?e._e():o("label",{staticClass:"text-sm cursor-pointer px-2 py-1 rounded-full bg-opacity-90 absolute bottom-2 right-2  bg-indigo-600 text-white font-bold",attrs:{for:"photo_profil"}},[e._v(" \n\t\t\t\t\tChanger la photo de profil ")]),e._v(" "),e.on_valid_photo?o("div",{staticClass:"flex  absolute bottom-2 right-2"},[o("button",{staticClass:"bt text-sm",on:{click:e.changePhotoProfil}},[e._v("Valider")]),e._v(" "),o("button",{staticClass:"bt-prev-next text-sm mx-2",on:{click:e.delChange}},[o("span",{staticClass:"material-icons"},[e._v(" clear ")])])]):e._e(),e._v(" "),o("input",{staticClass:"hidden",attrs:{accept:"image/*",id:"photo_profil",type:"file"},on:{change:function(t){return e.upload_image(t)}}})]),e._v(" "),e._l(e.list_info,(function(t,i){return o("div",{key:t.code,staticClass:"p-3 mb-2 flex border-b hover:bg-indigo-50 flex-col "},[o("span",{staticClass:"font-bold text-sm"},[e._v(" "+e._s(t.label)+" ")]),e._v(" "),o("div",{staticClass:"flex flex-wrap"},[o("span",{staticClass:"block text-sm max-w-full break-normal break-words whitespace-pre-wrap"},[e._v(e._s(e.reg[t.code])+" ")]),e._v(" "),o("span",{staticClass:"mx-3"},[e._v(" . ")]),e._v(" "),i!=e.id_info_to_modif?o("button",{staticClass:"text-xs font-bold duration-300 hover:text-indigo-600",on:{click:function(t){e.id_info_to_modif=i}}},[e._v(" "+e._s(null==e.reg[t.code]?"Ajouter":"Modifier")+" ")]):e._e()]),e._v(" "),o("transition",{attrs:{name:"fade"}},[i==e.id_info_to_modif?o("div",{staticClass:"flex  items-end"},[o("custom-input",{staticClass:"rounded-r-none lg:w-1/3 flex-grow",attrs:{label:t.label+"..."},model:{value:e.reg[t.code],callback:function(o){e.$set(e.reg,t.code,o)},expression:"reg[info.code]"}}),e._v(" "),o("button",{staticClass:"ml-2 text-xs p-2 rounded-lg text-gray-600 border shadow-md bg-gray-50 duration-300 hover:bg-gray-100",on:{click:function(){e.id_info_to_modif=-1,e.getReg()}}},[e._v("Annuler")]),e._v(" "),o("button",{staticClass:"ml-2 text-xs p-2 rounded-lg text-white shadow-md bg-blue-500 duration-300 hover:bg-blue-700",on:{click:e.modifProfil}},[e._v("Valider")])],1):e._e()])],1)})),e._v(" "),o("div",{staticClass:"p-3 mb-2 flex border-b hover:bg-indigo-50 flex-col "},[e.in_change_pass?e._e():o("div",{staticClass:"flex"},[o("button",{staticClass:"bt text-sm",on:{click:function(t){e.in_change_pass=!0}}},[e._v("Changer mot de passe")])]),e._v(" "),e.in_change_pass?o("div",{staticClass:"flex flex-col"},[o("span",{staticClass:"mb-2 text-sm"},[e._v("Changement de mot de passe  ")]),e._v(" "),o("custom-input",{staticClass:"mb-2",attrs:{type:"password",label:"Mot de passe actuel ..."},model:{value:e.change_pass.now_pass,callback:function(t){e.$set(e.change_pass,"now_pass",t)},expression:"change_pass.now_pass"}}),e._v(" "),o("custom-input",{staticClass:"mb-2",attrs:{type:"password",label:"Nouveau Mot de passe ..."},model:{value:e.change_pass.new_pass,callback:function(t){e.$set(e.change_pass,"new_pass",t)},expression:"change_pass.new_pass"}}),e._v(" "),o("div",{staticClass:"flex"},[o("span",{staticClass:"flex-grow"}),e._v(" "),o("button",{staticClass:"bt-modif-cancel",on:{click:function(t){e.in_change_pass=!1}}},[e._v("Annuler")]),e._v(" "),o("button",{staticClass:"bt-modif-validate",on:{click:e.validPass}},[e._v("Valider")])])],1):e._e()])],2)])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"border-l-4 border-blue-500 pl-2 flex flex-col"},[o("span",[e._v(" Quand votre profil sera validé, vous pourrez ")]),e._v(" "),o("span",[e._v(" - Voir, moidifier, et ajouter vos panneaux")]),e._v(" "),o("span",[e._v(" - Voir les réservations faîtes sur vos panneaux")]),e._v(" "),o("span",[e._v(" - Ajouter et modifier des propriétés sur la visibilté de vos panneaux ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex justify-center items-center font-bold bg-indigo-600 rounded-lg p-5 mt-5"},[o("span",{staticClass:"text-white"},[e._v(" Erreur pendant l'affichage de la page ")])])}],!1,null,"14a3beeb",null);t.default=component.exports;installComponents(component,{CustomInput:o(358).default})}}]);
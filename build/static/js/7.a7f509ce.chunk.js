(this["webpackJsonpps-clients-fe"]=this["webpackJsonpps-clients-fe"]||[]).push([[7],{106:function(c,e,t){"use strict";t.r(e);var a=t(0),s=t(46),n=t(49),i=t(54),o=t(96),r=t(97),l=t(47),_=t(98),d=t(95),j=t.n(d),u=t(21),b=t(45),m=t(2),O=t(22),p=t(3),h=Object(u.b)((function(c){return{products:c.products}}),{loadProducts:b.a})((function(c){var e=Object(m.f)().id;Object(a.useEffect)((function(){c.loadProducts()}),[]);var t=c.products,s=t.products,d=t.isLoading,u=s.find((function(c){return(null===c||void 0===c?void 0:c._id)===e}));return console.log(u),d?Object(p.jsx)(O.a,{}):Object(p.jsx)("div",{className:j.a._,children:Object(p.jsxs)("div",{className:j.a.container,children:[Object(p.jsx)("div",{className:j.a.product_image,children:Object(p.jsx)("img",{src:null===u||void 0===u?void 0:u.productPhotoURL})}),Object(p.jsxs)("div",{className:j.a.product_info,children:[Object(p.jsxs)("div",{className:j.a.price_name,children:[Object(p.jsx)("h2",{children:null===u||void 0===u?void 0:u.productName}),Object(p.jsxs)("h2",{children:["\u20a6",null===u||void 0===u?void 0:u.costPerUnit]})]}),Object(p.jsxs)("div",{className:j.a.product_tags,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)(o.a,{className:j.a.tag_icon})," ",null===u||void 0===u?void 0:u.category.category]}),Object(p.jsxs)("p",{children:[Object(p.jsx)(r.a,{className:j.a.tag_icon})," ",null===u||void 0===u?void 0:u.composition]}),Object(p.jsxs)("p",{children:[Object(p.jsx)(_.a,{className:j.a.tag_icon})," ",null===u||void 0===u?void 0:u.supplier.supplierName]})]}),Object(p.jsx)("div",{className:j.a.description,children:Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero minima voluptatem, praesentium, ipsam sunt perferendis assumenda enim error laborum obcaecati possimus. Maiores iste recusandae consequatur repudiandae. Ipsum, qui deserunt?"})}),Object(p.jsxs)("div",{className:j.a.btn_contianer,children:[Object(p.jsxs)(n.a,{className:j.a.order_btn,children:[Object(p.jsx)(i.c,{className:j.a.order_icon}),"Order"]}),Object(p.jsxs)(n.a,{className:j.a.contact_btn,children:[" ",Object(p.jsx)(l.b,{className:j.a.contact_icon})," Contact Supplier"]})]})]})]})})}));e.default=function(){return Object(p.jsx)(s.a,{children:Object(p.jsx)(h,{})})}},40:function(c,e,t){"use strict";t.r(e),t.d(e,"BASE_URL",(function(){return a}));var a="https://pharmaserv-ng.herokuapp.com/api/v1"},42:function(c,e,t){c.exports={_:"Footer____3_xeA",container:"Footer_container__1mpi0",first_content:"Footer_first_content__3GajB",social_icons:"Footer_social_icons__G9FY1",social_icon:"Footer_social_icon__PZa8h",second_content:"Footer_second_content__1kAh1",contact_info:"Footer_contact_info__1R3sw",contact_icon:"Footer_contact_icon__1t3HY",quick_links:"Footer_quick_links__if5Ns"}},43:function(c,e,t){c.exports={_:"Nav____3QuTQ",container:"Nav_container__1jiNU",logo:"Nav_logo__3FBDP",hamburger_menu:"Nav_hamburger_menu__3g5ZX",toggle:"Nav_toggle__2ytbT",nav_menu:"Nav_nav_menu__3hmSy",menu_list:"Nav_menu_list__3p0UT",selected:"Nav_selected__3t3Pl"}},44:function(c,e,t){c.exports={_:"Layout____3SaKQ",main:"Layout_main__RpjmZ"}},45:function(c,e,t){"use strict";t.d(e,"a",(function(){return l}));var a=t(48).default,s=t(40).BASE_URL,n=t(9),i=n.LOADING_PRODUCTS_START,o=n.LOAD_PRODUCTS_SUCCESS,r=n.LOAD_PRODUCTS_FAIL,l=function(){return function(c){c({type:i});a.get("".concat(s,"/Products/all"),{headers:{"Content-Type":"application/json"}}).then((function(e){c({type:o,payload:e.data}),console.log(e.data)})).catch((function(e){c({type:r}),console.log(e.response.data)}))}}},46:function(c,e,t){"use strict";var a=t(0),s=t(51),n=t(16),i=t(42),o=t.n(i),r=t(3),l=function(){var c=(new Date).getFullYear();return Object(r.jsx)("div",{className:o.a._,children:Object(r.jsxs)("div",{className:o.a.container,children:[Object(r.jsxs)("div",{className:o.a.first_content,children:[Object(r.jsxs)("div",{className:o.a.social_icons,children:[Object(r.jsx)("p",{children:"Follow Us:"}),Object(r.jsx)(s.e,{className:o.a.social_icon}),Object(r.jsx)(s.b,{className:o.a.social_icon}),Object(r.jsx)(s.a,{className:o.a.social_icon})]}),Object(r.jsx)("div",{className:o.a.copyright,children:Object(r.jsxs)("p",{children:["\xa9 Copyright ",c," PharmaServe-ng"]})})]}),Object(r.jsxs)("div",{className:o.a.second_content,children:[Object(r.jsxs)("div",{className:o.a.contact_info,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)(s.c,{className:o.a.contact_icon})," pharmserve@gmail.com"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)(s.d,{className:o.a.contact_icon})," 09072819212, 08123453446"]})]}),Object(r.jsxs)("div",{className:o.a.quick_links,children:[Object(r.jsx)("p",{children:Object(r.jsx)(n.b,{to:"/catalogue",children:"Catalogue"})}),Object(r.jsx)("p",{children:Object(r.jsx)(n.b,{to:"/",children:"Register your pharmacy"})}),Object(r.jsx)("p",{children:Object(r.jsx)(n.b,{to:"/",children:"Privacy Policy"})})]})]})]})})},_=t(59),d=t(43),j=t.n(d),u=function(){var c=Object(a.useState)(!1),e=Object(_.a)(c,2),t=e[0],s=e[1];return Object(r.jsx)("div",{className:j.a._,children:Object(r.jsxs)("div",{className:j.a.container,children:[Object(r.jsx)("div",{className:j.a.logo,children:Object(r.jsx)(n.b,{to:"/",children:Object(r.jsx)("h2",{children:Object(r.jsx)("strong",{children:"PharmaServ"})})})}),Object(r.jsxs)("div",{className:"".concat(t?j.a.hamburger_menu+" "+j.a.toggle:j.a.hamburger_menu),onClick:function(){s(!t)},children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]}),Object(r.jsx)("div",{className:"".concat(t?j.a.nav_menu+" "+j.a.toggle:j.a.nav_menu),children:Object(r.jsxs)("ul",{className:j.a.menu_list,children:[Object(r.jsx)("li",{children:Object(r.jsx)(n.b,{exact:!0,to:"/",activeClassName:j.a.selected,children:"Products"})}),Object(r.jsx)("li",{children:Object(r.jsx)(n.b,{to:"/catalogue",activeClassName:j.a.selected,children:"Catalogue"})}),Object(r.jsx)("li",{children:Object(r.jsx)(n.b,{to:"/contact",activeClassName:j.a.selected,children:"Contact"})}),Object(r.jsx)("li",{children:Object(r.jsx)(n.b,{to:"/cart",activeClassName:j.a.selected,children:"Cart"})})]})})]})})},b=t(44),m=t.n(b);e.a=function(c){var e=c.children;return Object(r.jsxs)("div",{className:m.a._,children:[Object(r.jsx)("nav",{className:m.a.nav,children:Object(r.jsx)(u,{})}),Object(r.jsx)("main",{className:m.a.main,children:e}),Object(r.jsx)("footer",{className:m.a.footer,children:Object(r.jsx)(l,{})})]})}},49:function(c,e,t){"use strict";t.d(e,"a",(function(){return l}));var a=t(4),s=t(41),n=(t(0),t(53)),i=t.n(n),o=t(3),r=["children","className","isLoading"],l=function(c){var e=c.children,t=c.className,n=c.isLoading,l=Object(s.a)(c,r);return Object(o.jsx)("button",Object(a.a)(Object(a.a)({className:"".concat(i.a.primary_button," ").concat(t)},l),{},{children:n?"loading...":e}))}},53:function(c,e,t){c.exports={primary_button:"CustomButton_primary_button__2b9wN",normal_button:"CustomButton_normal_button__2XGOk"}},95:function(c,e,t){c.exports={_:"ProductDetails____3QjC9",container:"ProductDetails_container__2V7LJ",product_image:"ProductDetails_product_image__3scKM",product_info:"ProductDetails_product_info__3BNQT",price_name:"ProductDetails_price_name__2bMJN",product_tags:"ProductDetails_product_tags__3CXXH",tag_icon:"ProductDetails_tag_icon__1fCJ7",description:"ProductDetails_description__1RZQf",btn_contianer:"ProductDetails_btn_contianer__3ADL4",order_btn:"ProductDetails_order_btn__1LOPW",order_icon:"ProductDetails_order_icon__1TE8j",contact_btn:"ProductDetails_contact_btn__38-9X",contact_icon:"ProductDetails_contact_icon__2ff9p"}}}]);
//# sourceMappingURL=7.a7f509ce.chunk.js.map
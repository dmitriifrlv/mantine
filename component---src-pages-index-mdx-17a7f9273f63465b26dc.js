(self.webpackChunkmantine_docs=self.webpackChunkmantine_docs||[]).push([[809],{9795:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return M},default:function(){return G}});var a=n(9756),i=n(7378),o=n(498),r=n(5444),s=n(3195),c=n(5163),l=n(8487),m=n(5486),d=n(500),p=n(8707),u=n(3014),g=[{icon:u.EGi,color:"teal",title:"Customizable",description:"Colors, fonts, shadows and many other parts are customizable to fit your design needs"},{icon:u.aoh,color:"violet",title:"Dark theme",description:"Mantine supports dark theme by default in all components"},{icon:u.TkB,color:"orange",title:"Accessibility and usability",description:"All components follow accessibility best practices and feature full keyboard support"},{icon:u.dNJ,color:"blue",title:"TypeScript",description:"All @mantine/ scoped packages are built with TypeScript and support it by default"},{icon:u.WCv,color:"pink",title:"Ready for production",description:"Mantine is well tested and works in all modern browsers"},{icon:u.YGl,color:"yellow",title:"Developer experience",description:"Mantine comes with more than 50 components and 15 hooks to cover you in most cases"},{icon:u.Ui3,color:"cyan",title:"No annoying focus ring",description:"With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard"},{icon:u.$2U,color:"lime",title:"React JSS",description:"Take advantage of all react-jss features: automatic critical css extraction during ssr, lazy evaluation, dynamic theming and others"}],h=n(3202),x=(0,h.QM)((function(e){var t;return{wrapper:(t={display:"flex",flexWrap:"wrap",margin:e.spacing.md/-2},t["@media (max-width: 900px)"]={flexDirection:"column"},t),item:{border:"1px solid "+("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]),margin:e.spacing.md/2,flex:"0 0 calc(50% - "+e.spacing.md+"px)"},title:{marginLeft:e.spacing.md},header:{display:"flex",alignItems:"center",marginBottom:e.spacing.xs},description:{color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[7],lineHeight:1.5}}}),{theming:l.MX});function y(){var e=(0,l.rZ)(),t=x(),n=g.map((function(n){return i.createElement(m.X,{className:t.item,padding:"md",key:n.title},i.createElement("div",{className:t.header},i.createElement(d.k,{size:"xl",color:n.color,variant:"dark"===e.colorScheme?"filled":"light"},i.createElement(n.icon,{style:{width:24,height:24}})),i.createElement(p.x,{className:t.title,size:"xl",weight:500},n.title)),i.createElement(p.x,{className:t.description},n.description))}));return i.createElement("div",{className:t.wrapper},n)}var k=n(4081),f=n(5881),w=n(8942),v=n(550),b=[{package:"@mantine/core",description:"Components library",link:"/core/getting-started/"},{package:"@mantine/hooks",description:"Hooks collection for state and UI management",link:"/hooks/getting-started/"},{package:"@mantine/notifications",description:"Notifications system",link:"/others/notifications/"},{package:"@mantine/tag-picker",description:"Notion like tag picker component",link:"/others/tag-picker/"}];function E(){var e=b.map((function(e){var t=e.package.replace("@mantine/","mantine-");return i.createElement("tr",{key:e.package},i.createElement("td",null,i.createElement(w.Z,{to:e.link},e.package)),i.createElement("td",null,e.description),i.createElement("td",null,f[t].gzip.toFixed(2)," kB"),i.createElement("td",null,i.createElement(s.K,null,i.createElement(c.z,{component:"a",href:"https://github.com/mantinedev/mantine/tree/master/src/"+t,color:"gray",variant:"outline",size:"xs",leftIcon:i.createElement(u.wGg,{style:{width:12,height:12}})},"Source code"),i.createElement(c.z,{component:"a",href:"https://www.npmjs.com/package/"+e.package,color:"gray",variant:"outline",size:"xs",leftIcon:i.createElement(v.Z,{style:{width:12,height:12}})},"npm"))))}));return i.createElement("div",{style:{overflowX:"auto",overflowY:"hidden"}},i.createElement(k.i,{highlightOnHover:!0,style:{minWidth:760,tableLayout:"fixed"}},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",{style:{width:150}},"Package"),i.createElement("th",{style:{width:250}},"Description"),i.createElement("th",null,"Gzipped size"),i.createElement("th",{style:{width:220}},"Links"))),i.createElement("tbody",null,e)))}var N,T=n(6692),z=n(5045),M={title:"Getting started",slug:"/"},j=(N="GatsbyLink",function(e){return console.warn("Component "+N+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),B={_frontmatter:M};function G(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.mdx)("wrapper",Object.assign({},B,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(z.Z,{title:"Mantine",disableTitleTemplate:!0,mdxType:"Head"}),(0,o.mdx)("br",null),(0,o.mdx)("br",null),(0,o.mdx)("h1",{id:"mantine"},"Mantine"),(0,o.mdx)("p",null,"Mantine is a MIT licensed open source react components and hooks library\nwith focus on usability, accessibility and developer experience."),(0,o.mdx)(s.K,{grow:!0,mdxType:"ElementsGroup"},(0,o.mdx)(c.z,{component:r.Link,to:"/pages/examples/",mdxType:"Button"},"Explore examples"),(0,o.mdx)(c.z,{component:r.Link,to:"/core/getting-started/",variant:"outline",mdxType:"Button"},"Browse components"),(0,o.mdx)(c.z,{component:r.Link,to:"/hooks/getting-started/",variant:"outline",color:"gray",mdxType:"Button"},"Browse hooks")),(0,o.mdx)("h2",{id:"features"},"Features"),(0,o.mdx)(y,{mdxType:"Features"}),(0,o.mdx)("h2",{id:"mantine-packages"},"Mantine packages"),(0,o.mdx)(E,{mdxType:"PackagesTable"}),(0,o.mdx)("h2",{id:"getting-started"},"Getting started"),(0,o.mdx)("p",null,"Mantine works out of the box with ",(0,o.mdx)("a",{parentName:"p",href:"https://create-react-app.dev/"},"create-react-app")," (including ",(0,o.mdx)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-typescript/"},"TypeScript version"),"),\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/preactjs/preact-cli"},"Preact cli")," (with compat), ",(0,o.mdx)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://www.gatsbyjs.com/"},"Gatsby")," and any other environment."),(0,o.mdx)("p",null,"Install mantine dependencies with yarn:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add react-jss @mantine/hooks @mantine/core\n")),(0,o.mdx)("p",null,"or npm"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install react-jss @mantine/hooks @mantine/core\n")),(0,o.mdx)("p",null,"And you are ready:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Button } from '@mantine/core';\n\nfunction App() {\n  return <Button>My mantine button</Button>;\n}\n")),(0,o.mdx)("p",null,"To enable server side rendering in your application see ",(0,o.mdx)(j,{to:"/guides/ssr/",mdxType:"GatsbyLink"},"ssr guide"),",\nit includes tutorials for Gatsby, Next.js and your own server."),(0,o.mdx)("h2",{id:"versioning"},"Versioning"),(0,o.mdx)("p",null,"All mantine packages are released at the same time with exact same version.\nAfter installation you can fix @mantine/scoped packages version in your package.json\nto prevent versions mismatch in future:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  // Fix version by using "1.0.1", not default "^1.0.1"\n  "dependencies": {\n    "@mantine/core": "1.0.1",\n    "@mantine/hooks": "1.0.1"\n  }\n}\n')),(0,o.mdx)("h2",{id:"license"},"License"),(0,o.mdx)(T.C,{mdxType:"License"}))}G.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-17a7f9273f63465b26dc.js.map
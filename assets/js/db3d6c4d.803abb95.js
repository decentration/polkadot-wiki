"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7313],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1171:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"learn-account-abstraction",title:"Polkadot's Account Abstraction",sidebar_label:"Account Abstraction",description:"Polkadot's Native Account Abstraction.",keywords:["account","polkadot account","account abstraction","proxy","multisig","batch"],slug:"../learn-account-abstraction"},c=void 0,l={unversionedId:"learn/learn-account-abstraction",id:"learn/learn-account-abstraction",title:"Polkadot's Account Abstraction",description:"Polkadot's Native Account Abstraction.",source:"@site/../docs/learn/learn-account-abstraction.md",sourceDirName:"learn",slug:"/learn-account-abstraction",permalink:"/docs/learn-account-abstraction",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-account-abstraction.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1709219560,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{id:"learn-account-abstraction",title:"Polkadot's Account Abstraction",sidebar_label:"Account Abstraction",description:"Polkadot's Native Account Abstraction.",keywords:["account","polkadot account","account abstraction","proxy","multisig","batch"],slug:"../learn-account-abstraction"},sidebar:"docs",previous:{title:"Polkadot Accounts",permalink:"/docs/learn-accounts"},next:{title:"Account Identity",permalink:"/docs/learn-identity"}},u={},p=[{value:"Your Keys, Your Responsibility",id:"your-keys-your-responsibility",level:2},{value:"Definition of Account Abstraction",id:"definition-of-account-abstraction",level:2},{value:"Origin Abstraction in Polkadot",id:"origin-abstraction-in-polkadot",level:2},{value:"Protocol-level Account Abstraction",id:"protocol-level-account-abstraction",level:3},{value:"Smart-contract Level Account Abstraction",id:"smart-contract-level-account-abstraction",level:3},{value:"Further Readings",id:"further-readings",level:2}],d={toc:p},h="wrapper";function m(t){var e=t.components,s=(0,o.Z)(t,i);return(0,r.kt)(h,(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"your-keys-your-responsibility"},"Your Keys, Your Responsibility"),(0,r.kt)("p",null,"Account abstraction addresses the challenges of managing cryptographic keys representing accounts on\nblockchains. Accounts on blockchains represent entities, from an individual's identity to an\ninstitution. In ",(0,r.kt)("a",{parentName:"p",href:"/docs/web3-and-polkadot"},"Web3"),", you digitally sign any transaction or, more\ngenerally, any message using your private key. Data is recorded on a public ledger (usually\nblockchain-based) whose multiple copies of it are stored in computers participating in a P2P\nnetwork."),(0,r.kt)("p",null,"While the account\u2019s private keys grant users control and ownership, losing them results in losing\naccess to digital assets and fragmentation of your digital identity since you will need to create a\nnew account with a new set of keys. This poses a hurdle for both users and developers regarding\nsecurity and adoption."),(0,r.kt)("h2",{id:"definition-of-account-abstraction"},"Definition of Account Abstraction"),(0,r.kt)("p",null,"The concept of account ",(0,r.kt)("em",{parentName:"p"},"abstraction")," was first mentioned via Ethereum's\n",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4337"},"EIP-4337")," focused on allowing users to flexibly program\nmore security and better user experiences into their accounts. The idea also aims to separate the\nuser experience from the private key, enabling a piece of code to dictate account behavior. This\nallows for increased flexibility of accounts that originally were not engineered to be flexible and\ndecreased chances of key mismanagement."),(0,r.kt)("p",null,"Users are still responsible for their keys, but through account abstraction, they can take\nprecautions to ensure they do not end up losing their accounts."),(0,r.kt)("p",null,"Account abstraction introduces a layer of on-chain logic that controls an account, typically in the\nform of a smart contract, that completely avoids the need for consensus-layer protocol changes.\nWithout a smart contract, abstracting accounts would require changes in the core architecture of the\nprotocol."),(0,r.kt)("p",null,"Polkadot's generic codebase makes the concept of an account natively flexible and abstract without\nthe direct need for smart contracts."),(0,r.kt)("h2",{id:"origin-abstraction-in-polkadot"},"Origin Abstraction in Polkadot"),(0,r.kt)("p",null,"Adopting a generic design is crucial in scaling ",(0,r.kt)("a",{parentName:"p",href:"/docs/web3-and-polkadot"},"Web3"),"\ntechnologies. Abstraction and generalization of protocols are essential to improving user experience\nand security in blockchain adoption."),(0,r.kt)("p",null,"When users interact with a blockchain they call ",(0,r.kt)("em",{parentName:"p"},"dispatchable")," functions to do something. Because\nthose functions are called from the outside of the blockchain interface, in Polkadot's terms any\naction that involves a dispatchable function is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-transactions"},"extrinsic"),". Extrinsics\nare calls coming from the ",(0,r.kt)("em",{parentName:"p"},"outside")," of the blockchain interface that (if successfully executed)\ninvoke some changes in the ",(0,r.kt)("em",{parentName:"p"},"inside")," of the blockchain's state. An extrinsic is always directed to a\nspecific function within a particular ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#pallet"},"pallet"),"."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic is directed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferKeepAlive"),"\nfunction within the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances")," pallet. If successful, the execution of that function will transfer\nfunds between two accounts, changing the balances of those accounts and thus the chain state (as\naccounts hold some state within the blockchain)."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#substrate"},"Substrate"),"'s FRAME, functions are not necessarily called by\naccounts. Functions can be called by any origin, where origins are caller-personas associated with\nprivilege levels. For example, the Polkadot ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"OpenGov")," has different\norigins with different privileges, such as allocating treasury funds, cancelling a referendum, etc.\nNeither of those origins is subservient to the concept of an account or assume anything about state\nor associated data. Custom origins can be created while designing your chain using the Substrate\n(which is part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk"},"Polkadot SDK"),")."),(0,r.kt)("p",null,"The figure below shows the Polkadot's origin\nabstraction. Accounts happen to be just one variant (or corner case) of Substrate's FRAME possible\norigins, the ",(0,r.kt)("inlineCode",{parentName:"p"},"frame_system::RawOrigin::Signed"),". OpenGov origins function in a way that, if\nconditions (approval and support) are met and a proposal passes, the appropriate\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/1835c091c42456e8df3ecbf0a94b7b88c395f623/substrate/frame/referenda/src/lib.rs#L884"},"origin is then associated with the scheduled call"),".\nThose origins are caller-personas that do not have any entity behind them, and do not hold any state\non chain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"origin-abstraction",src:n(86131).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"In Substrate, the concept of account is completely deprioritized. Substrate itself remains\nindifferent to an account's balance and nonce. While FRAME can support their presence, it\nfundamentally does not need to rely on them."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"./learn-xcm-index"},"Cross-Consensus Messaging (XCM)")," format can take advantage of origin\nabstraction for cross-consensus communications by specifying the context for a particular message.\nOrigins in this case imply the authority under which a message is being sent (and thereby,\nexecuted)."),(0,r.kt)("p",null,"On a lower level, the XCM format also provides a much powerful origin abstraction that allows\ncalling personas that are so abstract to not necessarily have direct representation on the local\nchain within its FRAME system origin."),(0,r.kt)("h3",{id:"protocol-level-account-abstraction"},"Protocol-level Account Abstraction"),(0,r.kt)("p",null,"While the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"Substrate FRAME system")," does not have\na single pallet (module) for complete account abstraction, it incorporates various pallets that\ncollectively achieve similar functionalities. Polkadot's native account abstraction functionalities\ninclude:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-account-multisig"},"Multi-signature accounts")," to control an account using different ones"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-proxies"},"Proxy accounts")," for role-based representation, and ownership representation\nthrough ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-proxies#anonymous-proxy-pure-proxy"},"pure proxies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-account-advanced#derivation-paths"},"Derivative accounts")," for using the same ",(0,r.kt)("em",{parentName:"li"},"parent"),"\nprivate key on multiple ",(0,r.kt)("em",{parentName:"li"},"children")," accounts"),(0,r.kt)("li",{parentName:"ul"},"Account recovery mechanisms such as social recovery to help regain access to your key using\ntrusted third-party accounts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-guides-transfers#batch-transfers-with-the-polkadot-js-ui"},"Batching functionality")," to\nsubmit multiple calls in one single transaction"),(0,r.kt)("li",{parentName:"ul"},"Payments with non-native tokens")),(0,r.kt)("p",null,"All the above can be used together, meaning that, for example, you can create a multi-signature\naccount of pure proxies to keep the same multi-signature account when signatories change. A more\ncomplex combination to build a hot wallet can be found in this\n",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/blog/building-a-hot-wallet-with-substrate-primitives/"},"blog post"),"."),(0,r.kt)("p",null,"Additionally, developers have the flexibility to design their own rules for abstraction."),(0,r.kt)("p",null,"In the Substrate FRAME system, accounts are represented by Accounts IDs. Such unique identifiers can\nbe any 32-byte number and are not limited to just a public key (with a corresponding private key).\nFor example, multi-signature accounts do not have a private key, and their Account ID is built with\nhashed information from signatories\u2019 public keys and the multisig threshold."),(0,r.kt)("h3",{id:"smart-contract-level-account-abstraction"},"Smart-contract Level Account Abstraction"),(0,r.kt)("p",null,"Account abstraction can be implemented in parachains also with traditional smart-contracts for\nexample using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts#ink"},"ink!")," smart contract language."),(0,r.kt)("h2",{id:"further-readings"},"Further Readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hackernoon.com/abstracting-away-account-abstraction-on-polkadot"},"Hackernoon Article")," by\n",(0,r.kt)("a",{parentName:"li",href:"/docs/contributors#bader-youssef"},"Bader Youssef"),' - "Abstracting Away Account Abstraction\non Polkadot"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/building-a-hot-wallet-with-substrate-primitives/"},"Parity Blog Post"),' by\nJoe Petrowski - "Building a Hot Wallet with Substrate Primitives"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/frame_origin/index.html"},"FRAME Origin - Polkadot-SDK Docs"))))}m.isMDXComponent=!0},86131:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/origin-abstraction-31b6a7245c3537d4be00fc83b037eec8.png"}}]);
import"./chunk-H2MWHXBD.js";import"./chunk-ZN3TCQDN.js";import"./chunk-MXNUMZMJ.js";import"./chunk-RY4UXPEE.js";import"./chunk-G5J3WBXD.js";import"./chunk-JARMFNZS.js";import"./chunk-PHI3EH5S.js";import"./chunk-Z3YZCORR.js";import{A as a,K as p,r as c,u as m}from"./chunk-DBVODW2D.js";import"./chunk-BHCFWONM.js";import"./chunk-OHMQKIVC.js";import"./chunk-W5QTFK5P.js";import"./chunk-4LWSCQ2K.js";import"./chunk-BUMGHB3J.js";import"./chunk-E77BULOG.js";var w=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var f=o.length-1;f>=0;f--)(n=o[f])&&(t=(l<3?n(t):l>3?n(e,i,t):n(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t},s=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=w;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};

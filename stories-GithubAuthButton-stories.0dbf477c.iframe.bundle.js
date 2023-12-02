"use strict";(self.webpackChunkfetchapi=self.webpackChunkfetchapi||[]).push([[343],{"./src/stories/GithubAuthButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Login:()=>Login,Logout:()=>Logout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GithubAuthButton_stories});var _Login$parameters,_Login$parameters2,_Logout$parameters,_Logout$parameters2,__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;function GithubAuthButton(_ref){var children=_ref.children,callback=_ref.callback,className=_ref.className;return __jsx("button",{type:"button",onClick:callback,className:className||"bg-black w-auto text-white"},children)}GithubAuthButton.displayName="GithubAuthButton";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{callback:{defaultValue:null,description:"",name:"callback",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const GithubAuthButton_stories={title:"GithubAuthButton",component:GithubAuthButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"},callback:{action:"clicked"}}};var Login={args:{children:"깃허브로 로그인하기",callback:function callback(){alert("로그인")}}},Logout={args:{children:"깃허브로 로그아웃하기",callback:function callback(){alert("로그아웃")}}};Login.parameters=_objectSpread(_objectSpread({},Login.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Login$parameters=Login.parameters)||void 0===_Login$parameters?void 0:_Login$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: '깃허브로 로그인하기',\n    callback: () => {\n      alert('로그인');\n    }\n  }\n}"},null===(_Login$parameters2=Login.parameters)||void 0===_Login$parameters2||null===(_Login$parameters2=_Login$parameters2.docs)||void 0===_Login$parameters2?void 0:_Login$parameters2.source)})}),Logout.parameters=_objectSpread(_objectSpread({},Logout.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Logout$parameters=Logout.parameters)||void 0===_Logout$parameters?void 0:_Logout$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: '깃허브로 로그아웃하기',\n    callback: () => {\n      alert('로그아웃');\n    }\n  }\n}"},null===(_Logout$parameters2=Logout.parameters)||void 0===_Logout$parameters2||null===(_Logout$parameters2=_Logout$parameters2.docs)||void 0===_Logout$parameters2?void 0:_Logout$parameters2.source)})});const __namedExportsOrder=["Login","Logout"]}}]);
import { createApp } from "vue/dist/vue.esm-browser"
import ViteCom from "./entry"
import SButton from "./button";
import SFCBtton from "./SFCButton.vue";
import JSXBtton from "./JSXButton.jsx";
createApp({
    template:`
        <div>
        <SButton color="blue">蓝色按钮</SButton>
        <SButton color="green">绿色按钮</SButton>
        <SButton color="gray">灰色按钮</SButton>
        <SButton color="yellow">黄色按钮</SButton>
        <SButton color="red">红色按钮</SButton>
        </div>
    `
}).use(ViteCom).mount("#app")
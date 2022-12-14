import {defineConfig} from 'vite';
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from "./config/unocss";
import { presetUno, presetAttributify, presetIcons } from "unocss";
//import Unocss from "unocss/vite";
const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
};
export default defineConfig({
    plugins:[
        Unocss(),
        vue(),
        vueJsx({})
    ],
    build: {
        rollupOptions,
        minify:false,
        lib: {
          entry: "./src/entry.ts",
          name: "ViteCom",
          fileName: "vite-com",
          // 导出模块格式
          formats: ["esm", "umd","iife"],
        },
    },
})
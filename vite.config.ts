import {defineConfig} from 'vite';
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
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
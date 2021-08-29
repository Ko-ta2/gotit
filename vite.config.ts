import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import eslint from "@rollup/plugin-eslint"
import Components from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: resolve(__dirname) + "/src/"
      }
    ]
  },
  plugins: [
    vue(),
    Components({
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: '',
        enabledCollections: ['mdi-light']
      }),
    }),
    ViteIcons(),
    {
      ...eslint(),
      enforce: "pre",
      apply: "build",
    }
  ]
})

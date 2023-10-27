import { defineConfig } from 'vite'
import * as glob from 'glob';
import path, { resolve } from 'node:path';
import {ViteMinifyPlugin}from 'vite-plugin-minify'
import htmlPurgue from 'vite-plugin-purgecss'; 

export default defineConfig({
    build: {
        rollupOptions: {
            input: Object.fromEntries(
                [...glob.sync('./!(dist)/*.html').map(file => [
                    file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                ]),
                ...glob.sync('./*.html').map(file => [
                    file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
                ])]
            ),
        },
    },
    plugins:[
        htmlPurgue({}),
        ViteMinifyPlugin({}),
    ],
    base:"/github_pages_action_deploy"
})
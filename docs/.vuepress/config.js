// import { viteBundler } from '@vuepress/bundler-vite'
// import { gungnirTheme } from '@vuepress/theme-gungnir'
// import { defineUserConfig } from 'vuepress'
 
// export default defineUserConfig({
//   bundler: viteBundler(),
//   theme: gungnirTheme(),
// })
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
 
export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // 在这里进行配置
        navbar: [
            // NavbarItem
            { text: '首页', link: '/', },
            // NavbarGroup
            {
                text: 'yan的博客',
                children: [
                    { text: 'Github', link: 'https://github.com/Oneday12323' },
                    { text: '知乎', link: '/' },
                    { text: '掘金', link: '/' },
                ],
            },
        ],
        sidebar: [
            {
                text: '前言',
                collapsible: false,
                children: [
                    { text: '内容介绍' },
                    { text: '使用指南' }
                ]
            },
            {
                text: '算法学习',
                link: '/Algorithm/Divide&Conquer',
                collapsible: false,
                children: [
                    { text: '分治法', link: '/Algorithm/Divide&Conquer' }
                ],
            },
            {
                text: 'Java学习',
                link: '/Java/Java',
                collapsible: false,
                children: [
                    { text: 'Redis', link: '/Java/Redis/Redis' }
                ],
            }
        ]
    }),
 
    lang: 'zh-CN',
    title: 'yan的博客',
    description: '欢迎来到yan的博客',
})
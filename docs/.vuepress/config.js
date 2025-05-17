import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
 
export default defineUserConfig({
    // 设置 base 为您的仓库名
    base: '/KikiWinds/',
    
    bundler: viteBundler(),
    theme: defaultTheme({
        // 其余配置保持不变
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
    title: 'KiKiWinds',
    description: '欢迎来到KiKiWinds',
})
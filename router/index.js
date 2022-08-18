// 此文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import Links from "../src/pages/Links"

// 创建并暴露一个路由器
export default new VueRouter({
    mode:'history',
    // 注意单词的拼写
    routes:[
        {
            path: '/links',
            // 组件的名字
            component: Links
        }
    ]
})
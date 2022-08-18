//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false

// 按需引入
import {
    Button,
    Row,
    DatePicker,
    Switch,
    Tooltip,
    Col,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Avatar,
    Divider,
} from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Switch.name, Switch)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Col.name, Col)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Avatar.name, Avatar)
Vue.component(Divider.name, Divider)

new Vue({
    el: '#app',
    render: (h) => h(App),
    beforeCreate() {
        // 安装全局事件总线,this指向vue原型
        Vue.prototype.$bus = this
    },
})

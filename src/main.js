import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 请求文件
import api from '@/api'
// 引入常量
import * as CONSTANT from '@/constant'
// 引入工具函数
import tools from '@/utils/tools'
// 正则
import reg from '@/utils/reg'
// lodash
import _ from 'lodash'
// 引入es6-promise，解决IE不支持的问题
require('es6-promise').polyfill()
// rem(pc端可忽略)
import '@/utils/rem'
import '@/assets/css/font.less'
import '@/assets/js/font'
import '@/assets/css/icon.less'
// 初始化css
import '@/assets/css/base.css'
// 引入animate.css
import 'animate.css/animate.css'
// 滚动条样式
// import '@/assets/css/scrollBar.less'
// vue-quill-editor富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 拖拽插件
import VueDND from 'awe-dnd'
// 图片懒加载，使用本地图片需require()
import vueLazyLoad from 'vue-lazyload'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

// ======== 使用
Vue.prototype.$api = api
Vue.prototype.$c = CONSTANT
Vue.prototype.$tools = tools
Vue.prototype.$reg = reg
Vue.prototype._ = _
Vue.prototype.$driver = new Driver({
  allowClose: false, // 禁止点击外部关闭
  doneBtnText: '完成', // 完成按钮标题
  closeBtnText: '关闭', // 关闭按钮标题
  stageBackground: '#fff', // 引导对话的背景色
  nextBtnText: '下一步', // 下一步按钮标题
  prevBtnText: '上一步', // 上一步按钮标题
})
Vue.use(VueQuillEditor)
Vue.use(VueDND)

// 按需加载element-UI
import {
  Button,
  Message,
  Notification,
  Table,
  TableColumn,
  Upload,
  MessageBox,
  Input,
  InputNumber,
  Form,
  FormItem,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Scrollbar,
  Drawer,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Breadcrumb,
  BreadcrumbItem,
  Switch,
  Card,
  Col,
  Row,
  Alert,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Option,
  Pagination,
} from 'element-ui'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Scrollbar)
Vue.use(Drawer)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Switch)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.use(vueLazyLoad, {
  error: require('@/assets/img/error.jpg'),
  loading: require('@/assets/img/load4.gif')
})

// 注册全局过滤器
import * as filter from '@/filters'
// 导出一个对象，循环注册在vue上
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

// 是否显示生产模式的消息
Vue.config.productionTip = false
// 生产模式不显示调试插件
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//  ┏┓　　　┏┓
// ┏┛┻━━━┛┻┓
// ┃　　　　　　　┃
// ┃　　　━　　　┃
// ┃　┳┛　┗┳　┃
// ┃　　　　　　　┃
// ┃　　　┻　　　┃
// ┃　　　　　　　┃
// ┗━┓　　　┏━┛
//    ┃　　　┃                  神兽保佑
//    ┃　　　┃                  永无BUG！
//    ┃　　　┗━━━┓
//    ┃　　　　　　　┣┓
//    ┃　　　　　　　┏┛
//    ┗┓┓┏━┳┓┏┛
//      ┃┫┫　┃┫┫
//      ┗┻┛　┗┻┛

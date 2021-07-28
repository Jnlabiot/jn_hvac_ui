import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Layout,Icon, Menu,Breadcrumb,Carousel,Avatar,Divider,Descriptions,
  Card,Row,Col,Table,Tag,Form,Radio,Input,Modal,FormModel,Select,DatePicker,Checkbox,Switch,
  Message,List,Pagination,Tooltip,Spin,Collapse, Tabs} from 'ant-design-vue'



//全局请求拦截

//消息提醒
Vue.prototype.$message = Message
//布局
Vue.component(Button.name, Button)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Footer.name, Layout.Footer)

//菜单栏
Vue.component(Menu.name, Menu)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Icon.name, Icon)
//面包屑
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
//走马灯
Vue.component(Carousel.name, Carousel)

//头像
Vue.component(Avatar.name, Avatar)
//分割线
Vue.component(Divider.name, Divider)
//描述框
Vue.component(Descriptions.name, Descriptions)
Vue.component(Descriptions.Item.name, Descriptions.Item)
//卡片
Vue.component(Card.name, Card)
Vue.component(Card.Meta.name, Card.Meta)
//栅格系统，行和列
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
//表格和标志
Vue.component(Table.name, Table)
Vue.component(Tag.name, Tag)

//表单
Vue.component(Radio.name, Radio)
Vue.component(Radio.Group.name, Radio.Group)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
// 特别的引用
Vue.use(Modal)
//Vue.component(Modal.name, Modal)这样是错误的
// 双向绑定的表单
Vue.component(FormModel.name, FormModel)
Vue.component(FormModel.Item.name, FormModel)
// 选择按钮
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)

//数据
Vue.component(DatePicker.name,DatePicker)
//检查
Vue.component(Checkbox.name,Checkbox)
Vue.component(Checkbox.Group.name,Checkbox.Group)
Vue.component(Switch.name,Switch)

//规则列表
Vue.component(List.name,List)
Vue.component(List.Item.name,List.Item)
// 分页
Vue.component(Pagination.name,Pagination)
//文字提示
Vue.component(Tooltip.name,Tooltip)
//加载中
Vue.component(Spin.name,Spin)
//折叠面板
Vue.component(Collapse.name,Collapse)
Vue.component(Collapse.Panel.name,Collapse.Panel)
//时间范围
Vue.component(DatePicker.RangePicker.name,DatePicker.RangePicker)

//统计分析，标签页
Vue.component(Tabs.name,Tabs)
Vue.component(Tabs.TabPane.name,Tabs.TabPane)

Vue.config.productionTip = false
Vue.prototype.$form = Form

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

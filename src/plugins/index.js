import Vue from 'vue'
import { 
    Button,
    Scrollbar,
    Menu,
    Submenu,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Input,
    Switch,
    Select,
    Option,
    OptionGroup,
    ButtonGroup,
    Table,
    TableColumn,
    Dialog,
    Loading,
    Message,
    Checkbox,
    Pagination
 } from 'element-ui'
import ElTableBar from 'el-table-bar-base'
import 'el-table-bar-base/lib/ElTableBar.css'

export default ()=>{
    Vue.use(ElTableBar)
    Vue.use(Button)
    Vue.use(Scrollbar)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Input)
    Vue.use(Switch)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(ButtonGroup)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Dialog)
    Vue.use(Checkbox)
    Vue.use(Pagination)

    Vue.use(Loading.directive);
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$message = Message;
    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
}

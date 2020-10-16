<template>
    <table-page>
        <template #header>
          <form-search @search="search()" @reset="reset()">
              <template slot="form">
                  <el-form-item label="审批人">
                    <el-input v-model="state.formInline.user" placeholder="审批人"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-select v-model="state.formInline.region" placeholder="活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
              </template>
              <template slot="extra">
                <el-button @click="showModalEvent">显示modal</el-button>
              </template>
          </form-search>
        </template>
        <template #content>
          <table-list
            :data="state.tableData"
            :tableHeader="state.tableLabel">
            <template slot-scope="props" slot="checkbox">
              <el-checkbox />
            </template>
            <template slot-scope="props" slot="action">
              <el-button type="primary" @click="test(props)">测试</el-button>
              <el-button @click="test(props)">测试</el-button>
            </template>
            <template slot="total">总共120条数据线</template>
          </table-list>
        </template>
    </table-page>
</template>
<script>
import { reactive, computed } from '@vue/composition-api'
import Table from '@/mixins/table'
import {BROADCAST} from '@/utils/const'
import Login from '../Login/index'

export default {
    name:"Home",
    mixins:[Table],
    setup() {
      const state = reactive({
        count: 0,
        loading:true,
        double: computed(() => state.count + 4),
        formInline:{
          user:'',
          region:''
        },
        tableData:[{
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        },
        {
          usr:'1111',
          company:'564646',
          email:'emaill@qq.com',
          registTime:"12313213"
        }
        ],
        tableLabel: [
              { label: '多选', key:'checkbox',type: 'selection', width: '100',},
              { label: '用户名', key: 'usr', width: '150',},
              { label: '公司名称', key: 'company',width:'180'},
              { label: '办公邮箱', key: 'email', width:'150'},
              { label: '注册时间', key: 'registTime',width:120},
              { label: '测试时间', key:'operate',fixed:'right',width:160},
              { label: '审核状态', key: 'status', render:  (row) => {
                  if (row.status === 0) {
                    return '未审核'
                  } else if (row.status === 1) {
                    return '审核通过'
                  } else if(row.status ===2) {
                    return '审核不通过'
                  } else {
                    return '禁用'
                  }
                }       
              },
              {
                label:'操作',
                key:'action',
                fixed:'right',
                width:"150"
              }
            ]
      })

      function increment() {
        state.count++
      }

      function search(){
        this.showSuccess('....222222......')
        // this.showModelInfo('111111','222',function(){
        //   console.log('ok')
        // })
        let that = this;
        this.showConfirm({
          message:'提示消息'
        },async (msg)=>{
          console.log(msg)
        },async (err)=>{
          console.log(err)
        })
      }
      function currentPage(e){
        console.log(e)
      }

      function tableAction(e){
        console.log(e)
      }

      function tableSelection(e){
        console.log(e)
      }

      function test(item){
        console.log(item)
      }

      function showModalEvent(){
        this.$showModal.show('显示modal标题',Login,function(){
            console.log('关闭')
            this.$showModal.hide();
        })
      }

      

      return {
        state,
        increment,
        search,
        currentPage,
        tableAction,
        tableSelection,
        test,
        showModalEvent
      }
    },
    created() {
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
      },200)
        this.$EventBus.$off(BROADCAST.ADMIN_CONTRACT_LIST);
        this.$EventBus.$on(BROADCAST.ADMIN_CONTRACT_LIST, this.search);
    },
    beforeDestroy() {
        this.$EventBus.$off(BROADCAST.ADMIN_CONTRACT_LIST, this.search);
    },
}
</script>
<style lang="less" scoped>
.home{

}
</style>
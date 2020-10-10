<template>
    <div class="site_wrap">
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
        <table-list
          :showIndex = true
          :showSelection = true
          :table-data="state.tableData"
          :table-label="state.tableLabel"
          :pageSize = 10
          :loading = "loading"
          @current="currentPage"
          @action="tableAction"
          @selectionChange="tableSelection">
          <template slot-scope="props" slot="operate">
            <p>{{props.item.registTime}}</p>
          </template>
          <template slot-scope="props" slot="registTime">
            <p>{{props.index}}</p>
          </template>
          <template slot-scope="props" slot="action">
            <el-button type="primary" @click="test(props)">测试</el-button>
            <el-button @click="test(props)">测试</el-button>
          </template>
        </table-list>
    </div>
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
              { label: '用户名', key: 'usr', width: '200',},
              { label: '公司名称', key: 'company',width:'300'},
              { label: '办公邮箱', key: 'email', width:'200' },
              { label: '注册时间', slot: 'registTime',},
              { label: '测试时间', slot:'operate',fixed:'right'},
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
        console.log('search')
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
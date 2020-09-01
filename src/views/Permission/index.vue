<template>
    <div>
        <el-tree
            ref="tree"
            :data="data"
            show-checkbox
            node-key="name"
            :props="defaultProps">
        </el-tree>
        <el-button @click="submitPermission">提交</el-button>
    </div>
</template>
<script>
import {asyncRoutes} from '@/router/asyncRoutes'
export default {
    name:"Permission",
    data(){
        return{
            data:[],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    created(){
        this.dealRoutes(asyncRoutes);
    },
    methods:{
        //处理路由
        dealRoutes(routes){
            let filterRoutes = routes.filter(item=>item.meta);
            filterRoutes.map(item=>{
                if(item.meta && item.meta.title){
                    item.label = item.meta.title;
                }
                if(item.children){
                    this.dealRoutes(item.children);
                }
            });
            this.data = filterRoutes;
        },
        //提交选中的路由信息
        submitPermission(){
            let checkedKeys = this.$refs.tree.getCheckedKeys();
            console.log(checkedKeys)
            if(!checkedKeys.length){
                this.$message.error('请选择权限');
                return false;
            }
            let newRoutes = this.filterRoutes(asyncRoutes,checkedKeys);
            console.log(newRoutes)
            
        },
        filterRoutes(routes,keys){
            let getRoutes = [];
            routes.map(item=>{
                let newItem = null;
                if(keys.includes(item.name)){
                    newItem = item;
                }
                if(item.children && item.children.length){
                    let newChildren = this.filterRoutes(item.children,keys);
                    if(newChildren.length){
                        newItem = item;
                        newItem.children = newChildren;
                    }
                }
                if(newItem){
                    getRoutes.push(newItem)
                }
            })
            return getRoutes;
        }
    }
}
</script>
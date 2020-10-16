<template>
    <div>
        <el-dialog :visible.sync="showDialog" :close-on-click-modal="false">
            <span slot="title" class="dialog-title">{{title}}</span>
            <div class="content">
                <component :is="component"></component>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="hide">取 消</el-button>
                <el-button type="primary" @click="confirmModal">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:"ShowModal",
    data(){
        return{
            showDialog:false,
            title:'',
            component:null,
            callBack:null
        }
    },
    methods:{
        show(title,component,callBack){
            this.title = title;
            this.component = component;
            this.callBack = callBack;
            this.showDialog = true;
        },
        confirmModal(){
            this.callBack && this.callBack();
        },
        hide(){
            this.showDialog = false;
        }
    }
}
</script>
<style lang="less">
.el-dialog{
    width: 500px!important;
    border-radius: 4px!important;
    overflow: hidden;
}
.el-dialog__header{
    padding: 12px!important;
    font-size: 15px;
    color: #fff;
    text-align: center;
    background: @mainColor;
    .el-dialog__headerbtn{
        top: 15px;
    }
    .el-icon{
        color: #fff!important;
    }
}
</style>
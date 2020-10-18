<template>
    <el-form-item
        class="form-column"
        :label="label"
        :prop="prop"
        :inline="inline"
        :rules="rule"
        >
        <slot></slot>
    </el-form-item>
</template>
<script>
export default {
    name:'FormColumn',
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String,
            default:''
        },
        inline:{
            type:Boolean,
            default: true
        },
        rule:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>
<style lang="less">
.form-column{
    margin-right: 20px!important;
    margin-bottom: 20px!important;
    .el-form-item__label{
        padding-right: 5px!important;
    }
}
</style>
<template>
    <form-block ref="search" class="form-inline form_box">
        <div class="search flex_item">
            <slot name="form"></slot>
            <el-button class="form_btn" type="primary" @click="search()">搜索</el-button>
            <el-button class="form_btn" @click="reset()">重置</el-button>
        </div>
        <div class="extra">
            <slot name="extra"></slot>
        </div>
    </form-block>
</template>
<script>
export default {
    name:'FormSearch',
    methods:{
        search(){
            this.$emit('search')
        },
        reset(){
            this.$emit('reset')
        },
    }
}
</script>
<style lang="less" scoped>
.form_box{
    display: flex;
    display: -webkit-flex;
    .flex_item{
        flex: 1;
        -webkit-flex:1;
    }
}
.form-inline{
    margin-bottom: 10px;
    padding: 20px 20px 0;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid @borderColor;
    .form_btn{
        margin-bottom: 18px;
    }
}
</style>
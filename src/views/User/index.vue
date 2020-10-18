<template>
    <common-block>
        <!-- <form-block ref="userForm" :model="form" :rules="rules" :inline="false" labelWidth="100px"> -->
        <form-block ref="userForm" :model="form" :inline="false" labelWidth="100px">
            <form-column label="审批人" prop="user" :rule="rules.user">
                <el-input v-model="form.user" placeholder="请输入审批人"></el-input>
            </form-column>
            <form-column label="名称" prop="name" :rule="rules.name">
                <el-input v-model="form.name" placeholder="请输入审批人"></el-input>
            </form-column>
            <form-column label="密码" prop="pwd">
                <el-input v-model="form.pwd" type="password" placeholder="请输入审批人"></el-input>
            </form-column>
            <form-column>
                <el-button @click="resetForm()">重置</el-button>
                <el-button type="primary" @click="submitForm()">提交</el-button>
            </form-column>
        </form-block>
    </common-block>
</template>
<script>
export default {
    name:"User",
    data(){
        return{
            form:{
                user:'',
                name:'',
                pwd:''
            },
            rules:{
                user: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                ],
                name:[
                    { required: true, message: '请名称', trigger: 'blur' },
                ]
            },
            
        }
    },
    methods:{
        async submitForm(){
            let isRequired = await this.$refs['userForm'].validate();
            console.log('is-required:'+isRequired)
        },
        resetForm(){
            this.$refs['userForm'].resetForm();
        }
    }
}
</script>
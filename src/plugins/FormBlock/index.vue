<template>
    <el-form
        ref="form"
        :model="model"
        :rules="rules"
        :label-width="labelWidth"
        :inline="inline"
        :label-position="position"
        class="form-block"
        >
        <slot></slot>
    </el-form>
</template>
<script>
export default {
    name:'FormBlock',
    props:{
        model:{
            type:Object,
            default:()=>{}
        },
        rules:{
            type:Object,
            default:()=>{}
        },
        labelWidth:{
            type:String,
            default:''
        },
        inline:{
            type:Boolean,
            default:true
        },
        position:{
            type:String,
            default:'right'
        }
    },
    methods:{
        //验证
        validate() {
            return new Promise((resolve,reject)=>{
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                });
            })
        },
        //重置
        resetForm(){
            this.$refs['form'].resetFields();
        }
    }
}
</script>
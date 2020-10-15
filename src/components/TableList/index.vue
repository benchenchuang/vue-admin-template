<template>
    <div class="table_wrap">
        <el-table
            class="table_box"
            :data="data"
            :height="tableHeight"
            :row-class-name="showEmergencyLine"
            :highlight-current-row="true"
            border
            element-loading-spinner="el-icon-loading"
            element-loading-text="拼命加载中"
            element-loading-background="rgba(255, 255, 255, 0.8)"
            @selection-change="handleSelectionChange"
            v-loading.lock="isLock"
            header-cell-class-name="table_header">
            <el-table-column
                v-for="header in tableHeader"
                :type="header.type"
                :prop="header.key"
                :key="header.label"
                :label="header.label"
                :width="header.width"
                :fixed="header.fixed"
                :align="header.align || 'center'"
                header-align="center">
                    <template slot-scope="scope">
                        <slot :name="scope.column.property" :row="scope.row" :$index="scope.$index" >
                            <div>{{scope.row[scope.column.property]}}</div>
                        </slot>
                    </template>
            </el-table-column>
        </el-table>
        <div class="pagination_box flex">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="data.length"
                @current-change="changePage"
                >
            </el-pagination>
            <span class="total_num"><slot name="total"></slot></span>
        </div>
    </div>
</template>
<script>
export default {
    name:"CCTable",
    props:{
        data:{
            type: Array,
            default: []
        },
        tableHeader:{
            type: Array,
            default: []
        },
        tableHeight:{
            type: Number,
            default: 600
        },
        isLock:{
            type: Boolean,
            default: false
        },
        showEmergencyLine:{
            type:String,
            default:'cc_row'
        },
        pageSize:{
            type: Number,
            default: 10
        }
    },
    methods:{
        //选中的选项
        handleSelectionChange(e){
            console.log(e)
            this.$emit('selectionChange',e)
        },
        //翻页查看
        changePage(e){
            this.page = e;
            this.$emit('current',e)
        }
    }
}
</script>
<style lang="less">
.el-icon-loading{
    font-size: 16px;
}
.table_header{
    color: #666;
    font-size: 14px;
    height: 44px;
    font-weight: 500;
    background: #f7f7f7!important;
}
.table_wrap{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    flex: 1;
    -webkit-flex:1;
    padding: 20px;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    .table_scroll{
        flex: 1;
        -webkit-flex:1;
        overflow: hidden;
    }
    .table_box{
        flex: 1;
        -webkit-flex:1;
        overflow: hidden;
    }
}
.pagination_box{
    margin-top: 20px;
    text-align: right;
    flex-direction: row-reverse;
    .total_num{
        margin-right: 10px;
        font-size: 13px;
        color: #696969;
    }
}
</style>
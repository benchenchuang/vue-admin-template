<template>
    <div class="table_wrap">
        <el-table
            ref="table"
            v-loading="loading"
            element-loading-text="Loading"
            :data="tableData"
            border
            :fit="true"
            size="small"
            @selection-change="handleSelectionChange"
            style="width:99.9%;overflow:auto;">
            <!-- // table的第一列是判断是否为序号（showIndex）或者是选择框(showSelection) -->
                <el-table-column
                    v-if="showIndex"
                    width="55"
                    label="序号"
                    type="index"
                    align="center"
                    :index="indexMethod">
                </el-table-column>
                <el-table-column
                    v-if="showSelection"
                    width="55"
                    type="selection"
                    align="center">
                </el-table-column>
                <template v-for="(item,index) in tableLabel">
                    <el-table-column v-if="item.key!='action'" :key="item.key" :width="item.width ? item.width : 'auto'" align="center" :label="item.label" :prop="item.param" :sortable="item.sortable ? 'custom' : false">
                        <template slot-scope="scope">
                            <div v-if="item.slot">
                                <slot :name="item.slot" :item="scope.row" :index="scope.$index"></slot>
                            </div>
                            <div v-else>
                                <span v-if="item.render">
                                    {{item.render(scope.row)}}
                                </span>
                                <span v-else>{{scope.row[item.key]}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column v-else 
                        :fixed="item.fixed" 
                        :key="index"
                        align="center"
                        header-align="center"
                        :label="item.label"
                        :width="item.width">
                        <template slot-scope="scope">
                            <slot name="action" :item="scope.row" :index="scope.$index"></slot>
                        </template>
                    </el-table-column>
                </template>
        </el-table>
        <div class="pagination_box">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="tableData.length"
                @current-change="changePage"
                >
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name:"TableList",
    props:{
        loading:{
            type:Boolean,
            default:false
        },
        showIndex:{
            type:Boolean,
            default:false,
        },
        showSelection:{
            type:Boolean,
            default:false,
        },
        tableData:{
            type:Array,
            default: () => {
                return []
            }
        },
        tableLabel:{
            type:Array,
            default: () => {
                return []
            }
        },
        pageSize:{
            type:Number,
            default:10
        }
    },
    data(){
        return{
            page:1
        }
    },
    created(){

    },
    methods:{
        //选中的选项
        handleSelectionChange(e){
            this.$emit('selectionChange',e)
        },
        //序号
        indexMethod(index){
            return (this.page-1)*this.pageSize+(index+1)
        },
        //翻页查看
        changePage(e){
            this.page = e;
            this.$emit('current',e)
        },
        //操作事件
        handleButton(row,method) {
            this.$emit('action',{'row':row,'method':method});
        },
    }
}
</script>
<style lang="less">

.el-table__empty-block{
    min-height: 200px;
}
</style>
<style lang="less" scoped>
.table_wrap{
    padding: 20px;
    background: #fff;
    box-sizing: border-box;
    .table_list{
        width: 100%;
    }
    .pagination_box{
        margin-top: 20px;
        text-align: right;
    }
}
</style>
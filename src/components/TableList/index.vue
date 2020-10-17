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
            @sort-change="sortChange"
            v-loading.lock="isLock"
            header-cell-class-name="table_header">
            <template v-for="header in tableHeader">
                <el-table-column
                    :prop="header.key"
                    :key="header.label"
                    :label="header.label"
                    :width="header.width"
                    :fixed="header.fixed"
                    :sortable="header.sortable"
                    :align="header.align || 'center'"
                    header-align="center">
                        <template slot="header">
                            <slot :name="'header-'+header.key"></slot>
                        </template>
                        <template slot-scope="scope">
                            <slot :name="scope.column.property" :row="scope.row" :$index="scope.$index" >
                                <ex-slot v-if="header.render" :render="header.render" :row="scope.row" :index="scope.$index" :column="header" />
                                <div v-else>{{scope.row[scope.column.property]}}</div>
                            </slot>
                        </template>
                </el-table-column>
            </template>
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
// 自定义内容的组件
var exSlot = {
    functional: true,
    props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
            type: Object,
            default: null
        }
    },
    render: (createElement, data) => {
        let renderHtml = `${data.props.render(data.props.row)}`;
        return createElement(
            'div',
            {},
            [renderHtml]
        )
    }
}
export default {
    name:"CCTable",
    components: { exSlot },
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
        //排序
        sortChange(e){
            console.log(e)
            this.$emit('sortChange',e)
        },
        //翻页查看
        changePage(e){
            this.page = e;
            this.$emit('current',e)
        },
        // render 事件>>>>>其实实现原理 是根据vue中的render函数来实现>>>渲染表头
        renderHeader(h,{column}) { // h即为cerateElement的简写，具体可看vue官方文档
          return h(
          'span',
            {domProps: {           //此方法可渲染html代码column.label==='红色<br/>'
                innerHTML: `${column.label}`
              },},
            [],);
        },
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
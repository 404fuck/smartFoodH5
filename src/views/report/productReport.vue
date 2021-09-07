<!--
 * @Author: zzt
 * @Date: 2021-07-17 14:14:43
 * @LastEditTime: 2021-07-19 17:49:21
 * @LastEditors: Please set LastEditors
 * @Description: 产品分类
 * @FilePath: \SmartFoodH5\src\views\report\productReport.vue
-->
<template>
    <view-container class="bgfff">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('productReport.pageName')"
            ></navBar>
        </view-header>
        <view-content slot="content">
            <div slot="common">
                <van-row type="flex" align="center" justify="space-between">
                    <van-col span="6">
                        <selectStore></selectStore>
                    </van-col>
                    <van-col span="6" class="tr">
                        <downReport></downReport>
                    </van-col>
                </van-row>
                <van-row  class="mt15 oh">
                    <van-col class="fl">
                        <screenData
                            @changeScreenClick="changeScreenClick" 
                            :screenData="screenDataIndex"
                            :isStyleBlock='false'
                        ></screenData>
                    </van-col>
                    <van-col class="fl" :class="language=='zh_CN'?'ml30':'ml15'" @click="drawerShow=true">
                        <img src="../../static/images/screen.png" class="com-screenImg">
                    </van-col>
                    <van-col class="fr com-rang-data">
                        {{$t('dataRange')}}{{getTimeRange}}
                    </van-col>
                </van-row>
            </div>
            
            <div slot="table" class="com-table">
                <regularTable
                    :tListTit="tableListTit"
                    :tData="tableData"
                    :pageSize="currentPage.size"
                    :pageTotal="currentPage.total"
                    @handleCurrChange="handleCurrChange"
                    @sortChangeClick="sortChangeClick"
                ></regularTable>
            </div>
        </view-content>
        <view-model slot="module">
            <van-popup
                slot="model"
                v-model="drawerShow"
                get-container="body"
                position="right"
                :style="{ width: '42%',height:'100%' }" 
            >
                <div class="com-drawer">
                    <div class="draw-item">
                        <div class="draw-title">订单来源</div>
                        <button class="draw-button active">扫码点餐</button>
                        <button class="draw-button">服务员APP</button>
                        <button class="draw-button">服务员APP(HD)</button>
                        <button class="draw-button">云收银APP</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">就餐类型</div>
                        <button class="draw-button active">堂食</button>
                        <button class="draw-button">外带</button>
                    </div>
                    <div class="draw-bottom">
                        <div class="draw-rest">重置</div>
                        <div class="draw-comfirm">确定筛选</div>
                    </div>
                </div>
            </van-popup> 
        </view-model>
    </view-container>
</template>

<script>
export default {
    name: "productReport",
    components:{
        viewContainer: (resolve) =>require([ "../../components/viewContainer/viewContainer",], resolve),
        viewHeader: (resolve) =>require([ "../../components/viewContainer/viewHeader",], resolve),
        viewContent: (resolve) =>require([ "../../components/viewContainer/viewContent",], resolve),
        viewModel: (resolve) =>require([ "../../components/viewContainer/viewModel",], resolve),
        navBar: (resolve) =>require([ "../../components/navBar/navBar",], resolve),
        selectStore: (resolve) =>require([ "../../components/selectStore/selectStore",], resolve),
        downReport: (resolve) =>require([ "../../components/downReport/downReport",], resolve),
        screenData: (resolve) =>require([ "../../components/screenData/screenData",], resolve),
        regularTable: (resolve) =>require([ "../../components/tablesMolds/regularTable",], resolve),
    },
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data (){
        return {
            drawerShow:true,
            requestData: {
                end_time: 0, 
                start_time: 0,
            },
            // 时间范围筛选
            isRestData:true,
            screenDataIndex:0,
            getTimeRange: "06/02.2021 01:00 - 07/02/2021 00:59", //时间范围
            
            //table
            tableListTit:[
                {title:'分类名称',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "No" },
                {title:'称重菜重量',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "staus"},
                {title:'称重菜销售额',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "mode"},
                {title:'单品销量',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "count"},
                {title:'单品销售额',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "shishou"},
                {title:'销售总额',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "payType"},
            ],
            tableData:[
                {No:'马来菜',staus:'66.68',mode:'88.00',count:'8',shishou:'8',payType:'1234.67'},
                {No:'水果',staus:'16.68',mode:'66.00',count:'1',shishou:'1',payType:'134.67'},
                {No:'海鲜',staus:'6.68',mode:'811.00',count:'20',shishou:'12',payType:'0.00'},
                {No:'马来餐',staus:'2.68',mode:'223.00',count:'2',shishou:'3',payType:'8.00'},
                {No:'主菜',staus:'26.98',mode:'55.88',count:'20',shishou:'4',payType:'12.00'},
                {No:'水果',staus:'26.28',mode:'6.88',count:'21',shishou:'6',payType:'0.88'},
                {No:'海鲜',staus:'26.48',mode:'5.88',count:'12',shishou:'7',payType:'101.00'},
                {No:'快餐',staus:'126.68',mode:'88.87',count:'18',shishou:'9',payType:'66.00'},
                {No:'小吃',staus:'286.68',mode:'685.00',count:'1',shishou:'11',payType:'88.99'},
                {No:'烧烤',staus:'6826.68',mode:'1000.00',count:'10',shishou:'10',payType:'88.66'},
            ],
            currentPage: {
                total: 12,
                page: 1,
                size: 10,
            },

                        
        };
    },
    methods: {
        // 快捷时间选择
        changeScreenClick(start,end,index,isRestData){
            this.screenDataIndex = index;
                // this.requestData.start_time = this.moment(start).format("YYYYMMDD");
                // this.requestData.end_time = this.moment(end).format("YYYYMMDD");
            this.isRestData = isRestData;
            if(start!=null&&end!=null){
                // this.deprank();
            }
        },
        handleCurrChange(page){
            this.currentPage.page = page;
        },
        // 排序
        sortChangeClick(sort, index) {
            if(this.tableListTit[index].isSort==true){
                this.tableListTit[index].sort = sort;
                if (this.tableListTit[index].sort != 0) {
                    this.tableData.sort(
                        this.stringutils.sortBy(
                            this.tableListTit[index].key,
                            this.tableListTit[index].sort
                        )
                    );
                }

            }
            
            
           
           
        },
        
    
    },
    mounted(){
        
        
    },
    created() {
       
    
        
    },
};
</script>

<style lang="stylus" scoped>
    
</style>
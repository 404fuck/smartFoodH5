<!--
 * @Author: zzt
 * @Date: 2021-07-16 15:10:57
 * @LastEditTime: 2021-07-19 17:49:53
 * @LastEditors: Please set LastEditors
 * @Description: 退款报表
 * @FilePath: \SmartFoodH5\src\views\report\refundReport.vue
-->
<template>
    <view-container class="bgfff">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('refundReport.pageName')"
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
                <div class="com-reportCount mt10">
                    <reportCount
                        :title="'退款总额'" 
                    >
                    </reportCount>
                    <reportCount
                        :title="'退款订单数'"  
                    >
                    </reportCount>
                </div>
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
                        <div class="draw-title">就餐类型</div>
                        <button class="draw-button active">堂食</button>
                        <button class="draw-button">外带</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">退款原因</div>
                        <button class="draw-button active">钱款收错</button>
                        <button class="draw-button">有退菜</button>
                        <button class="draw-button">有赠菜</button>
                        <button class="draw-button">撤单退款</button>
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
    name: "refundReport",
    components:{
        viewContainer: (resolve) =>require([ "../../components/viewContainer/viewContainer",], resolve),
        viewHeader: (resolve) =>require([ "../../components/viewContainer/viewHeader",], resolve),
        viewContent: (resolve) =>require([ "../../components/viewContainer/viewContent",], resolve),
        viewModel: (resolve) =>require([ "../../components/viewContainer/viewModel",], resolve),
        navBar: (resolve) =>require([ "../../components/navBar/navBar",], resolve),
        selectStore: (resolve) =>require([ "../../components/selectStore/selectStore",], resolve),
        downReport: (resolve) =>require([ "../../components/downReport/downReport",], resolve),
        screenData: (resolve) =>require([ "../../components/screenData/screenData",], resolve),
        reportCount: (resolve) =>require([ "../../components/reportCount/reportCount",], resolve),
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
                {title:'订单号',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "No" },
                {title:'就餐类型',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "staus"},
                {title:'退款金额',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "mode"},
                {title:'退款时间',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "count"},
                {title:'退款原因',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "shishou"},
                {title:'操作人',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "payType"},
            ],
            tableData:[
                {No:'123456789098769',staus:'堂食',mode:'88.00',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'723456789098764',staus:'堂食',mode:'66.00',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'223456789098760',staus:'堂食',mode:'811.00',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'323456789098764',staus:'堂食',mode:'223.00',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'823456789098764',staus:'堂食',mode:'55.88',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'623456789098764',staus:'堂食',mode:'6.88',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'523456789098764',staus:'堂食',mode:'5.88',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'423456789098764',staus:'堂食',mode:'88.87',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'323456789098769',staus:'堂食',mode:'685.00',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
                {No:'123456789098764',staus:'堂食',mode:'1000.00',count:'18/06/2021 12:30:20',shishou:'撤单退款',payType:'主收银01'},
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
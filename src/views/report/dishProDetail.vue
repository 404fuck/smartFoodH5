<!--
 * @Author: zzt
 * @Date: 2021-07-19 11:23:55
 * @LastEditTime: 2021-07-19 17:49:30
 * @LastEditors: Please set LastEditors
 * @Description: 产品促销详情-结账优惠详情
 * @FilePath: \SmartFoodH5\src\views\report\dishProDetail.vue
-->
<template>
    <view-container class="bgfff">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="currTitle"
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
                <div class="label-data">
                    <span>
                        优惠金额：
                        <em class="ctheme">1234.89</em>
                    </span>
                    <span class="pl20">
                        次数：
                        <em class="ctheme">345</em>
                    </span>
                </div>
                <regularTable
                    class="mt10"
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
                        <div class="draw-title">活动渠道</div>
                        <button class="draw-button active">收银端</button>
                        <button class="draw-button">扫码点餐</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">促销类型</div>
                        <button class="draw-button active">整单折扣</button>
                        <button class="draw-button">优惠券</button>
                        <button class="draw-button">直减</button>
                        <button class="draw-button">会员整单折扣</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">活动名称</div>
                        
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
    name: "dishProDetail",
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
            currType:'',//查询的促销优惠方式 1: 菜品促销 2: 结账优惠,
            currTitle:'',
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
                {title:'促销类型',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "No" },
                {title:'活动名称',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "staus"},
                {title:'状态',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "mode"},
                {title:'次数',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "count"},
                {title:'优惠金额',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "shishou"},
            ],
            tableData:[
                {No:'整单折扣',staus:'非酒水8折',mode:'有效',count:'8',shishou:'12.56'},
                {No:'会员整单折扣',staus:'金牌会员 16%off',mode:'失效',count:'8',shishou:'16.88'},
                {No:'直减',staus:'满 100 减 20',mode:'永久有效',count:'8',shishou:'8.88'},
                {No:'优惠券',staus:'满 100 减 20',mode:'有效',count:'8',shishou:'6.48'},
                {No:'会员积分抵现',staus:'非酒水8折',mode:'有效',count:'8',shishou:'66.98'},
                {No:'整单折扣',staus:'非酒水8折',mode:'有效',count:'8',shishou:'6.58'},
                {No:'优惠券',staus:'非酒水8折',mode:'有效',count:'8',shishou:'6.89'},
                {No:'整单折扣',staus:'非酒水8折',mode:'有效',count:'8',shishou:'266.8'},
                {No:'整单折扣',staus:'非酒水8折',mode:'有效',count:'8',shishou:'636.09'},
                {No:'整单折扣',staus:'非酒水8折',mode:'有效',count:'8',shishou:'656.12'},
                {No:'整单折扣',staus:'非酒水8折',mode:'有效',count:'8',shishou:'666.83'},
                {No:'整单折扣',staus:'非酒水8折',mode:'有效',count:'8',shishou:'666.45'},
               
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
        this.currType = this.$route.query.type;
        if(this.currType=='1'){
            document.title = this.$t('promotionAnalysis.dishProDetail1');
            this.currTitle = this.$t('promotionAnalysis.dishProDetail1');
        }else if(this.currType=='2'){
           document.title = this.$t('promotionAnalysis.dishProDetail2');
           this.currTitle = this.$t('promotionAnalysis.dishProDetail2');
        }else{
            return false;
        }
        
       
    
        
    },
};
</script>

<style lang="stylus" scoped>
    .label-data
        color #505050
        font-size 12px
    
</style>

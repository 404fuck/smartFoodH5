<!--
 * @Author: zzt
 * @Date: 2021-07-17 16:34:23
 * @LastEditTime: 2021-07-19 17:49:40
 * @LastEditors: Please set LastEditors
 * @Description: 支付分析
 * @FilePath: \SmartFoodH5\src\views\report\paymentReport.vue
-->
<template>
    <view-container class="bgfff">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('paymentReport.pageName')"
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
    </view-container>
</template>

<script>
export default {
    name: "paymentReport",
    components:{
        viewContainer: (resolve) =>require([ "../../components/viewContainer/viewContainer",], resolve),
        viewHeader: (resolve) =>require([ "../../components/viewContainer/viewHeader",], resolve),
        viewContent: (resolve) =>require([ "../../components/viewContainer/viewContent",], resolve),
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
                {title:'收款方式',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "No" },
                {title:'支付渠道',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "staus"},
                {title:'营收总额',tipsTxt:'营收总额啊啊啊',isTipsShow:false,isSort:true,sort: 0,key: "mode"},
                {title:'订单总数',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "count"},
                {title:'退款总数',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "shishou"},
                {title:'退款订单数',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "payType"},
                {title:'净收总额',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "jingshou"},
            ],
            tableData:[
                {No:'现金',staus:'现金',mode:'88.00',count:'8',shishou:'8',payType:'1234.67',jingshou:'80.45'},
                {No:'银行卡',staus:'信用卡',mode:'8.00',count:'2',shishou:'0',payType:'0',jingshou:'0'},
                {No:'电子钱包',staus:'Boost',mode:'8.00',count:'2',shishou:'5',payType:'2834.88',jingshou:'20.25'},
                {No:'银行卡',staus:'现金',mode:'88.00',count:'54',shishou:'12',payType:'124.32',jingshou:'44.35'},
                {No:'现金',staus:'现金',mode:'88.00',count:'1',shishou:'11',payType:'121.12',jingshou:'55.32'},
                {No:'银行卡',staus:'现金',mode:'88.00',count:'5',shishou:'22',payType:'123.11',jingshou:'343.13'},
                {No:'银行卡',staus:'现金',mode:'88.00',count:'6',shishou:'1',payType:'80.31',jingshou:'244.25'},
                {No:'现金',staus:'现金',mode:'88.00',count:'9',shishou:'1',payType:'23.27',jingshou:'180.98'},
                {No:'电子钱包',staus:'Boost',mode:'88.00',count:'3',shishou:'3',payType:'99.36',jingshou:'830.66'},
                {No:'会员卡',staus:'Boost',mode:'88.00',count:'1',shishou:'4',payType:'60.65',jingshou:'840.44'},
                {No:'线上支付',staus:'借记卡',mode:'88.00',count:'11',shishou:'11',payType:'66.88',jingshou:'20.73'},
                {No:'扫码收款',staus:'Boost',mode:'88.00',count:'13',shishou:'21',payType:'66.32',jingshou:'10.22'},
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
<!--
 * @Author: zzt
 * @Date: 2021-06-17 10:22:19
 * @LastEditTime: 2021-07-19 17:26:42
 * @LastEditors: Please set LastEditors
 * @Description: 订单明细
 * @FilePath: \SmartFoodH5\src\views\report\orderDetail.vue
-->
<template>
    <view-container class="bgfff">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('orderDetail.pageName')"
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
                        <div class="draw-title">订单单号</div>
                        <input type="text" v-model="drawerObj.orderNo" placeholder="请输入订单号" class="draw-input">
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">服务员</div>
                        <input type="text" v-model="drawerObj.waiterName" placeholder="请输入服务员名称" class="draw-input">
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">营业模式</div>
                        <button class="draw-button active">桌台模式</button>
                        <button class="draw-button">叫号取餐</button>
                        <button class="draw-button">牌号送餐</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">就餐类型</div>
                        <button class="draw-button active">堂食</button>
                        <button class="draw-button">外带</button>
                        <button class="draw-button">部分外带</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">订单来源</div>
                        <button class="draw-button active">扫码点餐</button>
                        <button class="draw-button">服务员APP</button>
                        <button class="draw-button">服务员APP(HD)</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">订单状态</div>
                        <button class="draw-button active">未付款</button>
                        <button class="draw-button">已付款</button>
                        <button class="draw-button">已撤单</button>
                        <button class="draw-button">有退款</button>
                        <button class="draw-button">已拒单</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">优惠方式</div>
                        <button class="draw-button active">无优惠</button>
                        <button class="draw-button">菜品促销</button>
                        <button class="draw-button">结账优惠</button>
                        <button class="draw-button">会员优惠</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">支付方式</div>
                        <button class="draw-button active">现金</button>
                        <button class="draw-button">银行卡</button>
                        <button class="draw-button">扫码收款</button>
                        <button class="draw-button">电子钱包</button>
                        <button class="draw-button">会员卡</button>
                        <button class="draw-button">在线支付</button>
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
    name: "orderDetail",
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
                {title:'订单号',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "No"},
                {title:'订单状态',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "staus"},
                {title:'营业模式',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "mode"},
                {title:'就餐类型',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "type"},
                {title:'订单来源',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "souce"},
                {title:'订单金额',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "count"},
                {title:'实收金额',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "shishou"},
                {title:'支付方式',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "payType"}
            ],
            tableData:[
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
                {No:'123456789098764',staus:'未付款',mode:'桌台模式',type:'堂食',souce:'扫码点餐',count:'88.51',shishou:'86.88',payType:'Boost+会员卡'},
            ],
            currentPage: {
                total: 12,
                page: 1,
                size: 10,
            },
            //筛选条件
            drawerObj:{
                orderNo:'',
                waiterName:'',
            }

                        
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
        }
        
    
    },
    mounted(){
        
        
    },
    created() {
       
    
        
    },
};
</script>

<style lang="stylus" scoped>
    
</style>
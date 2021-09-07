<!--
 * @Author: zzt
 * @Date: 2021-06-17 10:21:16
 * @LastEditTime: 2021-07-21 17:18:30
 * @LastEditors: Please set LastEditors
 * @Description: 经营概览
 * @FilePath: \SmartFoodH5\src\views\report\reportManage.vue
-->
<template>
    <view-container class="bgeef">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('reportManage.pageName')"
                :isTips="true"
                :tipsTxt="'经营概览是什么东东呢?'"
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
                <van-row type="flex" align="center" justify="space-between" class="mt15">
                    <van-col>
                        <screenData
                            @changeScreenClick="changeScreenClick" 
                            :screenData="screenDataIndex"
                            :isStyleBlock="false"
                        ></screenData>
                    </van-col>
                    <van-col class="tr com-rang-data">
                        {{$t('dataRange')}}{{getTimeRange}}
                    </van-col>
                </van-row>
                <div class="com-reportCount mt10">
                    <reportCount 
                        :title="'原价总额'" 
                    >
                    </reportCount>
                    <reportCount
                        :title="'订单总额'"  
                    >
                    </reportCount>
                    <reportCount
                        :title="'实收总额'"   
                        :tipContext="'臣等不良人参见殿下'"
                    >
                    </reportCount>
                    <reportCount
                        :title="'净收总额'" 
                        :tipContext="'一悲一喜一枉然，一草一木一红颜'"
                    >
                    </reportCount>
                    <reportCount
                        :title="'订单总数'"  
                        :tipContext="'一天是不良人，一辈子是不良人'"
                    >
                    </reportCount>
                    <reportCount 
                        :title="'就餐人数(堂食/外带)'"  
                    >
                    </reportCount>
                </div>
                <div class="flex ali-c jus-b mt10" style="height:254px">
                    <!-- 订单来源 -->
                    <div class="com-panel w38">
                        <pieChart
                            :title="'订单来源'"
                            :eData="orderSouce.data"
                            :eUnitTit="orderSouce.unitTit"
                            :eUnit="orderSouce.unit"
                            @changeClick="orderSouceChange"
                        ></pieChart>
                        
                    </div>
                    <!-- 营业分析 -->
                    <div class="com-panel w60">
                        <lineChart
                            :title="'营业分析'"
                            @changeClick="businessChange"
                        ></lineChart>
                        
                    </div>
                    
                </div>
                <div class="flex ali-c jus-b mt10" style="height:272px">
                    <!-- 支付分析 -->
                    <div class="com-panel w38">
                        <pieChart
                            :title="'支付分析'"
                            :eData="payAnalysis.data"
                            :eUnitTit="payAnalysis.unitTit"
                            :eUnit="payAnalysis.unit"
                            @changeClick="payAnalysisChange"
                        ></pieChart>
                        
                    </div>
                    <!-- 产品销售排行Top10 -->
                    <div class="com-panel w60">
                        <rankTable
                            :title="'产品销售排行TOP10'"
                            :tListTit="tableListTit"
                            :tData="tableData"
                        ></rankTable>
                        
                    </div>
                    
                </div>
            </div>
        </view-content>
    </view-container>
</template>

<script>
export default {
    name: "reportManage",
    components:{
        viewContainer: (resolve) =>require([ "../../components/viewContainer/viewContainer",], resolve),
        viewHeader: (resolve) =>require([ "../../components/viewContainer/viewHeader",], resolve),
        viewContent: (resolve) =>require([ "../../components/viewContainer/viewContent",], resolve),
        navBar: (resolve) =>require([ "../../components/navBar/navBar",], resolve),
        selectStore: (resolve) =>require([ "../../components/selectStore/selectStore",], resolve),
        downReport: (resolve) =>require([ "../../components/downReport/downReport",], resolve),
        screenData: (resolve) =>require([ "../../components/screenData/screenData",], resolve),
        reportCount: (resolve) =>require([ "../../components/reportCount/reportCount",], resolve),
        pieChart: (resolve) =>require([ "../../components/echartsMolds/pieChart",], resolve),
        lineChart: (resolve) =>require([ "../../components/echartsMolds/lineChart",], resolve),
        rankTable: (resolve) =>require([ "../../components/tablesMolds/rankTable",], resolve),
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
            //订单来源图表
            orderSouce: {
                data:[],
                unitTit:"",
                unit:""
            },
            //支付分析图表
            payAnalysis: {
                data:[],
                unitTit:"",
                unit:""
            },
            //table
            tableListTit:[
                {title:'排名',tipsTxt:'',isTipsShow:false},
                {title:'产品名称',tipsTxt:'',isTipsShow:false},
                {title:'规格',tipsTxt:'',isTipsShow:false},
                {title:'销售数量',tipsTxt:'',isTipsShow:false},
                {title:'销售额',tipsTxt:'',isTipsShow:false},
            ],
            tableData:[
                {dish_name:'宫保鸡丁',spec_name:'大份',dish_num:'7',dish_count:'228.55'},
                {dish_name:'豆奶',spec_name:'大份',dish_num:'7',dish_count:'228.55'},
                {dish_name:'烧麦',spec_name:'小份',dish_num:'6',dish_count:'18.55'},
                {dish_name:'宫保鸡丁',spec_name:'大份',dish_num:'7',dish_count:'228.55'},
                {dish_name:'宫保鸡丁',spec_name:'大份',dish_num:'7',dish_count:'228.55'},
                {dish_name:'宫保鸡丁',spec_name:'大份',dish_num:'7',dish_count:'228.55'},
                {dish_name:'兰州拉面',spec_name:'大碗',dish_num:'7',dish_count:'228.55'},
                {dish_name:'宫保鸡丁',spec_name:'大份',dish_num:'7',dish_count:'228.55'},
                {dish_name:'宫保鸡丁',spec_name:'大份',dish_num:'7',dish_count:'228.55'},
                {dish_name:'宫保鸡丁',spec_name:'大份',dish_num:'7',dish_count:'228.55'}
            ],

                        
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
        orderSouceChange(index){
            console.log(index);
            this.orderSouce.data=[
                {
                    value: index == 0? 111: 222,
                    name: '扫码点餐',
                },
                {
                    value: index == 0? 333: 444,
                    name: '服务员APP',
                },
            ];
            this.orderSouce.unitTit =  index == 0 ? '单数' : '金额';
            this.orderSouce.unit = index == 0 ? '' : '单';
        },
        payAnalysisChange(index){
            this.payAnalysis.data=[
                {
                    value: index == 0? 111: 222,
                    name: 'SJOY钱包',
                },
                {
                    value: index == 0? 333: 444,
                    name: '现金',
                },
                {
                    value: index == 0? 555: 666,
                    name: '银行卡',
                },
                {
                    value: index == 0? 777: 888,
                    name: '电子钱包',
                },
            ];
            this.payAnalysis.unitTit =  index == 0 ? '单数' : '金额';
            this.payAnalysis.unit="";
        },
        businessChange(index){
            console.log(index);

        },
        
    
    },
    mounted(){
        this.orderSouceChange(0);
        this.payAnalysisChange(0);
        this.businessChange(0);
        
    },
    created() {
       
    
        
    },
};
</script>

<style lang="stylus" scoped>
    
</style>


<!--
 * @Author: zzt
 * @Date: 2021-07-17 11:43:32
 * @LastEditTime: 2021-07-17 14:20:18
 * @LastEditors: Please set LastEditors
 * @Description: 门店对比
 * @FilePath: \SmartFoodH5\src\views\report\storeComparison.vue
-->
<template>
    <view-container class="bgfff">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('storeComparison.pageName')"
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
                    <van-col class="fl" :class="language=='zh_CN'?'ml30':'ml15'">
                        <img src="../../static/images/screen.png" class="com-screenImg">
                    </van-col>
                    <van-col class="fr com-rang-data">
                        {{$t('dataRange')}}{{getTimeRange}}
                    </van-col>
                </van-row>
                <div class="com-reportCount mt10">
                    <reportCount
                        :title="'净收总额'" 
                        :isTag="true"
                    >
                    </reportCount>
                    <reportCount
                        :title="'实收总额'"
                        :isTag="true"  
                    >
                    </reportCount>
                    <reportCount
                        :title="'订单总额'"
                        :isTag="true"  
                    >
                    </reportCount>
                    <reportCount
                        :title="'订单总数'"
                        :isTag="true"  
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
        <!-- <view-model slot="module"></view-model> -->
    </view-container>
</template>

<script>
export default {
    name: "storeComparison",
    components:{
        viewContainer: (resolve) =>require([ "../../components/viewContainer/viewContainer",], resolve),
        viewHeader: (resolve) =>require([ "../../components/viewContainer/viewHeader",], resolve),
        viewContent: (resolve) =>require([ "../../components/viewContainer/viewContent",], resolve),
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
                {title:'门店名称',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "No" },
                {title:'实收净额',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "staus"},
                {title:'订单总额',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "mode"},
                {title:'订单总数',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "count"},
                {title:'就餐人数',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "shishou"},
                {title:'人均消费',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "payType"},
            ],
            tableData:[
                {No:'门店01',staus:'66.68',mode:'88.00',count:'8',shishou:'8',payType:'1234.67'},
                {No:'门店01',staus:'16.68',mode:'66.00',count:'1',shishou:'1',payType:'134.67'},
                {No:'门店01',staus:'6.68',mode:'811.00',count:'20',shishou:'12',payType:'0.00'},
                {No:'门店01',staus:'2.68',mode:'223.00',count:'2',shishou:'3',payType:'8.00'},
                {No:'门店01',staus:'26.98',mode:'55.88',count:'20',shishou:'4',payType:'12.00'},
                {No:'门店01',staus:'26.28',mode:'6.88',count:'21',shishou:'6',payType:'0.88'},
                {No:'门店01',staus:'26.48',mode:'5.88',count:'12',shishou:'7',payType:'101.00'},
                {No:'门店01',staus:'126.68',mode:'88.87',count:'18',shishou:'9',payType:'66.00'},
                {No:'门店01',staus:'286.68',mode:'685.00',count:'1',shishou:'11',payType:'88.99'},
                {No:'门店01',staus:'6826.68',mode:'1000.00',count:'10',shishou:'10',payType:'88.66'},
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
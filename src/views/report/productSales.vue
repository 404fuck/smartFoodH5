<!--
 * @Author: zzt
 * @Date: 2021-07-17 11:43:32
 * @LastEditTime: 2021-07-19 17:53:02
 * @LastEditors: Please set LastEditors
 * @Description: 产品销售
 * @FilePath: \SmartFoodH5\src\views\report\productSales.vue
-->
<template>
    <view-container class="bgfff">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('productSales.pageName')"
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
                        <button
                            v-for="(item,index) in changeTit"
                            :key="index" 
                            class="changeBtn"
                            :class="{active:changeIndex==index}"
                            @click="changeIndex=index"
                        >{{item}}</button>
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
                        :title="'销量金额'" 
                    >
                    </reportCount>
                    <reportCount
                        :title="'销售数量'"
                          
                    >
                    </reportCount>
                    <reportCount
                        :title="'赠菜金额'"
                    >
                    </reportCount>
                    <reportCount
                        :title="'赠菜数量'"
                        :tipContext="'一天是不良人，一辈子是不良人'"
                        
                    >
                    </reportCount>
                    <reportCount
                        :title="'退菜金额'"
                        :tipContext="'一天是不良人，一辈子是不良人'"
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
                    <div class="draw-item mt20">
                        <div class="draw-title">产品类型</div>
                        <button class="draw-button active">普通菜</button>
                        <button class="draw-button">多规格菜</button>
                        <button class="draw-button">临时菜</button>
                        <button class="draw-button">仅套餐销售菜</button>
                    </div>
                    <div class="draw-item mt20">
                        <div class="draw-title">套餐类型</div>
                        <button class="draw-button active">固定</button>
                        <button class="draw-button">自选</button>
                    </div>
                    
                    <div class="draw-item mt20">
                        <div class="draw-title">产品分类</div>
                        
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
    name: "productSales",
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
            changeTit:['单品','称重菜','套餐'],
            changeIndex:0,
            //table
            tableListTit:[
                {title:'产品名称',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "No" },
                {title:'产品分类',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "staus"},
                {title:'产品规格',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "mode"},
                {title:'产品类型',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "count"},
                {title:'产品原价',tipsTxt:'',isTipsShow:false,isSort:false,sort: 0,key: "shishou"},
                {title:'销售数量',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "payType"},
                {title:'销售金额',tipsTxt:'',isTipsShow:false,isSort:true,sort: 0,key: "xiaoshou"},
            ],
            tableData:[
                {No:'酸辣土豆丝',staus:'热菜',mode:'大份',count:'多规格菜',shishou:'26.88',payType:'1234.67',xiaoshou:'131.00'},
                {No:'抹茶小松饼',staus:'甜点',mode:'小份',count:'临时菜',shishou:'16.88',payType:'534.22',xiaoshou:'81.00'},
                {No:'马来西亚肉骨茶',staus:'肉骨茶',mode:'大份',count:'普通菜',shishou:'12.88',payType:'8.11',xiaoshou:'16.00'},
                {No:'酸辣土豆丝',staus:'热菜',mode:'大份',count:'多规格菜',shishou:'26.88',payType:'34.22',xiaoshou:'76.00'},
                {No:'抹茶小松饼',staus:'甜点',mode:'小份',count:'临时菜',shishou:'13.88',payType:'54.99',xiaoshou:'55.00'},
                {No:'可乐鸡翅',staus:'热菜',mode:'大份',count:'普通菜',shishou:'33.88',payType:'18.88',xiaoshou:'22.00'},
                {No:'酸辣土豆丝',staus:'热菜',mode:'大份',count:'多规格菜',shishou:'55.88',payType:'34.22',xiaoshou:'33.00'},
                {No:'红烧牛肉',staus:'热菜',mode:'小份',count:'临时菜',shishou:'99.88',payType:'204.33',xiaoshou:'8.00'},
                {No:'马来西亚肉骨茶',staus:'肉骨茶',mode:'大份',count:'普通菜',shishou:'8.88',payType:'188.66',xiaoshou:'666.00'},
                {No:'芒果卷',staus:'甜点',mode:'大份',count:'多规格菜',shishou:'6.88',payType:'1334.67',xiaoshou:'11.00'},
                {No:'抹茶小松饼',staus:'甜点',mode:'小份',count:'临时菜',shishou:'1.28',payType:'534.87',xiaoshou:'61.00'},
                {No:'椰汁糕',staus:'甜点',mode:'小份',count:'普通菜',shishou:'22.88',payType:'8.33',xiaoshou:'6.00'},
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
    .changeBtn
        padding 5px 20px
        color #505050
        font-size 14px
        background #fff
        border-radius 8px
        margin-right 10px
    .changeBtn.active 
        background #FE813C
        color #fff
    
</style>
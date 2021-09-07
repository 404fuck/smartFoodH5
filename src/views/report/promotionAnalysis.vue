<!--
 * @Author: zzt
 * @Date: 2021-07-17 16:55:47
 * @LastEditTime: 2021-07-19 15:02:49
 * @LastEditors: Please set LastEditors
 * @Description: 促销分析
 * @FilePath: \SmartFoodH5\src\views\report\promotionAnalysis.vue
-->
<template>
    <view-container class="bgeef">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('promotionAnalysis.pageName')"
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
                <div class="flex jus-b ali-c mt10">
                    <div class="lable-wrap">
                        <div class="title">促销分析</div>
                        <h3 class="num ctheme">
                            <span>0.00</span>
                        </h3>
                    </div>
                    <div class="lable-wrap">
                        <div class="title">促销次数</div>
                        <h3 class="num ctheme">
                            <span>0</span>
                        </h3>
                    </div>
                </div>
                <div class="flex ali-c jus-b mt10" style="height:396px">
                    <div class="com-panel w49">
                        <div class="flex ali-c jus-b">
                            <h3 class="fs14">产品促销</h3>
                            <div class="fs12 ctheme" @click="dishProClick(1)">
                                详情
                                <img src="../../static/images/more.png" class="moreImg">
                            </div>
                        </div>
                        <div class="flex ali-c mt30">
                            <div class="flex1">
                                <span class="fs12">金额</span>
                                <span class="pl10 fs24 fw">690.00</span>
                            </div>
                            <div class="flex1">
                                <span class="fs12">次数</span>
                                <span class="pl10 fs24 fw">290</span>
                            </div>
                        </div>
                        <div class="com-line mt20"></div>
                    </div>
                    <div class="com-panel w49">
                        <div class="flex ali-c jus-b">
                            <h3 class="fs14">结账优惠</h3>
                            <div class="fs12 ctheme" @click="dishProClick(2)">
                                详情
                                <img src="../../static/images/more.png" class="moreImg">
                            </div>
                        </div>
                        <div class="flex ali-c mt30">
                            <div class="flex1">
                                <span class="fs12">金额</span>
                                <span class="pl10 fs24 fw">690.00</span>
                            </div>
                            <div class="flex1">
                                <span class="fs12">次数</span>
                                <span class="pl10 fs24 fw">290</span>
                            </div>
                        </div>
                        <div class="com-line mt20"></div>
                    </div>


                </div>
            </div>
        </view-content>
        <!-- <view-model slot="module"></view-model> -->
    </view-container>
</template>

<script>
export default {
    name: "promotionAnalysis",
    components:{
        viewContainer: (resolve) =>require([ "../../components/viewContainer/viewContainer",], resolve),
        viewHeader: (resolve) =>require([ "../../components/viewContainer/viewHeader",], resolve),
        viewContent: (resolve) =>require([ "../../components/viewContainer/viewContent",], resolve),
        navBar: (resolve) =>require([ "../../components/navBar/navBar",], resolve),
        selectStore: (resolve) =>require([ "../../components/selectStore/selectStore",], resolve),
        downReport: (resolve) =>require([ "../../components/downReport/downReport",], resolve),
        screenData: (resolve) =>require([ "../../components/screenData/screenData",], resolve),
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
        dishProClick(val){
            let curType = String(val);
            this.$router.push({ path: "/dishProDetail", query: { type:curType}});

        },
        
    
    },
    mounted(){
        
        
    },
    created() {
       
    
        
    },
};
</script>

<style lang="stylus" scoped>
    .lable-wrap
        width 49.4%
        height 100px
        padding 10px 15px
        box-shadow 0px 1px 10px 0px rgba(0, 0, 0, 0.1)
        border-radius 8px
        background #fff
        .title
           font-size 12px
           color #474744
        .num
           margin-top 15px
           font-size 24px
           text-align center
    .moreImg
        width 12px
        height 12px
           
    
</style>
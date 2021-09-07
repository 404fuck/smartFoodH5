<!--
 * @Author: zzt
 * @Date: 2021-07-13 11:19:04
 * @LastEditTime: 2021-07-17 12:02:54
 * @LastEditors: Please set LastEditors
 * @Description: 报表数据升降统计
 * @FilePath: \SmartFoodH5\src\components\reportCount\reportCount.vue
-->
<template>
    <div class="countWrap">
        <div class="flex ali-c jus-b">
            <span class="title">
                {{title}}
                <van-popover 
                    v-if="tipContext!=''"
                    v-model="isTipshow"
                    trigger="click"
                    placement="right"
                >
                    <div class="com-tips-wrap">{{tipContext}}</div>
                    <template #reference>
                        <img src="../../static/images/tip.png" class="tipImg">
                    </template>
                    
                </van-popover>
                <span class="tagging" v-if="isTag">({{$t('all')}})</span>
            </span>
            <img src="../../static/images/report_down.png" class="updownImg">
        </div>
        <h3 class="countPrice">0.00</h3>
        <div class="countBottom">
            <span>较前一天</span>
            <span class="pl10">-210.00%</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "reportCount",
    props:{
        //标题
        title:{
            type:String,
            default:"",
        },
        //备注内容为空，默认没有提示
        tipContext:{
            type:String,
            default:"",
        },
        //是否有（全部）字段
        isTag:{
            type:Boolean,
            default:false,
        },

    },
    
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data() {
        return {
            isTipshow:false,  
        };

    },
    methods: {
        

    },
    created() {

    },
    watch: {

    },

};
</script>

<style lang="stylus" scoped>
.countWrap
    display inline-block
    vertical-align top   
    white-space normal
    width 190px
    height 100px
    border-radius 10px
    background #fff
    margin-right 12px
    padding 10px 15px
    color #474744
    .title
       font-size 12px
    .tagging
       color #EB3C1C
       padding-left 2px
    .tipImg
        width 11px
        height 11px
        position relative
        top -5px
        left -1px
    .updownImg
        width 7px
        height 13px
    .countPrice
        margin-top 10px
        font-size 22px
        text-align center
    .countBottom
        margin-top 10px
        text-align center
        font-size  10px
    
    
        
</style>
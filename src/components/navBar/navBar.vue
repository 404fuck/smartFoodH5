<!--
 * @Author: zzt
 * @Date: 2021-06-17 14:42:32
 * @LastEditTime: 2021-07-19 11:35:49
 * @LastEditors: Please set LastEditors
 * @Description: navBar
 * @FilePath: \SmartFoodH5\src\components\navBar\navBar.vue
-->
<template>
    <van-row type="flex" justify="space-between" align="center">
        <van-col span="14" class="flex ali-c">
            <img src="../../static/images/back.png" @click="backClick" class="backImg">
            <span class="title">
                {{title}}
                <van-popover 
                    v-if="isTips"
                    v-model="isTipshow"
                    trigger="click"
                    placement="right"
                >
                    <div class="com-tips-wrap">{{tipsTxt}}</div>
                    <template #reference>
                        <img src="../../static/images/tip.png" class="tipImg">
                    </template>
               </van-popover>
            </span>
        </van-col>
        <van-col span="10">
            <van-row type="flex" justify="space-between" align="center" class="fs12">
                <van-col span="6" @click="downClick">
                    <img src="../../static/images/downRj.png" class="downImg">
                    <span class="ctheme pl7">{{$t('softDown')}}</span>
                </van-col>
                <van-col span="7" class="flex ali-c">
                    <div class="infoImg">
                        <img src="../../static/images/pic2.jpg">
                    </div>
                    <div class="oneline pl7">12345678</div>
                </van-col>
                <van-col span="2" class="icon-col" @click="handleSetLanguage">
                    <img src="../../static/images/en_icon.png" class="langImg" v-if="language=='en_US'">
                    <img src="../../static/images/zh_icon.png" class="langImg" v-else >
                </van-col>
                <van-col span="1"></van-col>
                <van-col span="2" class="icon-col" @click="noticeClick">
                    <img src="../../static/images/email.png" class="emailImg">
                    <i class="noticeDot" v-if="isBadgeDot"></i>
                </van-col>
                <van-col span="6" class="icon-col">
                    <div class="backHD ctheme">返回收银</div>
                </van-col>
            </van-row>
        </van-col>
    </van-row>
</template>

<script>
export default {
    name: "navBar",
    props:{
        title:{
            type:String,
            default:"",
        },
        isTips:{
            type:Boolean,
            default:false,
        },
        tipsTxt:{
            type:String,
            default:"",
        },
    },
    computed: {
        language: {
            get() {
                return this.$store.getters.language;
            },
            set() {
            },
        },
    },
    data() {
        return {
            isTipshow:false,  //帮助提示说明
            isBadgeDot: true,//邮箱新消息提示


        };

    },
    methods: {
        backClick(){
            this.$router.back(-1);
        },
        downClick(){
            console.log(`软件下载`);
        },
        handleSetLanguage() {
            if(this.language=='en_US'){
                this.$store.dispatch("setLanguage", 'zh_CN');
                this.$i18n.locale = 'zh_CN';
            }else{
                this.$store.dispatch("setLanguage", 'en_US');
                this.$i18n.locale = 'en_US';
            }
        },
        noticeClick(){
            // this.$router.push("/review/reNoticeManage");
        },
        backHD(){
            // if(window.android!=undefined&&window.android!=null){
            //    this.stringutils.clearData();
            //    window.android.backMainCashier();
            // }
        },

    },
    created() {

    },
    watch: {
        language(){
            //刷新页面
            this.$router.go(0);
        },
    },

};
</script>

<style lang="stylus" scoped>
    .backImg
       width 16px
       height 12px
       opacity .8
    .title
       font-size 13px
       padding-left 15px
       color #555
       font-weight bold
    .tipImg
       width 11px
       height 11px
       position relative
       top -5px
       left -1px
    .icon-col
       position  relative
       text-align center
    .downImg
       width 12px
       height 13px
       position relative
       top -3px
       left 0
    .infoImg
       width 20px
       height 20px
       border-radius 50%
       background #eee
       overflow hidden
       img
          display block
          width 100%
          height 100%
    .langImg 
        width 20px
        height 20px
    .emailImg 
        width 20px
        height 21px
    .backHD
        float right
        width 72px
        height 25px  
        line-height 24px
        font-size  12px
        text-align center
        font-weight 500
        background rgba(254, 241, 234, 0.45)
        border-radius 4px
        letter-spacing 1px
        border 1px solid #FE813C
    .noticeDot
        position absolute
        left 24px
        top 17px
        width 4px
        height 4px
        background-color #ee0a24
        border-radius 100%
    
</style>
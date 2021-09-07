<!--
 * @Author: zzt
 * @Date: 2021-06-19 11:48:19
 * @LastEditTime: 2021-07-15 16:39:17
 * @LastEditors: Please set LastEditors
 * @Description: 下载报表
 * @FilePath: \SmartFoodH5\src\components\downReport\downReport.vue
-->
<template>
    <div>
        <div class="down-report" @click="isEmail=true">
            {{$t('exportCSV')}}
            <img src="../../static/images/down.png" class="downImg">
        </div>
        
        <van-popup
            v-model="isEmail"
            round
            :style="{ width: '35%',padding:'30px 35px' }" 
        >   
            <van-icon name="cross" color="#ccc" class="fr fs18"  @click="isEmail=false"/>
            <div class="clear"></div>
            <h3 class="email-tit">{{$t('Toemail')}}</h3>
            <div class="mt30">
                <input
                    v-model="emailValue"
                    :disabled="isdefault"
                    type="text"
                    class="email-value"
                />
            </div>
            <div class="mt20">
                <van-checkbox
                    icon-size='16px'
                    :block="false" 
                    v-model="isdefault"
                    checked-color="#FE813C"
                >
                    <span style="color:#666" class="fs14">{{$t('Setemail')}}</span>
                </van-checkbox>
            </div>
            <van-row type="flex" justify="center" align="center" class="mt40">
                <van-col span="8">
                    <van-button round block plain color="#808080" class="email-btn" @click="isEmail=false">{{$t('cancel')}}</van-button>
                </van-col>
                <van-col span="3"></van-col>
                <van-col span="8">
                    <van-button round block color="#FE813C" class="email-btn" @click="sendClick">{{$t('send')}}</van-button>
                </van-col>
            </van-row>
        </van-popup>
    
    </div>
</template>

<script>
export default {
    name: "downReport",
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data() {
        return {
            isEmail:false,
            isdefault:false,//是否设置为默认邮箱
            emailValue:"",
        };

    },
    methods: {
        // 发送
        sendClick(){
            this.isEmail = false;
        },

    },
    created() {

    },
    watch: {

    },

};
</script>

<style lang="stylus" scoped>
    .down-report
        display inline-block
        padding 4px 10px
        border 1px solid #eb3c1c
        border-radius 4px
        font-size 12px
        color #eb3c1c
    .downImg
        width 9px
        height 14px
        margin-left 5px
    .email-tit
        text-align left
        font-size 16px
        color #808080
    .email-value
        font-size 16px
        width 100%
        border-bottom 1px #b7b7b7 solid
    .email-btn
        height 30px
        font-size 14px
</style>
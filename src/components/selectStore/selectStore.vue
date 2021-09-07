<!--
 * @Author: zzt
 * @Date: 2021-06-18 09:50:03
 * @LastEditTime: 2021-07-14 10:35:45
 * @LastEditors: Please set LastEditors
 * @Description: 门店选择
 * @FilePath: \SmartFoodH5\src\components\selectStore\selectStore.vue
-->
<template>
    <van-row type="flex" align="center">
        <van-col class="storeTxt">
            门店
        </van-col>
        <van-col class="select-wrap">
            <div class="select-trigger flex ali-c" ref="trigger" @click.stop="triggerClick">
                <div class="select-value">{{currentStore.dep_comp_name}}</div>
                <van-icon class="select-allow fs16" name="arrow-down" color="#555"  :class="isDropdown?'open':''"/>
            </div>
            <div class="select-dropdown" ref="showPanel" v-show="isDropdown" :class="isDropdown?'open':''">
                <ul>
                    <li 
                        @click="selectClick(item)"
                        v-for="item in option1" 
                        :key="item.dep_ID"
                        :class="currentStore.dep_ID==item.dep_ID?'active':''"
                    >{{item.dep_comp_name}}</li>
                </ul>
            </div>
        </van-col>
    </van-row>
</template>

<script>
export default {
    name: "selectStore",
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
            currentStore:{dep_comp_name:'Mjoy快餐店',dep_ID:2555},
            isDropdown: false,
            option1:[{dep_comp_name:'沙县小吃',dep_ID:2668},{dep_comp_name:'Mjoy快餐店',dep_ID:2555},{dep_comp_name:'华莱士华莱士',dep_ID:4558},{dep_comp_name:'黄焖鸡米饭',dep_ID:2998}]


        };

    },
    methods: {
        triggerClick(){
            this.isDropdown = !this.isDropdown;
        },
        selectClick(item){
            this.currentStore = item;
            this.isDropdown = false;
        },
        // 触发
        onTrigger(){
            document.addEventListener("click", e => {
                if (this.$refs.showPanel) {
                    let isSelf = this.$refs.showPanel.contains(e.target);
                    if (!isSelf&&this.isDropdown) {
                        this.isDropdown = false;
                    }
                }
            });
        },

    },
    created() {
        this.onTrigger();
    },
    watch: {

    },

};
</script>

<style lang="stylus" scoped>
    .storeTxt
        padding 2px 4px
        font-size 10px
        color #fff
        background linear-gradient(180deg, #F68331 0%, #EB3C1C 100%)
        border-radius 4px
    .select-wrap
        position relative
        width 55%
        .select-trigger
            width 100%
            height 30px
            .select-value
                width 100%
                font-size 13px
                margin 0 8px
                white-space nowrap
                overflow hidden
        .select-dropdown
            position absolute
            left 0
            top 45px
            z-index 999
            width 100%
            height auto
            background #fff
            border 1px solid #E4E7ED
            border-radius 4px
            padding 5px 0
            box-shadow 0 2px 12px 0 rgba(0,0,0,0.1)
            ul li
               padding 0px 16px
               height 35px
               line-height 35px
               font-size 13px
               color #666
               white-space nowrap
               text-overflow ellipsis
               overflow hidden
               &:hover 
                background #F5F7FA
            ul li.active
                color #FE813C
                background #F5F7FA   
        .select-dropdown.open
            -webkit-animation slide-down .5s ease-in
            transition .3s ease-in
            transform-origin 50% 0
        .select-allow.open
            transform rotate(-180deg)
            transform-origin center
            transition all .2s ease-in-out
    
</style>
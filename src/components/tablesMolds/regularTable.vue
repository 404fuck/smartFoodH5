<!--
 * @Author: zzt
 * @Date: 2021-07-13 16:23:43
 * @LastEditTime: 2021-07-16 17:02:28
 * @LastEditors: Please set LastEditors
 * @Description: 常规表格
 * @FilePath: \SmartFoodH5\src\components\tablesMolds\regularTable.vue
-->
<template>
    <div class="regularTable-wrap">
        <!-- 表格 -->
        <div class="regular-table">
            <table>
                <thead>
                    <tr>
                        <th
                           v-for="(item,index) in tListTit"
                           :key="index"
                        >
                            {{item.title}}
                            <!-- 提示 -->
                            <van-popover 
                                v-if="item.tipsTxt!=''"
                                v-model="item.isTipsShow"
                                trigger="click"
                                placement="right"
                            >
                                    <div class="com-tips-wrap">{{item.tipsTxt}}</div>
                                    <template #reference>
                                        <img src="../../static/images/tip.png" class="tipImg">
                                    </template>
                            </van-popover>
                            <!-- 排序 -->
                            <span @click="sortChangeClick(index)" v-if="item.isSort">
                                <img
                                    v-if="sortIndex == -1"
                                    src="../../static/images/sortDown.png"
                                    class="sortImg"
                                />
                                <img
                                    v-else-if="sortIndex == 1"
                                    src="../../static/images/sortUp.png"
                                    class="sortImg"
                                />
                                <img
                                    v-else
                                    src="../../static/images/sortUnselect.png"
                                    class="sortImg"
                                />
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                       v-for="(items,i) in tData"
                       :key="i"
                    >   
                        <td
                          v-for="(item,j) in items"
                          :key="j"
                        >{{item}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="com-table-noData" v-if="tData == null || tData.length == 0">暂无数据</div>
        </div>
        <div class="flex flexc mt20"  v-if="pageTotal !== 0">
            <van-pagination
                @change="handleCurrChange" 
                v-model="pagePage"
                :total-items="pageTotal"
                :items-per-page="pageSize"
                :show-page-size="4" 
                force-ellipses
            >
                <template #prev-text>
                    <van-icon name="arrow-left" />
                </template>
                <template #page="{ text }">{{ text }}</template>
                <template #next-text>
                    <van-icon name="arrow" />
                </template>
            </van-pagination>
        </div>
       
    </div>
    
</template>

<script>
export default {
    name: "regularTable",
    props:{
        tListTit:{
            type:Array,
            default: () => [],
        },
        tData:{
            type:Array,
            default: () => [],
        },
        pageSize:{
            type:Number,
            default:10,
        },
        pageTotal:{
            type:Number,
            default: 0,
        },
    },
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data() {
        return {
            pagePage:1,
            sortIndex: 0, //0 nomal  1 up  2 down
        };

    },
    methods: {
        handleCurrChange(page){
            this.$emit("handleCurrChange",page);
        },
        sortChangeClick(index){
            if (this.sortIndex == 0) {
                this.sortIndex = 1;
            } else if (this.sortIndex == 1) {
                this.sortIndex = -1;
            } else {
                this.sortIndex = 0;
            }
            this.$emit("sortChangeClick", this.sortIndex,index);

        }
        

    },
    mounted(){
       
    },
    
    created() {
       

    },
    
    watch: {
        sortIndex: {
            handler(newVal, oldVal) {
                this.sortIndex = newVal;
            },
        },

    },

};
</script>

<style lang="stylus" scoped>
    .regular-table
        border 1px solid #E6EAEF
        border-radius 4px 4px 0px 0px
        table
            width 100%
            height 100%
            font-size 10px
            border none
            border-collapse collapse
            thead 
               background #FFF9F5
               color #232426
               font-weight bold
            tbody tr
                border-top 1px solid #E6EAEF
            thead tr,tbody tr
                display table
                width 100%
                table-layout fixed
                text-align center
            thead tr th
                padding 10px 0
            tbody tr td
                padding 8px 0
            tbody tr td:first-child,thead tr th:first-child,tbody tr td:last-child,thead tr th:last-child
                width 160px
    .tipImg
       width 11px
       height 11px
       position relative
       top -5px
       left -1px
    .sortImg
       width 12px
       height 12px
       position relative
       top -2px
       left 4px
</style>
<!--
 * @Author: zzt
 * @Date: 2021-07-13 16:20:40
 * @LastEditTime: 2021-07-16 16:52:56
 * @LastEditors: Please set LastEditors
 * @Description: 排行表格
 * @FilePath: \SmartFoodH5\src\components\tablesMolds\rankTable.vue
-->
<template>
    <div class="rankTable-wrap">
        <h3 class="com-title" v-if="title!=''">{{title}}</h3>
        <!-- 表格 -->
        <div class="rank-table">
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
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                       v-for="(items,i) in tData"
                       :key="i"
                    >   
                        <td>{{i+1}}</td>
                        <td
                          v-for="(item,j) in items"
                          :key="j"
                        >{{item}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="com-table-noData" v-if="tData == null || tData.length == 0">暂无数据</div>
        </div>
       
       
    </div>
    
</template>

<script>
export default {
    name: "rankTable",
    props:{
        title:{
            type:String,
            default:"",
        },
        tListTit:{
            type:Array,
            default: () => [],
        },
        tData:{
            type:Array,
            default: () => [],
        }
    },
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data() {
        return {
           

        };

    },
    methods: {
        
        

    },
    mounted(){
       
    },
    
    created() {
       

    },
    
    watch: {

    },

};
</script>

<style lang="stylus" scoped>
    .rank-table
        margin-top 8px
        max-height 210px
        overflow-x hidden
        overflow-y scroll
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
            tbody tr td:first-child,thead tr th:first-child
                width 55px
    .tipImg
       width 11px
       height 11px
       position relative
       top -5px
       left 0
</style>
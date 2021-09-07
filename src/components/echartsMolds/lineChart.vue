<!--
 * @Author: zzt
 * @Date: 2021-07-13 12:03:25
 * @LastEditTime: 2021-07-21 17:22:15
 * @LastEditors: Please set LastEditors
 * @Description: 折线图模式
 * @FilePath: \SmartFoodH5\src\components\echartsMolds\lineChart.vue
-->
<template>
    <div class="lineChart-wrap">
        <div class="flex ali-c jus-b">
            <h3 class="com-title">{{title}}</h3>
            <div class="com-changeWrap flex ali-c">
                <div class="com-changeBtn" :class="{active:changeIndex==0}" @click="changeClick(0)">按金额</div>
                <div class="com-changeBtn" :class="{active:changeIndex==1}" @click="changeClick(1)">按单数</div>
            </div>
        </div>
        <!-- 图表 -->
        <div ref="lineChartID" :style="{width: '100%',height: '200px'}"></div>

    </div>
    
</template>

<script>
export default {
    name: "lineChart",
    props:{
        title:{
            type:String,
            default:"",
        }

    },
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data() {
        return {
            changeIndex:0,

        };

    },
    methods: {
        changeClick(index){
            this.changeIndex = index;
            this.$emit('changeClick',index);
            this.initEcharts();
        },
        initEcharts(){
            let lineChart = this.$echarts.getInstanceByDom(this.$refs.lineChartID); //判断是否已经存在echarts实例，如果有则不创建，如果没有就进行创建
            if(lineChart==null){
                lineChart = this.$echarts.init(this.$refs.lineChartID); 
            }
            lineChart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }]
            });
            

        },
        
        

    },
    mounted(){
        this.changeClick(0);
    },
    created() {

    },
    watch: {

    },

};
</script>

<style lang="stylus" scoped>
    
</style>

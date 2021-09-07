<!--
 * @Author: zzt
 * @Date: 2021-07-13 12:01:06
 * @LastEditTime: 2021-07-21 15:58:34
 * @LastEditors: Please set LastEditors
 * @Description: 饼状图模式
 * @FilePath: \SmartFoodH5\src\components\echartsMolds\pieChart.vue
-->
<template>
    <div class="pieChart-wrap">
        <div class="flex ali-c jus-b">
            <h3 class="com-title">{{title}}</h3>
            <div class="com-changeWrap flex ali-c">
                <div class="com-changeBtn" :class="{active:changeIndex==0}" @click="changeClick(0)">按金额</div>
                <div class="com-changeBtn" :class="{active:changeIndex==1}" @click="changeClick(1)">按单数</div>
            </div>
        </div>
        <!-- 图表 -->
        <div ref="pieChartID" :style="{width: '100%',height: '200px'}"></div>
    </div>
    
</template>

<script>
export default {
    name: "pieChart",
    props:{
        title:{
            type:String,
            default:"",
        },
        eData:{
            type:Array,
            default: () => [],
        },
        eUnitTit:{
            type:String,
            default:"",
        },
        eUnit:{
            type:String,
            default:"",
        },
    },
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data() {
        return {
            changeIndex:0,
            echColorList:["#2082ED","#FE813C","#30CFB7","#EB3C1C","#F7B500","#E4C269","#6DD2D2","#64D274"],  

        };

    },
    methods: {
        changeClick(index){
            this.changeIndex = index;
            this.$emit('changeClick',index);
            this.initEcharts();
        },
        initEcharts(){
            let pieChart = this.$echarts.getInstanceByDom(this.$refs.pieChartID); //判断是否已经存在echarts实例，如果有则不创建，如果没有就进行创建
            if(pieChart==null){
                pieChart = this.$echarts.init(this.$refs.pieChartID); 
            }
            pieChart.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                },
                color: this.echColorList,
                legend: {
                    top: 10,
                    left: "left",
                },
                series: [
                    {
                        name: this.eUnitTit,
                        type: 'pie',
                        radius: "56%", //饼图的半径大小
                        center: ["50%", "62%"], //饼图的位置
                        data: this.eData,
                        label: {
                            position: 'inner',
                            fontSize: 12,
                            formatter: "{d}%",
                            color:'#fff'
                        },
                        labelLine: {
                            show: false
                        },
                        
                    },
                    {
                        name: this.eUnitTit,
                        type: 'pie',
                        radius: "56%", //饼图的半径大小
                        center: ["50%", "62%"], //饼图的位置
                        data: this.eData,
                        label: {
                            fontSize: 12,
                            formatter: "{c} " + this.eUnit, //数值
                            color:'#333'
                        },
                        labelLine: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        
                    }
                ]
                
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
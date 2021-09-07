<!--
 * @Author: zzt
 * @Date: 2021-07-19 17:54:56
 * @LastEditTime: 2021-07-20 15:42:49
 * @LastEditors: Please set LastEditors
 * @Description: 订单详情
 * @FilePath: \SmartFoodH5\src\views\report\orderDetailInfo.vue
-->
<template>
    <view-container class="bgeef">
        <view-header slot="header">
            <navBar 
                slot="head"
                :title="$t('orderDetailInfo.pageName')"
            ></navBar>
        </view-header>
        <view-content slot="content">
            <div slot="common">
                <div class="info-wrap">
                    <div class="info-fl">
                        <!-- 撤单信息 -->
                        <div class="info-item">
                            <div class="title">撤单信息</div>
                            <ul class="item">
                                <li>撤单时间： 02/09/2020 16:56:23</li>
                                <li>撤单原因： 上菜时间慢</li>
                                <li>撤单操作人： 店长</li>
                            </ul>
                        </div>
                        <!-- 拒单信息 -->
                        <div class="info-item">
                            <div class="title">拒单信息</div>
                            <ul class="item">
                                <li>拒单时间： 02/09/2020 16:56:23</li>
                                <li>拒单原因： 有退菜</li>
                                <li>退款金额：100.00</li>
                                <li>退款方式：现金退款</li>
                                <li>操作人： 店长</li>
                            </ul>
                        </div>
                        <!-- 收款信息 -->
                        <div class="info-item">
                            <div class="title">收款信息</div>
                            <ul class="item">
                                <li>
                                    <div class="fl">菜品合计：</div>
                                    <div class="fr">188.00</div>
                                </li>
                                <li>
                                    <div class="fl fs12 c888">菜品优惠：</div>
                                    <div class="fl fs12 c888">-48.00</div>
                                    <div class="clear"></div>
                                    <ul class="discount-item">
                                        <li>
                                            <div class="fl fs12 c888 oh">
                                                <i class="spot"></i>
                                                <span>手动赠菜</span>
                                            </div>
                                            <div class="fr fs12 c888">
                                                -23.78
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fl fs12 c888 oh">
                                                <i class="spot"></i>
                                                <span>菜品特价</span>
                                            </div>
                                            <div class="fr fs12 c888">
                                                -10.00
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fl fs12 c888 oh">
                                                <i class="spot"></i>
                                                <span>菜品买赠</span>
                                            </div>
                                            <div class="fr fs12 c888">
                                                -10.00
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fl fs12 c888 oh">
                                                <i class="spot"></i>
                                                <span>第2份优惠</span>
                                            </div>
                                            <div class="fr fs12 c888">
                                                -10.00
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fl fs12 c888 oh">
                                                <i class="spot"></i>
                                                <span>菜品会员价</span>
                                            </div>
                                            <div class="fr fs12 c888">
                                                -6.00
                                            </div>
                                        </li>
                                    </ul>
                                
                                </li>
                                <li>
                                    <div class="fl">订单金额：</div>
                                    <div class="fr">188.00</div>
                                </li>
                                
                                <li>
                                    <div class="fl fs12 c888">服务税@6%：</div>
                                    <div class="fr fs12 c888"> 10.00</div>
                                </li>
                                <li>
                                    <div class="fl fs12 c888">服务费@0%：</div>
                                    <div class="fr fs12 c888"> 6.00</div>
                                </li>
                                <li>
                                    <div class="fl">应收金额：</div>
                                    <div class="fr">188.00</div>
                                </li>
                            </ul>
                        </div>
                        <!-- 会员信息 -->
                        <div class="info-item">
                            <div class="title">会员信息</div>
                            <ul class="item">
                                <li>会员姓名： 张依依</li>
                                <li>手机号： 12345678911</li>
                                <li>会员等级： 普通会员</li>
                                <li>会员优惠：享受菜品整单折扣10% / 享受菜品会员价 </li>
                            </ul>
                        </div>
                        <!-- 基本信息 -->
                        <div class="info-item">
                            <div class="title">基本信息</div>
                            <ul class="item">
                                <li>桌台： 印花园</li>
                                <li>就餐人数： 6</li>
                                <li>订单单号： 12164565541561</li>
                                <li>订单状态：已收款</li>
                                <li>下单操作人：店长</li>
                                <li>下单时间：02/09/2020 16:56:23</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 菜品信息 -->
                    <div class="info-fr">
                        <div class="title mt20">菜品信息</div>
                        <div class="info-fr-table mt10">
                            <table>
                                <thead>
                                    <tr>
                                        <th style="padding:10px 40px">菜品名称</th>
                                        <th style="padding:10px 15px">数量/重量</th>
                                        <th style="padding:10px 25px">金额</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>酸辣土豆丝酸辣土豆丝酸辣土豆丝酸辣土豆丝</td>
                                        <td>1.0</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <td>酸辣土豆丝</td>
                                        <td>121.0</td>
                                        <td>22.00</td>
                                    </tr>
                                    <tr>
                                        <td>酸辣土豆丝</td>
                                        <td>2341.0</td>
                                        <td>1120.00</td>
                                    </tr>
                                    <tr>
                                        <td>酸辣土豆丝</td>
                                        <td>2331.0</td>
                                        <td>10.00</td>
                                    </tr>
                                    <tr>
                                        <td>酸辣土豆丝</td>
                                        <td>1.0</td>
                                        <td>88.00</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px 15px">开单备注：少放糖、少放盐</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- <div class="com-table-noData" v-if="tData == null || tData.length == 0">暂无数据</div> -->
                        </div>
                    </div>
                    
                </div>
            </div>
        </view-content>
    </view-container>
</template>

<script>
export default {
    name: "orderDetailInfo",
    components:{
        viewContainer: (resolve) =>require([ "../../components/viewContainer/viewContainer",], resolve),
        viewHeader: (resolve) =>require([ "../../components/viewContainer/viewHeader",], resolve),
        viewContent: (resolve) =>require([ "../../components/viewContainer/viewContent",], resolve),
        navBar: (resolve) =>require([ "../../components/navBar/navBar",], resolve),
    },
    computed: {
        language() {
            return this.$store.getters.language;
        },
    },
    data (){
        return {
            

                        
        };
    },
    methods: {
        
    
    },
    mounted(){
        
        
    },
    created() {
       
    
        
    },
};
</script>

<style lang="stylus" scoped>
    .info-wrap
        margin-top 6px
        padding 0 50px 50px
        background #fff
        height auto
        box-shadow 0px 1px 10px 0px rgba(0, 0, 0, 0.1)
        border-radius 2px
        overflow hidden
        .info-fl
            float left
            width 47%
            .info-item
                padding 20px 0
                border-bottom 1px solid #EFF1F2
                .title
                    color #000
                    font-size 14px
                .item>li
                    font-size 13px
                    margin-top 10px
                    color #505050
                    overflow hidden
                    .discount-item>li
                        padding-left 8px
                        margin-top 8px
                        overflow hidden
                        i.spot
                           float left
                           margin-top 7px
                           width 2px
                           height 2px
                           background #888
                           border-radius 50%
                        span
                           float left
                           padding-left 5px
                        
            .c888
                color #888 !important
        .info-fr
            float right 
            width 47%
            .title
                color #000
                font-size 14px
            .info-fr-table
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
                        text-align left
                        padding-left 15px
                    tbody tr td
                        padding 8px 10px 8px 25px
                    tbody tr td:first-child,thead tr th:first-child
                        width 220px
                       

    
</style>


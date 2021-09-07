<!--
 * @Author: zzt
 * @Date: 2021-06-11 09:22:11
 * @LastEditTime: 2021-07-17 17:38:23
 * @LastEditors: Please set LastEditors
 * @Description: viewContent
 * @FilePath: \SmartFoodH5\src\components\viewContainer\viewContent.vue
-->
<template>
    <div class="view-content">
        <div class="cont-common">
            <slot name="common"></slot>
        </div>
        <div class="cont-table">
            <slot name="table"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "viewContent"
};
</script>

<style lang="stylus" scoped>
.view-content 
    width 100%
    height auto
    background #eef1f5
    .cont-common
        padding 15px 30px 0 30px
    
</style>
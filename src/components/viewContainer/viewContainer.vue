<!--
 * @Author: zzt
 * @Date: 2021-06-11 09:22:11
 * @LastEditTime: 2021-07-19 16:14:21
 * @LastEditors: Please set LastEditors
 * @Description: viewContainer
 * @FilePath: \SmartFoodH5\src\components\viewContainer\viewContainer.vue
-->
<template>
    <div class="review-container">
        <div class="review-header">
            <slot name="header"></slot>
        </div>
        <div class="review-content">
            <slot name="content"></slot>
        </div>
        <div class="review-model">
            <slot name="module"></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "viewContainer"
};
</script>

<style lang="stylus" scoped>
.review-container
    position relative
    width 100%
    min-height 780px
    padding-bottom 30px 
    
</style>

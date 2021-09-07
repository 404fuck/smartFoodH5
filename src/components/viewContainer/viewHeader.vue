<!--
 * @Author: zzt
 * @Date: 2021-06-11 09:22:11
 * @LastEditTime: 2021-07-14 10:56:18
 * @LastEditors: Please set LastEditors
 * @Description: viewHeader
 * @FilePath: \SmartFoodH5\src\components\viewContainer\viewHeader.vue
-->
<template>
    <div class="header-wrapper">
        <slot name="head"></slot>
    </div>
</template>

<script>
export default {
    name: "viewHeader"
};
</script>  

<style lang="stylus" scoped>
.header-wrapper
	width 100%
	height 50px
	line-height 50px
	background #fff
	padding 0 30px 0 20px
</style>

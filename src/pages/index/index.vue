<template>
  <view>
    <view class="menu-bar" flex items-center justify-between pr-25 pl-1>
      <view i-ph-magnifying-glass text-2xl></view>
      <view text-base>首页</view>
      <text i-tabler-message-circle text-2xl></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { forward } from '@/utils/router'

function goTest() {
  forward('test', {
    a: 1,
  })
}

const { top, height } = uni.getMenuButtonBoundingClientRect()
const top_px = top + 'px'
const height_px = height - 2 + 'px'
</script>

<style scoped lang="scss">
.menu-bar {
  margin-top: v-bind(top_px);
  height: v-bind(height_px);
}
</style>

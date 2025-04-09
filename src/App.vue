<script setup lang="ts">
import SideMenu from '@/Layout/SideMenu.vue'
</script>

<template>
  <el-config-provider>
    <el-container class="app-container">
      <el-aside class="aside">
        <side-menu />
      </el-aside>
      <el-container>
        <el-header class="header"></el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style lang="less" scoped>
.app-container {
  height: 100%;
  .aside {
    border-right: 1px solid #f6f6f8;
    height: inherit;
    width: 200px;
  }
  .header {
    height: 50px;
    background-color: #f6f6f8;
  }
}
</style>

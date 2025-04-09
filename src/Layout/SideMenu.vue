<template>
  <div>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <template v-for="item in routeList">
          <el-menu-item 
            @click="handleClick(item.path)" 
            :index="item.path" 
            :class="{ active: item.path === $route.path }"
          >
            <el-icon><component :is="item.meta.icon" /></el-icon>
            <span>{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const routeList = computed(() => router.getRoutes())

const handleClick = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.active {
  background-color: #ecf5ff;
  color: '#409eff'
}
</style>
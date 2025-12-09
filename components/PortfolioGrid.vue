<template>
  <div class="mb-16">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
        精选作品集
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        探索我在数据分析、商业智能和数据可视化领域的精选项目
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <PortfolioCard 
        v-for="item in portfolioItems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        :tags="item.tags"
        :status="item.status"
        :active="currentProjectId === item.id"
        :gradient="item.gradient"
        :powerbiUrl="item.powerbiUrl"
        @select="handleSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PortfolioCard from './PortfolioCard.vue'
import { usePortfolio } from '@/composables/usePortfolio'

const { portfolioItems } = usePortfolio()

// 使用 defineEmits 定义事件
const emit = defineEmits(['select'])

// 当前选中的项目 ID，默认选中第一个
const currentProjectId = ref(1)

// 处理项目选择
const handleSelect = (project) => {
  currentProjectId.value = project.id
  emit('select', project)
}
</script>
<template>
  <div 
    :class="[
      'group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer',
      active ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:border-transparent'
    ]"
    @click="$emit('select', { 
      id, 
      title, 
      description, 
      icon, 
      tags, 
      status, 
      gradient,
      powerbiUrl 
    })"
  >
    <!-- 装饰性背景 -->
    <div :class="['absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500', gradient]" />
    
    <!-- 状态标签 -->
    <div v-if="status" class="absolute top-4 right-4">
      <span class="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200">
        {{ status }}
      </span>
    </div>
    
    <!-- 图标区域 -->
    <div class="relative mb-6">
      <div :class="['inline-flex p-3 rounded-xl bg-gradient-to-br', gradient, 'shadow-lg']">
        <span class="text-2xl">{{ icon }}</span>
      </div>
    </div>
    
    <!-- 内容区域 -->
    <div class="relative">
      <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        {{ description }}
      </p>
      
      <!-- 标签 -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="px-3 py-1 text-xs font-medium rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- 查看按钮 -->
      <div class="flex items-center justify-between">
        <button class="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center space-x-1 group/view-more">
          <span>查看详情</span>
          <svg class="w-4 h-4 transform group-hover/view-more:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div v-if="active" class="flex items-center space-x-1 text-blue-600">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">当前查看</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 定义 props
const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  title: String,
  description: String,
  icon: String,
  tags: {
    type: Array,
    default: () => []
  },
  status: String,
  active: Boolean,
  gradient: {
    type: String,
    default: 'from-blue-500 to-cyan-500'
  },
  powerbiUrl: String  // 添加 powerbiUrl 属性
})

// 定义 emit
defineEmits(['select'])
</script>

<style scoped>
/* 悬停效果 */
.group:hover {
  transform: translateY(-4px);
}

/* 平滑过渡 */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
<template>
  <div class="space-y-8">
    <!-- 报表头部 - 现在包含切换项目按钮 -->
    <div class="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div class="flex-1">
          <div class="flex items-center space-x-3 mb-4">
            <div class="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
              <p class="text-gray-600">{{ description }}</p>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-4">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-center space-x-2"
            >
              <div :class="['w-2 h-2 rounded-full', feature.color]"></div>
              <span class="text-sm text-gray-700">{{ feature.text }}</span>
            </div>
          </div>
        </div>
        
        <!-- 控制按钮 - 现在包含切换项目按钮 -->
        <div class="flex flex-wrap gap-3">
          <button 
            @click="toggleFullscreen" 
            class="control-button group bg-blue-600 hover:bg-blue-700 text-white"
          >
            <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span>全屏查看</span>
          </button>
          
          <!-- 切换项目按钮 -->
          <button 
            v-if="showProjectSelector"
            @click="$emit('select-project')"
            class="control-button border border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
            <span>切换项目</span>
          </button>
          
          <button 
            @click="$emit('show-details')" 
            class="control-button border border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>项目详情</span>
          </button>
          
          <button 
            v-if="showExport"
            @click="$emit('export-data')"
            class="control-button border border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>导出数据</span>
          </button>
        </div>
      </div>
    </div>

    <!-- PowerBI 报表容器 -->
    <div class="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          ref="iframe"
          :title="title"
          width="100%"
          height="100%"
          :src="url"
          frameborder="0"
          allowfullscreen="true"
          class="absolute inset-0 w-full h-full"
          loading="lazy"
          @load="onIframeLoad"
        />
      </div>
      
      <!-- 加载状态 -->
      <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p class="text-gray-700 font-medium">加载报表中...</p>
        </div>
      </div>
    </div>

    <!-- 技术栈展示 -->
    <div v-if="technologies && technologies.length > 0" class="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
      <h3 class="text-xl font-bold text-gray-800 mb-6">技术栈与功能</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="tech in technologies" 
          :key="tech.name"
          class="tech-card group"
        >
          <div :class="['tech-icon', tech.iconBg]">
            <div :class="tech.iconColor" class="w-8 h-8 flex items-center justify-center">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <h4 class="font-semibold text-gray-800 mb-2">{{ tech.name }}</h4>
          <p class="text-sm text-gray-600">{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 定义 props
const props = defineProps({
  title: {
    type: String,
    default: 'PowerBI 报表'
  },
  description: {
    type: String,
    default: '数据可视化报表'
  },
  url: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => [
      { text: '实时更新', color: 'bg-green-500' },
      { text: '交互式分析', color: 'bg-blue-500' },
      { text: '多维度钻取', color: 'bg-purple-500' }
    ]
  },
  technologies: {
    type: Array,
    default: () => []
  },
  showExport: {
    type: Boolean,
    default: true
  },
  showProjectSelector: {
    type: Boolean,
    default: true
  }
})

// 定义 emit 事件
const emit = defineEmits([
  'select-project',
  'show-details',
  'export-data'
])

const iframe = ref(null)
const loading = ref(true)
const isFullscreen = ref(false)

const toggleFullscreen = () => {
  if (typeof window === 'undefined') return
  if (!iframe.value) return
  
  if (!isFullscreen.value) {
    if (iframe.value.requestFullscreen) {
      iframe.value.requestFullscreen()
    } else if (iframe.value.webkitRequestFullscreen) {
      iframe.value.webkitRequestFullscreen()
    } else if (iframe.value.msRequestFullscreen) {
      iframe.value.msRequestFullscreen()
    }
    isFullscreen.value = true
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
    isFullscreen.value = false
  }
}

const onIframeLoad = () => {
  loading.value = false
}

// 监听全屏变化
let fullscreenChangeHandler = null

onMounted(() => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  
  fullscreenChangeHandler = () => {
    isFullscreen.value = !!document.fullscreenElement
  }
  
  document.addEventListener('fullscreenchange', fullscreenChangeHandler)
  document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler)
  document.addEventListener('mozfullscreenchange', fullscreenChangeHandler)
  document.addEventListener('MSFullscreenChange', fullscreenChangeHandler)
})

onUnmounted(() => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (!fullscreenChangeHandler) return
  
  document.removeEventListener('fullscreenchange', fullscreenChangeHandler)
  document.removeEventListener('webkitfullscreenchange', fullscreenChangeHandler)
  document.removeEventListener('mozfullscreenchange', fullscreenChangeHandler)
  document.removeEventListener('MSFullscreenChange', fullscreenChangeHandler)
})
</script>

<style scoped>
.control-button {
  @apply flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg;
}

.tech-card {
  @apply p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300;
}

.tech-icon {
  @apply p-3 rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
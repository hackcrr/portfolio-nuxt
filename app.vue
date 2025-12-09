<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">我的数据作品集</h1>
        <p class="text-gray-600">点击下方项目卡片，查看对应的数据可视化报表</p>
      </div>
      
      <PortfolioGrid @select="handleProjectSelect" />
      
      <!-- 报表显示区域 - 现在非常简单 -->
      <div class="mt-12">
        <PowerBIViewer
          v-if="currentProject && currentProject.powerbiUrl"
          :title="currentProject.title"
          :description="currentProject.description"
          :url="currentProject.powerbiUrl"
          :technologies="currentProject.technologies"
          :show-project-selector="true"
          @select-project="showProjectSelector = true"
          @show-details="showProjectDetails"
          @export-data="exportProjectData"
        />
      </div>
    </main>
    <Footer />
    
    <!-- 项目选择模态框 -->
    <div 
      v-if="showProjectSelector" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="showProjectSelector = false"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[80vh] overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-gray-800">选择要查看的项目</h3>
            <button @click="showProjectSelector = false" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="p-6 overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="project in portfolioItems"
              :key="project.id"
              @click="selectProjectFromModal(project)"
              :class="[
                'p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg',
                (currentProject?.id === project.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
              ]"
            >
              <div class="flex items-start mb-4">
                <div class="text-2xl mr-4">{{ project.icon }}</div>
                <div class="flex-1">
                  <div class="flex justify-between items-start">
                    <h4 class="font-semibold text-gray-800 mb-2">{{ project.title }}</h4>
                    <span class="px-2 py-1 text-xs font-medium rounded-full" 
                          :class="getStatusClass(project.status)">
                      {{ project.status }}
                    </span>
                  </div>
                  <p class="text-gray-600 text-sm mb-3">{{ project.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in project.tags.slice(0, 3)"
                      :key="tag"
                      class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {{ tag }}
                    </span>
                    <span v-if="project.tags.length > 3" class="px-2 py-1 text-gray-500 text-xs">
                      +{{ project.tags.length - 3 }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import PortfolioGrid from './components/PortfolioGrid.vue'
import PowerBIViewer from './components/PowerBIViewer.vue'
import { usePortfolio } from '@/composables/usePortfolio'

const { portfolioItems, getDefaultProject } = usePortfolio()
const currentProject = ref(null)
const showProjectSelector = ref(false)

// 处理项目选择
const handleProjectSelect = (project) => {
  if (project && project.powerbiUrl) {
    currentProject.value = project
    showProjectSelector.value = false
    
    // 平滑滚动到报表区域
    setTimeout(() => {
      const reportSection = document.querySelector('.mt-12')
      if (reportSection) {
        reportSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }
}

// 从模态框选择项目
const selectProjectFromModal = (project) => {
  handleProjectSelect(project)
}

// 显示项目详情
const showProjectDetails = () => {
  if (currentProject.value) {
    alert(`项目详情：${currentProject.value.title}\n\n${currentProject.value.description}`)
  }
}

// 导出项目数据
const exportProjectData = () => {
  if (currentProject.value) {
    alert(`导出数据：${currentProject.value.title}\n\n此功能正在开发中...`)
  }
}

// 状态样式映射
const getStatusClass = (status) => {
  switch (status) {
    case '最新发布':
      return 'bg-green-100 text-green-800'
    case '进行中':
      return 'bg-blue-100 text-blue-800'
    case '已完成':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// 组件挂载时，默认选择第一个项目
onMounted(() => {
  if (!currentProject.value) {
    currentProject.value = getDefaultProject()
  }
})
</script>

<style scoped>
/* 模态框动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
</style>
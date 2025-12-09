<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">D</span>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DataPortfolio
          </span>
        </div>

        <!-- 导航链接 -->
        <div class="hidden lg:flex items-center space-x-1">
          <a href="#" class="nav-link group">
            <div class="nav-icon">📊</div>
            <span>仪表板</span>
            <div class="nav-underline"></div>
          </a>
          <a href="#" class="nav-link group">
            <div class="nav-icon">📈</div>
            <span>分析报告</span>
            <div class="nav-underline"></div>
          </a>
          <a href="#" class="nav-link group">
            <div class="nav-icon">🎨</div>
            <span>可视化</span>
            <div class="nav-underline"></div>
          </a>
          <a href="#" class="nav-link group">
            <div class="nav-icon">💼</div>
            <span>解决方案</span>
            <div class="nav-underline"></div>
          </a>
        </div>

        <!-- 右侧按钮 -->
        <div class="flex items-center space-x-3">
          <a 
            href="https://github.com" 
            target="_blank"
            class="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 group"
          >
            <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
            <span class="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors relative;
}

.nav-icon {
  @apply text-lg opacity-60 group-hover:opacity-100 transition-opacity;
}

.nav-underline {
  @apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0;
}
</style>
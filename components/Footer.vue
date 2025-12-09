<template>
  <footer class="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white mt-20 overflow-hidden">
    <!-- 装饰性元素 -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    
    <div class="container mx-auto px-4 lg:px-8 py-12 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <!-- Logo 和描述 -->
        <div class="space-y-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                DataPortfolio
              </h3>
              <p class="text-sm text-gray-400">数据驱动决策</p>
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed">
            专注于数据分析和商业智能解决方案，通过数据可视化帮助企业做出更明智的决策。
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com" target="_blank" class="social-icon hover:bg-gray-700">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="social-icon hover:bg-blue-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="social-icon hover:bg-blue-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">快速链接</h4>
          <ul class="space-y-3">
            <li><a href="#" class="footer-link">首页</a></li>
            <li><a href="#" class="footer-link">作品集</a></li>
            <li><a href="#" class="footer-link">关于我</a></li>
            <li><a href="blog.muzilix.cn" class="footer-link">博客</a></li>
            <li><a href="#" class="footer-link">联系方式</a></li>
          </ul>
        </div>

        <!-- 服务 -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">服务</h4>
          <ul class="space-y-3">
            <li><a href="#" class="footer-link">数据可视化</a></li>
            <li><a href="#" class="footer-link">商业智能</a></li>
            <li><a href="#" class="footer-link">数据分析</a></li>
            <li><a href="#" class="footer-link">仪表板开发</a></li>
            <li><a href="#" class="footer-link">数据咨询</a></li>
          </ul>
        </div>

        <!-- 联系信息 -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">联系我</h4>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-400">hackcr@muzilix.cn</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-gray-400">+86 150-7804-7432</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-400">无锡市, 中国</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="border-t border-gray-700 mt-10 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} DataPortfolio. 保留所有权利。
          <span class="mx-2">•</span>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a>
          <span class="mx-2">•</span>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">使用条款</a>
        </p>
        <p class="text-gray-500 text-xs mt-2">
          本网站使用 PowerBI 进行数据可视化展示，内容仅供参考学习。
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-gray-400 hover:text-white transition-colors duration-300 flex items-center;
}

.footer-link::before {
  content: '';
  @apply w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity;
}

.social-icon {
  @apply w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:shadow-lg;
}

/* 悬停动画 */
.footer-link:hover {
  transform: translateX(5px);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .footer-link:hover {
    transform: none;
  }
}
</style>
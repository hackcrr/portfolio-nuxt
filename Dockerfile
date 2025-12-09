# 构建阶段：构建 Nuxt 4 应用
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制包管理文件并安装依赖
COPY package*.json ./
COPY .npmrc ./
RUN npm ci

# 复制所有源代码
COPY . .

# 构建 Nuxt 应用
RUN npm run build

# 生产阶段：运行 Nuxt 应用
FROM node:20-alpine AS runner

# 设置工作目录
WORKDIR /app

# 安装生产依赖（移除dev依赖减小体积）
COPY package*.json ./
COPY .npmrc ./
RUN npm ci --omit=dev

# 从构建阶段复制构建产物和必要文件
# 注意：根据您的项目结构 portfolio-site/portfolio-site/
# 如果您在 portfolio-site/portfolio-site/ 目录中执行构建
# 构建输出会在当前目录的 .output 文件夹
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/public ./public
COPY --from=builder /app/nuxt.config.* ./  
# 复制所有nuxt配置文件

# 根据您的项目结构，如果有额外的配置文件需要复制
# COPY --from=builder /app/app.config.* ./  # 如果有app.config文件
# COPY --from=builder /app/tsconfig.json ./  # 如果有TypeScript配置

# 暴露端口（Nuxt 4 默认 3000）
EXPOSE 3000

# 设置环境变量
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NUXT_APP_VERSION=$APP_VERSION

# 启动 Nuxt 应用
CMD ["node", ".output/server/index.mjs"]
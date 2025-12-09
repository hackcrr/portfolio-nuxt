FROM node:20-alpine

WORKDIR /app

# 复制 package.json 文件
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 3000

# 设置环境变量
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# 启动应用
CMD ["node", ".output/server/index.mjs"]
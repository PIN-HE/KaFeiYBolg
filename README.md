# KaFeiY的博客（仿写小红书交互）
> 版本号:v1.0.0(20250806)

> 适用状态:纯前端静态博客（Mock数据模式）

![License: MIT](https://img.shields.io/badge/license-MIT-green)
![npm version](https://img.shields.io/npm/v/react)
## 演示图片
![主页截图](/package/blogFront/src/assets/Snipaste_2025-08-07_16-20-18.png)
![内容截图](/package/blogFront/src/assets/Snipaste_2025-08-07_16-21-19.png)
![个人中心](/package/blogFront/src/assets/Snipaste_2025-08-07_16-21-55.png)
![全屏查看](/package/blogFront/src/assets/Snipaste_2025-08-07_16-22-12.png)
## 环境要求
- Node.js 18.x或更高版本
- npm 9.x或更高版本
- Git
## 快速开始
### 1.1 克隆仓库
```bash
#您可以完全克隆本仓库
git clone https://github.com/PIN-HE/KaFeiYBlog.git
cd KaFeiYBlog
```
### 1.2 安装依赖/启动前台服务
```bash
#因为项目是多仓库，所以先尝试在根目录安装依赖
npm install
#执行命令启动前台,该命令会自动执行package/blogFront中的启动项
npm run dev:front
```
问题说明:若启动后无任何页面变化或报错,您可以尝试下面的命令手动进入前台包单独安装依赖与启动
```bash
cd package/blogFront
npm install 
#这里不用加:front，会自动进行启动服务
npm run dev
```
> 正常情况下您会看到 ```http://localhost:3030/```(端口配置在package/blogFront/vite.config.js:server-host:"3030")```http://IpAddress:3030/```(内网访问链接)
## 项目结构说明
```text
KaFeiYBlog/                     # 根目录配置
|
├package                        # 多仓库包
|   ├blogFront                  # 前台项目
|   |   ├src                    # 源代码
|   |   ├.env.development       # 开发环境环境变量
|   |   ├index.html             # SPA挂载文件
|   |   ├package.json           # 前台依赖配置
|   └   └vite.config.js         # Vite配置
├share                          # 共享配置文件
└README.md                      # 项目文档
```
## 常见问题解决
### 问题: ```npm run dev:front``` 无效
#### 解决方案:
- 确定在项目**根目录**执行后出现异常
- 检查根目录```package.json```是否包含
```json
"script":{
    "dev:front": "npm run dev -w package/blogFront"
}
```
### 问题:缺少依赖错误
```bash
Error: Cannot find module 'vite'
```
### 解决方案:
```bash
#先尝试在根目录执行
npm install
#若无效则在子目录重新安装依赖
cd package/blogFront
npm install
```
### 端口冲突
```bash
Error: listen EADDRINUSE: address already in use :::3030
```
### 解决方案
- 终止占用端口的进程
- 或修改端口:
```javascript
// 在 package/blogFront/vite.config.js
export default defineConfig({
    server:{
        port: 4000
    }
})

```
## 一 数据声明
### 1.1 当前模式
- 所有数据均为本地生成的 **Mock数据** (package/mock/*.js),不涉及任何用户的真实信息.
- 文章/评论等内容均为功能演示,非实际观点.
- 图片服务来自 **百度图库** ,当前版本含 **私有图床服务** 如需部署可切换图片.
- 静态版本暂未适配移动端,请在PC端查看
- 版本无服务器崩溃风险,但浏览器兼容性问题可能导致样式异常
## 二 用户隐私
### 2.1 我们不会收集
- 您的姓名/邮箱/IP地址等任何身份信息
### 2.2 第三方依赖
- Vue3
- OpenTiny
- AXios
- TailWindCss
- FontAwesome
- VitePluginMock
- VueRuter
- Pinia
## 三 开源协议
- 项目代码遵循 [MIT Licenese](http://opensource.org/licenses/MIT)


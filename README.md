# 随机

随机打开页面

[预览地址](https://ximuli.github.io/randomO/)

# 特点

## 使用 PoniterEvents

一套统一的事件模型，支持PC端、移动端或是其他各种触摸屏设备。

参考链接：
1. [用 PointerEvent 代替 MouseEvent 和 TouchEvent](https://mp.weixin.qq.com/s/QDLVPMkktq4ViDyqFwRF0A)
2. [MDN Pointer_events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)


# Vite 项目部署 Github Pages

## 开启 Github pages 服务

Github仓库 settings -> Pages -> 使用 gh-pages 分支创建 Pages。

## 创建 yml

在项目根目录下创建 .github/workflows 目录，创建一个 .yml 后缀的文件，文件名随意。

将该文件推送至远端仓库。

## 更多
具体可参考本仓库根目录下的 [deploy.yml](./.github/workflows/deploy.yml) 文件。

每一步我都添加了详细注释。
## 参考文档

1. [官方文档](https://docs.github.com/en/actions)
2. [GitHub Actions 入门教程](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
3. [Vite项目搭建及使用GitHub Action](https://blog.csdn.net/ZGEwen/article/details/119985566)
4. [GitHub配置自动部署pages与服务器](https://wiki.eryajf.net/pages/47a507/)
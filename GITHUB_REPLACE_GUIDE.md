# GitHub 完整替换说明

本版本基于当前仓库结构整理，主要变化：

1. 首页右侧轮播固定为最新三篇：
   - paper-01.jpg：Int. J. Extrem. Manuf. 2026
   - paper-02.jpg：npj Flex. Electron. 2026
   - paper-03.jpg：FlexMat 2026
2. 代表性研究成果扩展为 25 篇。
3. 成果列表固定高度 720px，可在区域内上下滚动。
4. 每篇成果整条可点击：
   - FlexMat 使用用户提供的 DOI；
   - 其余使用 Google Scholar 标题检索。
5. 保留当前首页背景路径：
   assets/hero/hero-bg.jpg
6. 保留较淡的深色遮罩设置。

需要确认 GitHub 中存在：
assets/publications/paper-01.jpg
assets/publications/paper-02.jpg
assets/publications/paper-03.jpg

当前仓库读取时仅确认到 paper-01.jpg，因此 paper-02.jpg 和 paper-03.jpg 需要继续上传。

上传时仅需覆盖仓库根目录：
index.html
styles.css
script.js

不要删除 assets 文件夹。

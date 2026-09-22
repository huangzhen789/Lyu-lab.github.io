# Lyu Research Group — 独立实验室官网原型

这是一个无需后端即可部署的静态网站原型，适合作为东南大学机械工程学院吕之阳课题组的独立主页基础版本。

## 文件
- `index.html`：网站内容与结构
- `styles.css`：响应式视觉设计
- `script.js`：中英文切换、移动导航、滚动动效
- `CONTENT_NOTES.md`：信息来源、已核实内容与上线前建议补充项

## 本地预览
直接双击 `index.html` 即可打开。若浏览器限制某些本地资源，可在该目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署方式
该站点可直接部署到：
- 学校服务器 / 学院二级域名
- GitHub Pages
- Cloudflare Pages
- Vercel / Netlify
- 任意 Nginx/Apache 静态网站目录

## 推荐正式域名形式
如学校允许，可申请类似：
- `lyulab.seu.edu.cn`
- `amis.seu.edu.cn`（仅在课题组正式确认实验室英文名称与缩写后使用）

## 上线前建议
1. 用课题组确认过的官方中英文名称替换“Lyu Research Group / 吕之阳课题组”。
2. 补齐课题组成员姓名、照片、年级、研究方向与个人主页。
3. 增加 News / Facilities / Projects 页面，方便持续维护。
4. 将教授头像下载到本地 `assets/`，避免依赖原学院网页的远程图片链接。
5. 若使用东南大学校徽/标准字，请采用学校提供的官方视觉识别素材并确认使用规范。

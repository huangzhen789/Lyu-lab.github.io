# 团队成员添加指南

团队成员由 `script.js` 中的 `teamMembers` 数组统一管理。

## 1. 准备照片

- 建议使用证件照或课题组统一风格头像。
- 建议比例 1:1 或接近方形，JPG/PNG 均可。
- 文件名使用英文小写与连字符，例如：`zhang-san.jpg`。
- 上传到仓库的 `assets/` 文件夹。

## 2. 在 `script.js` 中增加成员

找到：

```js
const teamMembers = [
  ...
];
```

复制下面模板到数组中（注意与上一条记录之间保留英文逗号）：

```js
{
  group: 'master',
  nameZh: '张三',
  nameEn: 'San Zhang',
  roleZh: '硕士研究生 · 2026级',
  roleEn: "Master's Student · Class of 2026",
  photo: 'assets/zhang-san.jpg',
  interestsZh: '机械超材料 · 有限元分析 · 增材制造',
  interestsEn: 'Mechanical metamaterials · finite-element analysis · additive manufacturing',
  metaZh: '机械工程｜研究方向简述',
  metaEn: 'Mechanical Engineering | Short research description',
  email: 'student@seu.edu.cn'
}
```

## 3. `group` 应该怎么填

- `pi`：负责人
- `postdoc`：博士后
- `phd`：博士生
- `master`：硕士生
- `undergrad`：本科生
- `alumni`：毕业成员

## 4. 上传 GitHub

需要更新的通常只有：

- `script.js`
- 新成员照片，例如 `assets/zhang-san.jpg`

如果本次还改了版式，则同时上传 `index.html` 和 `styles.css`。

GitHub 操作：

1. 进入 `huangzhen789/Lyu-lab.github.io`
2. `Add file` → `Upload files`
3. 拖入更新后的文件（保持 `assets/` 路径）
4. `Commit changes`
5. 等待 GitHub Pages 自动重新部署
6. 访问 `https://huangzhen789.github.io/Lyu-lab.github.io/`

## 5. 建议公开的信息

适合公开：姓名、学历身份、年级、研究方向、校内邮箱、Google Scholar / ORCID / GitHub、代表性论文。

不建议公开：手机号、家庭住址、身份证号、籍贯等与科研展示无关的个人信息。

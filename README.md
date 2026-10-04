# Deliang Wang's academic homepage

A static, responsive personal website prepared for GitHub Pages. It uses HTML, CSS and a small optional script for the active navigation link. Content and links work without JavaScript. Fonts are self-hosted.

## Preview

Open `index.html` in a browser, or serve this folder with any static web server.

## 更新论文列表

可以把新论文资料交给维护此网站的助手更新，也可以直接在 GitHub 网页上编辑：

1. 打开仓库中的 `index.html`，点击铅笔按钮编辑。
2. 搜索 `publications-list`，复制一整段现有的 `<li class="publication">...</li>`。
3. 修改年份、论文标题、链接、作者和期刊。自己的姓名保留在 `<strong>...</strong>` 中，通讯作者姓名后加 `<sup>*</sup>`。
4. 新论文放在列表上方，保持年份从新到旧排列。只收录自己是一作或通讯作者的期刊文章。
5. 点击 **Commit changes**，保存到 `main` 分支。GitHub Pages 会自动重新发布，通常需要几分钟；无需再次上传整个网站。

Selected publications 是人工维护的精选列表，不会自动从 Google Scholar 同步。更新时准备好论文标题、作者顺序、期刊、年份、DOI 或论文链接，以及通讯作者信息即可。

## 其他内容

- 个人介绍、研究方向、经历和学术服务都在 `index.html` 中修改。
- 字体、颜色和间距在 `assets/styles.css` 中修改。
- 原始 CV 保留在网站目录之外，不要上传 PDF 或其他私人文件。
- 2026 年 12 月的 CUHK 职位目前写作即将入职。正式入职后，应同步更新介绍和左侧单位。

## Publish with GitHub Pages

The website uses the root of the `main` branch as its GitHub Pages publishing source. All site asset paths are relative. The `.nojekyll` file allows the HTML, CSS, JavaScript, and fonts to be served directly.

## Sources and design

Content: the CV supplied by Deliang Wang and his updated research description. Publication URLs and academic profile links come from the CV. Selected publications are shown on the homepage, with a link to Google Scholar for the broader record. The original CV is not included in the website or distribution archive.

Design references: [Taste Skill](https://github.com/Leonxlnx/taste-skill) and [Impeccable](https://github.com/pbakaus/impeccable), interpreted for the user's existing preference for a simple academic homepage. No template or illustrated assets were copied.

IBM Plex Sans is distributed under the SIL Open Font License. See `assets/fonts/LICENSE.txt`.

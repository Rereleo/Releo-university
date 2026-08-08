# Releo University · 云端部署指南（2026 新版 Cloudflare 控制台，全程点鼠标）

> 这一版所有文件都在同一层（没有 `public/`、`src/` 子文件夹），专门用来避开
> GitHub 网页上传拖拽时把文件夹结构"拍平"的问题——不管你怎么拖，结果都一样。

Cloudflare 最近把 Pages 合并进了 Workers，控制台改版了（就是你截图里那样，没有单独的
"Workers & Pages 拖拽上传"了）。新的免命令行部署方式是：**把代码放到 GitHub 仓库
（网页拖拽上传，不用装 Git）→ 在 Cloudflare 里连接这个仓库 → 自动部署**。

D1 数据库我已经用连接器帮你建好了（`releo-university`），并且已经写进了这份代码包的
`wrangler.jsonc` 里，你不需要再手动绑定。

---

## 如果你已经上传过之前那版（有报错的那次）
把仓库里所有旧文件删掉（GitHub 仓库页面 → 全选文件 → 删除，或者直接删掉整个仓库重建
一个），再按下面重新上传这一版——这一版没有子文件夹，直接把这个包里**所有文件**（包括
看不太到的 `.gitignore`、`.assetsignore`，文件名前面带点的也要选上）一次性拖进 GitHub
上传页面即可，不用担心文件夹结构问题。

## 第 1 步：建一个 GitHub 仓库（网页操作，不用装软件）
1. 没有 GitHub 账号的话先注册：https://github.com/signup
2. 登录后点右上角 **+** → **New repository**。
3. 仓库名随便起，比如 `releo-university`，选 **Private**（私有，别人看不到），点 **Create repository**。
4. 进入这个空仓库页面，点 **uploading an existing file**（或 **Add file → Upload files**）。
5. 把这个包里**所有文件**一起拖进去上传（`index.html`、`app.js`、`styles.css`、`sw.js`、
   `worker.js`、`wrangler.jsonc`、`package.json`、`schema.sql`、`.gitignore`、
   `.assetsignore`、`manifest.webmanifest`、图标等），都在同一层，不用管文件夹。
6. 下面填个提交说明（随便写，比如 "init"），点 **Commit changes**。
7. 上传完，进仓库主页确认一下：`.gitignore` 和 `.assetsignore` 这两个点开头的文件有没有
   传上去（有些浏览器拖拽偶尔会漏掉点文件）。如果没传上去，用 **Add file → Create new
   file** 手动新建，文件名分别填 `.gitignore` 和 `.assetsignore`，内容照抄这个包里对应
   文件即可。

## 第 2 步：在 Cloudflare 里连接这个仓库
1. 打开 Cloudflare 控制台，左侧找到 **计算 (Compute)** → **Workers**（对应你截图里"构建"下面的
   "计算"）。
2. 点 **Create**（创建）→ 选择 **Import a repository** / **连接 Git 仓库** 这一类选项。
3. 授权连接你的 GitHub 账号，选择刚才那个仓库。
4. Cloudflare 会自动识别出 `wrangler.jsonc`，部署命令保持默认（`npx wrangler deploy`）
   即可，直接点 **Save and Deploy**。
5. 等一两分钟，会给你一个 `releo-university.<你的账号>.workers.dev` 的网址，这时候网页已经能打开了，
   但同步功能还差最后一步密码设置。

## 第 3 步：设置同步密钥
1. 部署完成后，进入这个 Worker 项目 → **Settings** → **Variables and Secrets**。
2. 点 **Add** 添加一个变量：
   - 类型选 **Secret**（加密存储，不会被别人看到）
   - 名字（Variable name）填：`APP_PASSCODE`
   - 值填这一串（和 `public/app.js` 里内置的一致，直接复制）：
     ```
     HXCCFNZY8UE7js3bVRbkM_3cQ0IsTICH
     ```
3. 保存后，Cloudflare 会提示重新部署一次（或者自动生效，看提示操作即可）。

## 第 4 步：打开网址即用
打开第 2 步拿到的 `xxx.workers.dev` 网址，电脑手机都用这个网址，不用登录、不用输
密码，右上角显示 **☁️ 已同步** 就说明成功了。

---

## 以后想改内容/代码怎么办？
以后要改课程内容、样式、代码，直接在 GitHub 仓库网页上编辑对应文件（点文件 → 铅笔图标
→ 改完 Commit），Cloudflare 会自动检测到新的提交并重新部署，网址不变。

## 常见问题

**Q: Import a repository 里没有我的仓库？**
第一次连接需要在 GitHub 授权页面里勾选"允许访问该仓库"，如果之前连接过 GitHub 但
没勾选这个仓库，去 GitHub → Settings → Applications → Cloudflare Workers and Pages
里重新配置仓库访问权限。

**Q: 部署失败，提示找不到 wrangler 或依赖？**
确认 `package.json` 和 `wrangler.jsonc` 这两个文件也上传了、而且和 `public/`、`src/`
在同一层级（仓库根目录），不要嵌套在多一层文件夹里。

**Q: 右上角一直显示"本机保存（未连接云端）"？**
检查第 3 步的 `APP_PASSCODE` 值是否和 `public/app.js` 里的
`HXCCFNZY8UE7js3bVRbkM_3cQ0IsTICH` 完全一致（没有多余空格），改完之后有没有让它
重新部署一次生效。

**Q: D1 数据库那部分还需要我自己配吗？**
不需要，已经在 `wrangler.jsonc` 里写好了数据库 ID（`bd53ee9f-8eb9-4607-895b-613658dce328`），
部署时会自动绑定。

**Q: 为什么 `worker.js`、`wrangler.jsonc` 这些文件不会被公开访问到？**
`.assetsignore` 文件里列出了这些不该公开的文件名，Cloudflare 部署时会跳过它们，只把
`index.html`、`app.js`、`styles.css` 等真正的网页文件对外提供访问。

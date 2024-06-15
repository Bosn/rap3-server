---
group: 
  title: 项目
  order: 200
---

# 仓库

## 创建仓库

- 进入仓库管理页面, 点击 `创建仓库` 按钮

<code src="./project/component/create_zh.tsx" inline=true></code>

- 填入所有必填字段，点击 `提交`按钮, 你可以编辑仓库成员、所属团队、以及协同仓库(Mock数据时候，如果在当前仓库中找不到对应的接口，会继续从所有的协同仓库中去查找)

<code src="./project/component/create_popup_repo_zh.tsx" inline=true></code>
## 编辑仓库
- 找到仓库卡片上的编辑按钮，点击即可进行仓库信息的编辑

<code src="./project/component/edit_zh.tsx" inline=true></code>
## 删除仓库
- 点击仓库卡片上的垃圾桶图标，可以删除仓库，这个操作比较危险，因此会进行二次确认

<code src="./project/component/delete_repo_zh.tsx" inline=true></code>
## 仓库插件

- 点击插件按钮，将会看到所有插件的集成用法

<code src="./project/component/plugin_zh.tsx" inline=true></code>

## 功能区

- 当你进入到一个仓库编辑界面，可以在上方看到功能区，提供了多种多样的功能操作按钮
<code src="./project/component/operation_zh.tsx" inline=true></code>

## 仓库设置

- 如果想要通过OpenAPI来给仓库上传数据，可能就需要获取仓库的token信息
- 点击 `设置` 按钮, 在弹出的窗口中就可以看到所有的OpenAPI接口以及token的相关信息了

<code src="./project/component/setting_zh.tsx" inline=true></code>


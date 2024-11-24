# Todo Application

一个简洁的待办事项(Todo)应用，基于 React 和 Django 构建。

## 功能特性

- ✨ 创建、编辑和删除待办事项
- 📝 支持任务标题和详细描述
- ✅ 标记任务完成状态
- 🔄 分类查看已完成/未完成任务
- 💅 现代化的 UI 设计 (基于 Arco Design)

## 技术栈

### 前端
- React 18
- Arco Design
- Axios

### 后端
- Django 5.1
- Django REST framework

## 快速开始

### 前端设置

```bash
cd frontend
npm install
npm start
npm build
```

应用将在 `http://localhost:3000` 启动。

### 后端设置

```bash
cd backend
python -m venv venv
source venv/bin/active
pip install -r requirement.txt
python manage.py migrate
python manage.py runserver
```

应用将在 `http://localhost:8000` 启动。

## 项目结构

```
todo/
├── frontend/ # React 前端项目
│ ├── public/ # 静态文件
│ └── src/
│ ├── components/ # React 组件
│ ├── App.js # 主应用组件
│ └── index.js # 入口文件
│
└── backend/ # Django 后端项目
└── todo/ # Django 应用
```

## 使用说明

1. 添加任务：点击"添加任务"按钮，填写任务标题和描述
2. 编辑任务：点击任务项的编辑图标
3. 删除任务：点击任务项的删除图标
4. 完成任务：勾选任务项的复选框
5. 切换视图：使用顶部标签页在"待完成"和"已完成"任务之间切换


### 快速开始

```bash
npm i -g typescript  //如果没全局安装ts
npm i 
npm start
```

### vscode 说明

安装`eslint`插件然后setting.json写入以下配置，方可实现保存时自动按照eslint规则格式化

```javascript
"eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
```
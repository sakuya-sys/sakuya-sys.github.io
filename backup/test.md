<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>背景图片设置器</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb') center/cover no-repeat fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            transition: background 0.5s ease;
        }
        
        .container {
            background: rgba(0, 0, 0, 0.7);
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        h1 {
            margin-top: 0;
            margin-bottom: 20px;
            color: #fff;
        }
        
        .input-group {
            margin-bottom: 20px;
        }
        
        input[type="text"] {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
        }
        
        button {
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            background: #4e54c8;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        button:hover {
            background: #6a6fd6;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .preview {
            margin-top: 25px;
            border-radius: 8px;
            overflow: hidden;
            max-width: 100%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .preview img {
            max-width: 100%;
            display: block;
        }
        
        .credit {
            margin-top: 20px;
            font-size: 0.9em;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>背景图片设置器</h1>
        
        <div class="input-group">
            <input type="text" id="imageUrl" placeholder="请输入图片URL" 
                   value="http://47.115.148.182:8000/3be5e450352ac65cdb452f17f7f2b21192138af0.jpg">
        </div>
        
        <button onclick="applyBackground()">应用背景图片</button>
        
        <div class="preview">
            <img id="previewImage" src="" alt="图片预览">
        </div>
        
        <p class="credit">输入图片URL后点击按钮即可更改背景</p>
    </div>

    <script>
        function applyBackground() {
            const imageUrl = document.getElementById('imageUrl').value;
            if (imageUrl) {
                document.body.style.backgroundImage = `url('${imageUrl}')`;
                document.getElementById('previewImage').src = imageUrl;
            } else {
                alert('请输入有效的图片URL');
            }
        }
        
        // 页面加载时显示预览
        window.onload = function() {
            const defaultImage = document.getElementById('imageUrl').value;
            if (defaultImage) {
                document.getElementById('previewImage').src = defaultImage;
            }
        };
    </script>
</body>
</html>


## hello world

## 123
## test
<img src="http://47.115.148.182:8000/5fa2eef88b34b5c2cbb9d9c4fc54320a.jpg">

1234

<img width="2000" height="1200" alt="Image" src="https://github.com/user-attachments/assets/67b214e1-2866-4d8e-8739-7217fff45069" />
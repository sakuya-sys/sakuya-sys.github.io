(function() {
    // 配置背景图片URL
    var bgImageUrl = 'http://47.115.148.182:8000/3be5e450352ac65cdb452f17f7f2b21192138af0.jpg';

    // 创建样式元素
    var style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            background: url('${bgImageUrl}') center/cover no-repeat fixed;
            color: white;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        }
        
        .content {
            background: rgba(0, 0, 0, 0.6);
            padding: 20px;
            border-radius: 10px;
            max-width: 800px;
            margin: 0 auto;
            backdrop-filter: blur(5px);
        }
    `;

    // 添加样式到文档头部
    document.head.appendChild(style);

    // 当文档加载完成时执行
    document.addEventListener('DOMContentLoaded', function() {
        // 如果body中没有内容，添加一些默认文本
        if (document.body.innerHTML.trim() === '') {
            document.body.innerHTML = `
                <div class="content">
                    <h1>页面背景已设置</h1>
                    <p>背景图片来自: ${bgImageUrl}</p>
                    <p>这是一个通过JavaScript自动设置的背景图片示例。</p>
                </div>
            `;
        }
    });
})();
mustache-node-plus
==================

为为express中间件封装了一下，最重要是添加了模板嵌套特性，norender标签，和常用格式化方法

 * 2012-12-13 增加norender标签，用此标签引用的文件不会经过任何渲染直接输出到客户端，可用于前后端都使用mustache的场景。
 * todo 常用格式化方法
###install

```
npm install mustacheplus
```

###example

```
var app = express();
var _mustacheplus = require('mustacheplus');
_mustacheplus.prefix=__dirname+"/templates/";//设置模板的路径前缀
app.engine("html", _mustacheplus); 
app.set('views', __dirname + '/templates');

```
template:

```
<body>
        {include tpl="store/header.html"}   <!-- relative path -->
        <div id="content">
        </div>
        {norender tpl="store/item.html"} <!-- 里面的内容不会被渲染 -->
        {include tpl="store/footer.html"}
</body>
```
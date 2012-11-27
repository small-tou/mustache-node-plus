mustache-node-plus
==================

为express中间件封装了一下，最重要是添加了模板嵌套特性

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
        {include tpl="store/footer.html"}
</body>
```
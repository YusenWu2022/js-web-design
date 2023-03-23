html css javascript 
开发者工具一层一层展开，可以直接追踪组件源代码位置   
查看网页完整源代码， 要有一定方法  
动态，尖括号   ！doctype html   
<head></head>   <meta name="">   <script src="...js">   <div class=""> <title></title>  <br/> <img src="xxx.jpg">
网络呈现的字体格式在css（对齐）   样式
交互程序js 
动态效果的渲染   
网页： 文字 图像 表格 链接 脚本   
用换行缩进表达等级
文本  段落<p></p> 换行<br> break 标题<h2></h2>head 粗体<b></b>bold <strong> 斜体<i></i>italic <em> 语义化 
图形  <img src="" width="80" height="90" alt="文本">   .gif .jpg不能透明.webp压缩  .png可以透明    可选表达   
f12开发者工具   
链接 跳转  地址写法   <a href= ... >文字或图片</a>   a: anchor href: hyper reference    
... ->  url 写法 绝对url（带http www) 和相对url   link    
<!--<div class="">...<...>--!>   写注释，相当于删除    
预设格式
空哥 &nbsp  
表  一维列表(和之前readme里面格式相当)  <ul><li>...</li><li></li></ul> 每一个列表项目里面有多个item    
二维表格  
<table>
<tr><td>...<td>...<td>...</tr>
<tr><td>...<td>...<td>...</tr>
</table>
css风格格式  f12里面可移动过去查看样式
用<p style="...">直接写
或者用<p class=".news“ > 引用定义好的样式  <style>.news{color:red border:solid  1 px red;}</style>

script  
脚本语言，<script></script> 
alert("hello")弹出   document.write(new Date()) console.log("hello")  f12在console中可见  
编辑网页 记事本 edit编辑器文件 可视化（不大用）  
文件的编辑保存和浏览 文件拓展为.html utf-8 编码 用浏览器打开  
vscode技巧  ！+tab 各种tab  tab补全大部分格式和代码    
一系列复杂的用法，骚的用法，要多写，多练，越快越好，还要有特效添加   超链接  图   
内容结构化，内容与格式  live preview    f1选指令  table  文图表链     
嵌套： footer p 表示内部（？
margin 边缘  右下左上   一个div会左右占满，float实现并排 after before


javascript部分
基础  
网页图形文本链接之外的小程序  js是解释性语言  弥补html  
浏览器虚拟机来解释 
oak->java 
livescript->javascript(ECMAScript)  ES5/ES6 
网页运行 解释性 弱类型 基于对象   
行为控制
<script src="..."></script>  
<script>alert(1990)</script>
var n=1;
var s="abc"
var p ={name:"li",age:10};
var ary=[4,5,6]
var 区分大小写
段落 function xxx(){...}
html交互：获得dom对象，对象属性方法事件onclick onmouseover 周期setinteval(fun,100);
<label for="guess"></label>
全放到.container{box...}里面
<input type="number" id="guess" min="1" max="100" >
<button> onlick="checkGuess()">  联系  <script>...const guessInput = document.getElementById("guess");获得对象 const guess=parseInt(guessInput,10);
function checkGuess(){...} const 常量
css:input[type="number"]{xxx} button{...} p.result p.error <p class="error"> 直接写   
... result = getElementById("xxx")document对象这是一个reference引用
 result.classList.remove("error") 去除error内容  result.innerHTML = message;  绑定事件来调用 先得到再操作（改变样式或内容） 修改程序（先有模子）
parseint("123",10);   10进制
""+123
document.write
console.log(n);
if for while...
 类似c系列和java  
 html注释 <!-- --> css注释 /* */
 number string boolean undefined     引用object array function  
 弱类型强制转换  
 parseInt("123px",10) 123
 parseInt parseInt("123.46")  124 
 toString() 
 isNaN()
 !!a bool 类型
 var x; let y; 变量常量 var不确定类型 
 特殊用法  
 a||a"100px"
 fun && func()
 if fun not null then func()
 嵌入  a=100 s='value is ${a}'  单引号也行
 像python的 "x={y}"    
 语句后写分号也可以不写...? 乐（ 
for(let i=0;i<=4;i++)
innerHTML 就是当前显示的逐行  
div{width:2px; height:50px; float:left;}  float 向左并排  
hsl循环 
for(...i...)
<div style='background-color:hsl("+i+，100%，50%")'></div> 循环  
把div弄成小球： div:{width:100px; height:100px;border_radius:50%; position:absolute;background-image:radius-gradient}
计时器函数 ssetInteva(function(){...})匿名函数
<script type="...">...
任务分解 多写函数  
有意思，感觉写html javascript脚本这种东西就跟实习brax的json yaml机制差不多
添加组件（手动代码添加） d=document.createElement('div') createTextNode() 之后getElement 之后appendChild(d)    
js核心：直接对对象操作：getElementBy...  也可以css查询 qsa  auerySelectorAll 
odiv.style.cssText=...
odiv.classList.add("")
三要素属性方法事件
onclick=函数名写到button上 script中get...onclick=函数名、匿名函数 
addEventListener("click",fuction(e){}) 
onmouseover onmouseout   
可以考虑添加点音乐  
audio video 首批添加到的标签 src =' controls='' autoplay='' muted->autoplay  controls是调节音量 id=''
第三方的js库  video.js plyr.js (as an import)
make player yours  
aria label
object  embed flash  param
矢量图不会失真，记住向量关键点的坐标 SVG格式    <svg>格式  <circle>  stroke 基本元素和结构元素  都是直接用svg作图而不是用图标
表单form 含有多个input form action method input 
表单申请和发送（账号密码交互这种） 用户填写并提交给服务器，就是常见的“是否重新发送表单”  
表单： name method action 处理位置  
接收信息的网页处理就是后端，受到并处理  
<form action=".../...org/net method=="POST">
<input type='...>  <type name='' checked>
<input type='...' name='' value=..  
text radio单选，checkbox 多选，
reset submit button passward file hidden image  
文件上传控件 <input type="file " > enctype多部份二进制 唯一标识序列号
MIME标准编码方式   指定传文件的编码 text/html   
input打天下，select下拉框选择 常规老古董网页，老古董界面NET   textarea select-option  textarea rows= name= cols= wrap=
option checkbox 
新的input控件 number range url email tel search color date ...  
html5:
<input type=''>  placeholder 提示信息 
autocomplete='on''off'填入之前的 
autofocus自动聚焦到焦点 
input前面可以加label <label for="">  <input id=""> 方便用户点击 
label对齐 table tr td 
或者css直接写 label{display:inline-block;text-align;right;}  
表单验证 form的onsubmit验证 true false 或者button的onclick验证成功之后调用form的submit    <input ... min= max= ><required > <pattern>匹配 <multiply>
控件组  
<fieldset>
<legend>
field 1a:<...><br>
提供选项：
<input... list="">
<datalist id="">
<option>





 
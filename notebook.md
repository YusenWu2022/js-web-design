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


css3 复杂的效果，标准发展和统一 
大部分浏览器都互相支持 
浏览器前缀 webkit (chrone safari edge) moz(firefox) ms(IE trident ) -o- (presto Opera) autoprefixer 
使用浏览器前缀的示例，组件加前缀直接调用  不支持css3就用js实现   
属性选择器 兄弟选择器伪类选择器 伪元素  input[type="password"]  a[...href$='pdf],a[class='item'] 用于库
div-img兄弟 
相邻兄弟li+li  label+input  
input:checked(...)
input:checked+... 
选中文字底色改成红色： ::select  
装饰 布局交互动态效果 
布局 盒模型 网格模型 动画
filter 方法，滤镜等
装饰  颜色 16进制 #RRGGBB 或#RGB RGBA alpha不透明度 rgb(0 255 0 / 50%)  HSL/A  hsl(240 100% 50%) hsla(240 100% 50% / 50%)
shift+click 三种表达转换（换算）    
色环  hsl写法 色调，饱和度，亮度 一般用的100% 50%  opacity   
对话框，别人遮住一点变暗  打开对话框-开关关闭冰还原  
<button onclick="openDialog()">open</button>
<>框页面
    <>
    <div class=""closebtn> onclick=""closeDialog()">x</div>   用x来代表关闭按钮    
    <div ... cover>
    ...
    <>
<>
重点：
.cover{
    opacity:3  
    width height 100% 全部遮住（实际上变暗就是放了一层cover层在上面罢了  
}
.wrapper{
    position:fixed 
    z-index:1000
    top:50% left:50% width:100px
    margin-left:100px margin-top max-width padding中间距离关系
}
.closebtn{
    position:absolute right:10px padding:5px cursor:pointer 
}
.content{
    min-width: 100px 
    min-height:...
    width 
    margin: 0px 
}
style="display:none"
边框 border   
阴影  box-shadow  rgba颜色透明度  文字阴影边框 和 定制按钮  
图片的旋转 transform：rotate(7deg)  
box-shadow: 20px 20px 20px #aaaaaa 
transition: border-color .15s box-shadow .15s   
背景 
复杂的css可以一直写直到手动写出渐变色效果  
特殊图片  linear-gradient背景作为图片输入处理 center 30% center 30% from...to...
attachment 
radial-gradient 滤镜渐变 css直接实现一定效果  
repeating-radial-gradient 一些乱七八糟的构图功能 加渐变区块  
sprite图小图标合并来减少网络的传输   sprite.css  应用工具，合成之后在屏幕上选定长图显示范围来选择   
字体图标  font awesome link直接引用   
changelog 很多很多各种用法，不过主要还是布局的熟练度得补一下，
定义一个字体没有组件，就直接给它.before .after加一个content使用定义好的字体

动画设计，动态效果， 大部分靠css，不是插入视频而是直接对一个图标的transform和transition加速度和效果来重复播放   动画和过渡：动画多个关键帧 不需要实践 而过渡只有两个状态，要用事件激发 hover  动画直接.mydiv(animation: xxx 1s)   
两层引用    
slice-box slice-box:hover slice是用长条背景来操作显示区段  anim-image anim-image:hover anim是图片滑入滑出   
animation time  
subcontent mycheckbox 隐藏  线性渐变  transparent .nav .drop-down  drop-down-content  .nav a:hover    
定位四大关键 display position float fixed   
css3 布局   table表格和float:left以外的其他布局   
flex布局 实现对齐 display:flex justify-content   align-items centter 主轴另轴对齐   
table displlay:table-row table-cell   vertical-align middle table-cell 格子，功能更强  
grid     


json不能注释，作为存储和不同语言之间的桥梁
函数一等公民  
function func(x,y,x)
{
    if(x==undefined)
}
call调用（复杂系统）[].filter.call(...)过滤只对复杂对象使用
apply传递数组形式的参数
function.max.apply([...])   
函数灵活  var x  let y    
函数返回一个函数，如果里面用到外面的就会把外面的作为闭包处理起来  
传递多个自由参数：args 数组拆开等  =>系列 运算符  ？fn(a,b)
this的绑定 this随着进展自动绑定上下文 that    
speak=function(){...}
使用function作为对象来构造对象：原型链 对象也是函数
特殊的继承方法   Person.aclipse.speak  
es新版中的数组  延展运算符  fuction(...a) 代表a=[1,4,6]参数  [b,c]=a 对左边复制  [...1,...1]
[age,name] = {...d}
{...d,...{school:'pku'.score:90,age:20}}  
math对象，math方法 字符串String对象  fromCharCode   
ES6 新旧语法转换（js新版） 
对象 var x={"a":"b","b":func(){...},x}键值对 面向对象，可以是函数
 p.a p["a"] p[0]
 for (var x in range)  
 curing化，闭包实现部分求值   
 prototype.constructor == Person  
 new Speak().speak()  
 ...prototype=person()
 .slice .splice  
 Dom对象  具体的环境对象 浏览器和文档对象    

 JQuery
 document的形式指定一些内容  
 $(document)....
 $('button).on("click",function(){$('p').toggle(1000)})     $选中所有符合的内容  
 function(){$('p').css("...")}   指定css格式   
 $('.div').each(function(index,element){...}) 
 $(...).css()
 $(...).index()  
 $('#firstpane p.menu_head:eq(0)').show();
 ...click(function(){
     $(this).addClass('current').next('...')  
                                .siblings().removeClass("...")
    $('.content).hide().eq($(this).index().show())
 })
 链式操作
 



 
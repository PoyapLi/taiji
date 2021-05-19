let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好，我是一名前端新人
 *接下来我要演示一下我的前端功底
 *首先准备一个div
  */
#div1{
  border:1px solid red;
  width: 200px;
  height: 200px;
}
/* 接下来我要把一个div变成一个八卦图
 * 首先，把div变成一个圆
 */
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦分为阴阳 
 * 一黑一白
 */
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
  width:100px;
  height:100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

  
}
#div1::after{
  width:100px;
  height:100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;
let string2 = "";

let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果string的第n个是回车，那就加回车
      string2 += "<br>"; //相当于string2 = string2 + "<br>"
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      //如果string的第n个不是回车，那就照搬第n个字符
      string2 += string[n];
    } //15-21行代码可以简写成string2 += string[n] === "\n" ? "<br>" : string[n]
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0,99999);
    //window.scrollTo(x,y) x是水平滚动条，y为竖直滚动条 ，直接填个很大的数，即可实现画面不够显示时自动往下滚
    html.scrollTo(0,99999);
    //不知道html有没有scrollTo先假设有试一下再说
    if (n < string.length - 1) {
      n += 1; //相当于n = n + 1
      step();
    }
  }, 50);
};

step();

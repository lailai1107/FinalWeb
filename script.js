// 企鵝插畫作品輪轉
let i=0, imArr=new Array(); //宣告變數i及陣列imArr
imArr[0] = "https://github.com/lailai1107/coldp/blob/main/%E4%BC%81%E9%B5%9D1.png?raw=true";
imArr[1] = "https://github.com/lailai1107/coldp/blob/main/%E4%BC%81%E9%B5%9D2.png?raw=true";
imArr[2] = "https://github.com/lailai1107/coldp/blob/main/%E4%BC%81%E9%B5%9D3.png?raw=true";
imArr[3] = "https://github.com/lailai1107/coldp/blob/main/%E4%BC%81%E9%B5%9D4.png?raw=true";
imArr[4] = "https://github.com/lailai1107/coldp/blob/main/%E4%BC%81%E9%B5%9D5.png?raw=true";

function showImg(){
  document.getElementById("ico").src = imArr[i];//指定img的src
  i = (i+1)%4; //把i加1之後，除以3(因有四張圖輪播)將餘數再放回i裡
}
function show(){
  setInterval(showImg,2000);//每隔兩秒呼叫一次showImg函數
}

// 漫畫作品
let ncyu = document.getElementById("comic");
ncyu.addEventListener("mouseover",function(){
  this.src = "https://github.com/lailai1107/comics/blob/main/%E5%B9%B3%E6%99%82%E5%9B%9B%E6%A0%BC%E6%BC%AB%E7%95%AB1.jpg?raw=true"
});
ncyu.addEventListener("mouseout",function(){
  this.src = "https://github.com/lailai1107/comics/blob/main/%E5%B9%B3%E6%99%82%E5%9B%9B%E6%A0%BC%E6%BC%AB%E7%95%AB2.jpg?raw=true"
});
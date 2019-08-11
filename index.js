// import classes from '/css/styles.css';

import './css/styles.scss';
/* menu */
var menu = ["世界", "政治", "商業於經濟", "社會", "科學與技術", "歷史與文化", "專欄", "生活"];
var i;
for (i = 0; i < menu.length; i++) {
  document.getElementById("menu").innerHTML += "<li><a href=“#”>"+menu[i]+"</a></li>";
}
/* headthree */

// var headtitle = "Watch Justin Timberlake’s ‘Cry Me a River’ Come to Life in Mesmerizing Dance";
// document.getElementById("headtitle").textContent = headtitle;
// var headtime = "August 30, 2017";
// document.getElementById("headtime").textContent = headtime;
// /* headthreeimg */
// var img = document.createElement("img"); 
// img.src = "https://jnews.io/newspaper/wp-content/uploads/sites/21/2017/06/jnews-demo-12-75x75.jpg";
// img.alt = "These Edible Pick-Up Sticks Let You Play With Your Food";
// // img.srcset = "https://jnews.io/newspaper/wp-content/uploads/sites/21/2017/06/jnews-demo-12-75x75.jpg 75w";
// // img.srcset = "https://jnews.io/newspaper/wp-content/uploads/sites/21/2017/06/jnews-demo-12-150x150.jpg 150w";
// var headimgcoffee = document.getElementById("headimgthree");
// headimgcoffee.appendChild(img);
var post = '<div class="wrap-post">' + '<a href="#">' + '<div id="headimgthree" width="75" height="75"></div>' + '</a>' + '</div>';
var x;
for (x = 0; x < 3; x++) {
  document.getElementById("headpost").innerHTML += post;
}


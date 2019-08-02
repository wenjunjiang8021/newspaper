// import classes from '/css/styles.css';

import './css/styles.scss';


  var menu = ["世界", "政治", "商業於經濟", "社會", "科學與技術", "歷史與文化", "專欄", "生活"];
  var i;
  for (i = 0; i < menu.length; i++) {
    document.getElementById("menu").innerHTML += "<li><a href=“#”>"+menu[i]+"</a></li>";
  }

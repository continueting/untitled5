<template>
  <body>

  <div class="header-wrapper">
    <header>
      <div class="container">
        <div class="logo-container">
          <!-- Website Logo -->
          <p id="bigname"><strong>Knowledge Base Theme</strong></p>
          <span class="tag-line">Premium WordPress Theme</span>
        </div>

        <!-- Start of Main Navigation -->
        <nav class="main-nav">
          <div class="menu-top-menu-container">
            <ul id="menu-top-menu" class="clearfix">
              <li class="current-menu-item"><a href="/menu">主页</a></li>
              <li><a href="/alla">所有文章</a></li>
              <li><a href="/myarticle">我的文章</a></li>
              <li><a href="/mycomment">我的评论</a></li>
              <li><a href="/personalkeep">个人中心</a></li>
            </ul>
          </div>
        </nav>
        <!-- End of Main Navigation -->

      </div>
    </header>
  </div>

  <div id="page-wraper">
    <!-- Sidebar Menu -->
    <div class="responsive-nav">
      <i class="fa fa-bars" id="menu-toggle"></i>
      <div id="menu" class="menu">
        <i class="fa fa-times" id="menu-close"></i>
        <div class="container">
          <div class="image">
            <a href="#"><img src="./wallpaper.jpg" alt="" /></a>
          </div>
          <div class="author-content">
            <h4>Name</h4>
            <span>个性签名</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div >
    <h3 class="article">
      我们党依靠斗争走到今天，也必然要依靠斗争赢得未来。当今世界正经历百年未有之大变局，我国正处于实现中华民族伟大复兴关键时期。习近平总书记反复强调，中华民族伟大复兴，绝不是轻轻松松、敲锣打鼓就能实现的，实现伟大梦想必须进行伟大斗争。在前进道路上，我们面临的风险考验只会越来越复杂，甚至会遇到难以想象的惊涛骇浪。我们面临的各种斗争不是短期的而是长期的，至少要伴随我们实现第二个百年奋斗目标全过程。全党要充分认识这场伟大斗争的长期性、复杂性、艰巨性，发扬斗争精神，提高斗争本领，团结带领人民有效应对重大挑战、抵御重大风险、克服重大阻力、解决重大矛盾，不断夺取伟大斗争新胜利。
      习近平总书记强调：“新的征程上，我们必须增强忧患意识、始终居安思危，贯彻总体国家安全观，统筹发展和安全，统筹中华民族伟大复兴战略全局和世界百年未有之大变局，深刻认识我国社会主要矛盾变化带来的新特征新要求，深刻认识错综复杂的国际环境带来的新矛盾新挑战，敢于斗争，善于斗争，逢山开道、遇水架桥，勇于战胜一切风险挑战！”在前进道路上，凡是危害中国共产党领导和我国社会主义制度的各种风险挑战，凡是危害我国主权、安全、发展利益的各种风险挑战，凡是危害我国核心利益和重大原则的各种风险挑战，凡是危害我国人民根本利益的各种风险挑战，凡是危害我国实现第二个百年奋斗目标、实现中华民族伟大复兴的各种风险挑战，只要来了，我们就必须进行坚决斗争，毫不动摇，毫不退缩，直至取得胜利。我们的头脑要特别清醒、立场要特别坚定，牢牢把握正确斗争方向，做到在各种重大斗争考验面前“不畏浮云遮望眼”，“乱云飞渡仍从容”。要抓住建党一百年这个重要节点，从具有许多新的历史特点的伟大斗争出发，总结运用党在不同历史时期成功应对风险挑战的丰富经验，做好较长时间应对外部环境变化的思想准备和工作准备，不断提高应对风险、迎接挑战、化险为夷的能力水平，坚定斗争意志，骨头要硬，敢于出击，敢战能胜！
    </h3>
  </div>
  <input type="submit" name="button" id="button" value="语音播放" style="width:100px; height:30px;margin-left :3px">
  <input type="submit" name="button" id="button2" value="评论" style="width:100px; height:30px;margin-left :5px">
  <input type="text" style="height:20px;width:500px;margin-left:1px ;" />

  </body>

</template>

<h5 class="box blue-box">padding</h5>

<script>
export default {
  name: "personal"
}
</script>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
}
.article{
  width:1000px;
  height:300px;
  margin-left:200px;
}
#page-wraper {
  background: url(wallpaper.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
}


/* Basic */

body {
  overflow-x: hidden;
}

input{
  outline: none;
}

a,
a:hover {
  text-decoration: none;
}

p {
  font-size: 16px;
  line-height: 24px;
  color: #fff;
}

h4 {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.25px;
}

img {
  width: 100%;
  overflow: hidden;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul li {
  display: inline-block;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

.container {
  margin: 0 auto;
}

.main-nav2 {
  text-align: center;
}

.main-nav2 li:last-child a {
  border-bottom: 2px solid #fff;
}

.main-nav2 li {
  display: block;
}

.main-nav2 li a {
  height: 70px;
  line-height: 70px;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  width: 100%;
  transition: all 0.5s;
  border-top: 2px solid #fff;
}

.main-nav2 li:hover a,
.main-nav2 li.active a {
  background: #fff;
  color: #8c363e;
}

/* Sidebar Menu */

.menu .image {
  margin-top: 60px;
}

.menu .image img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  text-align: center;
}

.menu .author-content {
  margin: 40px 0px 60px 0px;
}

.menu .author-content h4 {
  margin-bottom: 0px;
}

.menu .author-content span {
  font-size: 13px;
  font-style: italic;
  color: black;
}

.menu {
  margin-top: 60px;
}

.menu  {
  position: relative;
  margin-top: 60px;
}
.menu:before,
.menu:after {
  content: "";
  display: table;
}

.menu:after {
  clear: both;
}

.menu a {
  text-decoration: none;
  color: inherit;
}

.menu {
  text-align: center;
}
.menu {
  left: 1%;
  -webkit-transition: -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  height: 100vh;
  max-height: 100vh !important;
  max-width: 80vw !important;
  min-width: 45px !important;
  outline: none;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  padding: 0;
  position: fixed !important;
  top: -150px;
  width: 27%;
  will-change: transform;
  z-index: 9999 !important;
}



#menu-toggle {
  z-index: 999;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  color: #a43f49;
  background-color: #fff;
  width: 60px;
  height: 60px;
  text-align: center;
  display: inline-block;
  line-height: 60px;
}
#menu-close {
  cursor: pointer;
  text-align: right;
  color: #a43f49;
  background-color: #fff;
  width: 100%;
  height: 60px;
  text-align: center;
  display: inline-block;
  line-height: 60px;
}

.header-wrapper {
  background-color: #3b4348;
  width: 100%;
  height: auto;
}
.header-wrapper .container {
  position: relative;
  min-height: 60px;
  height: auto !important;
  height: 60px;
}
#bigname{
  color:white;
  font-size:x-large;
  margin-left: -900px;
}
.logo-container {
  padding: 19px 0;
}
.logo-container img {
  margin-right: 10px;
}
.logo-container {
  width: 450px;
}

span.tag-line {
  color: #818a90;
  font-size: 12px;
  position: relative;
  top: 2px;
}
.main-nav {
  position: absolute;
  top: 5px;
  right: 0;
}
.main-nav div > ul {
  width: auto;
  margin: 0;
}
.main-nav div > ul > li {
  position: relative;
  float: left;
  list-style: none;
  padding: 16px 14px 18px;
}
.main-nav div > ul > li a {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #c1cad1;
}
.main-nav div > ul > li a:hover {
  color: #fff;
}
.main-nav div > ul > li:hover > a {
  color: #fff;
}
.main-nav div > ul > li:last-child {
  padding-right: 0;
}
.main-nav div > ul li.current-menu-item a {
  color: #fff;
}
.main-nav .sub-menu {
  position: absolute;
  top: 56px;
  left: 0px;
  list-style: none;
  margin: 0;
  display: none;
}
.main-nav .sub-menu li {
  position: relative;
  background-color: #3b4348;
  padding: 6px 10px;
  width: 150px;
  cursor: pointer;
}
.main-nav .sub-menu li:hover {
  background-color: #292e32;
}
.main-nav .sub-menu li:hover > a {
  color: #fff;
}
.main-nav .sub-menu .sub-menu {
  top: 0px;
  right: 170px;
  left: auto;
}
.main-nav .responsive-nav {
  display: none;
}

/* Header - Search ---------------------------------------------------------------------------------------------------*/
.search-area-wrapper {
  background: #353b65 url("wallpaper.jpg") center top no-repeat;
  background-size: 100%;
  min-height: 279px;
  height: auto !important;
  height: 279px;
}
.search-area-wrapper .search-area {
  padding: 50px 0;
}

h3.search-header {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 36px;
  color: #fff;
  text-align: center;
}

p.search-tag-line {
  font-family: "Droid Serif", serif;
  font-style: italic;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  text-align: center;
}

form.search-form {
  margin: 40px 0 0;
  text-align: center;
}
form.search-form , form.search-form input.search-term, form.search-form input.search-btn {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  box-shadow: none;
  border-radius: 0;
  display: inline-block;
  border: none;
  vertical-align: bottom;
}
form.search-form input.search-term {
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  padding: 12px;
  width: 72%;
  color: #858c91;
  margin-right: 10px;
  margin-bottom: 0;
}
form.search-form input.search-term.loading {
  background-image: url("wallpaper.jpg");
  background-repeat: no-repeat;
  background-position: 98% 50%;
}
form.search-form input.search-btn {
  background-color: #3f4b55;
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
  padding: 14px 30px 15px;
  color: #fff;
}
form.search-form input.search-btn:hover {
  background-color: #4b5760;
}

#search-error-container label {
  color: #fff;
  padding: 5px;
  font-size: 14px;
}

.lt-ie8 form.search-form input.search-btn {
  padding-top: 12px;
  padding-bottom: 13px;
}

/* Page - Container --------------------------------------------------------------------------------------------------*/
.page-container {
  width: 100%;
}
.page-container > .container {
  padding: 40px 35px;
  background-color: #fff;
}


.pages-nav a {
  margin-right: 10px;
}


div {
  display: block;
  margin: 5px auto 20px auto;
}

li.comment > article {
  background: #fff;
  float: left;
  margin: 0px 10px 10px 0;
  position: relative;
  z-index: 1;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
}
.page-content {
  margin-bottom: 20px;
}

.row.separator {
  margin-bottom: 10px;
}
.articles-list {
  margin-bottom: 20px;
}
.articles-list > h3 {
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 20px;
}
.articles-list > h3 span {
  color: #6f7579;
  font-size: 16px;
}
.articles-list > h3 a {
  color: #3b4348;
}
.articles-list > h3 a:hover {
  color: #395996;
}

ul.articles {
  list-style: none;
  margin: 0;
}
ul.articles .article-entry {
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  padding: 0 0 0 24px;
  background: url("wallpaper.jpg") no-repeat 0 3px;
}
ul.articles .article-entry.standard {
  background: url("wallpaper.jpg") no-repeat 0 3px;
}
ul.articles .article-entry.video {
  background: url("wallpaper.jpg") no-repeat 0 3px;
}
ul.articles .article-entry.image {
  background: url("wallpaper.jpg") no-repeat 0 3px;
}
ul.articles .article-entry {
  background: url("wallpaper.jpg") no-repeat 0 3px;
}
ul.articles li.article-entry:last-child {
  border-bottom: 1px solid #f2f2f2;
}

.article-entry > h4 {
  font-size: 13px;
  margin-bottom: 5px;
  font-weight: 600;
}
.article-entry > h4 a {
  color: #3b4348;
}
.article-entry > h4 a:hover {
  color: #395996;
}
.article-entry .article-meta {
  display: block;
  margin-bottom: 10px;
}
.article-entry .like-count {
  position: absolute;
  bottom: 0px;
  right: 0px;
  line-height: 18px;
  font-weight: 600;
  padding: 3px 5px 3px 20px;
  border: 1px solid #f2f2f2;
  border-bottom: none;
  background: url("wallpaper.jpg") no-repeat 6px 8px;
}
.article-entry:hover .like-count {
  background: url("wallpaper.jpg") no-repeat 6px -22px;
  color: #395996;
}

#footer .article-entry .like-count {
  border-color: #535b61;
}
#footer .article-entry:hover .like-count {
  color: #fff;
}
#footer ul.articles li.article-entry:last-child {
  border-bottom: 1px solid #535b61;
}

.main-listing article {
  margin-bottom: 0;
}
.page-container > .container {
  padding: 40px 20px;
}
@media (max-width: 767px) {
  /* Navigation */
  .main-nav > div {
    display: none;
  }

  .main-nav {
    display: block;
    width: 85%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 0;
    border: none;
  }

  /* Search Area */
  .search-area-wrapper {
    background-size: auto;
    min-height: 240px;
    height: auto !important;
    height: 240px;
  }

  .search-area-wrapper .search-area {
    padding: 20px 0;
  }

  .search-area-wrapper h3.search-header {
    font-size: 30px;
    padding: 0 15px;
  }

  .search-area-wrapper p.search-tag-line {
    padding: 0 15px;
    font-size: 14px;
    line-height: 22px;
  }

  .search-area-wrapper form.search-form input.search-term {
    width: 60%;
  }

  @media (max-width: 480px) {
    /* Search Area */
    .search-area-wrapper form.search-form input.search-term {
      width: 80%;
      display: block;
      margin: 0 auto 10px;
    }

    .search-area-wrapper form.search-form input.search-btn {
      display: block;
      margin: 0 auto;
    }

    ul.articles .article-entry {
      padding-bottom: 20px;
    }
  }
  /* Menu Fix for resizing to Bigger Screen sizes */
  @media (min-width: 980px) {
    .main-nav div > ul > li {
      float: none;
      display: inline-block;
    }
  }
}
</style>


<script>
export default {
  name: "passage"
}
</script>

<style scoped>

</style>

<template>
  <div>
    <mheader></mheader>
    <section class="content" @click="hideBox($event)">
      <div class="container">
        <div class="search-box center">
          <div class="search center">
            <input name="q" id="query" type="text" class="search-text" @keyup="handleKeyup()" v-model="value" placeholder="请输入搜索内容">
            <button name="su" id="su" type="submit" class="btn btn-large">
              <span class="icon-search" @click="handleSearch()">搜  索</span>
            </button>
            <ul class="search-msg">
               <li class="msg-item" v-for="(item, i) in result" :key="i" @click="searchItem(item)">{{item}}</li>
            </ul>
          </div>
          <div class="search-choose">
            <label>
              <input type="radio" name="field" value="title" checked="checked">
              <em>书名</em>
            </label>
            <label>
              <input type="radio" name="field" value="creatorSearch">
              <em>作者</em>
            </label>
            <label>
              <input type="radio" name="field" value="callNumberSearch">
              <em>索书号</em>
            </label>
          </div>
        </div>
        <div class="book-box center">
          <div class="film_focus">
            <div class="film_focus_desc">
              <ul class="film_focus_nav">
                <li class="cur"> <b>哲学、宗教</b><span>哲学、宗教</span> </li>
                <li> <b>经济</b><span>经济</span> </li>
                <li> <b>文学</b><span>文学</span> </li>
                <li> <b>语言、文字</b><span>语言、文字</span> </li>
                <li> <b>艺术</b><span>艺术</span> </li>
                <li> <b>历史、地理</b><span>历史、地理</span> </li>
                <li> <b>工业技术</b><span>工业技术</span> </li>
              </ul>
            </div>
            <div class="left">
              <div class="box">
                <ul class="book-wrapper">
                  <li class="category">
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8871.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_995.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8221.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8441.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8558.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_1066.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8721.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8007.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.hetushu.com/book/cover.pic/cover_3373.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.hetushu.com/book/cover.pic/cover_2567.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://book.99csw.com/book/cover.pic/cover_171.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://book.99csw.com/book/cover.pic/cover_164.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://book.99csw.com/book/cover.pic/cover_168.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8716.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_5748.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8767.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                  </li>
                  <li class="category">
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8748.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8744.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8732.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_7972.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_7910.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_7759.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_7271.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_6347.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_5845.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_5098.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_5097.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3800.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3343.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_2406.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_2383.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_2378.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                  </li>
                  <li class="category">
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_2158.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_1924.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_1822.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_1566.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_1561.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_1140.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_887.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8559.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8427.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8410.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_8410.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_7208.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_6876.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_6862.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_6316.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_6256.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                  </li>
                  <li class="category">
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_5693.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_5626.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_4363.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_4116.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_4104.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_4093.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_4081.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_4046.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3900.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3862.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3794.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3782.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3737.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3644.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3545.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3544.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                  </li>
                  <li class="category">
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3543.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3538.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3405.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3306.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3250.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3139.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3138.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3136.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3081.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_2972.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                  </li>
                  <li class="category">
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3250.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                  </li>
                  <li class="category">
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3250.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                    <div class="books-shelf">
                      <ul class="books cl">
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="../assets/a1.jpg" alt="">
                          </a>
                        </li>
                        <li class="book-item">
                          <a href="javascript:;" class="book-content">
                            <img class="book-cover" src="http://www.99lib.net/book/cover.pic/cover_3250.jpg" alt="">
                          </a>
                        </li>
                      </ul>
                      <div class="shelf"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="more">查看更多》</div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </section>
    <mfooter></mfooter>
  </div>
</template>

<style scoped>
  .search-box {
    width: 1024px;
  }
  .search-box .search {
    /*margin-top: 20px;*/
    width: 650px;
    position: relative;
  }

  .search-msg {
    position: absolute;
    z-index: 9999;
    width: 532px;
    cursor: pointer;
  }

  .msg-item {
    background: #fff;
    padding: 4px 5px;
  }

  .msg-item:hover{
    background: #ccc;
  }

  .search-box .search input.search-text {
    width: 520px;
    height: 40px;
    line-height: 36px;
    font-size: 18px;
    padding: 2px 5px;
    float: left;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    color: #000;
  }
  .search-box .search .btn {
    border-radius: 0 4px 4px 0;
    margin-left: -1px;
    vertical-align: top;
    padding: 10px 19px 11px 19px;
    font-size: 17px;
    color: #333333;
    background-color: #fcfcfc;
    outline: none;
    cursor: pointer;
    border: 1px solid #ccc;
  }
  .search-box .search .btn:hover {
    background-color: #eee;
  }
  .icon-search {
    background: url("http://202.115.193.41:8080/styles/opac/images/icon-search.png") left center no-repeat;
    padding-left: 28px;
    padding-right: 2px;
  }
  .search-choose {
    margin-left: 187px;
    margin-top: 10px;
  }
  .search-choose label {
    cursor: pointer;
    overflow: hidden;
    padding-right: 5px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    vertical-align: top;
  }
  .search-choose label input {
    cursor: pointer;
    float: left;
    vertical-align: middle;
    height: 20px;
  }
  .search-choose em {
    font-style: normal;
    color: #666;
    display: inline-block;
    padding-left: 3px;
  }
  .book-box {
    width: 1024px;
    background-size: 100% 100%;
    margin: 48px auto 0;
  }
  .film_focus {
    width:100%;
    margin:20px auto;
  }
  .film_focus_desc {
    width: 232px;
    float: left;
  }
  .film_focus ul.film_focus_imgs {
    height:340px;
    overflow:hidden;
  }
  .film_focus .film_focus_desc h3 {
    height:45px;
    line-height:45px;
    background:rgba(0, 0, 0, .5);
    color:#fff;
    width:100%;
    padding-left:20px;
    z-index:99;
    font-size:16px;
  }
  .film_focus ul.film_focus_nav {
    width:232px;
  }
  .film_focus ul.film_focus_nav li {
    height:60px;
    background:#d69e6e9e;
    margin:0px 0px 5px 0;
    padding:0px 18px 0 19px;
    position:relative;
    width:190px;
    cursor: pointer;
    color:#333;
    font-weight:bold;
    font-size:18px;
    overflow:hidden;
    line-height:60px;
    box-shadow: 3px 2px 4px #6b636375;
  }
  .film_focus ul.film_focus_nav li.cur {
    background:url('../assets/hd_on.png') no-repeat;
    width:190px;
    height:132px;
    padding:0px 33px 0 25px;
    word-break:break-all;
    color:#fff;
    font-weight:bold;
    font-size:22px;
    overflow:hidden;
    line-height:30px;
    box-shadow: none;
    z-index: 999;
  }
  .film_focus ul.film_focus_nav li b {
    display:none
  }
  .film_focus ul.film_focus_nav li b span {
    display:block
  }
  .film_focus ul.film_focus_nav li.cur b {
    vertical-align: middle;
    display: table-cell;
    height:132px;
  }
  .film_focus ul.film_focus_nav li.cur span {
    display:none
  }
  .book-wrapper {
    width: 792px;
    margin-top: 0;
  }
  .book-box .left {
    width: 792px;
    float: left;
  }
  .book-wrapper .shelf {
    width: 100%;
    height: 48px;
    margin-top: -13px;
    background: transparent url('../assets/shelf.png') no-repeat center center;
  }
  .book-wrapper .books-shelf {
    margin-top: 20px;
  }
  .book-wrapper .books-shelf:first-child {
    margin-top: 0;
  }
  .book-wrapper .books {
    margin-left: 68px;
  }
  .book-wrapper .book-cover {
    width: 132px;
    height: 184px;
    box-shadow: 4px 10px 15px #6b6363e6;
  }
  .book-wrapper .book-item {
    float: left;
    margin-left: 48px;
  }
  .book-wrapper .book-item:first-child {
    margin-left: 0;
  }
  .box {
    width: 792px;
    height: 944px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .more {
    width: 100%;
    text-align: center;
    font-size: 22px;
    cursor: pointer;
    color: #633622e8;
  }
  .more:hover {
    color: #4c2514;
  }
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'
  import {index} from '../common/js/index'

  export default {
    data () {
      return {
        value: '',
        result: [],
      }
    },
    methods: {
      handleSearch: function () {
        this.$router.push('/searchmsg/'+this.value);
      },
      searchItem: function (item) {
        this.$router.push('/searchmsg/'+item);
      },
      handleKeyup: function () {
        this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
          params: {
            wd: this.value
          },
          jsonp: 'cb'
        }).then(res => {
          this.result = res.data.s;
        })
      },
      hideBox: function (ev) {
        if (ev.target === $('.msg-item')) {
          return;
        }
        $('.msg-item').hide()
      },
      hover: function () {

      }
    },
    mounted () {
      index();
    },
    components: {
      Mheader,
      Mfooter
    }
  }
</script>

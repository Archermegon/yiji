

// scrollBar js
var scrollNum = $('.unvisable>.scrollImg').length
var scrollInd = scrollNum*2-4
// console.log(scrollInd);
// console.log(scrollNum);
var scrollImg = $('.scrollImg>img').width()
var kong = ($('.unvisable').width() - scrollNum*scrollImg)/(scrollNum-1)
var indScroll = 0
var ml = 0
$('.scollXbanner').swipeLeft(function () { 
  indScroll ++
  if(indScroll<scrollInd){
    if(indScroll%2 != 0){
      ml = ml + (scrollImg/2)
    }else{
      ml = ml + (scrollImg / 2)+ kong
    }
  }
  $('.unvisable').css('margin-left',-ml)
 })

$('.scollXbanner').swipeRight(function () {
  indScroll--
  if (indScroll >= 0) {
    if (indScroll % 2 != 0) {
      ml = ml - (scrollImg / 2) - kong
    } else {
      ml = ml - (scrollImg / 2)
    }
  }
  $('.unvisable').css('margin-left', -ml)
})

// 搜索js
$('.wrapper>header>a').tap(function () { 
  $('.wrapper-search').css('left','0%')
 })

$('.search-txt>a').tap(function () { 
  $('.wrapper-search').css('left', '100%')
 })

// 正在展出和即将展出切换
 $('.title>h2:nth-child(2)').tap(function () { 
   $('.unvis-content').css('margin-left','-100%')
  })
$('.title>h2:nth-child(1)').tap(function () {
  $('.unvis-content').css('margin-left', 0)
})

// 滑动到一部分Banner消失
var height = $('.wrapper').height()- $('footer').height()-$('.scrollXBanner').height()-$('.title').height() - $('header').height() - 100
$('.main').scroll(function () { 
  if(this.scrollTop > ($('.banner').height()+50)){
    $('.banner').css('display','none')
    $('.main').css({ 'display': 'flex', 'flex-direction': 'column'})
    $('.exhibation').css('height',height)
    // console.log(1);
  }
 })

// 展开全部评论,展示全部评论
var commentNum = $('.comment>li').length
$('.showAllcomment>span').text(commentNum)
$('.showAllcomment').tap(function () {
  $('.comment>li').removeClass('hide')
  $('.showAllcomment').css('display','none')
  $('.hideSomecomment').css('display','block')
})
$('.hideSomecomment').tap(function () { 
  for(var i = 2; i <commentNum ; i ++){
    $('.comment>li').eq(i).addClass('hide')
  }
  $('.hideSomecomment').css('display', 'none')
  $('.showAllcomment').css('display', 'block')
 })
// 关注
$('.wrapper-detail .footer>li:nth-child(1)>a').tap(function () { 
  $('.icon-unfocus').css('display','none')
  $('.icon-focus').css('display', 'inline')
 })

// 点击图片进入详情
$('.wrapper .con-post').tap(function () { 
  $('.wrapper').css({'left':'-100%'})
  $('.wrapper-detail').css('top',0)
 })
$('.wrapper-detail .return-detail').tap(function () { 
  $('.wrapper-detail').animate({'left':'100%'},function () { 
    $(this).animate({'top':'100%','left':'0','z-index':0},function () { 
      $(this).css('z-index',10)
     })
   })
  $('.wrapper').css('left',0)
 })

//  地图出来和回去

$('.close-position').tap(function () { 
  $('.wrapper-position').css('left','100%')
 })
$('.footer-position').tap(function () { 
  $('.wrapper-position').css('left', '0')
 })

//  分享的取消
$('.non-share').tap(function () { 
  $('.wrapper-share').css({'top':'100%','background':'rgba(0, 0, 0, 0)'})
 })
$('.footer-post').tap(function () {
  $('.wrapper-share').animate({ 'top': '0' },function () { 
    $('.wrapper-share').css({ 'background': 'rgba(0, 0, 0, 0.4)'})
   })
})
$('.share-img').tap(function (event) { 
  event.stopPropagation();
 })
$('.wrapper-share').tap(function () {
  $('.wrapper-share').css({ 'top': '100%', 'background': 'rgba(0, 0, 0, 0)' })
})


// 评论实现
$('.icon-back').tap(function () { 
  $('.wrapper-comment').css('left','100%')
 })
$('.icon-addcom').tap(function () { 
  $('.textarea>textarea').text(' ')
 })
$('.foot-comment').tap(function () {
  $('.wrapper-comment').css('left', '0')
})

// 保存图片


// scrollBar点击之后
$('.scollXbanner .scrollImg').tap(function () { 
  var url = $(this).children('img').attr('src')
  $('.wrapper-scroll .scroll-top').css('background','url('+url+')')
  $('.wrapper-scroll').css('left',0)
 })
$('.close-scroll').tap(function () { 
  $('.wrapper-scroll').css('left', '100%')
 })









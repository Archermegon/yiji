 $('.title>h2:nth-child(2)').tap(function () { 
   $('.unvis-content').css('margin-left','-100%')
  })
$('.title>h2:nth-child(1)').tap(function () {
  $('.unvis-content').css('margin-left', 0)
})

var nav
$('.like>li').tap(function () { 
   nav = $(this).attr('data-content')
  //  console.log(nav);
  $('.get-content').html(nav)
  $('.wrapper-my').css('left',0)
 })

 $('.self-back').tap(function () { 
   $('.wrapper').css('left', '100%')
  })

$('.settings').tap(function () { 
  $('.wrapper-alter').css('left',0)
 })
$('.self-sclpture').tap(function () {
  $('.wrapper-profile').css('left', 0)
})

$('.profile').tap(function () { 
  $('.wrapper-change').animate({'top':0},function () { 
    $(this).css('background',"rgba(0,0,0,0.3)")
   })
 })
$('.c-con').tap(function (ele) {
   console.log(':1');
   ele.stopPropagation();
 })
 $('.q-change').tap(function () { 
   $('.wrapper-change').animate({ 'background': "rgba(0,0,0,0.3)" }, function () {
     $('.wrapper-change').css('top', '100%')
   })
  })
$('.wrapper-change').tap(function (event) { 
  $(this).animate({ 'background': "rgba(0,0,0,0.3)"},function () { 
    $(this).css('top','100%')
   })
 })




$(function(){
  // 알람
  $('.sns_wrap li .bell_wrap').click(function (){
    $('.arlam_wrap').toggle('on');
  });
  $('.arlam_wrap .close').click(function (){
    $('.arlam_wrap').toggle('on');
  });
  // 오늘톡
  $('.content_section_1_wrap .balloon').click(function (){
    $('.today_talk_wrap').toggle('on');
    $('.bg').toggle('on');
  });
  $('.today_talk_wrap .close').click(function (){
    $('.today_talk_wrap').toggle('on');
    $('.bg').toggle('on');
  });
});

$(function() {
  $(".mileage_tab_wrap li").click(function () {
      $(".mileage_tab_wrap li").removeClass("current");
      $(this).addClass("current");
      $(".search_list_wrap").hide();
      var activeTab = $(this).attr("tab");
      console.log(activeTab);
      $("#" + activeTab).fadeIn();
  });
});

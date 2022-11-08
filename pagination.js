
  var flag = 1;
  var len = $("div.main2").find("div").length;
  $("#bar").animate({
    width: 100 / len * flag + '%'
  });
  $("#counter").text("1/" + len)
  $("#next").click(function() {
    flag++;
    if (flag > len) {
      flag = 1;
    }
    $("#next").prop('disabled', flag == len ? true : false);
    $("#prev").prop('disabled', false);
    change()
  });
  $("#prev").click(function() {
    flag--;
    if (flag < 1) {
      flag = len;
    }
    $("#prev").prop('disabled', flag == 1 ? true : false);
    $("#next").prop('disabled', false)
    change()
  });

  function change() {
    $("#bar").animate({
      width: 100 / len * flag + '%'
    });
    for (var i = 1; i <= len; i++) {
      if (i == flag) {
        $(".hide-" + i).show()
      } else {
        $(".hide-" + i).hide()
      }
      $("#counter").text(flag + "/" + len);
    }
  }
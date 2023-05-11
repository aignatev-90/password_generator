$(document).ready(function () {
  var checked = $("#specs").prop("checked");
  var pwd_length = $("#pwd_length").val();

  makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length)
  $(".img_copy").show()


  $("#pwd_length").keyup(function () {
    var pwd_length = $("#pwd_length").val();
    if (pwd_length <= 0) {
    $(".pwd_hint").text("Введите целое положительное число");
    $("#pwd").text('');
    $(".img_copy").hide()
    }

    else {
    if (pwd_length == 0 || pwd_length > 20){
        $(".img_copy").css("display", "none");
    } else {
        $(".img_copy").css("display", "flex"); 
    }
    if (pwd_length > 20) {
      $(".pwd_hint").text("Максимальная длина пароля - 20 символов");
      $("#pwd").text('');
      $(".img_copy").hide();
    } else {
      $(".pwd_hint").text("");
      if (!checked) {
        makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
      } else {
        makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
      }
    }
    }
    return false;
  });

  $("#specs").change(function () {
    var pwd_length = $("#pwd_length").val();
    if (!checked) {
      if (pwd_length > 20) {
        $(".pwd_hint").text("Максимальная длина пароля - 20 символов");
      } else {
        makeAjaxRequest(
          "retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True"
        );
      }
      checked = true;
    } else {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
      checked = false;
    }
    return false;
  });

  function makeAjaxRequest(url) {
    $.ajax({
      url: url,
      success: function (response) {
        response: $("#pwd").text(response.pwd);
      },
      else: function (response) {
        console.log(response.responseJSON.errors);
      },
    });
  }

  $(".img_copy").on("click",function () {
    var pwd = $(".show_gen_pswd").html();
    navigator.clipboard.writeText(pwd)
  })
});

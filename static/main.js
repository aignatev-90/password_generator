$(document).ready(function () {
  var checked = $("#specs").prop("checked");
  var pwd_length = correct_pwd_length($("#pwd_length").val());

  makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);


  if (!checked) {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
  } else {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
  }

  $("#pwd_length").on("change", function () {
    var pwd_length = correct_pwd_length($("#pwd_length").val());
    var checked = $("#specs").prop("checked");

    if (!checked) {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
    } else {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
    }
  });

  /*
   * START Обработка событий при нажатии увеличения и уменшения значений пароля
   */

  $(".plus").click(function () {
    var pwd_length = correct_pwd_length($("#pwd_length").val());
    var checked = $("#specs").prop("checked");
    this.parentNode.querySelector("input[type=number]").stepUp();
    if (!checked) {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
    } else {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
    }
    $(".pwd_hint").text("");
    return false;
  });
  $(".minus").click(function () {
    var pwd_length = correct_pwd_length($("#pwd_length").val());
    var checked = $("#specs").prop("checked");
    this.parentNode.querySelector("input[type=number]").stepDown();
    if (!checked) {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
    } else {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
    }
    return false;
  });
   /*
   * FINISH Обработка событий при нажатии увеличения и уменшения значений пароля
   */
  return false;
});

$("#specs").change(function () {
  var pwd_length = correct_pwd_length($("#pwd_length").val());
  var checked = $("#specs").prop("checked");

  if (!checked) {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
  } else {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
  }

  return false;
});


  /*
   * Приведение длины пароля в диапазон от 8 до 20 единиц
   */

function correct_pwd_length(user_entrance_length) {
    if (user_entrance_length > 20) {
      var pwd_length = 20
      $("#pwd_length").val(pwd_length)
      $(".pwd_hint").text("Максимальная длина пароля - 20 символов");
    }
    else if (user_entrance_length < 8) {
      var pwd_length = 8
      $("#pwd_length").val(pwd_length)
      $(".pwd_hint").text("Минимальная длина пароля - 8 символов");
    }
    else {
      var pwd_length = user_entrance_length
      $(".pwd_hint").text("");
    }
    return pwd_length
};

  /*
   * AJAX-запрос на сервер
   */

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

$(".img_copy").on("click", function () {
  $(".img_copy").fadeOut(50).delay(40).fadeIn(50);
  var pwd = $(".show_gen_pswd").html();
  navigator.clipboard.writeText(pwd);
});

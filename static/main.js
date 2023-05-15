$(document).ready(function () {
  var checked = $("#specs").prop("checked");
  var pwd_length = $("#pwd_length").val();

  makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);

  $(".img_copy").show();

  if (pwd_length > 20) {
    $(".pwd_hint").text("Максимальная длина пароля - 20 символов");
    pwd_length = 20;
  } else if (pwd_length < 8) {
    $(".pwd_hint").text("Минимальная длина пароля - 8 символов");
    pwd_length = 8;
  } else {
    $(".pwd_hint").text("");
  }
  if (!checked) {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
  } else {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
  }

  $("#pwd_length").keyup(function () {
    var pwd_length = $("#pwd_length").val();
    var checked = $("#specs").prop("checked");

    if (pwd_length > 20) {
      $(".pwd_hint").text("Максимальная длина пароля - 20 символов");
      pwd_length = 20;
    } else if (pwd_length < 8) {
      $(".pwd_hint").text("Минимальная длина пароля - 8 символов");
      pwd_length = 8;
    } else {
      $(".pwd_hint").text("");
    }
    if (!checked) {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
    } else {
      makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
    }
  });
  if (!checked || pwd_length > 20) {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
  } else {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
  }

  /*
   * START Обработка событий при нажатии увеличения и уменшения значений пароля
   */

  $(".plus").click(function () {
    var pwd_length = $("#pwd_length").val();
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
    var pwd_length = $("#pwd_length").val();
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
  var pwd_length = $("#pwd_length").val();
  var checked = $("#specs").prop("checked");

  if (!checked) {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
  } else {
    makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + "&specs=True");
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

$(".img_copy").on("click", function () {
  var pwd = $(".show_gen_pswd").html();
  navigator.clipboard.writeText(pwd);
});

$('#pwd_length').keyup(function () {
    var pwd_length = $('#pwd_length').val()
    console.log(pwd_length)
    if(pwd_length > 20) {$('#pwd').text('Длину укороти!')}
    else {
    $.ajax({
        url: "retrieve_pwd/?pwd_length=" + pwd_length,
        data: pwd_length,
        success: function (response) {
            response: $('#pwd').text(response.pwd)
            console.log(response)
            },
        else: function (response) {
            console.log(response.responseJSON.errors)
        }
    });
    };
    return false;
});
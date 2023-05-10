$( document ).ready(function() {
    var checked = $('#specs').prop('checked')

    $('#pwd_length').keyup(function () {
        var pwd_length = $('#pwd_length').val()
        if(pwd_length > 20) {$('#pwd').text('Максимальная длинна пароля - 20 символов')}
        else {makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length)};
        return false;
    });


    $('#specs').change(function () {
        var pwd_length = $('#pwd_length').val()
        if(!checked) {
            if(pwd_length > 20) {$('#pwd').text('Максимальная длинна пароля - 20 символов')}
            else {makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length + '&specs=True')};
            checked = true;
        }
        else {
            makeAjaxRequest("retrieve_pwd/?pwd_length=" + pwd_length);
            checked = false;
            };
        return false;
    });


    function makeAjaxRequest(url)  {
        $.ajax({
            url: url,
            success: function (response) {
                response: $('#pwd').text(response.pwd)
                },
            else: function (response) {
                console.log(response.responseJSON.errors)
                }
        });
    };
});
import '../html/signin.html';
import '../less/signin.less';
import config from './public/config';
import $ from 'jQuery';

$(function(){
    $('#btn').click(function(){
       
        // 验证条件，请根据自身需求设置,这里只简单做了前后非空校验
        const queryUser = $.trim($('#user').val()) !== '' ? true : false;
        const queryPwd = $.trim($('#pwd').val()) !== '' ? true : false;
        const queryTel = $.trim($('#tel').val()) !== '' ? true : false;
        const queryEmail = $.trim($('#email').val()) !== '' ? true : false;

        if(queryUser && queryPwd && queryTel && queryEmail){
            const queryData = { // 用const 声明变量前，请自行安装相应 loader, 并在 webpack 中做相应配置
                user: $('#user').val(),
                pwd: $('#pwd').val(),
                tel: $('#tel').val(),
                email: $('#email').val()
            };
            $.ajax({
                url: "http://127.0.0.1:8081/signin",
                type: "post",
                data: queryData,
                dataType: "json",
            }).then(function(jsonData){
                if(jsonData.info === '注册成功'){
                    window.location.href = 'http://127.0.0.1:8080/html/signup.html'
                }else {
                    alert('注册失败')
                }
                console.log(jsonData)
            })
        } else {
            alert('格式有误');
        } 
    })
});
console.log('123456')

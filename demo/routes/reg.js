let express = require('express');
let router = express.Router({});
let util = require("./../util/util");

router.get('/', function(req, res, next) {
    res.render('register', { title: 'Express' });
});



router.post('/', function(req, res, next) {

    console.log(req.body);
    //2.账号是否注册
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    let userObj = {
        userName:userName,
        loginPwd:loginPwd
    }

    let user = util.isReg(userObj,util.users);

    if(user === null || user === undefined){//没注册过
        util.users.push(userObj);
        res.send("注册成功"+ "&nbsp" +"<a href='/login' >点击此处登录</a>");
    }else{//已经注册过
        res.send('用户名已经注册过');
    }


});



module.exports = router;

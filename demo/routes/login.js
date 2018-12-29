let express = require('express');
let router = express.Router({});
let util = require("./../util/util");
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {

    //1.获取用户输入的账号密码
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    let loginObj = {
        userName:userName,
        loginPwd:loginPwd
    }

    //2.判断密码是否正确
    let user = util.isReg(loginObj,util.users);

    if(user !== null && user !== undefined){

        if(loginObj.loginPwd === user.loginPwd){
            res.redirect("/chat");
            // res.send("登录成功");
        }else{
            res.send("密码错误");
        }

    }else{
        res.send("用户名不存在");
    }


});


module.exports = router;

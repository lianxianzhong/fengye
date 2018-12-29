exports.isReg = (userObj,users)=>{
    for(let i=0;i < users.length;i++){
        let user = users[i];
        if(user.userName === userObj.userName){
            return user;
        }
    }
};

exports.users = [];
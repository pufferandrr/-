function check() {
    if(!document.getElementById("email"))
    {return;}
    let emailValue=document.getElementById("email");
    let passwordValue=document.getElementById("password");
    let passwordValueAgain=document.getElementById("password_``````again");
    if(checkEmail(emailValue.value))
    {
    

    
        alert("合法的邮箱！");
    
    if(checkPassword(passwordValue.value))
    {
        alert("合法的密码！");
        if (checkPasswordAgain(passwordValue.value,passwordValueAgain.value)) {
            alert("再次输入密码正确");
        }
        else {
            alert("再次输入密码错误");      
        }
    }
    else
    {
            alert("密码非法，密码不能有重复的字符，数字要求在[2,8]之间，可以包含任意大小写字母，必须有三个大写字母，必须包含{ #,&,*,?} 四个特殊字符中的一个");
    }
}
   else
   {
       alert("非法邮箱");
   }
    
}
function checkEmail(emailValue) {
    let re=/^\w+@[0-9a-z]+\.[a-z]+$/i;
   if(re.test(emailValue))
    {
        return true;
    }
    else return false;
}
function checkPassword(passwordValue) {
    let re1=/^.{9,15}$/;
    let re2 =/(\w)[^\1]{0,}\1{1}/g;
    let re3 = /[0-1|9]/g;
    let re4 = /[^A-Z]*[A-Z][^A-Z]*[A-Z][^A-Z]*[A-Z]/;
    let re5=/[\#|\&|\*|\?]/;
    if(re1.test(passwordValue)&&!re2.test(passwordValue)&&!re3.test(passwordValue)&&re4.test(passwordValue))
    return true;
    else return false;
}
function checkPasswordAgain(value,valueAgain) {
    return value==valueAgain;  

}
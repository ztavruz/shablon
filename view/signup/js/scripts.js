window.onload = function(){

    let error = false;

    let emailHelp      = document.querySelector('#emailHelp');
    let loginHelp      = document.querySelector('#loginHelp');
    let passwordHelp   = document.querySelector('#passwordHelp');
    let repasswordHelp = document.querySelector('#repasswordHelp');
    let btn = document.querySelector('.btn');

    btn.onclick = function(){
        error = 0;
        emailHelp.value = null;
        loginHelp.value = null;
        passwordHelp.value = null;
        repasswordHelp.value = null;
        
        

        let email      = document.querySelector('#email');
        let login      = document.querySelector('#login');
        let password   = document.querySelector('#password');
        let repassword = document.querySelector('#repassword');
        let isEmail = "^[._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$";


        if(email.value == "" || email.value == null){
            emailHelp.classList.remove("disabled");
            error ++;
            emailHelp.innerHTML = "Email не указан!";
        }

        if(email.value.match(isEmail) == null){
            emailHelp.classList.remove("disabled");
            error ++;
            emailHelp.innerHTML = "Email указан в не верном формате!";
        }

        if(email.value.match(isEmail) != null){
            emailHelp.classList.remove("disabled");
            emailHelp.innerHTML = "";
        }


        if(login.value == "" || login.value == null){
            loginHelp.classList.remove("disabled");
            error ++;
            loginHelp.innerHTML = "Логин не указан!";
        }
        if(password.value == "" || password.value == null){
            passwordHelp.classList.remove("disabled");
            error ++;
            passwordHelp.innerHTML = "Пароль не указан!";
        }
        if(repassword.value == "" || repassword.value == null){
            repasswordHelp.classList.remove("disabled");
            error ++;
            repasswordHelp.innerHTML = "Не введен проверочный пароль!";
            password.value = null;
            repassword.value = null;
        }
        if(password.value !== repassword.value){
            repasswordHelp.classList.remove("disabled");
            error ++;
            repasswordHelp.innerHTML = "Проверочный пароль не совпал!";
            repassword.value = null;
        }
        if(password.value === repassword.value){
            repasswordHelp.classList.remove("disabled");
            repasswordHelp.value = null;
        }


        let user = {
            email : email.value,
            login : login.value,
            password : password.value,
        }
        user = JSON.stringify(user);

        let fd = new FormData();
        fd.append("user", user);

        if(error == 0 ){
            axios.post("api/user/signup", fd)
            .then(function(response){
            let data  = response.data;
            let host  = data.pageHost;
            let user  = data.user
            let token = data.token

            user  = JSON.stringify(user);
            token = JSON.stringify(token);
            
            // console.log(host);
            // console.log(user);
            // console.log(token);

            localStorage.setItem('user', user);
            localStorage.setItem('token', token);
            document.location.href = host + "user";
        });
        }
    }
}
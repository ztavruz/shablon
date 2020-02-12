window.onload = function()
{
    
    let btn = document.querySelector(".btn").onclick = function(){

        let message = document.querySelector("#helper");
        message.classList.add('disabled');
        
        let user = {
            login : document.querySelector('#login').value,
            password : document.querySelector('#password').value
        }
        user = JSON.stringify(user);

        let fd = new FormData();
        fd.append("user", user);

        axios.post("api/user/signin", fd)
        .then(function(response){
            let data  = response.data;
            let errors = data.errors;

            console.log(errors);
            if(errors == undefined){

                let host  = data.pageHost;
                let token = data.token;
                let user  = data.user
                user    = JSON.stringify(user);
                token   = JSON.stringify(token);
            
                localStorage.setItem('user', user);
                localStorage.setItem('token', token);

                document.location.href = host + "user";
            }
            else
            {
                message.classList.remove('disabled');
                message.innerHTML = errors;
            }
        });
    };

}


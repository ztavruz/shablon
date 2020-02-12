window.onload = function()
{
    let entrance = document.querySelector("#entrance").onclick = function(){

        let token = localStorage.getItem('token');

        let fd = new FormData();
        fd.append("token", token);
        
        axios.post("api/user/author", fd)
        .then(function(response){
            let data     = response.data;
            let validate = data.validate;
            let host     = data.pageHost;
            let errors    = data.errors;

            console.log(data);
            console.log(validate);
            console.log(host);
            console.log(errors);

            if(validate !== null ){
                document.location.href = host + "user";
            }
            else
            {
               
                let promise = new Promise(function(resolve, reject){
                    resolve(
                        localStorage.setItem("token", validate),
                        localStorage.setItem("user", validate),
                    );
                });
                promise.then(function(){
                    document.location.href = host + "signin";
                });
                
            }

        });
    }
}


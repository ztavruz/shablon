window.onload = function(){

    let error = false;
    let btn = document.querySelector('.btn');

    btn.onclick = function(){
        error = 0;
        // nameCategory.value = null;
        let nameCategory = document.querySelector('#nameCategory').value;

        if(nameCategory == "" || nameCategory == null){
            helpCategory.classList.remove("disabled");
            error ++;
            helpCategory.innerHTML = "Название не указано!";
        }


        let newCategory = {
            name : nameCategory
        }
        newCategory = JSON.stringify(newCategory);

        let fd = new FormData();
        fd.append("product_category", newCategory);

        if(error == 0){
            axios.post("api/CategoryProducts/add", fd)
                .then(function(response){
                    let data  = response.data;
                    console.log(data);
                    // window.location.reload();
                });
        }
        function rellload() {
            window.location.reload();
        }
        console.log(error);
        if(error != 0 ){
            setTimeout(rellload,1000);
        }
    }
}
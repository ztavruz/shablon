window.onload = function()
{
    document.querySelector("#send").onclick = function(e)
    {
        e.preventDefault();

        let fd = new FormData();
        fd.append("title", document.querySelector('#title').value,);
        fd.append( "description", document.querySelector('#description').value);
        fd.append( "price", document.querySelector('#price').value);
        fd.append( "img", document.querySelector('#img').files[0]);

        console.log(fd);

        axios.post(`/api/product/add`, fd, {
            headers: {
                "content-type" : false,
                 
            }
        })
        .then(res=>{
            
        });

    }
}
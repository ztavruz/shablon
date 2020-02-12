window.onload = function()
{
    let idProduct = localStorage.getItem('product-id');
    let fd = new this.FormData();
    fd.append('id', idProduct);

    console.log(fd);

    axios.post(`/api/repository/getOne`, fd, {
        headers: {
            "content-type" : false,
             
        }
    })
    .then(res=>{
        let data = res.data[0];
        let id = data.id;
        let name = data.name;
        let description = data.description;
        let src = data.img;
        let cost = data.cost;

        let card = document.querySelector('.card');

        let img = document.createElement('img');
        img.setAttribute("src", src);
        img.setAttribute("alt", 'image');
        img.classList.add("card-img-top");
        card.appendChild(img);

        let card_body = document.createElement('div');
        card_body.classList.add("card-body");

        let card_title = document.createElement('h5');
        card_title.classList.add("card-title");
        card_title.setAttribute("id", 'name');
        card_title.innerHTML = name;

        let card_text = document.createElement('p');
        card_text.classList.add("card-text");
        card_text.setAttribute("id", 'description');
        card_text.innerHTML = description;

        let coste = document.createElement('h3');
        coste.classList.add("card-title");
        coste.setAttribute("id", 'cost');
        coste.innerHTML = cost;



        let send = document.createElement('button');
        send.classList.add("btn");
        send.classList.add("btn-primary");
        send.setAttribute("id", 'send');
        send.setAttribute("type", 'submit');
        send.setAttribute("data-id", id);
        send.innerHTML = "Купить";

        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card_body.appendChild(coste);
        card_body.appendChild(send);
        card.appendChild(card_body);

    });

}
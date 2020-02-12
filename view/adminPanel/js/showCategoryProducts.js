let adress = '/api/CategoryProducts/getAll';

async function getResponse(adress) {
    let response = await fetch(adress);
    let content = await response.json();
    let data = content;

    console.log(data);
    return data;
}


async function createBlockCategory()
{
    let container = document.querySelector('.productsCategory_block');
    let wrapper = document.createElement('slot');
    wrapper.classList.add('productsCategory_block');

    let data = await getResponse(adress);
    console.log(data);
    let key;
    for (key in data)
    {
        let nameCategory = data[key].name;
        let idCategory   = data[key].id;

        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('category_card');

        let card_body = document.createElement('div');
        card_body.classList.add('card-body');

        let card_title = document.createElement('h5');
        card_title.classList.add('card-title');
        card_title.classList.add('card_title');
        card_title.innerHTML = nameCategory;

        let btn_group = document.createElement('div');
        btn_group.classList.add('btn-group');
        btn_group.classList.add('btn-group-lg');
        btn_group.setAttribute('role', 'group');
        btn_group.setAttribute('aria-label', '...');

        let button_refactor = document.createElement('button');
        button_refactor.setAttribute('type', 'button');
        button_refactor.setAttribute('data-id', idCategory );
        button_refactor.classList.add('btn');
        button_refactor.classList.add('btn-success');
        button_refactor.classList.add('btn_redactor');
        button_refactor.addEventListener('click', function(){

        });
        button_refactor.innerHTML = "Редактировать";


        let button_delete = document.createElement('button');
        button_delete.setAttribute('type', 'button');
        button_delete.setAttribute('data-id', idCategory );
        button_delete.classList.add('btn');
        button_delete.classList.add('btn-danger');
        button_delete.classList.add('btn_redactor');
        let id  = button_refactor.getAttribute('data-id');
        button_delete.addEventListener('click', function(){
            // console.log(id);

            deleteCategory = JSON.stringify(id);

            let fd = new FormData();
            fd.append("id", deleteCategory);

            axios.post("api/CategoryProducts/delete", fd)
                .then(function(response){
                    let data  = response.data;
                    console.log(data);
                    window.location.reload();
                });
        });
        button_delete.innerHTML = "Удалить";

        card.appendChild(card_body);
        card_body.appendChild(card_title);
        card_body.appendChild(btn_group);
        btn_group.appendChild(button_refactor);
        btn_group.appendChild(button_delete);

        wrapper.appendChild(card);
    }
    container.appendChild(wrapper);
}


createBlockCategory();
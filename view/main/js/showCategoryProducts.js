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
    let container = document.querySelector('.burger_menu__nav');
    let wrapper = document.createElement('slot');
    wrapper.classList.add('burger_menu__nav');

    let data = await getResponse(adress);
    console.log(data);
    let key;
    for (key in data)
    {
        let nameCategory = data[key].name;
        let idCategory   = data[key].id;
        // let page = data[key].page;

        let burger_menu__link = document.createElement('div');
        burger_menu__link.classList.add('burger_menu__link');
        burger_menu__link.setAttribute('href', '#');
        burger_menu__link.innerHTML = nameCategory;
        burger_menu__link.addEventListener('click', function(){
            // window.location.assign(page);
        });

        container.appendChild(burger_menu__link);
    }

}


createBlockCategory();
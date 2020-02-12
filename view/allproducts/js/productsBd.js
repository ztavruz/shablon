let adres = '/api/Repository/getAll';

async function getResponse(adres) {
    let response = await fetch(adres);
    let content = await response.json();
    let data = content;

    return data;
}


async function viewAllData(hereBlock) {
    let block = document.querySelector(hereBlock);
    let data = await getResponse(adres);

    let key;
    for (key in data) {
        block.innerHTML +=
            `
                <div class="item">
                  <div class="name">${data[key].name}/div>
                  <div class="img" style="background-image: url(${data[key].img})"></div>
                  <div class="price">${data[key].cost}</div>
                  <button class="button">Добавить в корзину</button>
                </div> 
                `
    }
}


viewAllData('.products');

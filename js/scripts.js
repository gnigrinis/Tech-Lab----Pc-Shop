//Effect Login menu
let account = document.querySelector("body > header > section.header__secundary > div");
account.addEventListener('click', () =>{
    let menu = document.querySelector("#menu");
    if (menu.className == "menu") {
        menu.className = "menuShow";
    }else if (menu.className == "menuShow"){
        menu.className = "menuHide";
    }else if (menu.className == "menuHide"){
        menu.className = "menuShow";
    }
});

//Effect underline
let underline1 = document.querySelector("body > header > section.header__principal > nav > ul > li:nth-child(1) > a");
let underline2 = document.querySelector("body > header > section.header__principal > nav > ul > li:nth-child(2) > a");
if(document.title == "Home"){
    underline1.className = "focus";
} else if (document.title == "Shop"){
    underline2.className = "focus";
}

//Glider Carrousel
window.addEventListener('load', function(){
    new Glider(document.getElementById('gliderMain'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#dots0',
        draggable: true,
        rewind: true,
        arrows: {
            prev: '#glider-prev0',
            next: '#glider-next0'
        }
    })
    new Glider(document.getElementById('gliderProducts1'), {
        slidesToScroll: 1,
        slidesToShow: 4,
        draggable: false,
        dots: '#dots1',
        arrows: {
            prev: '#glider-prev1',
            next: '#glider-next1'
        }
    });
    new Glider(document.getElementById('gliderProducts2'), {
        slidesToScroll: 1,
        slidesToShow: 4,
        draggable: false,
        dots: '#dots2',
        arrows: {
            prev: '#glider-prev2',
            next: '#glider-next2'
        }
    });
});  



//Adding products
for(let p = 0; p <= productsWeek.length; p++){
    //Adding products in Week Highlights from array to HTML
    let item1 = document.querySelector(`#insertProductsWeek${p}`);
    for(let i = 0; i < p; i++){
        item1.innerHTML = 
    `    <div class="glider__images">
            <img class="glider__product" src="${productsWeek[i].src}" alt="${productsWeek[i].alt}">
            <img class="glider__icon" id="${productsWeek[i].id2}" src="images/icons/checkIcon.png" alt="Add to the cart">
        </div>
        <h4>${productsWeek[i].name}</h4>
        <p>${productsWeek[i].description}</p>
        <div class="glider__tag">
            <p>${productsWeek[i].tag[0]}</p>
            <p>${productsWeek[i].tag[1]}</p>
            <tag>$${productsWeek[i].price}</tag>
        </div>`;
    }
    //Adding products in Personalized desktop from array to HTML
    let item2 = document.querySelector(`#insertProductsPersonalized${p}`);
    for(let i = 0; i < p; i++){
        item2.innerHTML = 
    `    <div class="glider__images">
            <img class="glider__product" src="${productsPersonalized[i].src}" alt="${productsPersonalized[i].alt}">
            <img class="glider__icon" id="${productsPersonalized[i].id2}" src="images/icons/checkIcon.png" alt="Add to the cart">
        </div>
        <h4>${productsPersonalized[i].name}</h4>
        <p>${productsPersonalized[i].description}</p>
        <div class="glider__tag">
            <p>${productsPersonalized[i].tag[0]}</p>
            <p>${productsPersonalized[i].tag[1]}</p>
            <tag>$${productsPersonalized[i].price}</tag>
        </div>`;
    }
}


//add to the cart
let addToCart = document.querySelector(`#${productsWeek[0].id2}`);
addToCart.addEventListener('click', function (){
    alert(`${productsWeek[0].alt} added to cart`);
});

let addToCart2 = document.querySelector(`#${productsWeek[1].id2}`);
addToCart2.addEventListener('click', function (){
    alert(`${productsWeek[1].alt} added to cart`);
});

let addToCart3 = document.querySelector(`#${productsWeek[2].id2}`);
addToCart3.addEventListener('click', function (){
    alert(`${productsWeek[2].alt} added to cart`);
});

let addToCart4 = document.querySelector(`#${productsWeek[3].id2}`);
addToCart4.addEventListener('click', function (){
    alert(`${productsWeek[3].alt} added to cart`);
});

let addToCart5 = document.querySelector(`#${productsWeek[4].id2}`);
addToCart5.addEventListener('click', function (){
    alert(`${productsWeek[4].alt} added to cart`);
});

let addToCart6 = document.querySelector(`#${productsPersonalized[0].id2}`);
addToCart6.addEventListener('click', function (){
    alert(`${productsPersonalized[0].alt} added to cart`);
});

let addToCart7 = document.querySelector(`#${productsPersonalized[1].id2}`);
addToCart7.addEventListener('click', function (){
    alert(`${productsPersonalized[1].alt} added to cart`);
});

let addToCart8 = document.querySelector(`#${productsPersonalized[2].id2}`);
addToCart8.addEventListener('click', function (){
    alert(`${productsPersonalized[2].alt} added to cart`);
});

let addToCart9 = document.querySelector(`#${productsPersonalized[3].id2}`);
addToCart9.addEventListener('click', function (){
    alert(`${productsPersonalized[3].alt} added to cart`);
});

let addToCart10 = document.querySelector(`#${productsPersonalized[4].id2}`);
addToCart10.addEventListener('click', function (){
    alert(`${productsPersonalized[4].alt} added to cart`);
});

//buttom to click from down to the top smoothly
let goUp = document.querySelector("#goUp");
goUp.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


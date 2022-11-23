import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurants from '../DATA.json';
const head = document.querySelector('header');
const buttonPhone = document.querySelector('#smartButton');
const menuNav = document.querySelector('.navigasi');
const mainElement = document.querySelector('main');
const heroArea = document.querySelector('.hero');
const restaurantTersedia = document.querySelector('#hasil');
console.log('Hello Coders! :)');

buttonPhone.addEventListener('click', event=>{
    menuNav.classList.toggle('open');
    event.stopPropagation();
});

head.addEventListener('click', event =>{
    menuNav.classList.remove('open');
    event.stopPropagation();
});

mainElement.addEventListener('click', event=>{
    menuNav.classList.remove('open');
    event.stopPropagation();
});

heroArea.addEventListener('click', event=>{
    menuNav.classList.remove('open');
    event.stopPropagation();
});

const dataResto = Object.entries(restaurants);
const tampilkanResto = Object.fromEntries(dataResto);
const renderDataResto = (restaurant) =>{
    restaurantTersedia.innerHTML=``;
    for (let array = 0; array < restaurant.restaurants.length; array++){
        restaurantTersedia.innerHTML+=`
        <div tabindex="0" id="${restaurant.restaurants[array].id}"
        class="katalog">
        <div class="detailResto">
        <p class="kota">Kota ${restaurant.restaurants[array].city}</p>
        <img class="fotoResto" src="${restaurant.restaurants[array].pictureId}"
        alt="Gambar Restaurant ${restaurant.restaurants[array].name}
        yang berlokasi di Kota ${restaurant.restaurants[array].city}"/>
        <p class="rating"><b>Rating</b> : ${restaurant.restaurants[array].rating}</p>
        <h3 class="namaRestaurant">${restaurant.restaurants[array].name}</h3>
        <p class="keterangan">${restaurant.restaurants[array].description.slice(0, 300)}</p>
        </div>
        </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    renderDataResto(tampilkanResto);
});

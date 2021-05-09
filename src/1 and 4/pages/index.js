import Section from '../components/Section.js';

const imgMercury = '/src/1 and 4/img/mercury.jpg';
const imgVenus = '/src/1 and 4//img/venus.jpg';
const imgEarth = '/src/1 and 4//img/earth.jpg';
const imgMars = '/src/1 and 4//img/mars.jpg';
const imgJupiter = '/src/1 and 4//img/jupiter.jpg';
const imgSaturn = '/src/1 and 4//img/saturn.jpg';
const imgUranus = '/src/1 and 4//img/uranus.jpg';
const imgNeptune = '/src/1 and 4//img/neptune.jpg';

const buttonClickMenu = document.querySelector(".header__button");
const menu = document.querySelector(".menu");
const checkboxs = document.querySelectorAll(".planets__checkbox");
const checkBoxAll = document.querySelector("#checkall");


const toggleMenu = () => {
    menu.classList.toggle("menu_active");
}

const imageItemList = new Section({
    renderer: (data) => {
        const element = createPlanet(data);
        imageItemList.setItem(element);
    }
}, ".images");

const checkedPlanet = (planet) => {
    let item
    switch (planet) {
        case "mercury":
            item = createPlanet("Меркурий", imgMercury, "mercury");
            imageItemList.addItem(item);
            break;
        case "venus":
            item = createPlanet("Венера", imgVenus, "venus");
            imageItemList.addItem(item);
            break;
        case "earth":
            item = createPlanet("Земля", imgEarth, "earth");
            imageItemList.addItem(item);
            break;
        case "mars":
            item = createPlanet("Марс", imgMars, "mars");
            imageItemList.addItem(item);
            break;
        case "jupiter":
            item = createPlanet("Юпитер", imgJupiter, "jupiter");
            imageItemList.addItem(item);
            break;
        case "saturn":
            item = createPlanet("Сатурн", imgSaturn, "saturn");
            imageItemList.addItem(item);
            break;
        case "uranus":
            item = createPlanet("Уран", imgUranus, "uranus");
            imageItemList.addItem(item);
            break;
        case "neptune":
            item = createPlanet("Нептун", imgNeptune, "neptune");
            imageItemList.addItem(item);
            break;
        default:
            console.log(`Планеты ${planet} не существует `);
    }
}


function createPlanet(planetName, imgPlanet, idCheckbox) {
    const planetTemplate = document.querySelector(".img-template").content.querySelector('.images__item');
    const planetItem = planetTemplate.cloneNode(true);
    const planetImage = planetItem.querySelector(".images__image");
    planetImage.src = imgPlanet;
    planetImage.alt = planetName;
    planetItem.id = idCheckbox;
    return planetItem;
}

function removePlanet(planet) {
    const imageItems = document.querySelectorAll(".images__item");
    imageItems.forEach((data) => {
        if (data.id === planet) {
            data.remove();
        }
    });
}

buttonClickMenu.addEventListener("click", () => {
    toggleMenu();
    buttonClickMenu.classList.add("header__button_rotate");
    setTimeout(() => {
        buttonClickMenu.classList.remove("header__button_rotate");
    }, 1000);
});

checkBoxAll.addEventListener("click", () => {
    if (checkBoxAll.checked) {
        checkboxs.forEach(chboxPlanet => {
            removePlanet(chboxPlanet.id);
            chboxPlanet.checked = true;
            checkedPlanet(chboxPlanet.id);
            
        });
    } else {
        checkboxs.forEach(chboxPlanet => {
            chboxPlanet.checked = false;
            removePlanet(chboxPlanet.id);
        });
    }
});

checkboxs.forEach(chboxPlanet => {
    chboxPlanet.addEventListener("click", () => {
        if (chboxPlanet.checked) {
            checkedPlanet(chboxPlanet.id);
        }
        else {
            removePlanet(chboxPlanet.id);
        }
    });
});

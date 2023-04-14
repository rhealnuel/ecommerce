const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem");

const product = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        img: "./img/img3.PNG"
        
    },
    {
        id: 2,
        title: "Blazer",
        price: 130,
        img:"./img/img7.Png"
        
    },
    {
        id: 3,
        title: "Crater",
        price: 140,
        img: "./img/img8.PNG"
        
    },
    {
        id: 4,
        title: "Hippie",
        price: 150,
        img: "./img/img3.PNG"
        
    }
];

let chosenProduct = product[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{

        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        chosenProduct = product[index]

        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.img
        

    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor="white"
            size.style.color="black"
        });
        size.style.backgroundColor="black"
        size.style.color="white"
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
});

close.addEventListener("click", ()=>{
    payment.style.display="none"
})
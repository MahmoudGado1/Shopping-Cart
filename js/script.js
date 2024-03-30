// to store data
// setItem('key',"value")
// do not use space in key
// localStorage.setItem("first Car","BMW")
// console.log(localStorage.getItem("first Car"))

// localStorage.setItem("student1","abdelrhman")
// localStorage.removeItem('student1')

// localStorage.setItem("student6","hoka")
// // clear() remove all content of storage
// localStorage.clear()
////////////////////////////////////////
let userInfo =document.querySelector("#user_info")
let userData =document.querySelector("#user")
let links =document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}
let logOutBtn=document.querySelector("#logout")
logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() => {
        window.location="login.html"
    }, 1500);
})
///////////////////////////////////////
let allProducts=document.querySelector(".products")
let products = [
    {
        id:1,
        title:"iphone-14-pro",
        color:"black",
        imageUrl:"images/iphone-14-pro.jpeg"
    },
    {
        id:2,
        title:"shaomi note 11",
        color:"black",
        imageUrl:"images/note11.jpeg"
    },
    {
        id:3,
        title:"samsaung a54",
        color:"black",
        imageUrl:"images/sam a54.jpeg"
    },
    {
        id:4,
        title:"oppo a 54",
        color:"black",
        imageUrl:"images/oppo a54.png"
    }
]
function drawItems(){
    let y=products.map((item)=>{
        return `
        <div class="product_item">
            <img class="product_item_img" src="${item.imageUrl}" alt="">
            <div class="product_item_desc">
                <h2>${item.title}</h2>
                <p>the new mopile from oppo company 6-2022</p>
                <span>color : ${item.color}</span>
            </div>
            <div class="product_item_action">
            <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
            <i class="far fa-heart fav"></i>
            </div>
        </div>
        `
    })
    allProducts.innerHTML=y
}
drawItems()
let cartProductDiv=document.querySelector(".carts_products div")
let badge =document.querySelector(".badge")

// let addedItem = []
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
if(addedItem){
    addedItem.map(item =>{
        cartProductDiv.innerHTML +=`<p><img src="${item.imageUrl}" alt="" width="30">${item.title}</p>`
    })
    badge.style.display="block"
    badge.innerHTML=addedItem.length

}
    if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) =>item.id===id)
            cartProductDiv.innerHTML+=`<p><img src="${choosenItem.imageUrl}" alt="" width="30">${choosenItem.title}</p>`
        
            addedItem=[...addedItem,choosenItem]
            localStorage.setItem("ProductsInCart",JSON.stringify(addedItem))


            let cartsProductsLenght=document.querySelectorAll(".carts_products div p")
            // console.log(cartsProductsLenght)
            badge.style.display="block"
            badge.innerHTML=cartsProductsLenght.length
        }
    }else{
        window.location="login.html"
    }


///////////////////
let shoppingCartIcon=document.querySelector(".shopping_cart")
let cartsProducts=document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click",openCart)
function openCart(){
    if (cartProductDiv.innerHTML!=""){
        if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
        }else{
            cartsProducts.style.display="block"
        }
    }
}
////////////////////



let ProductsInCart= localStorage.getItem("ProductsInCart")
let allProducts=document.querySelector(".products")

if(ProductsInCart){
    let item =JSON.parse(ProductsInCart)
    drawCartProducts(item)
}

function drawCartProducts(products){
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
            <button class="add_to_cart" onClick="removeFromCart(${item.id})">Remove From Cart</button>
            </div>
        </div>
        `
    })
    allProducts.innerHTML=y
}
function removeFromCart(id) {
    let ProductsInCart = JSON.parse(localStorage.getItem("ProductsInCart"))
    let productIndex = ProductsInCart.findIndex(item => item.id === id)

    if (productIndex !== -1) {
        ProductsInCart.splice(productIndex, 1)
        localStorage.setItem("ProductsInCart", JSON.stringify(ProductsInCart))
        drawCartProducts(ProductsInCart)
    }
}


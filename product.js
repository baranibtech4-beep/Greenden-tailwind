var sidenav = document.getElementById("side-nav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")
menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

    // Searching an product
// Searching a product
var product_container = document.getElementById("product-container")
var search = document.getElementById("search")

var productlist = product_container.querySelectorAll("div")

search.addEventListener("keyup", function(event){

    var enteredValue = event.target.value.toUpperCase()

    for (let count = 0; count < productlist.length; count++)
    {
        var productname = productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredValue) < 0)
        {
            productlist[count].style.display = "none"
        }
        else
        {
            productlist[count].style.display = "block"
        }
    }

})

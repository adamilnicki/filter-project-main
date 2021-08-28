//Selecting all filterBtns
let filterBtn = document.querySelectorAll(".filter-btn");
let storeItems = document.querySelectorAll(".store-item")

//Adding event listener to EACH index of array (every .filter-btn)
filterBtn.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if(button.dataset.filter=="all"){
        storeItems.forEach(function(item){
            item.style.display="block";
        });
    }
    else if(button.dataset.filter=="sweets"){
        storeItems.forEach(function(item){
            if(item.dataset.item=="sweets"){
                item.style.display="block"
            }else{
                item.style.display="none";
            }
        });
    }
    else if(button.dataset.filter=="cupcakes"){
        storeItems.forEach(function(item){
            if(item.dataset.item=="cupcakes"){
                item.style.display="block"
            }else{
                item.style.display="none";
            }
        });
    }
    else if(button.dataset.filter=="cakes"){
        storeItems.forEach(function(item){
            if(item.dataset.item=="cakes"){
                item.style.display="block"
            }else{
                item.style.display="none";
            }
        });
    }
    else if(button.dataset.filter=="doughnuts"){
        storeItems.forEach(function(item){
            if(item.dataset.item=="doughnuts"){
                item.style.display="block"
            }else{
                item.style.display="none";
            }
        })
    }
  })
});

//Search box
let searchBox = document.querySelector("#search-item");
searchBox.addEventListener("input",function(e){
    let searchFilter = e.target.value.toLowerCase().trim();
    storeItems.forEach(function(item){
        if(item.textContent.includes(searchFilter)){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })
})
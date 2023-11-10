let bagItemsObjects;
onLoad();
function onLoad()
{
    loadBagItmesObjects();
    displayBagItems();
}

function loadBagItmesObjects(){
 bagItemsObjects = bagItems.map((itemId)=>{
    for(let i = 0; i < items.length; i++)
        {
            if(itemId == items[i].id)
            {
                return items[i];
            }
        }
 });

 
}

function displayBagItems(){
    console.log(bagItemsObjects);
   let bagItemsContainerElement = document.querySelector('.bag-items-container');
    let htmlElement = '';
    bagItemsObjects.forEach((bagItem) => {
        htmlElement += generateItemHtml(bagItem);
    });

   bagItemsContainerElement.innerHTML = htmlElement;
}

function removeItem(bagItemId)
{
    bagItems = bagItems.filter(id=> id != bagItemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
    onLoad();
}

function generateItemHtml(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>
    
    <div class="remove-from-cart" onclick = "removeItem(${item.id})">X</div>
    </div>`;
}
let total = 0;
function handleClick(target) {
    
   const itemName = target.childNodes[3].childNodes[3].innerText;
   const li = document.createElement("li");
   li.innerText = itemName;

   const selectedContainer = document.getElementById('product-name');
   selectedContainer.appendChild(li);

   const price = target.childNodes[3].childNodes[5].childNodes[0].innerText;

   total = parseInt(total) + parseInt(price);
   document.getElementById('total-price').innerText = total;

   const priceValue = document.getElementById('total-price').innerText;
   const makePurchase = document.getElementById('purchase-btn');
   if(priceValue > 0 ) {
        makePurchase.removeAttribute('disabled');
   }
   else{
    makePurchase.setAttribute('disabled', true);
    }

    const applyButton = document.getElementById('apply');
    if(priceValue >= 200) {
        applyButton.removeAttribute('disabled');
    }else{
        applyButton.setAttribute('disabled', true);
        }

    
   
}


function applyCouponCode(target) {

    const couponCode = document.getElementById('input-coupon').value;
  
    

     if(couponCode === 'SELL200' ) {
        const mainPrice = document.getElementById('total-price').innerText;
     
        const off = parseInt(mainPrice) * 0.2 ;
        document.getElementById('discount').innerText = off.toFixed(2);
         
        const lastPriceTotal = total - off;
        document.getElementById('total').innerText = lastPriceTotal;
    }
    else{
        alert('Type coupon code properly!!');
    }
}

function goHome(target) {
    
 document.getElementById("total-price").innerText = "00.00";
  document.getElementById("discount").innerText = "00.00" ;
  document.getElementById("total").innerText ="00.00 ";
  document.getElementById("product-name").innerText ="Product Name";
  document.getElementById("form").reset() ;
  
  
      
    }
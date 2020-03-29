function totalPrice(myform){

    //Get selected data  
    var elt = document.getElementById("ProdPrice1");
    var price1 = elt.value;

    var elt = document.getElementById("ProdPrice2");
    var price2 = elt.value;

    var elt = document.getElementById("ProdPrice3");
    var price3 = elt.value;

    var elt = document.getElementById("ProdPrice4");
    var price4 = elt.value;     
    
      
    //convert data to integers
    price1 = parseInt(price1);
    price2 = parseInt(price2);
    price3 = parseInt(price3);
    price4 = parseInt(price4);   
      
    //calculate total value

    var total = 0;
    if(!isNaN(price1)){
        total += price1;
    }
    if(!isNaN(price2)){
        total += price2;
    }
    if(!isNaN(price3)){
        total += price3;
    }
    if(!isNaN(price4)){
        total += price4;
    }
      
    //print value to  PicExtPrice 
    document.getElementById("TotalPrice").value=total;
  
}

function generateOrderNo() 
{
    var nric = Math.floor((Math.random() * 100) + 1);
    document.getElementById("orderno").value = 12;
}

function generateBarCode() 
{
    var nric = $('#orderno').val();
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + 12345 + '&amp;size=50x50';
    $('#barcode').attr('src', url);
}

function productPrice(id1){

    var elt = document.getElementById(id1);
    var qty = elt.value;

    var stc = parseInt(elt.id[4]);

    

    // qty = parseInt(qty);
    // price = parseInt(price[8]+price[9]);

    switch(stc) {
        case 1:
            var elt = document.getElementById("price1");
            var price = elt.innerText;  
            qty = parseInt(qty);
            price = parseInt(price[8]+price[9]);
            var total = qty*price; 
            document.getElementById("ProdPrice1").value=total;
          break;
        case 2:
            var elt = document.getElementById("price2");
            var price = elt.innerText;
            qty = parseInt(qty);
            price = parseInt(price[8]);
            var total = qty*price; 
            document.getElementById("ProdPrice2").value=total;
          break;
        case 3:
            var elt = document.getElementById("price3");
            var price = elt.innerText;
            qty = parseInt(qty);
            price = parseInt(price[8]);
            var total = qty*price; 
            document.getElementById("ProdPrice3").value=total;
          break;
        case 4:
            var elt = document.getElementById("price4");
            var price = elt.innerText;
            qty = parseInt(qty);
            price = parseInt(price[8]);
            var total = qty*price; 
            document.getElementById("ProdPrice4").value=total;
          break;
        case 5:
            var elt = document.getElementById("price5");
            var price = elt.innerText;
            qty = parseInt(qty);
            price = parseInt(price[8]+price[9]);
            var total = qty*price; 
            document.getElementById("ProdPrice5").value=total;
          break;
        default:
          // code block
      }
      
      totalPrice();
    
}
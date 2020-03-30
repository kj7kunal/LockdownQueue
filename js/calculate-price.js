var qtyitem1 = 0;
var qtyitem2 = 0;
var qtyitem3 = 0;
var qtyitem4 = 0;
var tp = 0;
var deliveryslot = -1;


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
    tp = total;
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

function populateConfirmationMsg(){

  // document.getElementById("confirmMsg").value="Please come to your selected store at 6pm 31st March 2020. The QR code will be valid for only 10 minutes.";
  console.log("populateConfirmationMsg");
  // document.getElementById("confirmMsg").value=deliveryslot;
  switch(deliveryslot){
    case 0:
      document.getElementById("confirmMsg").value="Please come to your selected store at 6pm 31st March 2020. The QR code will be valid for only 10 minutes.";
      break;
    case 1:
      document.getElementById("confirmMsg").value="Your order will be delivered to you by 12pm on 31st March";
      break;
    case 2:
      document.getElementById("confirmMsg").value="Your order will be delivered to you by 4pm on 31st March";
      break;
    case 3:
      document.getElementById("confirmMsg").value="Your order will be delivered to you by 8pm on 31st March";
      break;
    case 4:
      document.getElementById("confirmMsg").value="Your order will be delivered to you by 11pm on 31st March";
      break;
    default:
}
}

function showDeliveryOption(id){

  console.log("showDeliveryOption");

  var elt = document.getElementById(id);
  var memory = elt.options[elt.selectedIndex].value;
  memory = parseInt(memory);
  deliveryslot = memory;

  switch(memory){
      case 0:
        document.getElementById("delopt").value="You selected Self Pickup. Please proceed to payment";
        break;
      case 1:
        document.getElementById("delopt").value="You selected 10am-12pm slot. Please proceed to payment";
        break;
      case 2:
        document.getElementById("delopt").value="You selected 2pm-4pm slot. Please proceed to payment";
        break;
      case 3:
        document.getElementById("delopt").value="You selected 6pm-8pm slot. Please proceed to payment";
        break;
      case 4:
        document.getElementById("delopt").value="You selected after 10pm slot. Please proceed to payment";
        break;
      default:
  }

}

function showDialogbox(id){
  
  var dialog = document.getElementById('myFirstDialog');

  var elt = document.getElementById(id);

  var stc = parseInt(elt.id[4]);

  

  // qty = parseInt(qty);
  // price = parseInt(price[8]+price[9]);

  switch(stc) {
      case 1:
        console.log("got call 1")
        if(qtyitem1 == 2){
          dialog.show();
        }
    
        document.getElementById('hide').onclick = function() {    
            dialog.close();    
        };
        break;
      case 2:
        console.log("got call 2")
        if(qtyitem2 == 2){
          dialog.show();
        }
    
        document.getElementById('hide').onclick = function() {    
            dialog.close();    
        };
        break;
      case 3:
        console.log("got call 3")
        if(qtyitem3 == 2){
          dialog.show();
        }
    
        document.getElementById('hide').onclick = function() {    
            dialog.close();    
        };
        break;
      case 4:
        console.log("got call 4")
        if(qtyitem4 == 2){
          dialog.show();
        }
    
        document.getElementById('hide').onclick = function() {    
            dialog.close();    
        };
        break;
      default:
        // code block
    }
}

function populateOrderSum(){
  console.log("got call")
  if(qtyitem1>0){
    document.getElementById("item1").innerText="Rice 1Kg";    
    document.getElementById("item1price").innerText="$10";
    document.getElementById("item1qty").innerText=qtyitem1;
    document.getElementById("item1tp").innerText=qtyitem1*10;
  }
  if(qtyitem2>0){
    document.getElementById("item2").innerText="Milk 1l";    
    document.getElementById("item2price").innerText="$2";
    document.getElementById("item2qty").innerText=qtyitem2;
    document.getElementById("item2tp").innerText=qtyitem2*2;
  }
  if(qtyitem3>0){
    document.getElementById("item3").innerText="Brown Bread";    
    document.getElementById("item3price").innerText="$2";
    document.getElementById("item3qty").innerText=qtyitem3;
    document.getElementById("item3tp").innerText=qtyitem3*2;
  }
  if(qtyitem4>0){
    document.getElementById("item4").innerText="Eggs 12pcs";    
    document.getElementById("item4price").innerText="$5";
    document.getElementById("item4qty").innerText=qtyitem4;
    document.getElementById("item4tp").innerText=qtyitem4*5;
  }

  document.getElementById("subtotal").innerText="$"+tp;
  var sp = Math.floor(tp/10);
  document.getElementById("shipping").innerText="$"+sp;
  
  tp = tp + sp;
  document.getElementById("finaltotal").innerText="$"+tp;
  


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
            qtyitem1 = qty;
            price = parseInt(price[8]+price[9]);
            var total = qty*price; 
            document.getElementById("ProdPrice1").value=total;
          break;
        case 2:
            var elt = document.getElementById("price2");
            var price = elt.innerText;
            qty = parseInt(qty);
            qtyitem2 = qty;
            price = parseInt(price[8]);
            var total = qty*price; 
            document.getElementById("ProdPrice2").value=total;
          break;
        case 3:
            var elt = document.getElementById("price3");
            var price = elt.innerText;
            qty = parseInt(qty);
            qtyitem3 = qty;
            price = parseInt(price[8]);
            var total = qty*price; 
            document.getElementById("ProdPrice3").value=total;
          break;
        case 4:
            var elt = document.getElementById("price4");
            var price = elt.innerText;
            qty = parseInt(qty);
            qtyitem4 = qty;
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
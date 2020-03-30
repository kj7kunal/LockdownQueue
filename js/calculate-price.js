var qtyitem1 = 0;
var qtyitem2 = 0;
var qtyitem3 = 0;
var qtyitem4 = 0;
var tp = 0;
var slot = -1;
var delivery = 1;

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
  
  if(delivery){
    switch(slot){
      case 0:
        document.getElementById("confirmMsg").value="Your order will be delivered to you between 10am and 2pm on 31st March";
        break;
      case 1:
        document.getElementById("confirmMsg").value="Your order will be delivered to you between 2pm and 6pm on 31st March";
        break;
      case 2:
        document.getElementById("confirmMsg").value="Your order will be delivered to you between 6pm and 10pm on 31st March";
        break;
      default:
    }
  }else{

    switch(slot){
      case 0:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 08:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 1:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 08:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 2:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 08:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 3:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 08:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 4:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 09:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 5:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 09:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 6:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 09:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 7:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 09:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 8:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 10:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 9:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 10:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 10:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 10:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 11:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 10:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 12:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 11:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 13:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 11:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 14:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 11:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 15:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 11:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 16:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 12:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 17:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 12:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 18:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 12:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 19:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 12:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 20:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 13:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 21:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 13:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 22:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 13:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 23:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 13:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 24:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 14:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 25:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 14:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 26:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 14:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 27:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 14:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 28:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 15:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 29:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 15:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 30:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 15:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 31:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 15:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 32:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 16:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 33:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 16:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 34:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 16:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 35:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 16:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 36:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 17:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 37:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 17:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 38:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 17:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 39:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 17:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 40:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 18:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 41:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 18:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 42:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 18:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 43:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 18:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 44:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 19:00 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 45:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 19:15 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 46:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 19:30 for pickup. The QR code will be valid for only 15 minutes";
      break;
      case 47:
      document.getElementById("confirmMsg").value="Please come to your selected store on 31st March 2020, at 19:45 for pickup. The QR code will be valid for only 15 minutes";
      break;
      default:
    }

  }
  
}

function showDeliveryOption(id){

  console.log("showDeliveryOption");

  var elt = document.getElementById(id);
  var memory = elt.options[elt.selectedIndex].value;
  memory = parseInt(memory);
  slot = memory;
  delivery = 1;

  switch(memory){
      case 0:
        document.getElementById("delopt").value="You selected Self Pickup. Please proceed to payment";
        break;
      case 1:
        document.getElementById("delopt").value="You selected 10am-2pm slot. Please proceed to payment";
        break;
      case 2:
        document.getElementById("delopt").value="You selected 2pm-6pm slot. Please proceed to payment";
        break;
      case 3:
        document.getElementById("delopt").value="You selected 6pm-10pm slot. Please proceed to payment";
        break;
      default:
  }

}

function showPickUpOption(id){

  console.log("showDeliveryOption");

  var elt = document.getElementById(id);
  var memory = elt.options[elt.selectedIndex].value;
  memory = parseInt(memory);
  slot = memory;

  delivery = 0;


  switch(memory){
    case 0:
      document.getElementById("delopt").value="You selected 08:00 to 08:15 for pickup. Please proceed to payment";
      break;
      case 1:
      document.getElementById("delopt").value="You selected 08:15 to 08:30 for pickup. Please proceed to payment";
      break;
      case 2:
      document.getElementById("delopt").value="You selected 08:30 to 08:45 for pickup. Please proceed to payment";
      break;
      case 3:
      document.getElementById("delopt").value="You selected 08:45 to 09:00 for pickup. Please proceed to payment";
      break;
      case 4:
      document.getElementById("delopt").value="You selected 09:00 to 09:15 for pickup. Please proceed to payment";
      break;
      case 5:
      document.getElementById("delopt").value="You selected 09:15 to 09:30 for pickup. Please proceed to payment";
      break;
      case 6:
      document.getElementById("delopt").value="You selected 09:30 to 09:45 for pickup. Please proceed to payment";
      break;
      case 7:
      document.getElementById("delopt").value="You selected 09:45 to 10:00 for pickup. Please proceed to payment";
      break;
      case 8:
      document.getElementById("delopt").value="You selected 10:00 to 10:15 for pickup. Please proceed to payment";
      break;
      case 9:
      document.getElementById("delopt").value="You selected 10:15 to 10:30 for pickup. Please proceed to payment";
      break;
      case 10:
      document.getElementById("delopt").value="You selected 10:30 to 10:45 for pickup. Please proceed to payment";
      break;
      case 11:
      document.getElementById("delopt").value="You selected 10:45 to 11:00 for pickup. Please proceed to payment";
      break;
      case 12:
      document.getElementById("delopt").value="You selected 11:00 to 11:15 for pickup. Please proceed to payment";
      break;
      case 13:
      document.getElementById("delopt").value="You selected 11:15 to 11:30 for pickup. Please proceed to payment";
      break;
      case 14:
      document.getElementById("delopt").value="You selected 11:30 to 11:45 for pickup. Please proceed to payment";
      break;
      case 15:
      document.getElementById("delopt").value="You selected 11:45 to 12:00 for pickup. Please proceed to payment";
      break;
      case 16:
      document.getElementById("delopt").value="You selected 12:00 to 12:15 for pickup. Please proceed to payment";
      break;
      case 17:
      document.getElementById("delopt").value="You selected 12:15 to 12:30 for pickup. Please proceed to payment";
      break;
      case 18:
      document.getElementById("delopt").value="You selected 12:30 to 12:45 for pickup. Please proceed to payment";
      break;
      case 19:
      document.getElementById("delopt").value="You selected 12:45 to 13:00 for pickup. Please proceed to payment";
      break;
      case 20:
      document.getElementById("delopt").value="You selected 13:00 to 13:15 for pickup. Please proceed to payment";
      break;
      case 21:
      document.getElementById("delopt").value="You selected 13:15 to 13:30 for pickup. Please proceed to payment";
      break;
      case 22:
      document.getElementById("delopt").value="You selected 13:30 to 13:45 for pickup. Please proceed to payment";
      break;
      case 23:
      document.getElementById("delopt").value="You selected 13:45 to 14:00 for pickup. Please proceed to payment";
      break;
      case 24:
      document.getElementById("delopt").value="You selected 14:00 to 14:15 for pickup. Please proceed to payment";
      break;
      case 25:
      document.getElementById("delopt").value="You selected 14:15 to 14:30 for pickup. Please proceed to payment";
      break;
      case 26:
      document.getElementById("delopt").value="You selected 14:30 to 14:45 for pickup. Please proceed to payment";
      break;
      case 27:
      document.getElementById("delopt").value="You selected 14:45 to 15:00 for pickup. Please proceed to payment";
      break;
      case 28:
      document.getElementById("delopt").value="You selected 15:00 to 15:15 for pickup. Please proceed to payment";
      break;
      case 29:
      document.getElementById("delopt").value="You selected 15:15 to 15:30 for pickup. Please proceed to payment";
      break;
      case 30:
      document.getElementById("delopt").value="You selected 15:30 to 15:45 for pickup. Please proceed to payment";
      break;
      case 31:
      document.getElementById("delopt").value="You selected 15:45 to 16:00 for pickup. Please proceed to payment";
      break;
      case 32:
      document.getElementById("delopt").value="You selected 16:00 to 16:15 for pickup. Please proceed to payment";
      break;
      case 33:
      document.getElementById("delopt").value="You selected 16:15 to 16:30 for pickup. Please proceed to payment";
      break;
      case 34:
      document.getElementById("delopt").value="You selected 16:30 to 16:45 for pickup. Please proceed to payment";
      break;
      case 35:
      document.getElementById("delopt").value="You selected 16:45 to 17:00 for pickup. Please proceed to payment";
      break;
      case 36:
      document.getElementById("delopt").value="You selected 17:00 to 17:15 for pickup. Please proceed to payment";
      break;
      case 37:
      document.getElementById("delopt").value="You selected 17:15 to 17:30 for pickup. Please proceed to payment";
      break;
      case 38:
      document.getElementById("delopt").value="You selected 17:30 to 17:45 for pickup. Please proceed to payment";
      break;
      case 39:
      document.getElementById("delopt").value="You selected 17:45 to 18:00 for pickup. Please proceed to payment";
      break;
      case 40:
      document.getElementById("delopt").value="You selected 18:00 to 18:15 for pickup. Please proceed to payment";
      break;
      case 41:
      document.getElementById("delopt").value="You selected 18:15 to 18:30 for pickup. Please proceed to payment";
      break;
      case 42:
      document.getElementById("delopt").value="You selected 18:30 to 18:45 for pickup. Please proceed to payment";
      break;
      case 43:
      document.getElementById("delopt").value="You selected 18:45 to 19:00 for pickup. Please proceed to payment";
      break;
      case 44:
      document.getElementById("delopt").value="You selected 19:00 to 19:15 for pickup. Please proceed to payment";
      break;
      case 45:
      document.getElementById("delopt").value="You selected 19:15 to 19:30 for pickup. Please proceed to payment";
      break;
      case 46:
      document.getElementById("delopt").value="You selected 19:30 to 19:45 for pickup. Please proceed to payment";
      break;
      case 47:
      document.getElementById("delopt").value="You selected 19:45 to 20:00 for pickup. Please proceed to payment";
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
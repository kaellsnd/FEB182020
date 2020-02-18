/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    let sourceName = document.getElementById("shippingName");
    let sourceZip = document.getElementById("shippingZip");

    let billingName = document.getElementById("billingName");
    let billingZip = document.getElementById("billingZip");

    let cBox = document.getElementById("same");
    if(cBox.checked){
        billingName.value = sourceName.value;
        billingZip.value = sourceZip.value;
    }else{
        billingName.value = "";
        billingZip.value = "";
    }





}
function compareEntries(){
    let sourceName = document.getElementById("shippingName").value;
    let sourceZip = document.getElementById("shippingZip").value;

    let billingName = document.getElementById("billingName").value;
    let billingZip = document.getElementById("billingZip").value;

    if(((sourceName === billingName) && (sourceZip === billingZip))){
        alert("Entries were sent to the server~");
    }else{
        alert("Entries doesn't match~")
    }
}
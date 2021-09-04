//generate pin
function generatePin() {
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if (pinString.length==4) {
    return pin;
    }else{
        console.log('Generated pin is less than 4 digit and call again',pin)
        return generatePin;
    }
}
//displaying generated pin
function getPin() {
    let pin=generatePin();
 if (isNaN(pin)) {
     pin='';
 }else{
    document.getElementById('display-pin').value=pin;
 }
    
}
//displaying generated pin
document.getElementById('key-pad').addEventListener('click',function(event){
    const number=event.target.innerText;
    //displaying number 
    const inputNumber=document.getElementById('typed-number');
    const previousNumber=inputNumber.value;
   const newNumber=previousNumber+number;
    if (isNaN(number)) {
        if(number=='C'){
            inputNumber.value='';
        }
    }
    else{
    inputNumber.value=newNumber;
    }

})

//matching pin with generated pin
function verifyPin() {
    const generatedPin=document.getElementById('display-pin').value;
    const typedPin=document.getElementById('typed-number').value;
    const notifySuccess=document.getElementById('notifySuccess');
    const notifyFiled=document.getElementById('notifyFailed');
    const actionLeft=document.getElementById('actionLeft');
    if (generatedPin==typedPin) {
        notifySuccess.style.display='block';
        notifyFiled.style.display='none';
        //clear generated input field by function
        doClear('display-pin',true)
        //clear generated input field
        // document.getElementById('display-pin').value='';
        // // clearing typed pin
        // document.getElementById('typed-number').value='';
    }
    else {
        notifyFiled.style.display='block';
        notifySuccess.style.display='none';
        actionLeft.style.display='block';
        actionLeft.innerText='Be careful! only 1 more times left';
        //clear typed input field by function
        doClear('typed-number',false)
        //clearing typed pin
        // document.getElementById('typed-number').value='';
    }
}
//clearing generate and type field
function doClear(inputId,isClear){
    if (isClear==true) {
        //clear generated input field
    document.getElementById(inputId).value=''; 
    // clearing typed pin
    document.getElementById('typed-number').value='';
    }else{
        // clearing typed pin
        document.getElementById('typed-number').value=''; 
    }

}
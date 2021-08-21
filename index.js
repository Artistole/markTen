const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const cashGivenC = document.querySelector(".cashGivenInput")
const nextBtn = document.querySelector("#nxtBtn");
const checkButton = document.querySelector("#chceck-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

nxtBtn.addEventListener('click', ()=>{
    hideMessage();
    if(Number(billAmount.value)>0){

        nxtBtn.style.display = "none";
        cashGivenC.style.display = "block";
    }
    else{
        showMessage("Enter valid bill amount");
    }
} )

checkButton.addEventListener("click", function validateBillAndCashAmount() 
{
    clearNoOfNotes()
    message.style.display = "none";
    if(Number(billAmount.value) > 0 && Number(cashGiven.value) > 0)
    {
       if(Number(cashGiven.value) >= Number(billAmount.value))
       {
           const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
           calculateChange(amountToBeReturned);
       }
       else
       {
        showMessage("The cash given should atleast be equal to the bill amount");
       }
    }
    else
    {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned)
{
   for(let i = 0; i < availableNotes.length; i++)
   {
       const Notes = Math.trunc(amountToBeReturned/ availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
           noOfNotes[i].innerText = Notes;
   }
}

function hideMessage(){
    message.style.display = "none"
}

function showMessage(msg)
{
    message.style.display = "block";
    message.innerText = msg;
}

function clearNoOfNotes(){
    for(let notes of noOfNotes){
        notes.innerText = "";
    }
}




//1:06:19
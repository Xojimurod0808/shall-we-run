const elForm = document.querySelector("#form")
const elInput = document.querySelector("#input")
const elCheckbox1 = document.querySelector("#chec1")
const elCheckbox2 = document.querySelector("#chec2")


elForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    let elInputValue = elInput.value -0; 
    
    if(!isNaN(elInputValue)){
        
        if(elCheckbox1.checked == true && elCheckbox2.checked == true && elInputValue >= 5 && elInputValue <=30){
            yes.style.color = "green";
            elInput.style.border = "2px solid green";
            no.style.color = "black";
        }else if(elCheckbox1.checked == true && elCheckbox2.checked == false){
            elInput.style.border = "2px solid red";
            no.style.color = "red"; 
            yes.style.color = "black";
        }else if(elInputValue >= 5 && elInputValue <=30){
            yes.style.color = "green";
            elInput.style.border = "2px solid green";
            no.style.color = "black";
        }else{
            no.style.color = "red";
        }
    }else{
        elInput.style.border = "2px solid red";
        no.style.color = "black";
        alert("Raqam kiriting")
    }
    
    
    elInputValue = null;
})



//
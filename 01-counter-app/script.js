const display = document.querySelector(".count-display");
const counterApp = document.querySelector(".counter-app");
const stepField = document.getElementById("step-field")
let count = 0;
let step = 1;

const changeStep = newStep => step = newStep;

counterApp.addEventListener('click',(e)=>{
    if (e.target.classList.contains("decrement")) {
        if(count>0){
            count-=step;
            display.textContent = `${count}`
        };
        
    };
    if (e.target.classList.contains("increment")) {
        count+=step;
        // console.log(count);
        
        display.textContent = `${count}`
    };
    if(e.target.classList.contains("reset")){
        count = 0;
        changeStep(1)
        stepField.value = ""
        display.textContent = `${count}`
    };
})

stepField.addEventListener("change",()=>{
    changeStep(parseInt(stepField.value) || 1)
    // console.log(parseInt(stepField.value))
});





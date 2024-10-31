const display =document.querySelector(".show");
const buttons =document.querySelectorAll("button");
console.log(display,buttons);
let operators = ["%", "=", "-", "+", "*", "/"];
let output ="";

const calculation =(value)=>{
    console.log(value)
   if(value !== "" && value === "="){
        try {
            output =eval(output);
            
        } catch (error) {
            output ="ERROR";
        }
   }else if(value === "DEL"){
    output =output.toString().slice(0,-1);
   }else if(value === "AC"){
        output="";
   }
   
   else {
    if (operators.includes(value) && operators.includes(output.slice(-1))) {
        return; // Bỏ qua nếu hai toán tử liền nhau
    }
    output+=value;
    }
    display.value =output;
}
buttons.forEach((item) =>{
    item.addEventListener("click", (e)=>calculation(e.target.dataset.value));
})




class Calcus{
    constructor(){
         this.__ = (query = "", all = false) => {
            return all ? document.querySelectorAll(query) : document.querySelector(query);
          };
          this.dasplayValue = "0";
          this.firstNumber = null;
          this.secondNumber = null;
          this.operator = false;

    }
 screenUpdate(){
     const display = __(".result")
     display.value = Calcus.dasplayValue
 }

 addition(){
     const firstInput = this.__(".first-input").value
     const secondInput = this.__(".second-input").value
     const sumOfAddition = firstInput + secondInput;

     if(!this.firstNumber === "" && !this.secondNumber === ""){
            return this.screenUpdate(sumOfAddition)
     }
 }

}


const simple = new Calcus
simple.addition()
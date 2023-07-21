
class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
       
    }

    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation=undefined
    }
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    choseoperation(operation){
        if(this.currentOperand==='') return
        if(this.previousOperand !==''){
            this.compute
        }
        this.operation=operation
        this.previousOperand=this.currentOperand
        this.currentOperand=''
    }
    compute(){
        let computation
        const prev=parseFloat(this.previousOperand)
        const curr=parseFloat(this.currentOperand)
        // NaN (not a) is return by parsefloat when there is no number in given string which we want to convert to numbers 
        if(isNaN(prev)||isNaN(curr)) return
    switch (this.operation) {
    case '+':
        computation=prev+curr
        break;
    case '-':
        computation=prev-curr
        break;
    case '÷':
        computation=prev/curr
        break;
    case '*':
        computation=prev*curr
        break;
    default:
        break;
    }
    this.currentOperand=computation
    this.operation=undefined 
    this.previousOperand=''
    }
    getdisplaynumber(number){
        const stringnumber=number.toString()
        const integerdigits=parseFloat(stringnumber.split('.')[0])
        const decimaldigits=stringnumber.split('.')[1]
        let integerdisplay

        if(isNaN(integerdigits)){
            integerdisplay=''

        }
        else{
            integerdisplay=integerdigits.toLocaleString('en',{
                maximumFractionDigits:3
            })
        }
        if(decimaldigits!=null){
            return `${integerdisplay}.${decimaldigits}`
        }
        else{
            return integerdisplay
        }

    }
    updatedisplay(){
       this.currentOperandTextElement.innerText=this.getdisplaynumber(this.currentOperand)
       if(this.operation!=null){
       this.previousOperandTextElement.innerText=`${this.getdisplaynumber(this.previousOperand)} ${this.operation}`
       }
       else{
        this.previousOperandTextElement.innerText=''
       }
    }

}


const numberbuttons=document.querySelectorAll('[data-number]')
const operationbuttons=document.querySelectorAll('[data-operation]')
const equalbuttons=document.querySelector('[data-equals]')
const deletebuttons=document.querySelector('[data-delete]')
const allclearbuttons=document.querySelector('[data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement =document.querySelector('[data-current-operand]')

   const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

  numberbuttons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendNumber (button.innerText)
        calculator.updatedisplay()
    })
  })
  operationbuttons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.choseoperation(button.innerText)
        calculator.updatedisplay()
    })
  })

  equalbuttons.addEventListener('click',button =>{
    calculator.compute()
    calculator.updatedisplay()
  })
  deletebuttons.addEventListener('click',button =>{
    calculator.delete()
    calculator.updatedisplay()
  })
  allclearbuttons.addEventListener('click',button =>{
    calculator.clear()
    calculator.updatedisplay()
  })
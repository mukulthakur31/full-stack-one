
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
    appendNumber(number){
       this.currentOperand=number
    }
    choseoperation(operation){

    }
    compute(){

    }
    updatedisplay(){
       this.currentOperandTextElement.innerText=this.currentOperand
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
        calculator.appendelement(button.innerText)
        calculator.updatedisplay()
    })
  })






class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      thi  s.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
      }
      updateDisplay() {
        this.currentOperandTextElement.innerText =this.currentOperand
      }
    }
      const numberButtons = document.querySelectorAll('[data-numbers]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
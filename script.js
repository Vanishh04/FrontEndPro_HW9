document.addEventListener('DOMContentLoaded', onReady);

function onReady(){
    function calculator(){
        const mathOperation = prompt('Введіть будь ласка одну з чотирьох основних операцій математики: (add, sub, mult, div): ');
        const mathNumber1 = +prompt('Введіть перше число: ');
        const mathNumber2 = +prompt('Введіть друге число: ');
        let result = null;

        if(mathOperation === 'add'){
            result = mathNumber1 + mathNumber2;
            alert(`${mathNumber1} + ${mathNumber2} = ${result}`);
        }
        else if(mathOperation === 'sub'){
            result = mathNumber1 - mathNumber2;
            alert(`${mathNumber1} - ${mathNumber2} = ${result}`);
        }
        else if(mathOperation === 'mult'){
            result = mathNumber1 * mathNumber2;
            alert(`${mathNumber1} * ${mathNumber2} = ${result}`);
        }
        else if(mathOperation === 'div'){
            if(mathNumber2 !== 0){
                result = mathNumber1 / mathNumber2;
                alert(`${mathNumber1} / ${mathNumber2} = ${result}`);
            }
            else{
                alert('На 0 не можна ділити :)');
            }
            
        }
        else{
            alert('Введено не корректно команду математичної дії');
        }
    }
    calculator();
}
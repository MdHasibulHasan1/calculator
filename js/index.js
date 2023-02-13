/* const buttons = document.getElementsByClassName('btn');
for (const btn of buttons) {
    btn.addEventListener('click', function(e){
        console.log(e.target.value);
        const result =document.getElementById('screen');
        result.value = e.target.value;
    })
} */

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('.btn');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.value;
        console.log(buttonText);
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C' || buttonText == 'DEL') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

 
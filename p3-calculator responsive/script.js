let screen = document.querySelector('#screen');
let isEqualTo = document.querySelector('#is-equal-to');
let buttons = document.querySelectorAll('button');
let clrScreen = document.querySelector('#clr-screen')
let into = document.querySelector('#into');

if (screen.value == '')
    screen.value = 0;

clrScreen.addEventListener('click', () => {
    screen.value = 0;
})

for (const i of buttons) {
    i.addEventListener('click', () => {





        if (screen.value == 0 && screen.value!='C') {
            var input = screen.value = i.innerText;

        }

        else { var input = screen.value += i.innerText; }



        console.clear();

        isEqualTo.addEventListener('click', () => {



            var result = eval(input);
            screen.value = result;
            console.clear();
        });



        console.clear();
    });
    console.clear();
}


clrScreen.addEventListener('click', () => {
    screen.value = 0;
})
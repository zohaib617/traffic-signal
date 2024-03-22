const textInput = document.getElementById('textInput') as HTMLInputElement;
const btn1 = document.getElementById('btn1') as HTMLButtonElement;
const btn2 = document.getElementById('btn2') as HTMLButtonElement;
const btn3 = document.getElementById('btn3') as HTMLButtonElement;
let startButton= document.getElementById('startButton') as HTMLButtonElement;

let count = 1;

    
  function startCount() {
    if (!textInput || !startButton) return;
    count =1;
  
    const interval = setInterval(() => {
      textInput.value = count.toString();
      count++;
      if (count > 10) {
        clearInterval(interval);
        startButton.disabled = false;
      } else if (count === 4) {
        btn1.style.backgroundColor = 'red';
        btn2.style.backgroundColor = 'black';
        btn3.style.backgroundColor = 'black';
      } else if (count === 7) {
        btn1.style.backgroundColor = 'black';
        btn2.style.backgroundColor = 'green';
        btn3.style.backgroundColor = 'black';
      } else if (count=== 10) {
        btn1.style.backgroundColor = 'black';
        btn2.style.backgroundColor = 'black';
        btn3.style.backgroundColor = 'yellow';
      } else if (count === 0) {
        btn1.style.backgroundColor = 'black';
        btn2.style.backgroundColor = 'black';
        btn3.style.backgroundColor = 'black';
      } else {
        btn1.style.backgroundColor = 'black';
        btn2.style.backgroundColor = 'black';
        btn3.style.backgroundColor = 'black';
      }
    ;
    }, 1000);
  
    startButton.disabled = true;
  }
  
  startButton?.addEventListener('click', startCount);


  
 

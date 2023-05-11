let counterValue = 0;

const valueElement = document.querySelector("#value");
const descrementButton = document.querySelector('[data-action ="decrement"]');
const incrementButton = document.querySelector('[data-action ="increment"]');


const heandleDescrement = (e) => {
    console.log('You clicked -1');
    counterValue -= 1;
    valueElement.textContent = counterValue;
};
const heandleIncrement = (e) => {
    console.log('You clicked +1');
    counterValue += 1;
    valueElement.textContent = counterValue;
};

descrementButton.addEventListener("click", heandleDescrement);
incrementButton.addEventListener("click", heandleIncrement);
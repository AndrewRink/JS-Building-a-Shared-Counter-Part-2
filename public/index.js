async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();
    
    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        //Patching in the updated value on the counter
        fetch('http://localhost:9001/counter',{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/JSON'
        },
         body: JSON.stringify({
            value:countValue
         })

        })
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        //Used same function as above to save decreases in counter amount
        fetch('http://localhost:9001/counter',{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/JSON'
        },
         body: JSON.stringify({
            value:countValue
         })

        })
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()
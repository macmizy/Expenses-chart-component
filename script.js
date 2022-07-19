const bars = document.querySelectorAll('.bar');
const amtOnHover = document.querySelectorAll('.amount-on-hover');
const today = new Date();
const amtArray = new Array();
let value = 0;


Graph()
hideAmtOnHover()
showAmtOnHover()



function showAmtOnHover(){
    bars.forEach(bar => {
        bar.addEventListener('mouseover', ()=>{
            const lm = bar.textContent;
            let element = document.getElementById(lm);
            lm == 0 ? value = amtArray[6] : value = amtArray[lm - 1];
            element.innerHTML = `$${value}`;
            element.style.visibility = 'visible';
            rem(element);
        })
    });
}
function hideAmtOnHover(){
    amtOnHover.forEach(element => element.style.visibility = 'hidden');
}

function rem(element){
    bars.forEach(bar => {
        bar.addEventListener('mouseleave', () => { element.style.visibility = 'hidden'});
    });
}

async function Graph(){
    const result = await fetch('./data.json');
    const data = await result.json();

    let i = 0;
    bars.forEach(bar => {
        let amnt = data[i].amount;
        let height = `${amnt * 3}px`;
        bar.style.height = height;
        amtArray[i] = amnt;
        i++;

        if(today.getDay() == i){
            bar.classList.add('active')
        }
        
    });
}

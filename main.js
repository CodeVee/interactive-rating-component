
const form = document.getElementById('form');
const ratingBlk = document.getElementById('ratingBlk');
const thanksBlk = document.getElementById('thanksBlk');
const ratingBtns = document.getElementsByName('rating');
const ratingValue = document.getElementById('rating-value');
const hideClass = 'card--none';

const handler = (e) => {
    e.preventDefault();

    const ratingsArr = Array.from(ratingBtns);
    const anySelected = ratingsArr.some(btn => btn.checked);
    
    if (!anySelected) 
        return;

    const selected = ratingsArr.find(btn => btn.checked);
    const value = selected.value;
    ratingValue.innerText = value;

    ratingBlk.classList.add(hideClass);
    thanksBlk.classList.remove(hideClass);
    
};

form.addEventListener('submit', handler);

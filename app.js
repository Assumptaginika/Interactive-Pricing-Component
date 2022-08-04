let myCheckBox = document.querySelector(".switch input"),

duration = document.querySelector('.month'),
price = document.querySelector(".price .pricefix"),
switcher = document.querySelector(".switch"),
range = document.querySelector(".myrange");
let pageViews = document.querySelector('.page-views span');



// creating a price switch

switcher.onclick = () => {

    if (myCheckBox.checked == true) {

        let priceInt = parseInt(price.textContent);

        priceInt.textContent = `{(priceInt - (priceInt * .25)) *12}`;

        duration.textContent = '/year';
    } else {

        updatePrice();


        duration.textContent = '/month'
    }
}




//add event listner to page

range.addEventListener("input", updatePrice);




// update price 

function updatePrice() {
    if (range.value == 1) {
        if (myCheckBox.checked == true) {
            price.textContent = `${(8 - (8 * .25)) * 12}`;

        } else {
            price.textContent = '$8';
        }
        pageViews.textContent = '10k';

    } 
    if (range.value == 2) {
        if (myCheckBox.checked == true) {
            price.textContent = '$108';

        } else {
            price.textContent = '$12';
        }
        pageViews.textContent = '50k';

    } 
    if (range.value == 3) {
        if (myCheckBox.checked == true) {
            price.textContent = '$144';

        } else {
            price.textContent = '$16';
        }
        pageViews.textContent = '100k';

    } 
    if (range.value == 4) {
        if (myCheckBox.checked == true) {
            price.textContent = '$216';

        } else {
            price.textContent = '$24';
        }
        pageViews.textContent = '500k';

    } 
    if (range.value == 5) {
        if (myCheckBox.checked == true) {
            price.textContent = '$324';

        } else {
            price.textContent = '$36';
        }
        pageViews.textContent = '1M';

    } 


}

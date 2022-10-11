const daysValue = document.querySelector('#days');
const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');
const countdownTimer = new Date(2023,1,1,0,0,0).getTime(); 


function countDown () {
    const dateTimeNow = new Date().getTime();

    let difference = countdownTimer - dateTimeNow;

    //countdowm calc 
    const daysValueNumber = Math.floor( difference / (1000 * 60 * 60 * 24) );
    const hoursValueNumber = Math.floor( difference / (1000 * 60 * 60) % 24);
    const minutesValueNumber = Math.floor( difference / (1000 * 60) % 60 );
    const secondsValueNumber = Math.floor( difference / (1000) % 60);

    daysValue.innerHTML = daysValueNumber;
    hoursValue.innerHTML = hoursValueNumber;
    minutesValue.innerHTML = minutesValueNumber;
    secondsValue.innerHTML = secondsValueNumber;

}

setInterval(countDown, 1000);
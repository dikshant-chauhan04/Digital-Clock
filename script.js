setInterval(time, 1000)

function time(){

    const getTime = new Date();
    const seconds= getTime.getSeconds();
    const minutes= getTime.getMinutes();
    const hours= getTime.getHours();


    document.getElementById('seconds').innerHTML= seconds;
    document.getElementById('minutes').innerHTML= minutes;
    document.getElementById('hours').innerHTML= hours;
}
time();
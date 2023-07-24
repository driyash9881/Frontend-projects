// 

//loop
setInterval(() =>
    //time interval
    {
        let t = new Date();
        let hr = t.getHours();
        let mn = t.getMinutes();
        let sc = t.getSeconds();

        //math
        let hourRotation = hr * 30 + mn / 2;
        let minRotation = mn * 6;
        let secRotation = sc * 6;

        //hand rotating
        hour.style.transform = `rotate(${hourRotation}deg)`;
        min.style.transform = `rotate(${minRotation}deg)`;
        sec.style.transform = `rotate(${secRotation}deg)`;
    }, 1000);
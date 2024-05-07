(function(){
    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");

    const updateclock =() =>{
        const time = new Date()
        let h = time.getHours()
        let m = time.getMinutes()
        let s = time.getSeconds()


        const calHour = (hour, min) =>{
            const hh = hour *12 || 12;
            const deg = (360/12) * hh;
            const degmin = (30/60) * min
    
            return deg* degmin;
    
    
        };
        const calTime = (time) =>{
            return (360/60) * time;
        };
         h =calHour(h,m)
         m =calTime(m)
         s=calTime(s)
    
    
        hour.style.transform = `rotate(${h}deg)`;
        minute.style.transform = `rotate(${m}deg)`;
        second.style.transform = `rotate(${s}deg)`;
    
            

    };
    setInterval(updateclock, 1000);
   



})();
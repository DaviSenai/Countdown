

let totalTime = 0;


const Timer = {
    running:false,
    interval:null,

    start() {
        if (!this.running) {
            if (totalTime == 0) {
                this.setTimer();
                this.refreshDisplay();
            }
            this.running = true;
            this.interval = setInterval(() => {
                if (totalTime > 0 && this.running) {
                    totalTime--;
                    this.refreshDisplay();
                } else {
					this.pause();
                }
            }, 1000);
        }
    },

    restart() {
        this.pause();
        this.setTimer();
        this.refreshDisplay();
        this.start();
    },

    pause() {
        this.running = false;
        clearInterval(this.interval)
    },

    setTimer() {
        totalTime = 0;
        totalTime += document.querySelector("#inputs #years").value * 60 * 60 * 24 * 30 * 12;
        totalTime += document.querySelector("#inputs #mounths").value * 60 * 60 * 24 * 30;
        totalTime += document.querySelector("#inputs #days").value * 60 * 60 * 24;
        totalTime += document.querySelector("#inputs #hours").value * 60 * 60;
        totalTime += document.querySelector("#inputs #minutes").value * 60;
        totalTime += document.querySelector("#inputs #seconds").value * 1;
    },

    refreshDisplay() {
        let time = totalTime;
        let year = Math.floor(time / 60 / 60 / 24 / 30 / 12);
        time -= year*60*60*24*30*12;
        let mounth = Math.floor( time / 60 / 60 / 24 / 30) > 11 ? 11 : Math.floor( time / 60 / 60 / 24 / 30) ;
        time -= mounth*60*60*24*30;
        let day = Math.floor( time / 60 / 60 / 24) > 30 ? 30 : Math.floor( time / 60 / 60 / 24);
        time -= day*60*60*24;
        let hour = Math.floor( time / 60 / 60) > 23 ? 23 : Math.floor( time / 60 / 60);
        time -= hour*60*60;
        let min = Math.floor( time / 60) > 59 ? 59 : Math.floor( time / 60);
        time -= min*60;
        let sec = time;
        
        document.querySelector("#years .value").innerText = year;
        document.querySelector("#mounths .value").innerText = mounth;
        document.querySelector("#days .value").innerText = day;
        document.querySelector("#hours .value").innerText = hour;
        document.querySelector("#minutes .value").innerText = min;
        document.querySelector("#seconds .value").innerText = sec;
    }
}









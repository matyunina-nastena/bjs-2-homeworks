class AlarmClock {
    constructor (){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        if(time == undefined || callback == undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        else if(this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback, time, canCall: true});
    }
    
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString(navigator.language, {hour:'2-digit', minute:'2-digit'})
    }

    start () {
        if (this.intervalId) {
            return null
        }
        this.intervalId = setInterval(() => { 
            this.alarmCollection.forEach((clock) => {
                if(clock.time ===this.getCurrentFormattedTime() && clock.canCall === true ) {
                    clock.canCall = false;
                    clock.callback();
                }
            })
        }, 1000) 
    }

    stop () {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((clock) => {
            clock.canCall = true;
        })
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}

!function (){
    
    function Timer(todo) {
        
        this.title = tagSelect('#title-timer', todo)
        this.minuteDigitOne = tagSelect('#min-one', 2)
        this.minuteDigitTwo = tagSelect('#min-two', 5)
        this.secDigitOne = tagSelect('#sec-one', 0)
        this.secDigitTwo = tagSelect('#sec-two', 0)

        this.start()
        this.stop()
        this.reset()
    }

    Timer.prototype.start = function(){
        var self = this

        var btnStart = tagSelect('#play', 'start')

        btnStart.addEventListener('click', function(){
            btnStart.classList.remove('active')
            self.startTimer()
        })
    }

    Timer.prototype.startTimer = function(){
        var self = this

        countdown = setInterval(()=>{
            let minutes = Math.floor(timeTimer/60)
            let seconds = timeTimer % 60
            seconds = seconds < 10 ? '0' + seconds : seconds
            minutes = minutes < 10 ? '0' + minutes : minutes
    
            self.minuteDigitOne.innerHTML = `${minutes}`[0]
            self.minuteDigitTwo.innerHTML = `${minutes}`[1]
            self.secDigitOne.innerHTML = `${seconds}`[0]
            self.secDigitTwo.innerHTML = `${seconds}`[1]
    
            timeTimer--
            if (timeTimer < 0) {
                clearInterval(countdown)
                hms.innerHTML = 'Descanza un momento.'
            }
        },1000)
    }

    Timer.prototype.stop = function(){
        var self = this

        var btnStop = tagSelect('#stop','stop')
        btnStop.addEventListener('click', function(){ 
            clearInterval(countdown)
    
            if (!modalClosed) {
                console.log(timeTimer)
            }
        })
    }

    Timer.prototype.reset = function(){
        var self = this

        var btnReset = tagSelect('#reset','reset')
        btnReset.addEventListener('click', function(){
            clearInterval(countdown)
            timeTimer = 25*60
            var minutes = Math.floor(timeTimer/60)

            self.minuteDigitOne.innerHTML = `${minutes}`[0]
            self.minuteDigitTwo.innerHTML = `${minutes}`[1]
            self.secDigitOne.innerHTML = '0'
            self.secDigitTwo.innerHTML = '0'
        })
    }

    function tagSelect(selector, data) {
        const element = document.querySelector(selector)

        element.innerHTML = data
        return element
    }



    var timer = new Timer('es casi mi cumpleaños')

}()

let start = 0
let elapse = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapse = input.runningTime() - start
    basic.showNumber(elapse / 1000)
})
basic.forever(function () {
	
})

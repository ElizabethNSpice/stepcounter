input.onButtonPressed(Button.A, function () {
    if (step >= goal) {
        basic.showString("goal reached!")
    } else {
        basic.showString("keep going!")
    }
})
input.onButtonPressed(Button.B, function () {
    if (goal == 500) {
        goal = 1000
        basic.showString("goal: 1000")
    } else if (goal == 1000) {
        goal = 1500
        basic.showString("goal: 1500")
    } else if (goal == 1500) {
        goal = 2000
        basic.showString("goal: 2000")
    } else if (goal == 2000) {
        goal = 500
        basic.showString("goal: 500")
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.showString("" + (step))
})
let goal = 0
let step = 0
step = 0
goal = 500
basic.showString("A: Progress B: Set Goal")
basic.showString("goal: 500")
basic.forever(function () {
    basic.showString("A: Progress B: Set Goal")
})

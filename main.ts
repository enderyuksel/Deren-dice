input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . . # #
        # . # . #
        # # . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . # #
        # . . . #
        # # . . #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 6))
})
basic.showString("Dice")

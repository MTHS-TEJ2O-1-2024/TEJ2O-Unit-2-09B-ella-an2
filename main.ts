/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella
 * Created on: Sep 2024
 * This program plays rock paper scissors 
*/

let randomNumber: number = 0
let currentScore: number

randomNumber = -1
currentScore = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)


input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0,2)
    basic.clearScreen()


    if (randomNumber == 0) {
    basic.showIcon(IconNames.SmallSquare)
    }

    if (randomNumber == 1) {
    basic.showIcon(IconNames.Square)
    }

    if (randomNumber == 2) {
    basic.showIcon(IconNames.Scissors)
    }

    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.A, function () {
    currentScore = currentScore + 1
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("Score:" + (currentScore).toString())
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

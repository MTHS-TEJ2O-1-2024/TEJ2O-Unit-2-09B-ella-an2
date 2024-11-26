"""
Created by: Ella An
Created on: Nov 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *
from random import *


random_number = 0
current_score = int

random_number = -1
display.clear()
display.show(Image.HAPPY)

while True:
    if accelerometer.was_gesture("shake"):
        random_number = random.randint(0, 2)
        display.clear()

        if random_number == 0:
            display.show(Image.SQUARE_SMALL)

        if random_number == 1:
            display.show(Image.SQUARE)

        if random_number == 2:
            display.show(Image.SWORD)

    sleep(1)
    display.show(Image.HAPPY)

    while True:
        if button_a.is_pressed():
            current_score += 1
            display.show(Image.YES)
            sleep(1)
            display.show(Image.HAPPY)

        if button_b.is_pressed():
            display.clear()
            sleep(1)
            display("Score:" + str(current_score))
            sleep(1)
            display.show(Image.HAPPY)

input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        hue += 30
        if (hue > 359) {
            hue = 0
        }
        radio.sendValue("h", hue)
        state = 1
    } else if (mode == 1) {
    	
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (mode == 0) {
        if (state == 1) {
            state = 0
        } else {
            state = 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    mode += 1
    if (mode > 2) {
        mode = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        luminosity += 10
        if (luminosity > 49) {
            luminosity = 0
        }
        radio.sendValue("l", luminosity)
        state = 1
    } else if (mode == 1) {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == value) {
        hue = value
    } else if (name == "s") {
        saturation = value
    } else if (name == "l") {
        luminosity = value
    }
})
/**
 * Press A+B to change mode.
 * 
 * Mode 0 (Default)
 * 
 * - Press A to cycle colour.
 * 
 * - Press B to cycle brightness.
 * 
 * - Clap to toggle on/off.
 * 
 * Mode 1 (Light)
 * 
 * - Automatically come after light falls below a level.
 * 
 * - Press A to reduce light sensitivity.
 * 
 * - Press B to increase  light sensitivity.
 * 
 * Mode 2 (Sound) - V2 Only
 * 
 * - Simple sound to light.
 */
let state = 0
let mode = 0
let luminosity = 0
let saturation = 0
let hue = 0
radio.setGroup(1)
hue = 0
saturation = 99
luminosity = 50
mode = 0
state = 1
let trigger = 100
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    if (mode == 0) {
        if (state == 1) {
            strip.showColor(neopixel.hsl(hue, saturation, luminosity))
            basic.showIcon(IconNames.Heart)
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.showIcon(IconNames.SmallHeart)
        }
    } else if (mode == 1) {
        if (input.lightLevel() > trigger) {
            strip.showColor(neopixel.hsl(hue, saturation, luminosity))
            basic.showIcon(IconNames.Diamond)
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.showIcon(IconNames.SmallDiamond)
        }
    } else if (mode == 2) {
        strip.showBarGraph(input.lightLevel(), 255)
        basic.showIcon(IconNames.EigthNote)
    }
})

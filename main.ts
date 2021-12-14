/**
 * This script will control a string of Neopixels connected to Pin 1 on a BBC Microbit. Button A will change colour and Button B will change brightness 9from off to full brightness).
 * 
 * It will also transmit and receive hue, saturation and luminosity value, allowing a second Microbit to be used as a controller, or multiple lamps to synchronise with each other.
 */
input.onButtonPressed(Button.A, function () {
    hue += 30
    if (hue > 360) {
        hue = 0
    }
    radio.sendValue("hue", hue)
})
input.onButtonPressed(Button.B, function () {
    luminosity += 10
    if (luminosity > 50) {
        luminosity = 0
    }
    radio.sendValue("luminosity", luminosity)
})
radio.onReceivedValue(function (name, value) {
    if (name == "hue") {
        hue = value
    }
    if (name == "saturation") {
        saturation = value
    }
    if (name == "luminosity") {
        luminosity = value
    }
})
let luminosity = 0
let saturation = 0
let hue = 0
radio.setGroup(1)
hue = 0
saturation = 99
luminosity = 50
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    strip.showColor(neopixel.hsl(hue, saturation, luminosity))
})

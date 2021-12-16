input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        hue += 30
        if (hue > 359) {
            hue = 0
        }
        radio.sendValue("h", hue)
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        luminosity += 10
        if (luminosity > 49) {
            luminosity = 0
        }
        radio.sendValue("l", luminosity)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "h") {
        hue = value
    } else if (name == "s") {
        saturation = value
    } else if (name == "l") {
        luminosity = value
    }
})
let mode = 0
let luminosity = 0
let saturation = 0
let hue = 0
radio.setGroup(1)
hue = 0
saturation = 99
luminosity = 50
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    if (mode == 0) {
        strip.showColor(neopixel.hsl(hue, saturation, luminosity))
        basic.showIcon(IconNames.Heart)
    }
})

input.onButtonPressed(Button.A, function () {
    hue += 30
    if (hue > 359) {
        hue = 0
    }
    radio.sendValue("h", hue)
    updatehsl = 1
})
input.onSound(DetectedSound.Loud, function () {
    if (state == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        state = 0
    } else {
        updatehsl = 1
        state = 1
    }
})
input.onButtonPressed(Button.B, function () {
    luminosity += 10
    if (luminosity > 49) {
        luminosity = 0
    }
    radio.sendValue("l", luminosity)
    updatehsl = 1
})
radio.onReceivedValue(function (name, value) {
    if (name == "h") {
        hue = value
        updatehsl = 1
    } else if (name == "s") {
        saturation = value
        updatehsl = 1
    } else if (name == "l") {
        luminosity = value
        updatehsl = 1
    }
})
let strip: neopixel.Strip = null
let state = 0
let updatehsl = 0
let luminosity = 0
let saturation = 0
let hue = 0
radio.setGroup(1)
hue = 0
saturation = 99
luminosity = 50
updatehsl = 1
state = 1
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (updatehsl == 1) {
        strip.showColor(neopixel.hsl(hue, saturation, luminosity))
        updatehsl = 0
    }
})

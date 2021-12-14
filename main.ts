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
    radio.sendValue("lum", luminosity)
})
radio.onReceivedValue(function (name, value) {
    if (name == "hue") {
        hue = value
    } else if (name == "sat") {
        saturation = value
    } else if (name == "lum") {
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

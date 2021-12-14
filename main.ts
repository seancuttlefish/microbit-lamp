input.onButtonPressed(Button.A, function () {
    hue += 30
    if (hue > 360) {
        hue = 0
    }
    strip.showColor(neopixel.hsl(hue, saturation, luminosity))
    radio.sendValue("hue", hue)
})
input.onButtonPressed(Button.B, function () {
    luminosity += 10
    if (luminosity > 50) {
        luminosity = 0
    }
    strip.showColor(neopixel.hsl(hue, saturation, luminosity))
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
    strip.showColor(neopixel.hsl(hue, saturation, luminosity))
})
let strip: neopixel.Strip = null
let luminosity = 0
let saturation = 0
let hue = 0
radio.setGroup(1)
hue = 0
saturation = 99
luminosity = 50
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.hsl(hue, saturation, luminosity))
basic.showIcon(IconNames.Heart)

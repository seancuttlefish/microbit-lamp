input.onButtonPressed(Button.A, function () {
    hue += 30
    if (hue > 360) {
        hue = 0
    }
    strip.showColor(neopixel.hsl(hue, saturation, luminosity))
})
input.onButtonPressed(Button.B, function () {
    luminosity += 10
    if (luminosity > 50) {
        luminosity = 0
    }
    strip.showColor(neopixel.hsl(hue, saturation, luminosity))
})
let strip: neopixel.Strip = null
let luminosity = 0
let saturation = 0
let hue = 0
hue = 0
saturation = 99
luminosity = 50
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)

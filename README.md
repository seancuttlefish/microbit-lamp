
# Micro:bit Lamp

This Makeblock project controls a string of Neopixels connected to Pin 1 on a BBC Microbit. Button A changes colour (in 12 steps around the colour wheel) and Button B changes brightness (from off to full brightness in 5 steps). On a Micribit v2 the microphone is used as a clap on/off sensor.

The script also transmits and receives hue, saturation and luminosity values, allowing a second Microbit to be used as a controller for a lamp, or multiple lamps to synchronise with one another. A unique radio channel number should be used to pair a single lamp with a single remote control.

Ny pressing Button A+B additional modes can be selected:

Mode 0 (Default)
- Press A to cycle colour.
- Press B to cycle brightness.
- Clap to toggle on/off.

Mode 1 (Light)
- Automatically switch on after light falls below a trigger level.
- Press A to reduce light sensitivity lvel.
- Press B to increase  light sensitivity level.

Mode 2 (Sound) - V2 Only
- A simple sound to light generator.

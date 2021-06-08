input.onButtonPressed(Button.A, function () {
    lugar = randint(0, 3)
    basic.showNumber(lugar + 1)
    if (lugar == 0) {
        Mi_Imagen[lugar].showImage(0)
        basic.pause(500)
    } else if (lugar == 1) {
        Mi_Imagen[lugar].showImage(0)
        basic.pause(500)
    } else if (lugar == 2) {
        Mi_Imagen[lugar].showImage(0)
        basic.pause(500)
    } else {
        Mi_Imagen[lugar].showImage(0)
        basic.pause(500)
    }
    basic.clearScreen()
})
let lugar = 0
let Mi_Imagen: Image[] = []
Mi_Imagen = [images.iconImage(IconNames.Heart), images.iconImage(IconNames.Tortoise), images.iconImage(IconNames.Silly), images.iconImage(IconNames.Pitchfork)]
basic.forever(function () {
	
})

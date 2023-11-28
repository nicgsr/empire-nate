controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function on_button_pressed() {
    
})
tiles.setCurrentTilemap(tilemap`
    Skyscraper
`)
let my_sprite = sprites.create(img`
        . . . . c c c b b b b b . . . . 
            . . c c b 4 4 4 4 4 4 b b b . . 
            . c c 4 4 4 4 4 5 4 4 4 4 b c . 
            . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
            e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
            e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
            e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
            . e b 4 4 4 4 4 5 4 4 4 4 b e . 
            8 7 e e b 4 4 4 4 4 4 b e e 6 8 
            8 7 2 e e e e e e e e e e 2 7 8 
            e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
            e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
            e b e 8 8 c c 8 8 c c c 8 e b e 
            e e b e c c e e e e e c e b e e 
            . e e b b 4 4 4 4 4 4 4 4 e e . 
            . . . c c c c c e e e e e . . .
    `, SpriteKind.Player)
scene.cameraFollowSprite(my_sprite)
let tileDock = tiles.getTileLocation(7, 110)
tileDock.place(my_sprite)
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    for (let i = 0; i < 10; i++) {
        my_sprite.setPosition(my_sprite.x, my_sprite.y - 3)
        pause(200)
    }
})

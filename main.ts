namespace SpriteKind {
    export const Scythe = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Ghost.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    game.setDialogTextColor(15)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f 1 1 1 1 1 f f f . . . 
        . . f f 1 1 1 1 1 1 1 f f . . . 
        . . f f 1 1 f 1 f 1 1 f f . . . 
        . . f f 1 1 f 1 f 1 1 f f . . . 
        . . f f 1 1 1 1 1 1 1 f f . . . 
        . . f f f 1 1 1 1 1 f f f . . . 
        . . . f f 1 f 1 f 1 f f . . . . 
        . f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `)
    game.setDialogFrame(img`
        a a a a a a a a a a a a a a a 
        a f f f f f f f f f f f f f a 
        a f f f f f f f f f f f f f a 
        a f f 4 4 4 4 4 4 4 4 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 4 4 4 4 4 4 4 4 f f a 
        a f f f f f f f f f f f f f a 
        a f f f f f f f f f f f f f a 
        a a a a a a a a a a a a a a a 
        `)
    game.showLongText("Is that my scythe!", DialogLayout.Bottom)
    game.showLongText("Awh yeah kid! That's great!", DialogLayout.Bottom)
    game.showLongText("Thank you so much! You don't know how much this means to me!", DialogLayout.Bottom)
    game.showLongText("I'll see you around kid.", DialogLayout.Bottom)
    game.setGameOverEffect(true, effects.splatter)
    game.gameOver(true)
    game.setGameOverMessage(true, "GAME OVER!")
})
let pixelIsToMetres = 0
let Ghost: Sprite = null
game.setDialogTextColor(15)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . f f f f f f f f f . . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f 1 1 1 1 1 f f f . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . f f 1 1 f 1 f 1 1 f f . . . 
    . . f f 1 1 f 1 f 1 1 f f . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . f f f 1 1 1 1 1 f f f . . . 
    . . . f f 1 f 1 f 1 f f . . . . 
    . f f f f f f f f f f f f f . . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `)
game.setDialogFrame(img`
    a a a a a a a a a a a a a a a 
    a f f f f f f f f f f f f f a 
    a f f f f f f f f f f f f f a 
    a f f 4 4 4 4 4 4 4 4 4 f f a 
    a f f 4 d d d d d d d 4 f f a 
    a f f 4 d d d d d d d 4 f f a 
    a f f 4 d d d d d d d 4 f f a 
    a f f 4 d d d d d d d 4 f f a 
    a f f 4 d d d d d d d 4 f f a 
    a f f 4 d d d d d d d 4 f f a 
    a f f 4 d d d d d d d 4 f f a 
    a f f 4 4 4 4 4 4 4 4 4 f f a 
    a f f f f f f f f f f f f f a 
    a f f f f f f f f f f f f f a 
    a a a a a a a a a a a a a a a 
    `)
game.splash("Find the Grim Reaper and ", "return his scythe!")
game.showLongText("By pressing the space bar multiple times, you are able to fly!", DialogLayout.Bottom)
game.showLongText("Using this skill, fly through the sky and find the Grim Reaper ", DialogLayout.Bottom)
game.showLongText("He will be waiting for you on one of the platforms!", DialogLayout.Bottom)
game.showLongText("But beware! There are decoy platforms that are empty!", DialogLayout.Bottom)
game.showLongText("When you find him, walk up to him and talk to him!", DialogLayout.Bottom)
Ghost = sprites.create(img`
    . . . . . . . . . . f . . . . . 
    . . . . . f f f f f 3 f . . . . 
    . . . . f f 1 1 f 3 d 3 f . . . 
    . . . f 1 1 1 1 1 f 3 f . . . . 
    . . . f 1 1 1 1 1 1 f f . . . . 
    . . f 1 1 f 1 1 1 1 1 1 f . . . 
    . . f 1 1 f f 1 f f 1 1 f . . . 
    . . f 1 3 f f 1 f f 3 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f 1 f 1 1 1 1 f f 1 f . . . 
    . . f 1 1 f f f f 1 1 1 f . . . 
    . . f 1 1 1 f 1 f 1 1 1 f . . . 
    . . f 1 f 1 1 1 1 1 f 1 f . . . 
    . . f f . f 1 1 f f . f f . . . 
    . . f . . . f f . . . . f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Ghost, 100, 0)
Ghost.setPosition(30, 201)
let gravity = 9.81 * pixelIsToMetres
Ghost.ay = 350
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Ghost)
let Grims_Scythe = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f b b 1 1 f . . . . . 
    . . f f f b 1 1 1 1 1 f . . . . 
    . f e e f 1 1 1 1 f f . . . . . 
    . . . f e e f . . . . . . . . . 
    . . . . f e e f . . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e e f . . . . . . 
    . . . . . . f f e e f f f . . . 
    . . . . . . . . f e e e e f . . 
    . . . . . . . . . f e e e e . . 
    . . . . . . . . . . e e e f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Grims_Scythe.follow(Ghost)
Grims_Scythe.setPosition(13, 201)
music.setVolume(60)
music.play(music.createSong(hex`0078000408030203001c0001dc00690000045e0100040000000000000000000005640001040003720000000400011d04000800011d08000c0001200c001000012010001400011d14001800011d18001c0001221c002000012220002400011d24002800011d28002c0001202c003000012030003400011d34003800011d38003c0001273c004000012448004c00012250005400012058005c00011d06001c00010a006400f401640000040000000000000000000000000000000002720000000400011b04000800011b08000c00011e0c001000011e10001400011b14001800011b18001c0001201c002000012020002400011b24002800011b28002c00011e2c003000011e30003400011b34003800011b38003c0001253c004000012248004c00012050005400011e58005c00011b`), music.PlaybackMode.LoopingInBackground)

/*global Globals*/
/*global Phaser*/
/*global preload*/
/*global create*/
/*global update*/
var config = {
    type: Phaser.AUTO,
    width: Globals.config.width,
    height: Globals.config.height,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: Globals.config.debugPhysics
        }
    }
};

var game = new Phaser.Game(config);
var player;
var cursors;
var debugText;
function createPlatforms(add){
    const platforms = add.staticGroup();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    return platforms;
}

function createPlayer(add) {
    const player = add.sprite(0, 0, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    return player;
}

function createAnimations(add, generateFrames) {
    add({
        key: 'left',
        frames: generateFrames('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    add({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    add({
        key: 'right',
        frames: generateFrames('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}

function create(){
    const scene = this;
    const gameObjectFactory = scene.add;
    const physicsEngine = scene.physics;
    const animationManager = scene.anims;
    const newAnimation = animationManager.create.bind(animationManager);
    const generateFrames = animationManager.generateFrameNumbers.bind(animationManager);
    
    // Skybox
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    
    // Platforms
    const platforms = createPlatforms(physicsEngine.add);
    
    // Player
    player = createPlayer(physicsEngine.add);
    
    // Create animations
    createAnimations(newAnimation, generateFrames);
    
    cursors = this.input.keyboard.createCursorKeys();
    
    this.physics.add.collider(player, platforms);
    
    debugText = this.add.text(10, 30, '', { font: '16px Courier', fill: '#ffffff' });
}
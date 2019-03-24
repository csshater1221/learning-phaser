function PrintState() {
    const state = Globals.game.state;
    const debug = [];
    for (var property in state) {
        if (state.hasOwnProperty(property)) {
            debug.push(property + ": " + state[property]);
        }
    }
    
    Globals.game.debugText.setText(debug);
}

function update(){
    /*global Globals*/
    const game = Globals.game;
    const cursors = game.cursors;
    const player = game.player;
    const constant = game.constants;
    const state = game.state;
    
    if (cursors.left.isDown)
    {
        player.setVelocityX(-constant.runSpeed);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(constant.runSpeed);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    
    if(player.body.touching.down){
        state.jumpsLeft = constant.jumpsAllowed;
    }
    
    if (cursors.up.isDown && !state.isMidJump && state.jumpsLeft > 0)
    {
        state.jumpsLeft--;
        player.setVelocityY(-constant.jumpSpeed);
        state.isMidJump = true;
    }
    
    if (cursors.up.isUp)
    {
        state.isMidJump = false;
    }
    
    // For debugging only
    PrintState();
}
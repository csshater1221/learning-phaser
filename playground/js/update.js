const jumpSpeed = 200;
const runSpeed = 300;
const jumpsAllowed = 3;
var jumpsLeft = 0;
var isMidJump;

/*global player*/
/*global debugText*/
function update(){
    const cursors = this.input.keyboard.createCursorKeys();
    const debug = [];
    if (cursors.left.isDown)
    {
        player.setVelocityX(-runSpeed);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(runSpeed);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    
    if(player.body.touching.down){
        jumpsLeft = jumpsAllowed;
    }
    
    if (cursors.up.isDown && !isMidJump && jumpsLeft > 0)
    {
        jumpsLeft--;
        player.setVelocityY(-jumpSpeed);
        isMidJump = true;
    }
    
    if (cursors.up.isUp)
    {
        isMidJump = false;
    }
    
    debug.push('JumpsLeft: ' + jumpsLeft);
    debug.push('isMidJump: ' + isMidJump);
    debugText.setText(debug);
}
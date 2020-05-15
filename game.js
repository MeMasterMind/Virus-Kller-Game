
var game = new Phaser.Game(1400, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

       


function preload() {

    game.load.image('bullet', 'https://ik.imagekit.io/arpantaneja/purple_ball_l003mRqKM.png');
    game.load.image('weapon', 'https://ik.imagekit.io/arpantaneja/arrow_1D7V7vgBM.png');
    game.load.image('virus', 'https://ik.imagekit.io/arpantaneja/JavaScript/Covid-19_Game/coronavirus_PNG39_DSbl8UXttu.png');
    game.load.image('spawn', 'https://ik.imagekit.io/arpantaneja/spawn_safety2_udFKg54ET2.png');
}

var sprite;
var spawn;
var virus;
var cursors;
var fireButton;
var weapon;
var bullets;
var fireRate = 100;
var nextFire = 0;
var gameStart = true;


function create() {

    //virus = game.add.sprite(100, 100, 'virus');
    this.virusGroup = game.add.group();
    for (var i = 0; i < 50; i++)
    {
       virus.addChild(game.world.randomX, game.world.randomY, 'virus');

    game.physics.startSystem(Phaser.Physics.ARCADE);}
    
    

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);

    game.stage.backgroundColor = '#00ffe1'


   virus = game.add.sprite(game.world.randomX, game.world.randomY, 'virus');
// adding childs
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' )); 
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' ));
    virus.addChild(game.make.sprite(game.world.randomX, game.world.randomY, 'virus' )); 

    
   
   


    spawn = game.add.sprite(600, 200, 'spawn');
    spawn.anchor.set(0, 5);
    

    sprite = game.add.sprite(700, 300, 'weapon');
    

    sprite.anchor.set(0.5);

    game.physics.arcade.enable([sprite, bullets, virus, spawn], Phaser.Physics.ARCADE);

    spawn.body.drag.set(0);
    spawn.body.maxVelocity.set(0);
        
    sprite.body.collideWorldBounds = true;  
 
    sprite.body.drag.set(0);

    sprite.body.maxVelocity.set(800);



   
    cursors = this.input.keyboard.createCursorKeys();

    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


 }

function update() {




   sprite.rotation = game.physics.arcade.angleToPointer(sprite);

// This is where I got the problem

   game.physics.arcade.collide(virus, bullets, () => {

    virus.kill();   


   });   





   game.physics.arcade.collide(virus, sprite, () => {

   
   
   }) 


   game.physics.arcade.collide(bullets, bullets);


    if (cursors.up.isDown)
    {
        sprite.body.velocity.y = -300;
    }

    else if (cursors.down.isDown)
    {   sprite.body.velocity.y = 300;

    }

    else
    {
        sprite.body.velocity.y = 0;
    }




    if (cursors.left.isDown)
    {
        sprite.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        sprite.body.velocity.x = 300;
    }
    else
    {
        sprite.body.velocity.x = 0;
    }

    if (game.input.activePointer.isDown)
    {
        fire();
    }

    game.world.wrap(sprite, 16);


    game.physics.arcade.moveToObject(virus, sprite, 200);
   


      


}


function fire() {

    if (game.time.now > nextFire && bullets.countDead() > 1)
    {
        nextFire = game.time.now + fireRate;

        var bullet = bullets.getFirstDead();

        bullet.reset(sprite.x - 8, sprite.y - 8);

        game.physics.arcade.moveToPointer(bullet, 300);
    }

}





var game = new Phaser.Game(1400, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });




function preload() {

    game.load.image('bullet', 'https://ik.imagekit.io/arpantaneja/purple_ball_l003mRqKM.png');
    game.load.image('weapon', 'https://ik.imagekit.io/arpantaneja/arrow_1D7V7vgBM.png');
    game.load.image('virus', 'https://ik.imagekit.io/arpantaneja/JavaScript/Covid-19_Game/coronavirus_PNG39_DSbl8UXttu.png');
    game.load.image('spawn', 'https://ik.imagekit.io/arpantaneja/spawn_safety2_udFKg54ET2.png');
    game.load.image('background', 'https://ik.imagekit.io/arpantaneja/debug-grid-1920x1920_eT69sGYec.png');
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



    game.add.tileSprite(0, 0, 1920, 1920, 'background');
    game.world.setBounds(0, 0, 1920, 1920);

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    
    game.physics.startSystem(Phaser.Physics.P2JS)

    
    


   virus = game.add.sprite(game.world.randomX, game.world.randomY, 'virus');

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
    game.physics.p2.enable(sprite);
    sprite.body.fixedRotation = true;
    game.camera.follow(sprite, Phaser.Camera.FOLLOW_LOCKON, 10.1, 10.1);    
    sprite.fixedToCamera = true;
    sprite.cameraOffset.setTo(500, 100);


    game.physics.arcade.enable([bullets, virus, spawn]);
    game.physics.arcade.enable(virus.children);

    spawn.body.drag.set(0);
    spawn.body.maxVelocity.set(0);

    sprite.body.collideWorldBounds = true;



    sprite.anchor.set(0.5);




    cursors = game.input.keyboard.createCursorKeys();
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


 }

function update() {




  sprite.rotation = game.physics.arcade.angleToPointer(sprite);




   game.physics.arcade.collide(virus.children, bullets, (child, bullet) => {

    child.kill();
    bullet.kill();


   });

   
    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
    }

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
    }



    
    if (game.input.activePointer.isDown)
    {
        fire();
    }

    game.world.wrap(sprite, 16);


    game.physics.arcade.moveToObject(virus, sprite, 200);






}

function render() {
   /* var debug = this.game.debug;

    debug.physicsGroup(this.world, 'rgba(0,0,255,0.25)');

    virus.children.forEach(function (child) {
        debug.body(child, 'rgba(255,0,0,0.25)');
    });*/
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




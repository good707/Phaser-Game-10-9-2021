var game = new Phaser.game(600, 400, Phaser.AUTO);
game.state.add('state1', demo.state);
game.state.start('state1');
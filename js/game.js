//var mysql = require('mysql');

let gameScene = new Phaser.Scene('Game');

let resultsText = [50];

gameScene.init = function() {
  this.words = [{
      key: 'Animalwelfare',
      setXY: {
        x: 605,
        y: 5
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 33,
      answerY: 5
    },
    {
      key: 'Budgets',
      setXY: {
        x: 605,
        y: 30
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 520,
      answerY: 50
    },
    {
      key: 'Cleanair',
      setXY: {
        x: 725,
        y: 155
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 166,
      answerY: 5
    },
    {
      key: 'Communitygroups',
      setXY: {
        x: 605,
        y: 55
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society'
    },
    {
      key: 'Culturaltraditions',
      setXY: {
        x: 605,
        y: 80
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society'
    },
    {
      key: 'Development',
      setXY: {
        x: 605,
        y: 105
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 455,
      answerY: 140
    },
    {
      key: 'Earthsmaterials',
      setXY: {
        x: 605,
        y: 180
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 255,
      answerY: 5
    },
    {
      key: 'Education',
      setXY: {
        x: 710,
        y: 105
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society'
    },
    {
      key: 'Employment',
      setXY: {
        x: 605,
        y: 130
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 415,
      answerY: 165
    },
    {
      key: 'Enlightenment',
      setXY: {
        x: 605,
        y: 155
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Equity',
      setXY: {
        x: 745,
        y: 55
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 470,
      answerY: 110
    },
    {
      key: 'Factories',
      setXY: {
        x: 705,
        y: 130
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 515,
      answerY: 165
    },
    {
      key: 'Family',
      setXY: {
        x: 743,
        y: 480
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Governments',
      setXY: {
        x: 605,
        y: 205
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 350,
      answerY: 500
    },
    {
      key: 'Habitat',
      setXY: {
        x: 735,
        y: 180
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 400,
      answerY: 5
    },
    {
      key: 'Happiness',
      setXY: {
        x: 710,
        y: 205
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Health',
      setXY: {
        x: 733,
        y: 5
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Humanrights',
      setXY: {
        x: 605,
        y: 255
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society'
    },
    {
      key: 'Identity',
      setXY: {
        x: 735,
        y: 405
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Individualfulfillment',
      setXY: {
        x: 605,
        y: 230
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Individualopportunity',
      setXY: {
        x: 605,
        y: 255
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Jobsandwages',
      setXY: {
        x: 605,
        y: 280
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 375,
      answerY: 205
    },
    {
      key: 'Labor',
      setXY: {
        x: 733,
        y: 280
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 520,
      answerY: 205
    },
    {
      key: 'Land',
      setXY: {
        x: 757,
        y: 230
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 480,
      answerY: 5
    },
    {
      key: 'Legalframeworks',
      setXY: {
        x: 605,
        y: 305
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 370,
      answerY: 320
    },
    {
      key: 'Leisure',
      setXY: {
        x: 740,
        y: 80
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Markets',
      setXY: {
        x: 725,
        y: 355
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 520,
      answerY: 325
    },
    {
      key: 'Naturalcapital',
      setXY: {
        x: 605,
        y: 330
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 155,
      answerY: 60
    },
    {
      key: 'Naturalresources',
      setXY: {
        x: 605,
        y: 480
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 275,
      answerY: 60
    },
    {
      key: 'Physicalandbiologicallimitsoftheearth',
      setXY: {
        x: 605,
        y: 380
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 60,
      answerY: 30
    },
    {
      key: 'Prosperouseconomy',
      setXY: {
        x: 605,
        y: 455
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 355,
      answerY: 325
    },
    {
      key: 'Qualityoflife',
      setXY: {
        x: 605,
        y: 430
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Revenue',
      setXY: {
        x: 715,
        y: 330
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 405,
      answerY: 365
    },
    {
      key: 'Scenicbeauty',
      setXY: {
        x: 605,
        y: 355
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 360,
      answerY: 30
    },
    {
      key: 'Self-realization',
      setXY: {
        x: 680,
        y: 30
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Self-respect',
      setXY: {
        x: 710,
        y: 430
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing'
    },
    {
      key: 'Sharedpractices',
      setXY: {
        x: 605,
        y: 405
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society'
    },
    {
      key: 'Socialmedia',
      setXY: {
        x: 605,
        y: 505
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society'
    },
    {
      key: 'Socialstability',
      setXY: {
        x: 605,
        y: 530
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society'
    },
    {
      key: 'Solarenergy',
      setXY: {
        x: 704,
        y: 505
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 165,
      answerY: 130
    },
    {
      key: 'Taxes',
      setXY: {
        x: 748,
        y: 555
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 455,
      answerY: 415
    },
    {
      key: 'Theultimateends',
      setXY: {
        x: 605,
        y: 555
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 120,
      answerY: 95
    },
    {
      key: 'Theultimatemeans',
      setXY: {
        x: 605,
        y: 580
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 270,
      answerY: 95
    },
    {
      key: 'Water',
      setXY: {
        x: 740,
        y: 305
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 90,
      answerY: 60
    },
    {
      key: 'Wealth',
      setXY: {
        x: 717,
        y: 530
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 490,
      answerY: 445
    }
  ];
}

gameScene.preload = function() {
    this.load.image('compass', 'assets/compassnew.png');
    this.load.image('Cleanair', 'assets/Cleanair.png');
    this.load.image('Animalwelfare', 'assets/Animalwelfare.png');
    this.load.image('Budgets', 'assets/Budgets.png');
    this.load.image('Communitygroups', 'assets/Communitygroups.png');
    this.load.image('Culturaltraditions', 'assets/Culturaltraditions.png');
    this.load.image('Development', 'assets/Development.png');
    this.load.image('Earthsmaterials', 'assets/Earthsmaterials.png');
    this.load.image('Education', 'assets/Education.png');
    this.load.image('Employment', 'assets/Employment.png');
    this.load.image('Enlightenment', 'assets/Enlightenment.png');
    this.load.image('Equity', 'assets/Equity.png');
    this.load.image('Factories', 'assets/Factories.png');
    this.load.image('Family', 'assets/Family.png');
    this.load.image('Governments', 'assets/Governments.png');
    this.load.image('Habitat', 'assets/Habitat.png');
    this.load.image('Happiness', 'assets/Happiness.png');
    this.load.image('Health', 'assets/Health.png');
    this.load.image('Humanrights', 'assets/Humanrights.png');
    this.load.image('Identity', 'assets/Identity.png');
    this.load.image('Individualfulfillment', 'assets/Individualfulfillment.png');
    this.load.image('Individualopportunity', 'assets/Individualopportunity.png');
    this.load.image('Jobsandwages', 'assets/Jobsandwages.png');
    this.load.image('Labor', 'assets/Labor.png');
    this.load.image('Land', 'assets/Land.png');
    this.load.image('Legalframeworks', 'assets/Legalframeworks.png');
    this.load.image('Leisure', 'assets/Leisure.png');
    this.load.image('Markets', 'assets/Markets.png');
    this.load.image('Naturalcapital', 'assets/Naturalcapital.png');
    this.load.image('Naturalresources', 'assets/Naturalresources.png');
    this.load.image('Physicalandbiologicallimitsoftheearth', 'assets/Physicalandbiologicallimitsoftheearth.png');
    this.load.image('Prosperouseconomy', 'assets/Prosperouseconomy.png');
    this.load.image('Qualityoflife', 'assets/Qualityoflife.png');
    this.load.image('Revenue', 'assets/Revenue.png');
    this.load.image('Scenicbeauty', 'assets/Scenicbeauty.png');
    this.load.image('Self-realization', 'assets/Self-realization.png');
    this.load.image('Self-respect', 'assets/Self-respect.png');
    this.load.image('Sharedpractices', 'assets/Sharedpractices.png');
    this.load.image('Socialmedia', 'assets/Socialmedia.png');
    this.load.image('Socialstability', 'assets/Socialstability.png');
    this.load.image('Solarenergy', 'assets/Solarenergy.png');
    this.load.image('Taxes', 'assets/Taxes.png');
    this.load.image('Theultimateends', 'assets/Theultimateends.png');
    this.load.image('Theultimatemeans', 'assets/Theultimatemeans.png');
    this.load.image('Water', 'assets/Water.png');
    this.load.image('Wealth', 'assets/Wealth.png');
    this.load.image('Whereeverythingcomesfromandgoes', 'assets/Whereeverythingcomesfromandgoes.png');

    this.load.json('entries', 'assets/entries.json');
}

gameScene.create = function() {

  let data = this.cache.json.get('entries');
  //console.log(data[0].total);
  let stats = false;

  //this.showResults( data, data) ;

  this.add.image(0, 0, 'compass').setOrigin(0,0);
  this.items = this.add.group( this.words );

  /*console.log( this.words.length );
  for( let i = 0; i < this.words.length; i++ ) {
    console.log(this.words[i].answer);
  }*/

  Phaser.Actions.Call( this.items.getChildren(), function(item) {
    item.setInteractive();
    item.setOrigin(0,0);
    this.input.setDraggable(item);
    item.savex = item.x;
    item.savey = item.y;
  }, this);

  //var image18 = this.add.sprite(605, 220, 'Humanrights').setInteractive().setOrigin(0,0);
  //var image19 = this.add.sprite(605, 220, 'Identity').setInteractive().setOrigin(0,0);
  //var image20 = this.add.sprite(605, 220, 'Individualfulfillment').setInteractive().setOrigin(0,0);
  //var image21 = this.add.sprite(605, 220, 'Individualopportunity').setInteractive().setOrigin(0,0);

  const economyResult = this.add.text(0,0, '',  {fill: '#0f0'} );

  const submitButton = this.add.text(605, 605, 'Submit!', {fill: '#0f0'});
  submitButton.setInteractive();
  submitButton.resizeTween = this.tweens.add({
    targets: submitButton,
    scaleX: 1.5,
    scaleY: 1.5,
    duration: 300,
    paused: true,
    yoyo: true
  });

    //transparency tween
  submitButton.alphaTween = this.tweens.add({
    targets: submitButton,
    alpha: 0.7,
    duration: 300,
    paused: true
  });

  submitButton.on('pointerdown', function(pointer) {
    submitButton.resizeTween.play();
    stats = true;
    this.getLocation( this.items );
    this.showResults( data, this.items );
    retryButton.setVisible(true);
    answerButton.setVisible(true);
  }, this );

  //transparency tween
  submitButton.on('pointerover', function(pointer) {
    submitButton.alphaTween.play();
  });
  submitButton.on('pointerout', function(pointer) {
    submitButton.alphaTween.stop();
    submitButton.alpha = 1;
  });

  const answerButton = this.add.text(680, 650, 'Show\nAnswers', {fill: '#ffba00'} );
  answerButton.setInteractive();
  answerButton.setVisible(false);

  answerButton.on('pointerdown', function( pointer, gameObject) {
    answerButton.setVisible(false);

    let items = this.items.getChildren();
    console.log( this.words.length );
    for( let i = 0; i < this.words.length; i++ ) {
      if( items[i].x < 600 ) {
        if( this.words[i].answer == items[i].texture.compass) {
          items[i].x = this.words[i].answerX;
          items[i].y = this.words[i].answerY;
          console.log( 'x -> ' + items[i].x + '  y -> ' + items[i].y );
        } else {
          console.log('NO MATCH');
        }
        /*console.log( items[i].x);
        console.log( this.words[i].answer );
        items[i].setTint(0x6e9d49);
        items[i].x = 230;
        items[i].y = 15;
        items[i].setDepth(2);*/
      }
    }
  }, this );

  const retryButton = this.add.text(605, 650, 'Retry', {fill: '#f31'});
  retryButton.setInteractive();
  retryButton.setVisible(false);

  retryButton.on('pointerdown', function(pointer, gameObject)  {
    retryButton.setVisible(false);
    let items = this.items.getChildren();
    for( let i = 0; i < items.length; i++ ) {
      let tmp = items[i];
      this.input.setDraggable(items[i]);
      items[i].setInteractive(true);
      items[i].x = items[i].savex;
      items[i].y = items[i].savey;
      items[i].input.gameObject.clearTint();
      if( resultsText[i] != null && resultsText[i].setVisible) {
        resultsText[i].setVisible(false);
      }

    }
    console.log('retryButton');
  }, this);




  //  The pointer has to move 16 pixels before it's considered as a drag
  this.input.dragDistanceThreshold = 4;
      this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xfff4c6);
  });



  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
      if( dragY > dragX && dragY < (-1.02*dragX +570) ) {
        //wellbeing
        gameObject.setTint(0xef4136);
        gameObject.texture.compass = 'wellbeing';
      }
      else if( (dragY < (-1*dragX +564) ) && dragY < dragX ) {
        //nature
        gameObject.setTint(0x6e9d49);
        gameObject.texture.compass = 'nature';
      }
      else if(dragY < dragX && (dragY > (-1*dragX +400) ) && dragX < 600 ) {
        //economy
        gameObject.setTint(0x496f9e);
        gameObject.texture.compass = 'economy';
      }
      else if( (dragY > (-1*dragX +400) ) && dragY > dragX) {
        //society
        gameObject.setTint(0xfcb140);
        gameObject.texture.compass = 'society';
      }
      else {
        gameObject.clearTint();
        gameObject.texture.compass = '';
      }
  });

};

//find location of the placed words in the context of the compass
gameScene.getLocation = function( p1 ) {
  let items = p1.getChildren();
  for( let i = 0; i < items.length; i++ ) {
    let item = items[i];
    //item.disableInteractive();
    gameScene.input.setDraggable(item, false);
  }
}

gameScene.showResults = function( d1, p1 ) {
  var total = 0;

  let items = p1.getChildren();

  for( let i = 0; i < items.length; i++ ) {
    //console.log(items[i].x);
    if( items[i].x > 600 ) {
      // do nothing
    } else if( items[i].texture.compass == 'nature' ) {
      let temp = Number.parseFloat(d1[i].nature/d1[i].total*100).toPrecision(3);
      //const natureResult = this.add.text(items[i].x, items[i].y+20, temp +'% also chose nature', {fill: '#f31'});
      resultsText[i] = gameScene.add.text( items[i].x, items[i].y+20, temp +'% also chose Nature',{color: '110,157,73', fontSize:'10px'} );
      if( this.words[i].answer != 'nature' ) {
        items[i].setTint(0xb80db5);
      }
    } else if( items[i].texture.compass == 'economy' ) {
      let temp = Number.parseFloat(d1[i].economy/d1[i].total*100).toPrecision(3);
      //economyResult = this.add.text(items[i].x, items[i].y+20, temp +'% also chose economy', {fill: '#f31'});
      resultsText[i] = gameScene.add.text(items[i].x, items[i].y+20, temp +'% also chose Economy', {fill: '73,111,158', fontSize:'10px'});
      console.log( items[i].texture.key );
      console.log( items[i].x + ' ' + items[i].y );
      if( this.words[i].answer != 'economy' ) {
        items[i].setTint(0xb80db5);
      }
    } else if( items[i].texture.compass == 'society' ) {
      let temp = Number.parseFloat(d1[i].society/d1[i].total*100).toPrecision(3);
      //const natureResult = this.add.text(items[i].x, items[i].y+20, temp +'% also chose society', {fill: '#f31'});
      resultsText[i] = gameScene.add.text( items[i].x, items[i].y+20, temp +'% also chose Society',{color: '252,177,64', fontSize:'10px'} );
      if( this.words[i].answer != 'society' ) {
        items[i].setTint(0xb80db5);
      }
    } else if( items[i].texture.compass == 'wellbeing' ) {
      let temp = Number.parseFloat(d1[i].wellbeing/d1[i].total*100).toPrecision(3);
      //const natureResult = this.add.text(items[i].x, items[i].y+20, temp +'% also chose wellbeing', {fill: '#f31'});
      resultsText[i] = gameScene.add.text( items[i].x, items[i].y+20, temp +'% also chose Well-being',{color: '239,65,54', fontSize:'10px'} );
      if( this.words[i].answer != 'wellbeing' ) {
        items[i].setTint(0xb80db5);
      }
    }
    //console.log(d1[i].entry + ' ' + (d1[i].nature/d1[i].total*100));
    //console.log( items[i].texture.key + ' ' + items[i].texture.compass);
  }
}

gameScene.end = function() {

};




let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 700,
    scene: gameScene,
    title: 'Compass Sorting Game',
    pixelArt: false,
};

let game = new Phaser.Game(config);

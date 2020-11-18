let gameScene = new Phaser.Scene('Game');

let resultsText = [50];
let results = [50];
var newdata = new Array();

gameScene.init = function() {
  submitted = false;
  this.words = [{
      key: 'Animalwelfare',
      id: 0,
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
      id: 1,
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
      id: 2,
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
      id: 3,
      setXY: {
        x: 605,
        y: 55
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 90,
      answerY: 520
    },
    {
      key: 'Culturaltraditions',
      id: 4,
      setXY: {
        x: 605,
        y: 80
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 335,
      answerY: 520
    },
    {
      key: 'Development',
      id: 5,
      setXY: {
        x: 605,
        y: 105
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 455,
      answerY: 150
    },
    {
      key: 'Earthsmaterials',
      id: 6,
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
      id: 7,
      setXY: {
        x: 710,
        y: 105
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 250,
      answerY: 560
    },
    {
      key: 'Employment',
      id: 8,
      setXY: {
        x: 605,
        y: 130
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 415,
      answerY: 175
    },
    {
      key: 'Enlightenment',
      id: 9,
      setXY: {
        x: 605,
        y: 155
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 310
    },
    {
      key: 'Equity',
      id: 10,
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
      id: 11,
      setXY: {
        x: 705,
        y: 130
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 515,
      answerY: 175
    },
    {
      key: 'Family',
      id: 12,
      setXY: {
        x: 743,
        y: 480
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 90
    },
    {
      key: 'Governments',
      id: 13,
      setXY: {
        x: 605,
        y: 205
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 120,
      answerY: 480
    },
    {
      key: 'Habitat',
      id: 14,
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
      id: 15,
      setXY: {
        x: 710,
        y: 205
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 215
    },
    {
      key: 'Health',
      id: 16,
      setXY: {
        x: 733,
        y: 5
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 130
    },
    {
      key: 'Humanrights',
      id: 17,
      setXY: {
        x: 605,
        y: 255
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 70,
      answerY: 560
    },
    {
      key: 'Identity',
      id: 18,
      setXY: {
        x: 735,
        y: 405
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 460
    },
    {
      key: 'Individualfulfillment',
      id: 19,
      setXY: {
        x: 605,
        y: 230
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 390
    },
    {
      key: 'Individualopportunity',
      id: 20,
      setXY: {
        x: 605,
        y: 255
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 350
    },
    {
      key: 'Jobsandwages',
      id: 21,
      setXY: {
        x: 605,
        y: 280
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 375,
      answerY: 225
    },
    {
      key: 'Labor',
      id: 22,
      setXY: {
        x: 733,
        y: 280
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 520,
      answerY: 225
    },
    {
      key: 'Land',
      id: 23,
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
      id: 24,
      setXY: {
        x: 605,
        y: 305
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 320,
      answerY: 480
    },
    {
      key: 'Leisure',
      id: 25,
      setXY: {
        x: 740,
        y: 80
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 170
    },
    {
      key: 'Markets',
      id: 26,
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
      id: 27,
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
      id: 28,
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
      id: 29,
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
      id: 30,
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
      id: 31,
      setXY: {
        x: 605,
        y: 430
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 350
    },
    {
      key: 'Revenue',
      id: 32,
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
      id: 33,
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
      id: 34,
      setXY: {
        x: 680,
        y: 30
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 250
    },
    {
      key: 'Self-respect',
      id: 35,
      setXY: {
        x: 710,
        y: 430
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'wellbeing',
      answerX: 10,
      answerY: 420
    },
    {
      key: 'Sharedpractices',
      id: 36,
      setXY: {
        x: 605,
        y: 405
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 410,
      answerY: 550
    },
    {
      key: 'Socialmedia',
      id: 37,
      setXY: {
        x: 605,
        y: 505
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 150,
      answerY: 440
    },
    {
      key: 'Socialstability',
      id: 38,
      setXY: {
        x: 605,
        y: 530
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'society',
      answerX: 300,
      answerY: 440
    },
    {
      key: 'Solarenergy',
      id: 39,
      setXY: {
        x: 704,
        y: 505
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 230,
      answerY: 180
    },
    {
      key: 'Taxes',
      id: 40,
      setXY: {
        x: 748,
        y: 555
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'economy',
      answerX: 455,
      answerY: 405
    },
    {
      key: 'Theultimateends',
      id: 41,
      setXY: {
        x: 605,
        y: 555
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 120,
      answerY: 90
    },
    {
      key: 'Theultimatemeans',
      id: 42,
      setXY: {
        x: 605,
        y: 580
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 270,
      answerY: 90
    },
    {
      key: 'Water',
      id: 43,
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
      id: 44,
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
    },
    {
      key: 'Whereeverythingcomesfromandgoes',
      id: 45,
      setXY: {
        x: 605,
        y: 380
      },
      savex: 0,
      savey: 0,
      compass: '',
      answer: 'nature',
      answerX: 140,
      answerY: 120
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
    this.load.json('newentries', 'assets/newentries.json');
    this.getData();
}

gameScene.create = function() {
  //let data = this.cache.json.get('newentries');
  //let data = this.cache.json.get('newentries');
  let data = newdata;

  //console.log( newdata);

  //console.log(data);
  let stats = false;

  //this.showResults( data, data) ;

  this.add.image(0, 0, 'compass').setOrigin(0,0);
  var ht = this.add.text(75, 605, '', {fill: '#FFF', fontSize: '18px'});
  var ht1 = this.add.text(75, 630, '', {fill: '#FFF', fontSize: '18px'});
  var ht2 = this.add.text(75, 655, '', {fill: '#FFF', fontSize: '18px'});
  var ht3 = this.add.text(75, 680, '', {fill: '#FFF', fontSize: '18px'});
  this.items = this.add.group( this.words );

  /*console.log( this.words.length );
  for( let i = 0; i < this.words.length; i++ ) {
    console.log(this.words[i].answer);
  }*/
  let items = this.items.getChildren();

  for( let i = 0; i < this.words.length; i++ ) {
    items[i].setInteractive();
    items[i].setOrigin(0,0);
    this.input.setDraggable(items[i]);
    items[i].savex = items[i].x;
    items[i].savey = items[i].y;



    items[i].ratioNature = (data[i].nature/data[i].total *100).toFixed(0);
    items[i].ratioEconomy = (data[i].economy/data[i].total*100).toFixed(0);
    items[i].ratioSociety = (data[i].society/data[i].total*100).toFixed(0);
    items[i].ratioWellbeing = (data[i].wellbeing/data[i].total*100).toFixed(0);

    //console.log(items[i].ratioNature + '   ' + items[i].ratioEconomy + '   ' +items[i].ratioSociety + '   ' + items[i].ratioWellbeing);
  }

  /*Phaser.Actions.Call( this.items.getChildren(), function(item) {
    item.setInteractive();
    item.setOrigin(0,0);
    this.input.setDraggable(item);
    item.savex = item.x;
    item.savey = item.y;
  }, this);*/

  //var image18 = this.add.sprite(605, 220, 'Humanrights').setInteractive().setOrigin(0,0);
  //var image19 = this.add.sprite(605, 220, 'Identity').setInteractive().setOrigin(0,0);
  //var image20 = this.add.sprite(605, 220, 'Individualfulfillment').setInteractive().setOrigin(0,0);
  //var image21 = this.add.sprite(605, 220, 'Individualopportunity').setInteractive().setOrigin(0,0);

  //const economyResult = this.add.text(0,0, '',  {fill: '#0f0'} );

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
    submitButton.setVisible(false);
    stats = true;
    this.getLocation( this.items );
    this.showResults( data, this.items );
    retryButton.setVisible(true);
    answerButton.setVisible(true);
    submitted = true;

    this.postAnswers( this.items, data );
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
    for( let i = 0; i < this.words.length; i++ ) {
      if( items[i].x < 600 ) {
        items[i].x = this.words[i].answerX;
        items[i].y = this.words[i].answerY;

        resultsText[i].x = this.words[i].answerX;
        resultsText[i].y = this.words[i].answerY+20;
        resultsText[i].text = resultsText[i].text.replace( ' also', '');
      }
    }
  }, this );

  const retryButton = this.add.text(605, 650, 'Retry', {fill: '#f31'});
  retryButton.setInteractive();
  retryButton.setVisible(false);


  retryButton.on('pointerdown', function(pointer, gameObject)  {
    retryButton.setVisible(false);
    answerButton.setVisible(false);
    submitButton.setVisible(true);
    let items = this.items.getChildren();
    for( let i = 0; i < items.length; i++ ) {
      this.input.setDraggable(items[i]);
      items[i].setInteractive(true);
      items[i].x = items[i].savex;
      items[i].y = items[i].savey;
      items[i].texture.compass = '';
      items[i].input.gameObject.clearTint();
      if( resultsText[i] != null && resultsText[i].setVisible) {
        resultsText[i].setVisible(false);
      }

    }
    submitted = false;
  }, this);




  //  The pointer has to move 16 pixels before it's considered as a drag
  this.input.dragDistanceThreshold = 4;
  this.input.on('dragstart', function (pointer, gameObject) {
    gameObject.setTint(0xfff4c6);
  });

  //set the hover text here
  this.input.on('pointerover', function(  pointer, gameObject ) {
    let items = this.items.getChildren();

    if(gameObject[0].x < 600 && submitted ) {
      //console.log( gameObject[0].texture.key + '  ' + gameObject[0].x + '  ' + gameObject[0].y );

      //console.log( gameObject[0].texture.key + '   ' + gameObject[0].texture.compass );
      var blah = this.words.find( x => x.key == gameObject[0].texture.key);

      //console.log( resultsText[blah.id].text );
      //ht.setText(gameObject[0].texture.key + ': ' + resultsText[blah.id].text);
      ht.setText( gameObject[0].texture.key + ' matches ' + results[blah.id]);

      if(gameObject[0].texture.compass == 'nature'  ) {
        ht.setTint(0x6e9d49);
        ht1.setTint(0x496f9e);
        ht2.setTint(0xfcb140);
        ht3.setTint(0xef4136);
        ht.setText( gameObject[0].texture.key + ' matches ' + items[blah.id].ratioNature + '%');
        ht1.setText( items[blah.id].ratioEconomy + '% chose economy');
        ht2.setText( items[blah.id].ratioSociety + '% chose society');
        ht3.setText( items[blah.id].ratioWellbeing + '% chose wellbeing');
      } else if(gameObject[0].texture.compass == 'economy'  ) {
        ht.setTint(0x496f9e);
        ht1.setTint(0x6e9d49);
        ht2.setTint(0xfcb140);
        ht3.setTint(0xef4136);
        ht.setText( gameObject[0].texture.key + ' matches ' + items[blah.id].ratioEconomy + '%');
        ht1.setText( items[blah.id].ratioNature + '% chose nature');
        ht2.setText( items[blah.id].ratioSociety + '% chose society');
        ht3.setText( items[blah.id].ratioWellbeing + '% chose wellbeing');
      } else if(gameObject[0].texture.compass == 'society'  ) {
        ht.setTint(0xfcb140);
        ht1.setTint(0x6e9d49);
        ht2.setTint(0x496f9e);
        ht3.setTint(0xef4136);
        ht.setText( gameObject[0].texture.key + ' matches ' + items[blah.id].ratioSociety + '%');
        ht1.setText( items[blah.id].ratioNature + '% chose nature');
        ht2.setText( items[blah.id].ratioEconomy + '% chose economy');
        ht3.setText( items[blah.id].ratioWellbeing + '% chose wellbeing');
      } else if(gameObject[0].texture.compass == 'wellbeing'  ) {
        ht.setTint(0xef4136);
        ht1.setTint(0x6e9d49);
        ht2.setTint(0x496f9e);
        ht3.setTint(0xfcb140);
        ht.setText( gameObject[0].texture.key + ' matches ' + items[blah.id].ratioWellbeing + '%');
        ht1.setText( items[blah.id].ratioNature + '% chose nature');
        ht2.setText( items[blah.id].ratioEconomy + '% chose economy');
        ht3.setText( items[blah.id].ratioSociety + '% chose society');
      }

    }

  },this );

  this.input.on('pointerout', function() {
    ht.setText('');
    ht1.setText('');
    ht2.setText('');
    ht3.setText('');

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

gameScene.getStats = function( answer, correct ) {

}

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
  //console.log(items.length);
  for( let i = 0; i < items.length; i++ ) {
    //console.log(items[i].x);


    if( items[i].x > 6000 ) {
      console.log(">6000");
      // do nothing
    } else if( items[i].texture.compass == 'nature' ) {
      results[i] = items[i].ratioNature +'%';
      resultsText[i] = gameScene.add.text( items[i].x, items[i].y+20, items[i].ratioNature +'% of others also chose Nature',{color: '110,157,73', fontSize:'10px'} );
      resultsText[i].setVisible(false);
      if( this.words[i].answer != 'nature' ) {
        items[i].setTint(0xb80db5);
      }
    } else if( items[i].texture.compass == 'economy' ) {
      resultsText[i] = gameScene.add.text(items[i].x, items[i].y+20, items[i].ratioEconomy +'% of others also chose Economy', {fill: '73,111,158', fontSize:'10px'});
      resultsText[i].setVisible(false);
      if( this.words[i].answer != 'economy' ) {
        items[i].setTint(0xb80db5);
      }
    } else if( items[i].texture.compass == 'society' ) {
      resultsText[i] = gameScene.add.text( items[i].x, items[i].y+20, items[i].ratioSociety +'% of others also chose Society',{color: '252,177,64', fontSize:'10px'} );
      resultsText[i].setVisible(false);
      if( this.words[i].answer != 'society' ) {
        items[i].setTint(0xb80db5);
      }
    } else if( items[i].texture.compass == 'wellbeing' ) {
      resultsText[i] = gameScene.add.text( items[i].x, items[i].y+20, items[i].ratioWellbeing +'% of others also chose Well-being',{color: '239,65,54', fontSize:'10px'} );
      resultsText[i].setVisible(false);
      if( this.words[i].answer != 'wellbeing' ) {
        items[i].setTint(0xb80db5);
      }
    }
    //console.log(d1[i].entry + ' ' + (d1[i].nature/d1[i].total*100));
    //console.log( items[i].texture.key + ' ' + items[i].texture.compass);
  }
}

gameScene.getData = function() {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resp =  JSON.parse(this.responseText);
      //console.log( "THEREKLJ: \n " + resp);
      newdata = resp;
    }
  };
  xmlhttp.open("GET", "test.php", true);
  xmlhttp.send();
}

gameScene.postAnswers = function( p1, data ) {
  let items = p1.getChildren();

  var send = [];




  for( let i = 0; i < items.length; i++ ) {
    if( items[i].texture.compass ) {
      data[i].total++;
      if( items[i].texture.compass == 'nature' ) {
        data[i].nature++;
      } else if( items[i].texture.compass == 'economy' ) {
        data[i].economy++;
      } else if( items[i].texture.compass == 'society' ) {
        data[i].society++;
      } else if( items[i].texture.compass == 'wellbeing' ) {
        data[i].wellbeing++;
      }
      items[i].ratioNature = (data[i].nature/data[i].total*100).toFixed(0);
      items[i].ratioEconomy = (data[i].economy/data[i].total*100).toFixed(0);
      items[i].ratioSociety = (data[i].society/data[i].total*100).toFixed(0);
      items[i].ratioWellbeing = (data[i].wellbeing/data[i].total*100).toFixed(0);

      send[i] = {
        name: items[i].texture.key,
        comp: items[i].texture.compass,
      }
    } else {
      send[i] = {
        name: items[i].texture.key,
        comp: '',
      }
    }

  }
  //console.log( send );
  var myJSON = JSON.stringify(send);

  //console.log( myJSON );
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resp = this.responseText;
      //console.log(resp);
    }
  };
  xmlhttp.open("GET", "test.php?data=" + myJSON, true);
  xmlhttp.send();
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
  //let newentries = this.getData();

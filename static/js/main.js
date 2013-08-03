// professions
// id Название профы	Процентное отношение
var professions = {
    0: {'title': 'Кладоискатель (Fortune Seeker)', 'chance': 7.42},
    1: {'title': 'Глас Судьбы (Doom Cryer)', 'chance': 6.11},
    2: {'title': 'Каратель (Doombringer)', 'chance': 6.09},
    3: {'title': 'Титан (Titan)', 'chance': 5.34},
    4: {'title': 'Повелитель Бури (Storm Screamer)', 'chance': 4.69},
    5: {'title': 'Призрачный Танцор (Spectral Dancer)', 'chance': 4.62},
    6: {'title': 'Мастер (Maestro)', 'chance': 4.53},
    7: {'title': 'Жрец Евы (Evas Saint)', 'chance': 4.26},
    8: {'title': 'Авантюрист (Adventurer)', 'chance': 3.90},
    9: {'title': 'Деспот (Dominator)', 'chance': 3.60},
    10: {'title': 'Кардинал (Cardinal)', 'chance': 3.35},
    11: {'title': 'Владыка Теней (Spectral Master)', 'chance': 3.31},
    12: {'title': 'Дуэлист (Duelist)', 'chance': 3.28},
    13: {'title': 'Аватар (Grand Khavatari)', 'chance': 3.03},
    14: {'title': 'Снайпер (Sagittarius)', 'chance': 2.81},
    15: {'title': 'Призрачный Охотник (Ghost Hunter)', 'chance': 2.61},
    16: {'title': 'Жрец Шилен (Shillien Saint)', 'chance': 2.57},
    17: {'title': 'Храмовник Шилен (Shillien Templar)', 'chance': 2.41},
    18: {'title': 'Рыцарь Феникса (Phoenix Knight)', 'chance': 2.32},
    19: {'title': 'Пожиратель Душ (Soultaker)', 'chance': 2.20},
    20: {'title': 'Виртуоз (Sword Muse)', 'chance': 2.14},
    21: {'title': 'Рыцарь Ада (Hell Knight)', 'chance': 1.91},
    22: {'title': 'Магистр Магии (Mystic Muse)', 'chance': 1.88},
    23: {'title': 'Чернокнижник (Arcana Lord)', 'chance': 1.87},
    24: {'title': 'Апостол (Hierophant)', 'chance': 1.65},
    25: {'title': 'Полководец (Dreadnought)', 'chance': 1.64},
    26: {'title': 'Страж Теней (Ghost Sentinel)', 'chance': 1.54},
    27: {'title': 'Страж Лунного Света (Moonlight Sentinel)', 'chance': 1.34},
    28: {'title': 'Архимаг (Archmage)', 'chance': 1.32},
    29: {'title': 'Инквизитор (Female Soul Hound)', 'chance': 1.29},
    30: {'title': 'Мастер Стихий (Elemental Master)', 'chance': 1.15},
    31: {'title': 'Диверсант (Trickster)', 'chance': 1.06},
    32: {'title': 'Инквизитор (Male Soul Hound)', 'chance': 1.01},
    33: {'title': 'Странник Ветра (Wind Rider)', 'chance': 0.98},
    34: {'title': 'Храмовник Евы (Evas Templar)', 'chance': 0.77},
};


//models

var Card = Backbone.Model.extend({
});

var Game = Backbone.Model.extend({});

// collections
var CardsCollection = Backbone.Collection.extend({
    model: Card,
    addCard: function(card){
        this.container.append(
            card.render().el
        );
    },
    removeCard: function(card){

    }
});

var SupportCollection = CardsCollection.extend({
});

var DDCollection = CardsCollection.extend({
});

var ShitCollection = CardsCollection.extend({
});


// views
var BaseView = Backbone.View.extend({
    events: {
        'click': 'remove'
    },

    hide: function(){
        this.$el.removeClass('active');
    },
    show: function(){
        this.$el.addClass('active');
    },
});

var StartView = BaseView.extend({
    el: $("#start-window"),
});


var CardView = BaseView.extend({
  tagName: 'li',
  className: 'cart-container',
  template: _.template(_.unescape($('.cart-container').html())),

  render: function() {
      this.$el.html(
          this.template(this.model.toJSON())
      );
      return this;
  },


});


var GameView = BaseView.extend({
    passes: 0,
    el: $("#game-window"),
    events: {
        'click .pass-cards': 'pass_cards',
        'click .pass-party': 'pass_party',
    },

    initialize: function(){
        this.support_collection = new SupportCollection();
        this.support_collection.container = this.$el.find('.support-row ul');
        this.pass_cards(true);
        this.pass_cards(true);
        this.pass_cards(true);

        this.shit_collection = new ShitCollection();
        this.shit_collection.container = this.$el.find('.shit-row ul');
        for (var i = 10; i < 20; i++) {
            var prof = professions[i];
            var card = new CardView({id: 'card' + i,
                                     model: new Card({
                                         'title': prof.title,
                                         'chance': prof.chance
                                     })});
            this.shit_collection.addCard(card);
        }


        this.dd_collection = new DDCollection();
        this.dd_collection.container = this.$el.find('.dd-row ul');

        for (var i = 5; i < 10; i++) {
            var prof = professions[i];
            var card = new CardView({id: 'card' + i,
                                     model: new Card({
                                         'title': prof.title,
                                         'chance': prof.chance
                                     })});
            this.dd_collection.addCard(card);
        }
    },

    pass_cards: function(pass){
        if(this.passes < 1){
            if(pass != true) {
                this.passes += 1;
            }
        } else {
            this.$el.find('.pass-cards').hide();
            this.$el.find('.pass-cards-message').show();
        }
        for (var i = 0; i < 2; i++) {
            var prof = professions[i];
            var card = new CardView({id: 'card' + i,
                                     model: new Card({
                                         'title': prof.title,
                                         'chance': prof.chance
                                     })});
            this.support_collection.addCard(card);
        }
    },

    pass_party: function(){
        for (var i = 0; i < 3; i++) {
            var prof = professions[i];
            var card = new CardView({id: 'card' + i,
                                     model: new Card({
                                         'title': prof.title,
                                         'chance': prof.chance
                                     })});
            this.support_collection.addCard(card);
        }
    },
});

// routing

var App = Backbone.Router.extend({
    routes: {
        "!/start": "start",
        "!/":      "default",
        "!/game":  "game",
    },

    initialize: function() {
        this.start = new StartView;
        this.game = new GameView;
    },

    start: function() {
        console.log(this.start);
        this.start.show();
    },

    game: function() {
        this.start.hide();
        this.game.show();
    },

    default: function() {
        this.start.hide();
        this.game.hide();
    },
});


$(document).ready(function(){
    var app = new App();
    Backbone.history.start();
});

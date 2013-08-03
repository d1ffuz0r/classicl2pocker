// professions
// id Название профы	Процентное отношение
var professions = {
    0: {'title': 'Кладоискатель (Fortune Seeker)', 'chance': 7.42, 'img': './img/prof/.png'},
    1: {'title': 'Глас Судьбы (Doom Cryer)', 'chance': 6.11, 'img': './img/prof/.png'},
    2: {'title': 'Каратель (Doombringer)', 'chance': 6.09, 'img': './img/prof/.png'},
    3: {'title': 'Титан (Titan)', 'chance': 5.34, 'img': './img/prof/.png'},
    4: {'title': 'Повелитель Бури (Storm Screamer)', 'chance': 4.69, 'img': './img/prof/.png'},
    5: {'title': 'Призрачный Танцор (Spectral Dancer)', 'chance': 4.62, 'img': './img/prof/.png'},
    6: {'title': 'Мастер (Maestro)', 'chance': 4.53, 'img': './img/prof/.png'},
    7: {'title': 'Жрец Евы (Evas Saint)', 'chance': 4.26, 'img': './img/prof/.png'},
    8: {'title': 'Авантюрист (Adventurer)', 'chance': 3.90, 'img': './img/prof/.png'},
    9: {'title': 'Деспот (Dominator)', 'chance': 3.60, 'img': './img/prof/.png'},
    10: {'title': 'Кардинал (Cardinal)', 'chance': 3.35, 'img': './img/prof/.png'},
    11: {'title': 'Владыка Теней (Spectral Master)', 'chance': 3.31, 'img': './img/prof/.png'},
    12: {'title': 'Дуэлист (Duelist)', 'chance': 3.28, 'img': './img/prof/.png'},
    13: {'title': 'Аватар (Grand Khavatari)', 'chance': 3.03, 'img': './img/prof/.png'},
    14: {'title': 'Снайпер (Sagittarius)', 'chance': 2.81, 'img': './img/prof/.png'},
    15: {'title': 'Призрачный Охотник (Ghost Hunter)', 'chance': 2.61, 'img': './img/prof/.png'},
    16: {'title': 'Жрец Шилен (Shillien Saint)', 'chance': 2.57, 'img': './img/prof/.png'},
    17: {'title': 'Храмовник Шилен (Shillien Templar)', 'chance': 2.41, 'img': './img/prof/.png'},
    18: {'title': 'Рыцарь Феникса (Phoenix Knight)', 'chance': 2.32, 'img': './img/prof/.png'},
    19: {'title': 'Пожиратель Душ (Soultaker)', 'chance': 2.20, 'img': './img/prof/.png'},
    20: {'title': 'Виртуоз (Sword Muse)', 'chance': 2.14, 'img': './img/prof/.png'},
    21: {'title': 'Рыцарь Ада (Hell Knight)', 'chance': 1.91, 'img': './img/prof/.png'},
    22: {'title': 'Магистр Магии (Mystic Muse)', 'chance': 1.88, 'img': './img/prof/.png'},
    23: {'title': 'Чернокнижник (Arcana Lord)', 'chance': 1.87, 'img': './img/prof/.png'},
    24: {'title': 'Апостол (Hierophant)', 'chance': 1.65, 'img': './img/prof/.png'},
    25: {'title': 'Полководец (Dreadnought)', 'chance': 1.64, 'img': './img/prof/.png'},
    26: {'title': 'Страж Теней (Ghost Sentinel)', 'chance': 1.54, 'img': './img/prof/.png'},
    27: {'title': 'Страж Лунного Света (Moonlight Sentinel)', 'chance': 1.34, 'img': './img/prof/.png'},
    28: {'title': 'Архимаг (Archmage)', 'chance': 1.32, 'img': './img/prof/.png'},
    29: {'title': 'Инквизитор (Female Soul Hound)', 'chance': 1.29, 'img': './img/prof/.png'},
    30: {'title': 'Мастер Стихий (Elemental Master)', 'chance': 1.15, 'img': './img/prof/.png'},
    31: {'title': 'Диверсант (Trickster)', 'chance': 1.06, 'img': './img/prof/.png'},
    32: {'title': 'Инквизитор (Male Soul Hound)', 'chance': 1.01, 'img': './img/prof/.png'},
    33: {'title': 'Странник Ветра (Wind Rider)', 'chance': 0.98, 'img': './img/prof/.png'},
    34: {'title': 'Храмовник Евы (Evas Templar)', 'chance': 0.77, 'img': './img/prof/.png'},
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
        this.add(card.model)
    },
    removeCard: function(prof){
        console.log(prof)
        this.container.find('#card' + prof).remove()
        this.remove(prof);
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

  initialize: function(){
        this.model.bind('change', this.render, this);
        this.model.bind('destroy', this.remove, this);
  },

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
        for (var i = 0; i < 8; i++) {
            var prof = professions[i];
            var card = new CardView({id: 'card' + i,
                                     model: new Card({
                                         'id': i,
                                         'title': prof.title,
                                         'chance': prof.chance
                                     })});
            this.support_collection.addCard(card);
        }

        this.shit_collection = new ShitCollection();
        this.shit_collection.container = this.$el.find('.shit-row ul');
        for (var i = 10; i < 20; i++) {
            var prof = professions[i];
            var card = new CardView({id: 'card' + i,
                                     model: new Card({
                                         'id': i,
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
                                         'id': i,
                                         'title': prof.title,
                                         'chance': prof.chance
                                     })});
            this.dd_collection.addCard(card);
        }
    },

    pass_cards: function(){
        if(this.passes <= 1){
            this.passes += 1;
        } else {
            this.$el.find('.pass-cards').hide();
            this.$el.find('.pass-cards-message').show();
            return;
        }

        var count = this.support_collection.length - 1;
        for (var i = 0; i < 2; i++) {
            var rnd = Math.floor(Math.random(count) * 10);
            var prof = this.support_collection.at(rnd);
            if(!prof){
                while(!prof){
                    var rnd = Math.floor(Math.random(count) * 10);
                    var prof = this.support_collection.at(rnd);
                }
            }
            console.log([count, prof.id])
            this.support_collection.removeCard(prof.id);
        }

        for (var i = 0; i < 2; i++) {
            var prof = professions[Math.floor(Math.random(professions.length) * 10)];
            var card = new CardView({id: 'card' + i,
                                     model: new Card({
                                         'id': i,
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
                                         'id': i,
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

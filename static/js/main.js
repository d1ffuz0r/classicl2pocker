// professions
// id Название профы	Процентное отношение
var DD = 1;
var SUPPORT = 2;
var SHIT = 3;

var professions = {
    0: {'id': 0, 'type': SHIT, 'title': 'Кладоискатель (Fortune Seeker)', 'chance': 7.42, 'img': './img/prof/.png'},
    1: {'id': 1, 'type': SUPPORT, 'title': 'Глас Судьбы (Doom Cryer)', 'chance': 6.11, 'img': './img/prof/.png'},
    2: {'id': 2, 'type': DD, 'title': 'Каратель (Doombringer)', 'chance': 6.09, 'img': './img/prof/.png'},
    3: {'id': 3, 'type': DD, 'title': 'Титан (Titan)', 'chance': 5.34, 'img': './img/prof/.png'},
    4: {'id': 4, 'type': DD, 'title': 'Повелитель Бури (Storm Screamer)', 'chance': 4.69, 'img': './img/prof/.png'},
    5: {'id': 5, 'type': SUPPORT, 'title': 'Призрачный Танцор (Spectral Dancer)', 'chance': 4.62, 'img': './img/prof/.png'},
    6: {'id': 6, 'type': DD, 'title': 'Мастер (Maestro)', 'chance': 4.53, 'img': './img/prof/.png'},
    7: {'id': 7, 'type': SUPPORT, 'title': 'Жрец Евы (Evas Saint)', 'chance': 4.26, 'img': './img/prof/.png'},
    8: {'id': 8, 'type': DD, 'title': 'Авантюрист (Adventurer)', 'chance': 3.90, 'img': './img/prof/.png'},
    9: {'id': 9, 'type': SUPPORT, 'title': 'Деспот (Dominator)', 'chance': 3.60, 'img': './img/prof/.png'},
    10: {'id': 10, 'type': SUPPORT, 'title': 'Кардинал (Cardinal)', 'chance': 3.35, 'img': './img/prof/.png'},
    11: {'id': 11, 'type': SHIT, 'title': 'Владыка Теней (Spectral Master)', 'chance': 3.31, 'img': './img/prof/.png'},
    12: {'id': 12, 'type': DD, 'title': 'Дуэлист (Duelist)', 'chance': 3.28, 'img': './img/prof/.png'},
    13: {'id': 13, 'type': DD, 'title': 'Аватар (Grand Khavatari)', 'chance': 3.03, 'img': './img/prof/.png'},
    14: {'id': 14, 'type': DD, 'title': 'Снайпер (Sagittarius)', 'chance': 2.81, 'img': './img/prof/.png'},
    15: {'id': 15, 'type': DD, 'title': 'Призрачный Охотник (Ghost Hunter)', 'chance': 2.61, 'img': './img/prof/.png'},
    16: {'id': 16, 'type': SUPPORT, 'title': 'Жрец Шилен (Shillien Saint)', 'chance': 2.57, 'img': './img/prof/.png'},
    17: {'id': 17, 'type': DD, 'title': 'Храмовник Шилен (Shillien Templar)', 'chance': 2.41, 'img': './img/prof/.png'},
    18: {'id': 18, 'type': DD, 'title': 'Рыцарь Феникса (Phoenix Knight)', 'chance': 2.32, 'img': './img/prof/.png'},
    19: {'id': 19, 'type': DD, 'title': 'Пожиратель Душ (Soultaker)', 'chance': 2.20, 'img': './img/prof/.png'},
    20: {'id': 20, 'type': SUPPORT, 'title': 'Виртуоз (Sword Muse)', 'chance': 2.14, 'img': './img/prof/.png'},
    21: {'id': 21, 'type': DD, 'title': 'Рыцарь Ада (Hell Knight)', 'chance': 1.91, 'img': './img/prof/.png'},
    22: {'id': 22, 'type': DD, 'title': 'Магистр Магии (Mystic Muse)', 'chance': 1.88, 'img': './img/prof/.png'},
    23: {'id': 23, 'type': DD, 'title': 'Чернокнижник (Arcana Lord)', 'chance': 1.87, 'img': './img/prof/.png'},
    24: {'id': 24, 'type': SUPPORT, 'title': 'Апостол (Hierophant)', 'chance': 1.65, 'img': './img/prof/.png'},
    25: {'id': 25, 'type': DD, 'title': 'Полководец (Dreadnought)', 'chance': 1.64, 'img': './img/prof/.png'},
    26: {'id': 26, 'type': DD, 'title': 'Страж Теней (Ghost Sentinel)', 'chance': 1.54, 'img': './img/prof/.png'},
    27: {'id': 27, 'type': DD, 'title': 'Страж Лунного Света (Moonlight Sentinel)', 'chance': 1.34, 'img': './img/prof/.png'},
    28: {'id': 28, 'type': DD, 'title': 'Архимаг (Archmage)', 'chance': 1.32, 'img': './img/prof/.png'},
    29: {'id': 29, 'type': DD, 'title': 'Инквизитор (Female Soul Hound)', 'chance': 1.29, 'img': './img/prof/.png'},
    30: {'id': 30, 'type': SHIT, 'title': 'Мастер Стихий (Elemental Master)', 'chance': 1.15, 'img': './img/prof/.png'},
    31: {'id': 31, 'type': DD, 'title': 'Диверсант (Trickster)', 'chance': 1.06, 'img': './img/prof/.png'},
    32: {'id': 32, 'type': DD, 'title': 'Инквизитор (Male Soul Hound)', 'chance': 1.01, 'img': './img/prof/.png'},
    33: {'id': 33, 'type': DD, 'title': 'Странник Ветра (Wind Rider)', 'chance': 0.98, 'img': './img/prof/.png'},
    34: {'id': 34, 'type': DD, 'title': 'Храмовник Евы (Evas Templar)', 'chance': 0.77, 'img': './img/prof/.png'},
};


//models
var Card = Backbone.Model.extend({});
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
        this.container.find('#card' + prof).remove()
        this.remove(prof);
    }
});

var SupportCollection = CardsCollection.extend({});
var DDCollection = CardsCollection.extend({});
var ShitCollection = CardsCollection.extend({});


// views
var BaseView = Backbone.View.extend({
    events: {'click': 'remove',},
    hide: function(){ this.$el.removeClass('active'); },
    show: function(){ this.$el.addClass('active'); }
});

var StartView = BaseView.extend({el: $("#start-window")});

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

var select_prof = function(profs, type){

    if (type) {
        profs = _.filter(profs, function(item){ return item.type == type; });
    }

    prof = profs[Math.floor(Math.random(profs.length) * 10)];

    if (!prof){
        while(!prof){
            prof = profs[Math.floor(Math.random(profs.length) * 10)]
        }
    }
    return prof;

};

var GameView = BaseView.extend({
    passes: 0,
    el: $("#game-window"),
    events: {
        'click .pass-cards': 'pass_cards',
        'click .pass-party': 'pass_party',
    },

    update_collection: function(collection, start, end, replace, type){
        if (!start) { start = 0; }
        if (!end) { end = 0; }


        for (var i = start; i < end; i++) {
            var profs = professions;

            var prof = select_prof(profs, type);


            if (replace){ // replace items
                switch(prof.type) {
                    case 1:
                        collection = this.dd_collection;
                        break;
                    case 2:
                        collection = this.support_collection;
                        break;
                    case 3:
                        collection = this.shit_collection;
                        break;
                }

                var count = collection.length;
                var rnd = Math.floor(Math.random(count) * 10);
                var prof_replace = collection.at(rnd);
                while(!prof_replace) {
                    var rnd = Math.floor(Math.random(count) * 10);
                    var prof_replace = collection.at(rnd);
                }
                console.log(prof_replace)
                collection.removeCard(prof_replace.id);
            }

            var card = new CardView({id: 'card' + prof.id,
                                     model: new Card({
                                         'id': prof.id,
                                         'title': prof.title,
                                         'chance': prof.chance
                                     })});
            if(replace){
                console.log(card)
            }
            collection.addCard(card);
        }
    },

    initialize: function(){
        this.support_collection = new SupportCollection();
        this.support_collection.container = this.$el.find('.support-row ul');
        this.update_collection(this.support_collection, 0, 8, false, SUPPORT);


        this.shit_collection = new ShitCollection();
        this.shit_collection.container = this.$el.find('.shit-row ul');
        this.update_collection(this.shit_collection, 0, 10, false, SHIT);

        this.dd_collection = new DDCollection();
        this.dd_collection.container = this.$el.find('.dd-row ul');
        this.update_collection(this.dd_collection, 0, 10, false, DD);
    },

    pass_cards: function(){
        if(this.passes <= 1){
            this.passes += 1;
        } else {
            this.$el.find('.pass-cards').hide();
            this.$el.find('.pass-cards-message').show();
            return
        }
        this.update_collection(null, 0, 2, true);
    },

    pass_party: function(){
        this.update_collection(null, 0, 3, true);
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
    app = new App();
    Backbone.history.start();
});

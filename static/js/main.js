// professions
// id Название профы	Процентное отношение
var SUPPORT = 1;
var DD = 2;
var SHIT = 3;
var professions = {
    1: {'pid': 1, 'type': SHIT, 'title': 'Кладоискатель (Fortune Seeker)', 'chance': 6.77, 'img': './img/prof/.png'},
    2: {'pid': 2, 'type': SUPPORT, 'title': 'Глас Судьбы (Doom Cryer)', 'chance': 6.11, 'img': './img/prof/.png'},
    3: {'pid': 3, 'type': DD, 'title': 'Каратель (Doombringer)', 'chance': 6.09, 'img': './img/prof/.png'},
    4: {'pid': 4, 'type': DD, 'title': 'Титан (Titan)', 'chance': 5.34, 'img': './img/prof/.png'},
    5: {'pid': 5, 'type': DD, 'title': 'Повелитель Бури (Storm Screamer)', 'chance': 4.69, 'img': './img/prof/.png'},
    6: {'pid': 6, 'type': SUPPORT, 'title': 'Призрачный Танцор (Spectral Dancer)', 'chance': 4.62, 'img': './img/prof/.png'},
    7: {'pid': 7, 'type': SHIT, 'title': 'Мастер (Maestro)', 'chance': 4.53, 'img': './img/prof/.png'},
    8: {'pid': 8, 'type': SUPPORT, 'title': 'Жрец Евы (Evas Saint)', 'chance': 4.26, 'img': './img/prof/.png'},
    9: {'pid': 9, 'type': DD, 'title': 'Авантюрист (Adventurer)', 'chance': 3.90, 'img': './img/prof/.png'},
    10: {'pid': 10, 'type': SUPPORT, 'title': 'Деспот (Dominator)', 'chance': 3.60, 'img': './img/prof/.png'},
    11: {'pid': 11, 'type': SUPPORT, 'title': 'Кардинал (Cardinal)', 'chance': 3.35, 'img': './img/prof/.png'},
    12: {'pid': 12, 'type': SHIT, 'title': 'Владыка Теней (Spectral Master)', 'chance': 3.31, 'img': './img/prof/.png'},
    13: {'pid': 13, 'type': DD, 'title': 'Дуэлист (Duelist)', 'chance': 3.28, 'img': './img/prof/.png'},
    14: {'pid': 14, 'type': DD, 'title': 'Аватар (Grand Khavatari)', 'chance': 3.03, 'img': './img/prof/.png'},
    15: {'pid': 15, 'type': DD, 'title': 'Снайпер (Sagittarius)', 'chance': 2.81, 'img': './img/prof/.png'},
    16: {'pid': 16, 'type': DD, 'title': 'Призрачный Охотник (Ghost Hunter)', 'chance': 2.61, 'img': './img/prof/.png'},
    17: {'pid': 17, 'type': SUPPORT, 'title': 'Жрец Шилен (Shillien Saint)', 'chance': 2.57, 'img': './img/prof/.png'},
    18: {'pid': 18, 'type': SHIT, 'title': 'Храмовник Шилен (Shillien Templar)', 'chance': 2.41, 'img': './img/prof/.png'},
    19: {'pid': 19, 'type': SHIT, 'title': 'Рыцарь Феникса (Phoenix Knight)', 'chance': 2.32, 'img': './img/prof/.png'},
    20: {'pid': 20, 'type': DD, 'title': 'Пожиратель Душ (Soultaker)', 'chance': 2.20, 'img': './img/prof/.png'},
    21: {'pid': 21, 'type': SUPPORT, 'title': 'Виртуоз (Sword Muse)', 'chance': 2.14, 'img': './img/prof/.png'},
    22: {'pid': 22, 'type': SHIT, 'title': 'Рыцарь Ада (Hell Knight)', 'chance': 1.91, 'img': './img/prof/.png'},
    23: {'pid': 23, 'type': DD, 'title': 'Магистр Магии (Mystic Muse)', 'chance': 1.88, 'img': './img/prof/.png'},
    24: {'pid': 24, 'type': SHIT, 'title': 'Чернокнижник (Arcana Lord)', 'chance': 1.87, 'img': './img/prof/.png'},
    25: {'pid': 25, 'type': SHIT, 'title': 'Апостол (Hierophant)', 'chance': 1.65, 'img': './img/prof/.png'},
    26: {'pid': 26, 'type': DD, 'title': 'Полководец (Dreadnought)', 'chance': 1.64, 'img': './img/prof/.png'},
    27: {'pid': 27, 'type': DD, 'title': 'Страж Теней (Ghost Sentinel)', 'chance': 1.54, 'img': './img/prof/.png'},
    28: {'pid': 28, 'type': DD, 'title': 'Страж Лунного Света (Moonlight Sentinel)', 'chance': 1.34, 'img': './img/prof/.png'},
    29: {'pid': 29, 'type': DD, 'title': 'Архимаг (Archmage)', 'chance': 1.32, 'img': './img/prof/.png'},
    30: {'pid': 30, 'type': DD, 'title': 'Инквизитор (Female Soul Hound)', 'chance': 1.29, 'img': './img/prof/.png'},
    31: {'pid': 31, 'type': SHIT, 'title': 'Мастер Стихий (Elemental Master)', 'chance': 1.15, 'img': './img/prof/.png'},
    32: {'pid': 32, 'type': DD, 'title': 'Диверсант (Trickster)', 'chance': 1.06, 'img': './img/prof/.png'},
    33: {'pid': 33, 'type': DD, 'title': 'Инквизитор (Male Soul Hound)', 'chance': 1.01, 'img': './img/prof/.png'},
    34: {'pid': 34, 'type': DD, 'title': 'Странник Ветра (Wind Rider)', 'chance': 0.98, 'img': './img/prof/.png'},
    35: {'pid': 35, 'type': SHIT, 'title': 'Храмовник Евы (Evas Templar)', 'chance': 0.77, 'img': './img/prof/.png'},
    36: {'pid': 36, 'type': SHIT, 'title': 'Арбитр (Judicator)', 'chance': 0.65, 'img': './img/prof/.png'},
};

var profs_count = Object.keys(professions).length;
var global_counter = 1;
var selected = 0;

var select_prof = function() {
    var prof = null;

    while(!prof) {
        prof = professions[Math.floor((Math.random() * profs_count) + 1)];
    }
    return prof;

};

var contains = function(list, key) {
    return list.filter(function(x) { return x.get('pid') == key }).length;
};


//models
var Card = Backbone.Model.extend({
    defaults: {
        'clicked': false,
    }
});

var Game = Backbone.Model.extend({});


// collections
var CardsCollection = Backbone.Collection.extend({
    model: Card,
    addCard: function(card) {
        this.container.append(card.render().el);
        this.add(card.model)
    },
    removeCard: function(prof) {
        this.container.find('#card' + prof).remove()
        this.remove(prof);
    }
});

var SupportCollection = CardsCollection.extend({});
var DDCollection = CardsCollection.extend({});
var ShitCollection = CardsCollection.extend({});


// views
var BaseView = Backbone.View.extend({
    hide: function() { this.$el.removeClass('active'); },
    show: function() { this.$el.addClass('active'); },
});

var MainView = BaseView.extend({el: $("#main-window")});
var StartView = BaseView.extend({el: $("#start-window")});
var FailView = BaseView.extend({el: $("#fail-window")});
var WinView = BaseView.extend({el: $("#win-window")});

var CardView = BaseView.extend({
  events: {'click': 'click'},

  tagName: 'li',
  className: 'cart-container',
  template: _.template(_.unescape($('.cart-container').html())),

  initialize: function() {
        this.model.bind('change', this.render, this);
        this.model.bind('destroy', this.remove, this);
  },

  click: function() {
      this.$el.toggleClass('hover');
      if(!this.model.get('clicked')) {
          this.model.set({'clicked': true});
          selected++;
      } else {
          this.model.set({'clicked': false});
          selected--;
      }
  },

  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
  },
});

var GameView = BaseView.extend({
    passes: 0,
    selected: [],

    el: $("#game-window"),
    events: {
        'click .pass-cards': 'pass_cards',
        'click .pass-party': 'pass_party',
    },

    get_collection_by_type: function(type) {
        switch(type) {
            case 1:
                collection = this.support_collection;
                break;
            case 2:
                collection = this.dd_collection;
                break;
            case 3:
                collection = this.shit_collection;
                break;
        }
        return collection;
    },

    create_card: function(id, item ) {
        return new CardView({
            id: 'card' + id,
            model: new Card({
                'id': id,
                'pid': item.pid,
                'title': item.title,
                'chance': item.chance,
                'type': item.type
            })
        });
    },

    delete_seleted: function(collection) {
        collection.filter(function(i) { return i.get('clicked') }).map(
            function(item) { collection.removeCard(item.id) }
        );
    },

    update_collection: function(collection, end, replace) {
        if (!end) { end = 0; }

        if (replace) { // replace items
            this.delete_seleted(this.support_collection);
            this.delete_seleted(this.dd_collection);
            this.delete_seleted(this.shit_collection);
        }

        for (var i = 1; i < end + 1; i++) {
            var prof = select_prof();
            this.push_to_collection(global_counter++, prof);
        }
    },
    push_to_collection: function(id, item) {
        if(item.type == SUPPORT & this.support_collection.length <= 7) {
            if(!contains(this.support_collection, item.pid)) {
                collection = this.support_collection;
            } else {
                collection = this.shit_collection;
            }
        } else if(item.type == DD & this.dd_collection.length <= 12) {
            collection = this.dd_collection;
        } else {
            collection = this.shit_collection;
        }

        collection.addCard(this.create_card(id, item));
    },

    initialize: function() {
        this.support_collection = new SupportCollection();
        this.support_collection.container = this.$el.find('.support-row ul');

        this.dd_collection = new DDCollection();
        this.dd_collection.container = this.$el.find('.dd-row ul');

        this.shit_collection = new ShitCollection();
        this.shit_collection.container = this.$el.find('.shit-row ul');

        var profs = [];
        for(var i = 1; i < 13; i++) { profs.push(select_prof()); }
        profs = _.sortBy(profs, function(i) { return i.type });

        for(prof in profs) { this.push_to_collection(global_counter++, profs[prof]); }
    },

    pass_cards: function() {
        if (selected == 3) {
            this.passes++;

            if(this.passes <= 2) {
                this.update_collection(null, 3, true);
                selected = 0;
                if(this.passes == 2) {
                    this.$el.find('.pass-cards').hide();
                }
            }
        } else {
            alert('Выберите 3 карты');
        }
    },

    pass_party: function() {
        if (selected == 3) {
            this.update_collection(null, 3, true);
            selected = 0;
            this.check();
            return;
        } else {
            alert('Выберите 3 карты');
        }
    },

    check: function() {
        game_view.hide();
        if(Math.round(Math.random(1)) == 1) {
            new WinView().show();
        } else {
            new FailView().show();
        }
    }
});

// routing
main_view = new MainView;
start_view = new StartView;
game_view = new GameView;
main_view.show();
var App = Backbone.Router.extend({
    routes: {
        "!/start": "start",
        "!/":      "default",
        "!/win":   "win",
        "!/fail":  "fail",
        "!/game":  "game",
    },
    win: function() {
        new WinView().show();
    },
    fail: function() {
        new FailView().show();
    },
    start: function() {
        main_view.hide();
        start_view.show();
    },
    game: function() {
        main_view.hide();
        start_view.hide();
        game_view.show();
    },
    default: function() {
        main_view.show();
        start_view.hide();
        game_view.hide();
    },
});


$(document).ready(function() {
    app = new App();
    Backbone.history.start();
});

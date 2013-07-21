// models

var Card = Backbone.Model.extend({});

var Game = Backbone.Model.extend({});

// collections

var CardsCollection = Backbone.Collection.extend({
    model: Card,
});


// views
var BaseView = Backbone.View.extend({
    hide: function(){
        this.$el.removeClass('active');
    },
    show: function(){
        console.log(this.$el)
        this.$el.addClass('active');
        console.log(this.$el)
    },
});

var StartView = BaseView.extend({
    el: $("#start-window"),
});

var GameView = BaseView.extend({
    el: $("#game-window"),
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

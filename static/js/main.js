// models

var Card = Backbone.Model.extend({});

var Game = Backbone.Model.extend({});

// collections

var GameCollection = Backbone.Collection.extend({
    model: Card,
});

// routing

var Router = Backbone.Router.extend({
    routes: {
        "!/start": "start",
        "!/game":  "game",
        "!/":      "default",
    },

    start: function() {
        console.log('rppt');
    },

    game: function() {
        console.log('game');
    },

    default: function() {
        console.log('default');
    },
});


$(document).ready(function(){
    new Router();
    Backbone.history.start();
});

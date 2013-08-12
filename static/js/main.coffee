SUPPORT = 1
DD = 2
SHIT = 3

professions =
  1: 'pid': 1, 'type': SHIT, 'title': 'Кладоискатель (Fortune Seeker)', 'chance': 7.42, 'img': './img/prof/.png'
  2: 'pid': 2, 'type': SUPPORT, 'title': 'Глас Судьбы (Doom Cryer)', 'chance': 6.11, 'img': './img/prof/.png'
  3: 'pid': 3, 'type': DD, 'title': 'Каратель (Doombringer)', 'chance': 6.09, 'img': './img/prof/.png'
  4: 'pid': 4, 'type': DD, 'title': 'Титан (Titan)', 'chance': 5.34, 'img': './img/prof/.png'
  5: 'pid': 5, 'type': DD, 'title': 'Повелитель Бури (Storm Screamer)', 'chance': 4.69, 'img': './img/prof/.png'
  6: 'pid': 6, 'type': SUPPORT, 'title': 'Призрачный Танцор (Spectral Dancer)', 'chance': 4.62, 'img': './img/prof/.png'
  7: 'pid': 7, 'type': DD, 'title': 'Мастер (Maestro)', 'chance': 4.53, 'img': './img/prof/.png'
  8: 'pid': 8, 'type': SUPPORT, 'title': 'Жрец Евы (Evas Saint)', 'chance': 4.26, 'img': './img/prof/.png'
  9: 'pid': 9, 'type': DD, 'title': 'Авантюрист (Adventurer)', 'chance': 3.90, 'img': './img/prof/.png'
  10: 'pid': 10, 'type': SUPPORT, 'title': 'Деспот (Dominator)', 'chance': 3.60, 'img': './img/prof/.png'
  11: 'pid': 11, 'type': SUPPORT, 'title': 'Кардинал (Cardinal)', 'chance': 3.35, 'img': './img/prof/.png'
  12: 'pid': 12, 'type': SHIT, 'title': 'Владыка Теней (Spectral Master)', 'chance': 3.31, 'img': './img/prof/.png'
  13: 'pid': 13, 'type': DD, 'title': 'Дуэлист (Duelist)', 'chance': 3.28, 'img': './img/prof/.png'
  14: 'pid': 14, 'type': DD, 'title': 'Аватар (Grand Khavatari)', 'chance': 3.03, 'img': './img/prof/.png'
  15: 'pid': 15, 'type': DD, 'title': 'Снайпер (Sagittarius)', 'chance': 2.81, 'img': './img/prof/.png'
  16: 'pid': 16, 'type': DD, 'title': 'Призрачный Охотник (Ghost Hunter)', 'chance': 2.61, 'img': './img/prof/.png'
  17: 'pid': 17, 'type': SUPPORT, 'title': 'Жрец Шилен (Shillien Saint)', 'chance': 2.57, 'img': './img/prof/.png'
  18: 'pid': 18, 'type': DD, 'title': 'Храмовник Шилен (Shillien Templar)', 'chance': 2.41, 'img': './img/prof/.png'
  19: 'pid': 19, 'type': DD, 'title': 'Рыцарь Феникса (Phoenix Knight)', 'chance': 2.32, 'img': './img/prof/.png'
  20: 'pid': 20, 'type': DD, 'title': 'Пожиратель Душ (Soultaker)', 'chance': 2.20, 'img': './img/prof/.png'
  21: 'pid': 21, 'type': SUPPORT, 'title': 'Виртуоз (Sword Muse)', 'chance': 2.14, 'img': './img/prof/.png'
  22: 'pid': 22, 'type': DD, 'title': 'Рыцарь Ада (Hell Knight)', 'chance': 1.91, 'img': './img/prof/.png'
  23: 'pid': 23, 'type': DD, 'title': 'Магистр Магии (Mystic Muse)', 'chance': 1.88, 'img': './img/prof/.png'
  24: 'pid': 24, 'type': DD, 'title': 'Чернокнижник (Arcana Lord)', 'chance': 1.87, 'img': './img/prof/.png'
  25: 'pid': 25, 'type': SUPPORT, 'title': 'Апостол (Hierophant)', 'chance': 1.65, 'img': './img/prof/.png'
  26: 'pid': 26, 'type': DD, 'title': 'Полководец (Dreadnought)', 'chance': 1.64, 'img': './img/prof/.png'
  27: 'pid': 27, 'type': DD, 'title': 'Страж Теней (Ghost Sentinel)', 'chance': 1.54, 'img': './img/prof/.png'
  28: 'pid': 28, 'type': DD, 'title': 'Страж Лунного Света (Moonlight Sentinel)', 'chance': 1.34, 'img': './img/prof/.png'
  29: 'pid': 29, 'type': DD, 'title': 'Архимаг (Archmage)', 'chance': 1.32, 'img': './img/prof/.png'
  30: 'pid': 30, 'type': DD, 'title': 'Инквизитор (Female Soul Hound)', 'chance': 1.29, 'img': './img/prof/.png'
  31: 'pid': 31, 'type': SHIT, 'title': 'Мастер Стихий (Elemental Master)', 'chance': 1.15, 'img': './img/prof/.png'
  32: 'pid': 32, 'type': DD, 'title': 'Диверсант (Trickster)', 'chance': 1.06, 'img': './img/prof/.png'
  33: 'pid': 33, 'type': DD, 'title': 'Инквизитор (Male Soul Hound)', 'chance': 1.01, 'img': './img/prof/.png'
  34: 'pid': 34, 'type': DD, 'title': 'Странник Ветра (Wind Rider)', 'chance': 0.98, 'img': './img/prof/.png'
  35: 'pid': 35, 'type': DD, 'title': 'Храмовник Евы (Evas Templar)', 'chance': 0.77, 'img': './img/prof/.png'

global_counter = 1
profs_count = Object.keys(professions).length
selected = 0

select_prof = () ->
  prof = null

  while not prof
    prof = professions[Math.floor Math.random(profs_count) * profs_count]

  prof


contains = (list, keys) ->
  list.filter((x) -> x.get("pid") == key).length


# models
class Card extends Backbone.Model.extend
  defaults:
    clicked: false

class Game extends Backbone.Model.extend


# collections
class CardsCollection extends Backbone.Collection.extend
  model: Card
  addCard: (card) ->
    @container.append card.render().el
    @add card.model

  removeCard: (prof) ->
    @container.find('#card' + prof).remove()
    @remove prof

class SupportCollection extends CardsCollection

class DDCollection extends CardsCollection

class ShitCollection extends CardsCollection



#views
class BaseView extends Backbone.View.extend
  hide: -> this.$el.removeClass 'active'
  show: -> this.$el.addClass 'active'


class StartView extends BaseView
  el: $ '#start-window'


class CardView extends BaseView
  events:
    'click': 'click'

  tagName: 'li'
  className: 'cart-container'
  template: _.template _.unescape $('.cart-container').html()

  initialize: ->
    @model.bind 'change', @render, @
    @model.bind 'destroy', @remove, @

  click: ->
      @$el.toggleClass 'hover'

      if not @model.get 'clicked'
        @model.set 'clicked': true
        selected++
      else
        @model.set 'clicked': false
        selected--
      return

  render: ->
      @$el.html @template @model.toJSON()
      @

class GameView extends BaseView
  passes: 0
  selected: []
  el: $ "#game-window"

  events:
    'click .pass-cards': 'pass_cards'
    'click .pass-party': 'pass_party'

  get_collection_by_type: (type) ->
    switch type
      when 1 then collection = @support_collection
      when 2 then collection = @dd_collection
      when 3 then collection = @shit_collection
    collection

  create_card: (id, item, row) ->
    card = new CardView =
      id: 'card' + id
      model: new Card =
        'id': id
        'pid': item.pid
        'title': item.title
        'chance': item.chance
        'type': item.type
        'row': row
    card


  delete_seleted: (collection) ->
    collection = collection.filter = (i) -> i.get('clicked')
    collection.map (item) -> collection.removeCard item.id
    return

  update_collection: (collection, end, replace) ->
    if not end
      end = 0

    if replace
      @delete_seleted @support_collection
      @delete_seleted @dd_collection
      @delete_seleted @shit_collection

    for i in [1..end + 1]
      @push_to_collection global_counter++, select_prof()
    return

  push_to_collection: (id, item) ->
    row = 1

    if item.type == SUPPORT and @support_collection.length <= 5
      if not contains @support_collection, item.pid
        collection = @support_collection
      else
        collection = @shit_collection
        row = 3

    else if item.type == DD and @dd_collection.length <= 12
      collection = @dd_collection
      row = 2
    else
      collection = @shit_collection
      row = 3

    collection.addCard @create_card id, item, row

  initialize: ->
    profs = []
    @support_collection = new SupportCollection()
    @support_collection.container = @$el.find '.support-row ul'

    @dd_collection = new DDCollection()
    @dd_collection.container = @$el.find '.dd-row ul'

    @shit_collection = new ShitCollection()
    @shit_collection.container = @$el.find '.shit-row ul'

    for i in [1..13]
      profs.push select_prof()

    profs = _.sortBy profs, (profa) -> return profa.type

    for prof in profs
      @push_to_collection global_counter++, profs[prof]

    return

  pass_cards: ->
    if selected == 2
      @passes++

    if @passes <= 2
      @update_collection null, 2, true
      selected = 0

      if @passes == 2
        @$el.find('.pass-cards').hide()
        @$el.find('.pass-cards-message').show()
        return
    else
      alert 'Выберите 2 карты'
      return

  pass_party: ->
    if selected == 3
      @update_collection null, 3, true
      selected = 0
      return
    else
      alert 'Выберите 3 карты'
      return

# route
class App extends Backbone.Router.extend
  routes:
    "!/start": "start"
    "!/":      "defaults"
    "!/game":  "game"

  initialize: ->
    @start = new StartView
    @game = new GameView
    return

  start: ->
    console.log 'pes'
    @start.show()
    return

  game: ->
    @start.hide()
    @game.show()
    return

  defaults: ->
    @start.hide()
    @game.hide()
    return

$(document).ready ->
  app = new App()
  Backbone.history.start()
  return

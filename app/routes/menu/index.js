import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        title: 'Nealkoholické nápoje',
        category: 'non-alcoholic-drinks',
        image: '/assets/images/nonalcoholic.png',
      },
      {
        title: 'Pivo',
        category: 'beer-drinks',
        image: '/assets/images/beer.png',
      },
      {
        title: 'Víno',
        category: 'vine-drinks',
        image: '/assets/images/wine.png',
      },
      {
        title: 'Teplé nápoje',
        category: 'hot-drinks',
        image: '/assets/images/hotdrinks.png',
      }, {
        title: 'Destiláty',
        category: 'alcoholic-drinks',
        image: '/assets/images/distillates.png',
      },
    ];
  },
});

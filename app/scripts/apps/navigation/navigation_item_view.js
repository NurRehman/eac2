'use strict';

define(['marionette', 'templates'], function (Marionette, JST) {
  return Marionette.ItemView.extend({
    tagName: 'li',
    template: JST['app/scripts/apps/navigation/navigation_template.hbs'],
    triggers: {
      'click a': 'language:click'
    }
  });

});

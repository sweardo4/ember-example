import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('newjm-slider-left-params', 'Integration | Component | newjm slider left params', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{newjm-slider-left-params}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#newjm-slider-left-params}}
      template block text
    {{/newjm-slider-left-params}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

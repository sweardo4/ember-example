import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modelversion/bivar-chart', 'Integration | Component | modelversion/bivar chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modelversion/bivar-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modelversion/bivar-chart}}
      template block text
    {{/modelversion/bivar-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

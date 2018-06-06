import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modelversion/predict-chart', 'Integration | Component | modelversion/predict chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modelversion/predict-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modelversion/predict-chart}}
      template block text
    {{/modelversion/predict-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

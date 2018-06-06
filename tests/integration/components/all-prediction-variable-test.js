import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-prediction-variable', 'Integration | Component | all prediction variable', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-prediction-variable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-prediction-variable}}
      template block text
    {{/all-prediction-variable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

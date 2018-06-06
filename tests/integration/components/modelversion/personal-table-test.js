import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modelversion/personal-table', 'Integration | Component | modelversion/personal table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modelversion/personal-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modelversion/personal-table}}
      template block text
    {{/modelversion/personal-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

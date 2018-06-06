import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modelversion/isof-table', 'Integration | Component | modelversion/isof table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modelversion/isof-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modelversion/isof-table}}
      template block text
    {{/modelversion/isof-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

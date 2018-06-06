import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-link-to', 'helper:my-link-to', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{my-link-to inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

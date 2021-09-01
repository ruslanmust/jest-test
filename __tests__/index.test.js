import reverse from '../src/index.js';

test('reverse', () => { // reverse название теста
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

import Step from '../src/stepClass';

test('instance Step', () => {
  class Foo extends Step { }
  const foo = new Foo({
    children: [],
  }, {});
  expect(foo).toEqual({
    props: { children: [] },
    context: {}
  });
});

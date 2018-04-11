import test from 'ava';
import slugify from './slugify';

test('random symbols should become dashes', t => {
  const slug = slugify('The Pros + Cons ^ of Front$ End Development');
  t.is(slug, 'the-pros-cons-of-front-end-development');
});
test('apersand should become the word `and`', t => {
  const slug = slugify('The Pros & Cons of Front End Development');
  t.is(slug, 'the-pros-and-cons-of-front-end-development');
});
test('spaces should become dashes', t => {
  const slug = slugify('The Pros & Cons of Front End Development');
  t.is(slug, 'the-pros-and-cons-of-front-end-development');
});
test('m-dashes should become regular dashes', t => {
  const slug = slugify('The French Don’t Give A F**K About Trump — But They Love A Good “Covfefe”');
  t.is(slug, 'the-french-dont-give-a-f-k-about-trump-but-they-love-a-good-covfefe');
});
test('periods should become dashes', t => {
  const slug = slugify('Node.js Child Processes: Everything you need to know');
  t.is(slug, 'node-js-child-processes-everything-you-need-to-know');
});
test('colon spaces should become a dash', t => {
  const slug = slugify('Node.js Child Processes: Everything you need to know');
  t.is(slug, 'node-js-child-processes-everything-you-need-to-know');
});
test('emojis should become dashes', t => {
  const slug = slugify('Testing ⚛️ components using render props');
  t.is(slug, 'testing-components-using-render-props');
});
test('apostrophes should be omitted', t => {
  const slug = slugify('French Startup’s Ecosystème: Vaillant, mais bruyant!');
  t.is(slug, 'french-startups-ecosysteme-vaillant-mais-bruyant');
});
test('accents should be omitted', t => {
  const slug = slugify('French Startup’s Ecosystème: Vaillant, mais bruyant!');
  t.is(slug, 'french-startups-ecosysteme-vaillant-mais-bruyant');
});
test('trailing dashes should be removed', t => {
  const slug = slugify('French Startup’s Ecosystème: Vaillant, mais bruyant!');
  t.is(slug, 'french-startups-ecosysteme-vaillant-mais-bruyant');
});
test('numbers should not be removed', t => {
  const slug = slugify('Node.js 9.4 Child Processes: Everything you need to know');
  t.is(slug, 'node-js-9-4-child-processes-everything-you-need-to-know');
});

const assert = require('assert');
const fetch = require('node-fetch');

suite('Home page', function() {
  test('Page title', async function() {
    let res = await fetch("https://stilian-matev-regular-exam.onrender.com/");
    let body = await res.text();
    assert.ok(body.includes("<h1>Cookbook</h1>"));
  });
  
  test('Products count', async function() {
    let res = await fetch("https://stilian-matev-regular-exam.onrender.com/");
    let body = await res.text();
    assert.ok(body.includes("Cookbook: <b>3</b>"));
  });
});

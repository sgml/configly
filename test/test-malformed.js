var testName  = 'malformed';
var test      = require('tape');
var path      = require('path');
var config    = require('../configure');
var configDir = path.join(__dirname, 'fixtures/config/' + testName);

test('malformed', function(t)
{
  t.plan(1);

  t.throws(function()
  {
    config({ directories: configDir });
  },
  /default.json cannot be read or malformed/,
  'expects to throw on malformed config file');
});

var zetta = require('zetta');
var Hue = require('zetta-hue-driver');

zetta()
  .name('detroit')
  .use(Hue)
  .listen(1337);

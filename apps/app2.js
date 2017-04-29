const VorpalView = require('../VorpalView.js');

class View extends VorpalView {
  constructor(closeCB) {
    let options = {
      delimiter: "App2$"
    }
    super(closeCB, options);
  }
}

module.exports = View;

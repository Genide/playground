const VorpalView = require('../VorpalView.js');
const app2 = require('./app2.js');

class View extends VorpalView {
  constructor(closeCB) {
    let options = {
      delimiter: "App1$",
      //replaceDelim: true
    }
    super(closeCB, options);

    this.vInst
      .command("app2")
      .action((args, cb) => {
        this.launch(cb, app2, undefined);
      });
  }
}

module.exports = View;

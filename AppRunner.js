const VorpalView = require('./VorpalView.js');
const fsAutocomplete = require('vorpal-autocomplete-fs');

class View extends VorpalView {
  constructor(closeCB) {
    let options = {
      delimiter: "Main$"
    }
    super(closeCB, options);
    this.vInst.find('close').remove();
    this.vInst
      .command('run <app>', 'Runs the application')
      .autocomplete(fsAutocomplete())
      .action((args, cb) => {
        let app = require(args.app);
        this.launch(cb, app, undefined);
      })
  }
}

module.exports = View;

const VorpalView = require('./VorpalView.js');
const fsAutocomplete = require('vorpal-autocomplete-fs');
const myAutocomplete = require('./AutoComplete.js');

class View extends VorpalView {
  constructor(closeCB) {
    let startDirectory = "./apps/";
    let options = {
      delimiter: "Main$"
    }
    super(closeCB, options);
    this.vInst.find('close').remove();
    this.vInst
      .command('run <app>', 'Runs the application')
      .autocomplete(myAutocomplete({startDirectory}))
      .action((args, cb) => {
        let app = require(startDirectory + args.app);
        this.launch(cb, app, undefined);
      })
  }
}

module.exports = View;

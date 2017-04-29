// const vorpal = require('vorpal')();
// const fsAutocomplete = require('vorpal-autocomplete-fs');
//
// vorpal
//   .delimiter('main$')
//   .show();
//
// vorpal
//   .command('run <app>', 'Runs the application')
//   .autocomplete(fsAutocomplete())
//   .action(function (args, callback) {
//     let app = require(args.app);
//     let closeCB = () => {
//       this.log("exiting " + args.app);
//       callback();
//       vorpal.show();
//     }
//     let view = new app(closeCB);
//     view.vInst.show();
//   })

const AppRunner = require('./AppRunner.js');

let appRunner = new AppRunner();
appRunner.vInst.show();

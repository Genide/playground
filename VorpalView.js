const Vorpal = require('vorpal');

class VorpalView {
  constructor(closeCB, vArgs) {
    this.vInst = new Vorpal();
    this.delimiter = vArgs.delimiter || "$"
    this.replaceDelim = vArgs.replaceDelim;
    this.vInst.delimiter(this.delimiter);

    this.vInst
      .command('close')
      .alias('..')
      .action(function(args, callback) {
        closeCB();
      });
  }

  launch(cb, VorpalViewClass, args) {
    let closeCB = () => {
      cb();
      this.vInst.show();
    }
    let newVClass = new VorpalViewClass(closeCB, args)
    let newDelim = newVClass.replaceDelim ? newVClass.delimiter : this.vInst.ui.delimiter() + newVClass.delimiter;
    newVClass.vInst.delimiter(newDelim);
    newVClass.vInst.show();
  }
}

module.exports = VorpalView;

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
        callback();
      });

    this.vInst
      .command('mem')
      .description('Outputs memory usage in bytes')
      .hidden()
      .action(function(args, callback) {
        this.log(process.memoryUsage());
        callback();
      });
  }

  show() {
    this.vInst.show();
  }

  launch(cb, VorpalViewClass, args) {
    let closeCB = () => {
      cb();
      this.show();
    }
    let newVClass = new VorpalViewClass(closeCB, args)
    let newDelim = newVClass.replaceDelim ? newVClass.delimiter : this.vInst.ui.delimiter() + newVClass.delimiter;
    newVClass.vInst.delimiter(newDelim);
    newVClass.show();
  }
}

module.exports = VorpalView;

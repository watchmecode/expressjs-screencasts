var mongoose = require("mongoose");

var StatusLog = mongoose.Schema({
  status: {type: Number, required: true},
  date: {type: Date, required: true, default: Date.now}
});

function StatusPlugin(schema, options){
  var defaultStatus = options.defaultStatus;

  schema.add({
    status: {type: Number, required: true, default: defaultStatus},
    statusLogs: [StatusLog]
  });

  schema.method("addStatusLog", function(status){
    var statusLog = this.statusLogs.create({
      status: status,
      date: Date.now()
    });

    this.statusLogs.push(statusLog);
  });

  schema.method("setStatus", function(status){
    this.status = status;
    this.addStatusLog(status);
  });
}

module.exports = StatusPlugin;

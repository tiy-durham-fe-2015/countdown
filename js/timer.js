// TODO: figure out why clearTimeout is useless

// Timer calls a callback on an interval
//
// Timer's constructor takes a spec with the following
// properties:
//
//   interval - (optional) an integer specifying the
//   number of miliseconds between calls to callback.
//   Defaults to 1000
//
//   callback - (required) a function which will be
//   called every time interval elapses
//
// Timer can be stopped by calling .stop()
// Timer can be started by calling .start()
app.Timer = function (spec) {
  // Interval defaults to 1 second
  var interval = spec.interval || 1000;

  // Callback is the logic that we want to run
  // every time the timer fires
  var callback = spec.callback;

  // Stopped is set to true if we want to stop
  var stopped = false;

  var self = {
    // starts the timer
    start: function () {
      stopped = false;

      callback();

      function intervalElapsed() {
        if (stopped) {
          return;
        }

        callback();
        setTimeout(intervalElapsed, interval);
      }

      setTimeout(intervalElapsed, interval);
    },

    // stops the timer
    stop: function () {
      stopped = true;
    }
  };

  return self;
};

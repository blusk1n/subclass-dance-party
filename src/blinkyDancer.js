var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left,timeBetweenSteps)

  // // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // // so we must keep a copy of the old version of this function
  
   

  // return blinkyDancer;
  
};

MakeBlinkyDancer.prototype = Object.create(Dancer.prototype)
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer
  
MakeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    Dancer.prototype.step.call(this)
    this.$node.toggle();
    
  };
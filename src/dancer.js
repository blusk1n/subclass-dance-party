// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

}


 Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    
    
    setTimeout( this.step.bind(this), this.timeBetweenSteps);
    // setTimeout(function(){
    //   console.log(that)
    //   that.step
    // },that.timeBetweenSteps)


  };

 Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: 500,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body




//   function makeDancer(top, left, timeBetweenSteps) {
//   this.$node = $('<span class="dancer"></span>');
//   this.timeBetweenSteps = timeBetweenSteps;
//    this.step()

 
// }; 
// makeDancer.prototype.step = function(){
//   var that = this;
//   console.log(that)
//   setTimeout(that.step, this.timeBetweenSteps)
// }

// makeDancer.prototype.setPosition = function(){

// }
//  
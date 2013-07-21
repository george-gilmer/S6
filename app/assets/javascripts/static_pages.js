var coordinates = [250,75,75,250,425,250,250,425];
var paper;
$(function(){
  paper = Raphael('navigation-canvas');
  //Generates center circle
  navigation_circle(250,250,function(){
    for(var i = 0; i < coordinates.length/2; i++){
      var x = coordinates[i*2];
      var y = coordinates[i*2+1];
      navigation_circle(x,y);
    } 
  });
});

function navigation_circle(x,y,callback){
  if(typeof callback === 'undefined'){
    paper.circle(x,y,0).animate({r: 25, fill: "#333", stroke: "#000", "stroke-width": 50, "stroke-opacity": 0.5},1000);
  }else{
    paper.circle(x,y,0).animate({r: 25, fill: "#333", stroke: "#000", "stroke-width": 50, "stroke-opacity": 0.5},1000,callback());
  }
}

class Box{

constructor(x,y,width,height){
  var options={
      restitution:0.8,
      
      density:0.2
  }
    this.body=Bodies.rectangle(x,y,width,height,options);
    
this.width=width
this.height=height
World.add(myworld,this.body);
}
display()
{
    rectMode(CENTER);

  var pos=this.body.position;
rect(pos.x,pos.y,this.width,this.height)  
  
  
}









}
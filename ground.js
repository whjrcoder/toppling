class Ground{

    constructor(x,y,width,height){
      var options={
          isStatic:true
      }
        this.body=Bodies.rectangle(x,y,width,height,options);
        
    this.width=width
    this.height=height
    World.add(myworld,this.body);
    }
    display()
    {
        rectMode(CENTER);
    
    fill("brown")
      var pos=this.body.position;
    rect(pos.x,pos.y,this.width,this.height)  
      
      
    }
}
    
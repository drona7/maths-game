var playbutton 
var gamestate = "first screen"
var level1
var shinchan
var submitbutton
var answer
var result
var nextbutton
var gobackbutton
var text

function preload()
{
   
  SHIN = loadImage("images/SHIN.png")
  bubble1 = loadImage("images/bubble1.png")
  bubble2 = loadImage("images/bubble2.png")

}

function setup() {
	createCanvas(500, 600);

  database = firebase.database()
 
  playbutton = createButton("PLAY")

  level2 = createButton("LEVEL 2")
  level1 = createButton("LEVEL 1")
  
  level1.hide()
  level2.hide()


}


function draw() {  
background(0,216,255)
  
  



if(gamestate === "first screen"){
 
  
  playbutton.position(575,350) 

  if(playbutton.mousePressed(()=>{

    gamestate = "second screen"
  
  }));
}

if(gamestate === "second screen"){
playbutton.hide()

level1.position( 570,350)


level2.position( 570,450)




level1.show()
level2.show()




if(level1.mousePressed(()=>{

  gamestate = "level1 first screen"
level1.hide()
level2.hide()

showlevel1firstquestion()

}));
}

if(gamestate === "level1 first screen"){
image(SHIN,400,150,100,100) 
console.log(shinchan)  
image(bubble1,10,50,500,100)

}

if(gamestate === "level1 second screen"){

  image(SHIN,400,150,100,100) 
  image(bubble2,10,50,500,100)
  showlevel1secondquestion()
 
  }
  drawSprites();
}








function showlevel1firstquestion(){
  var Question = createElement("h4")
Question.position(570,350)
result = createElement("h1")
result.position(500,300)
submitbutton = createButton("Submit")
submitbutton.position(550,550)
var Q1
var Q1ref = database.ref("level1/question1")
Q1ref.on("value",(data)=>{
Q1 = data.val()
Question.html(Q1)

})

console.log(Q1)

 answer = createInput()
answer.position(500,450)

nextbutton = createButton("next")

if(submitbutton.mousePressed(()=>{
  console.log(answer.value())
  if(answer.value() === "43"){
    result.html("CORRECT")

    nextbutton.position(800,550)
    
  }
  
  else{
    result.html("WRONG")
  }

  if(nextbutton.mousePressed(()=>{

    gamestate = "level1 second screen"
      
    clear()
    result.hide()
    
    }));




}));
}

function showlevel1secondquestion(){

  if(submitbutton.mousePressed(()=>{
    console.log(answer.value())
    if(answer.value() === "21"){
      result.html("CORRECT")
      result.show()
    }
    
    else{
      result.html("WRONG")
    }
  }));

if(nextbutton.mousePressed(()=>{
  clear()

  background(0,216,255)

  
  result.hide()
  submitbutton.hide()
  nextbutton.hide()
  answer.hide()
   
text = createElement("h4")
text.position(370,100)
text.html("CONGRATULATIONS! YOU HAVE COMPLETED FIRST LEVEL")

gobackbutton = createButton("Main Menu")
gobackbutton.position(550,300)
}));


if(gobackbutton.mousePressed(()=>{
  //clear()
  gobackbutton.hide()

  background(0)


  
  

//gobackbutton = createButton("Main Menu")
//gobackbutton.position(550,300)
}));





}


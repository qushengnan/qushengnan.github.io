var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){       
          document.getElementById("question").value="You are right!"
          document.getElementById("mark").style.visibility = "visible"
          document.getElementById("right").style.visibility = "hidden"
        score++
    }
    else {
          document.getElementById("mark").style.visibility = "hidden"
          document.getElementById("right").style.visibility = "visible"
          document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
       document.getElementById("right").style.visibility = "hidden"
       document.getElementById("mark").style.visibility = "visible"
       document.getElementById("question").value="You are right!"
         score++
    }
    else {
     document.getElementById("mark").style.visibility = "hidden"     
     document.getElementById("right").style.visibility = "visible"
     document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("mark").style.visibility = "visible"
        document.getElementById("question").value="You are right!"
        document.getElementById("right").style.visibility = "hidden"
         score++
    }
    else {
        document.getElementById("right").style.visibility = "visible"
        document.getElementById("mark").style.visibility = "hidden"
        document.getElementById("question").value="You are wrong!"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}
       
function main(){ 
      
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="Where did most of the stories take place?\na) Hogwarts School of Witchcraft and Wizardry \nb)Dumbledore School \nc) Henderson Elementary School \nd)Thornhill Secondary School";
      document.getElementById("good").style.visibility = "hidden"
    document.getElementById("try").style.visibility = "hidden"
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who did Harry Potter against in the story? \na)Albus Dumbledore \nb)Lord Voldemort \nc)Draco Malfoy \nd)Ginny Weasley";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who did Harry meet in the train and become good time in the first book? \na)Ginny Weasley and Hermione Granger \nb)Hermione Granger and Draco Malfoy \nc)Draco Malfoy and Ron Weasley \nd)Ron Weasley and hermione Granger";
    document.view.qans.value=""
}   
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Why didn't Draco Malfoy like Harry Potter? \na)Because they had an arguement at the beginning. \nb)Because their parents had a fight before. \nc)Because Draco was jealous.  \nd)Because Harry's mother was a muggle.";
    document.view.qans.value=""
} 
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In which book did Harry join a Triwizard Tournament?  \na)Harry Potter and the Goblet Of Fire \nb)Harry Potter and the Order of The Phoenix \nc)Harry Potter and the Chamber of Secrets \nd)Harry Potter and the Philosopher's Stone";
    document.view.qans.value=""
}   
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who has killed Lily Pitter and James Potter \na)Professor Snape \nb)Sirius Black \nc)Lord Voldemort \nd)Remus Lupin";
    document.view.qans.value=""
}  
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the werewolf in the book?  \na)Sirius Black \nb)Remus Lupin \nc)Lucius Malfoy \nd)Arthur Weasley ";
    document.view.qans.value=""
}  
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What did Professor Snape teach?  \na)Potions Master \nb)Defence Against the Dark Arts \nc)Transfiguration \nd)Divination";
    document.view.qans.value=""
}  
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who died in Weasley at the end of the story?  \na)Ginny Weasley \nb)Fred Weasley \nc)George Weasley \nd)Ron Weasley";
    document.view.qans.value=""
}  
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who didn't die at the end of the story?  \na)Draco Malfoy \nb)Professor Snape \nc)Sirius Black \nd)Lord Voldemort";
    document.view.qans.value=""
}  
else {
       alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz." + "Click 'Next Question' to start again!") 
       if (score >= 8) {
            document.getElementById("good").style.visibility = "visible"
            new Audio('cheer.wav').play()
    }
      else {
            document.getElementById("try").style.visibility = "visible"
            new Audio('sad.wav').play()
      }
       i=0       
             
}  
	i++; 
}





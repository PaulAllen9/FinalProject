/*****************************************************************
*storyGenerator.js
*Paul Allen
*
*This file contains the necessary functions to fill in blank spots within a story with words inputed from the user
***************************************************************** */



//Global variables


var wordStorage = [];//this is an array that will end up storing the user's input
var displayStory = false;//determines which section,pageOne or pageTwo,is being displayed after button push. true displays story, false displays buttons
var story = "It was a dark and stormy night. A shot rang out! A * slammed. The maid *. Suddenly, a * ship appeared on the horizon While millions of people *, the king lived in luxury. Meanwhile, one a * farm in kansas, a boy was growing up.";//basis of story and * is going to be user input in the order of which are listed on pageOne

//end of global variables

//********************************************************************


//This function puts the user entered values, and the "<missing text>" into the empty spaves in the story using a loop

function addWordsToStory(form) {
  var noun; //noun from user
  var pvt1; //first past tense verb from user
  var adj1; //first adjective from user
  var pvt2; //second past tense verb from user
  var adj2; //second  adjective from user


  noun = form.elements["noun"].value;
  pvt1 = form.elements["pvt1"].value;
  adj1 = form.elements["adj1"].value;
  pvt2 = form.elements["pvt2"].value;
  adj2 = form.elements["adj2"].value;

  if (!noun) {
    wordStorage[0] = "<span class=\"missing\">&ltMissing Text&gt</span>";
  }
  else {
    wordStorage[0] = noun;
  }//end of if
  if (!pvt1) {
    wordStorage[1] = "<span class=\"missing\">&ltMissing Text&gt</span>";
  }
  else {
    wordStorage[1] = pvt1;
  }//end of if
  if (!adj1) {
    wordStorage[2] = "<span class=\"missing\">&ltMissing Text&gt</span>";
  }
  else {
    wordStorage[2] = adj1;
  }//end of if
  if (!pvt2) {
    wordStorage[3] = "<span class=\"missing\">&ltMissing Text&gt</span>";
  }
  else {
    wordStorage[3] = pvt2;
  }//end of if
  if (!adj2) {
    wordStorage[4] = "<span class=\"missing\">&ltMissing Text&gt</span>";
  }
  else {
    wordStorage[4] = adj2;
  }//end of if
  

  for (i=0;i<5;i++) {
    var x=story.indexOf("*");
    story=story.substring(0,x)+wordStorage[i]+story.substring(x+1,story.length);
    
  }//end of for loop
  displayStory=true;
  
  document.getElementById("returnStory").innerHTML=story;
  story = "It was a dark and stormy night. A shot rang out! A * slammed. The maid *. Suddenly, a * ship appeared on the horizon While millions of people *, the king lived in luxury. Meanwhile, one a * farm in kansas, a boy was growing up.";
  wordStorage=[];

  toggleVisibility();
}//end of addWordsToStory

//**************************************************************************

//this function toggles between the sections pageOne and pageTwo

function toggleVisibility() {
  
  if (displayStory==true) {
    document.getElementById("pageOne").className= "invisible";
    document.getElementById("pageTwo").className= "visible";
    displayStory=false;
  }
  else {
    document.getElementById("pageOne").className= "visible";
    document.getElementById("pageTwo").className= "invisible";
    displayStory=true;
  }//end of if
  
    
}//end of toggleVisibility
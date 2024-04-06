const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const comp=document.querySelector("#comp");
const res=document.querySelector("#res");
choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      usermsg(userChoice);
      const compChoice = gencompChoice();
      comp.innerText = `Comp choice is ${compChoice}`;
      showwinner(userChoice,compChoice);
   });
});
 const usermsg=(userChoice)=>{
 msg.innerText=`You choice is ${userChoice}`;
 msg.style.backgroundColor="#081b31";
 msg.style.color="white";
}

const gencompChoice=()=>{
   const options=["red","green","blue"];
   const rand=Math.floor(Math.random ()*3);
   return options[rand];
 };
  
 const showwinner=( userChoice,compChoice)=>{
  if(userChoice===compChoice){
    res.innerText="You win";
    res.style.color="white";
    res.style.backgroundColor="green";
  }else{
    res.innerText="You lose";
    res.style.color="white";
    res.style.backgroundColor="red";
  }
 }

 
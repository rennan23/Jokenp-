    
    const result=document.querySelector(".result")
    const humanscore=document.querySelector("#human-score")
    const iascore=document.querySelector("#ia-score") 
    
    let humanscorenumber=0
    let iascorenumber=0
     
    
    const playhuman = (humanchoice) =>{
        plathegame(humanchoice,playmachine())
       
    }
 const playmachine =() =>{
     const choices =["rock","paper","scissors"]
     const randomNumber = Math.floor (Math.random() * 3)
     return choices[randomNumber]
 }
const plathegame = (human, machine) =>{

console.log("humano: " + human + "maquina:" + machine)

if(human===machine){
 result.innerHTML="Deu empate!!!"

}else if (
       (human==="paper"&&  machine==="rock")||
       (human==="rock" && machine==="scissors")||
       (human==="scissors" && machine=== "paper")
){
     humanscorenumber++
     humanscore.innerHTML=humanscorenumber
     result.innerHTML="Vocé ganhou!"
} else {
    iascorenumber++
    iascore.innerHTML=iascorenumber
    result.innerHTML="A IA ganhou de voce!"
}

}
    


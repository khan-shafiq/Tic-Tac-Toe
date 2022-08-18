//Selecting all elements
const selectBox=document.querySelector(".select_box");
const selectXBtn=selectBox.querySelector(".playerX");
const selectOBtn=selectBox.querySelector(".playerO");
const playBoard=document.querySelector(".play_board");
const allBox=document.querySelectorAll("section span");
const players=document.querySelector(".players");
const resultBox=document.querySelector(".result_box");
const replayButton=document.querySelector(".replay");
const winner=document.querySelector(".won_text");


let playerXIcon="fas fa-times";
let playerOIcon="far fa-circle";
let currPlayer="X";
let flag=0;
let score=['a','a','a','a','a','a','a','a','a'];

let isWin=(arr,Player)=>{
    let j;
    for(let i=0;i<=6;i=i+3){
        if(arr[i]==Player && arr[i+1]==Player && arr[i+2]==Player)
            return 1;
    }

    for(let i=0;i<=2;i++){
        if(arr[i]==Player && arr[i+3]==Player && arr[i+6]==Player)
            return 1;
        }
    
    if(arr[0]==Player && arr[4]==Player && arr[8]==Player)
        return 1;
    
    if(arr[2]==Player && arr[4]==Player && arr[6]==Player)
        return 1;

    for(j=0;j<=score.length;j++)
        {
            console.log(j);
            console.log(score);
            if(score[j]=='a')
                break;
        }
        console.log(j);
        if(j==score.length+1){
            return 2;
        }
    return 0;
}

function clickedBox(element){

    if(players.classList.contains("player")){
       
        element.innerHTML=`<i class="${playerOIcon}"></i>`;
        players.classList.remove("active","player");
        currPlayer="O";
    }else{
        element.innerHTML=`<i class="${playerXIcon}"></i>`;
        players.classList.add("active","player");
        currPlayer="X";
    }
    element.style.pointerEvents="none";
    score[element.classList[0]-1]=currPlayer;
    flag=isWin(score,currPlayer);

    if(flag==1){
        winner.textContent=`Player ${currPlayer} win the game!!`;
        playBoard.classList.remove("show");
        resultBox.classList.add("show");
    }
    
    else if(flag==2){
        winner.textContent=`Its a Tie :(`;
        playBoard.classList.remove("show");
        resultBox.classList.add("show");
        
    }

    // console.log(flag);

}

window.onload=()=>{

    for(let i=0; i<allBox.length; i++){
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }

    selectXBtn.addEventListener("click",()=>{
        selectBox.classList.add("hide");
        playBoard.classList.add("show");

    });
    selectOBtn.addEventListener("click",()=>{
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class","players active player");
    });
}

replayButton.onclick=()=>{
    window.location.reload();
}
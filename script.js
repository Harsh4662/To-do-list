console.log('Hi Harsh');
shownotes();
// If user add a note it get added to local storage

let addbtn=document.getElementById("addbtn");addbtn.addEventListener("click",function(e){

    let addTxt=document.getElementById("textarea");
    let addtitle=document.getElementById('title');
    let notes=localStorage.getItem("notes");
   
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myobj={
        title:addtitle.value,
        text:addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    addtitle.value="";
    // console.log(notesObj);
    shownotes();
})

function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
     let html ="";
     notesObj.forEach(function(element,index) {
         html +=`
                <div class="card2" id="cards">
                    <h2> ${element.title} </h2> <br>
                    <p class="text">${element.text}</p>
                    <button class="btn btn1" id="${index}" onclick="deletenote(this.id)" >Delete note </button>
                </div> `;
     });
     let notesElm=document.getElementById('card_section');
     if(notesObj.length !=0){
         notesElm.innerHTML= html;
     }
     else{
         notesElm.innerHTML="<h2>U Don't have any notes yet</h2>"
     }
}

//function to delete

function deletenote(index){
    console.log('deleting');

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}
//function to search

let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card2');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

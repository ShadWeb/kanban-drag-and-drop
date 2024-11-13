const btn_crsub = document.getElementById("cr-sub");
const formtodo = document.getElementById("Create_task");
const todo_bord = document.getElementById("todo");
const card_label = document.getElementById("card_label");
const title = document.getElementById("title");
const Description = document.getElementById("Description");


btn_crsub.addEventListener("click", () => {
  let nodediv = document.createElement("div");
  let nodeinputchekbox = document.createElement("input");
  let nodeinput = document.createElement("input");
  nodeinputchekbox.setAttribute("type", "checkbox");
  nodeinputchekbox.setAttribute(
    "class",
    "a bg-[#D6D6D6] w-4 h-4 border-2 p-1 user"
  );
  nodeinput.setAttribute(
    "class",
    "subuser text-[#667085] text-[14px] font-medium"
  );
  nodeinput.setAttribute("name", "subtask");
  nodeinput.setAttribute("placeholder", "Placeholder");
  nodediv.setAttribute("class", "az flex items-center gap-2");
  nodediv.appendChild(nodeinputchekbox);
  nodediv.appendChild(nodeinput);

  document.getElementById("subtask-form").appendChild(nodediv);
});

function selectlabel(element) {
  element.classList.toggle("outline");
}

formtodo.addEventListener("click", (e) => {
  let selectedValue = document.querySelector('input[name="Assignee"]:checked').value;
    e.preventDefault();
  
    console.log(selectedValue);
    
  if (title.value.length > 0 && selectedValue !="") {
    
    // card
    let card = document.createElement("div");
    card.setAttribute("draggable", "true");
    card.setAttribute("class","task p-[20px] flex flex-col gap-4 w-80 rounded-lg bg-[#FCFCFD]");
    card.addEventListener("dragstart", () => {
      card.classList.add("is-dragging");
    });
  
    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
    });
    todo_bord.appendChild(card);
    // headcard
    let cardheddiv = document.createElement("div");
    let nodetitel = document.createElement("h2");
    nodetitel.setAttribute("class", "font-bold text-lg");
    cardheddiv.appendChild(nodetitel);
    let nodetiteltext = document.createTextNode(title.value);
    nodetitel.appendChild(nodetiteltext);
    let hedtime = document.createElement("span");
    hedtime.setAttribute("class", "mr-6 font-semibold text-sm text-[#98A2B3]");
    cardheddiv.appendChild(hedtime);
    var timw=new Date();
    timw.getHours
    const date = new Date();  
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    const currentMonth = monthNames[date.getMonth()];  
    let hedtimeval = document.createTextNode( timw.getDate()+"th"+" "+currentMonth);
    hedtime.appendChild(hedtimeval);
    let Assignednode = document.createElement("span");
    Assignednode.setAttribute("class", " font-semibold text-sm text-[#98A2B3]");
    cardheddiv.appendChild(Assignednode);
    let hedcartassignednodetext = document.createTextNode(
      "Assigned to " + selectedValue
    );
    Assignednode.appendChild(hedcartassignednodetext);
    card.appendChild(cardheddiv);
    // maincard
    let cardmain = document.createElement("div");
    cardmain.setAttribute("class", "flex flex-col gap-3");
    card.appendChild(cardmain);
    let Descriptionnodde = document.createElement("p");
    Descriptionnodde.setAttribute(
      "class",
      "font-medium text-sm text-[#98A2B3]"
    );
    let dectext = document.createTextNode(Description.value);
    Descriptionnodde.appendChild(dectext);
    cardmain.appendChild(Descriptionnodde);
    let subtask = document.querySelectorAll(".subuser");
    // let subchek = document.querySelectorAll(".a");
    // let subdiv = document.querySelectorAll(".az");
    const values = Array.from(subtask).map(input => input.value); // Get their values 
   
    crsub(values,cardmain);
    console.log(values);
    

    // fooother
    let bordlabel = document.createElement("div");
    bordlabel.setAttribute("class", "flex gap-2 flex-wrap");
    let labelnodetext = document.querySelectorAll(".outline");
    card.appendChild(bordlabel);
    clearinput();
    crlabel(labelnodetext,bordlabel);
    
  }
});




function crsub(elem,parent){
 
  for (const keys in elem) {
    if(elem[keys] != ""){

     
    let sublist = document.createElement("div");
    sublist.setAttribute("class", "flex items-center gap-2");
    let cheksub = document.createElement("input");
    sublist.appendChild(cheksub);
    cheksub.setAttribute("type", "checkbox");
    cheksub.setAttribute("class", "bg-[#D6D6D6] w-4 h-4 border-2 p-1");
    let labelsub = document.createElement("label");
    labelsub.setAttribute("class", "text-[#667085] text-[14px] font-medium");
    sublist.appendChild(labelsub);
    let labeltext = document.createTextNode(elem[keys]);
    // console.log(values[keys]);
    
    labelsub.appendChild(labeltext);
    parent.appendChild(sublist);
   
  }
}
}

function crlabel(elem,parent){
  for (const key in elem) {
    let labelnode = document.createElement("span");
    elem[key].classList.remove("outline");
    let labeltext = document.createTextNode(elem[key].innerHTML);
    labelnode.setAttribute("class", elem[key].classList.value);
    labelnode.appendChild(labeltext);
    parent.appendChild(labelnode);
  }
}

function clearinput() {
  // let inputs = document.querySelectorAll("input");
  // inputs.forEach((input) => (input.value = ""));
  document.getElementById("kanban_form").reset();


}

// create
// let nodediv = document.createElement("div");
// let nodetitel = document.createElement("h2");
// let nodetiteltext = document.createTextNode(title.value);
// let hedcarttimenode =document.createElement("span");

// let hedcartassignednode =document.createElement("span");
// hedcartassignednode.setAttribute("class","font-semibold text-sm text-[#98A2B3]");
// let hedcartassignednodetext =document.createTextNode("Assigned to"+selectedValue);
// hedcartassignednode.appendChild(hedcartassignednodetext);

// let dec =document.createElement("p");
// let dectext =document.createTextNode(Description.value);
// let divlabellistnode = document.createElement("div");
// let labelnodetext = document.querySelectorAll(".outline");

// setAttribute
// divlabellistnode.setAttribute("class", "flex gap-2 flex-wrap");
// lbcreator(labelnodetext);
// nodediv.setAttribute("draggable", "true");
// nodediv.setAttribute("class", "p-[20px] w-80 rounded-lg bg-[#FCFCFD]");
// nodetitel.setAttribute("class", "font-bold text-lg");

// setlocation
// nodetitel.appendChild(nodetiteltext);
// nodediv.appendChild(nodetitel);
// todo_bord.appendChild(nodediv);
// dec.appendChild(dectext);
// nodediv.appendChild(divlabellistnode);

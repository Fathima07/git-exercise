const getDiv = document.getElementById("to-do");
const crtUl = document.createElement("ul");
const crtInput = document.createElement("input");
const crtFilter =document.getElementById("filter-todo");

if(!(crtFilter instanceof HTMLInputElement)) {
  throw new Error("No input with id 'filter-todo' found!");
}



if(!(getDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'to-do' found!");
}



type State = {
  title: string;
  done: boolean;
}[];

const toDos: State = [
  {
    title: "BWM",
    done: true,
  },
  {
    title: "Audi",
    done: true,
  },
  {
    title: "Benz",
    done: true,
  },
  {
    title:"Toyoto",
    done: false,
  },
];


const crtToDo = () => {
  getDiv.innerHTML= "";
  crtInput.setAttribute("type","text");
  crtInput.innerHTML= " ";
  getDiv.appendChild(crtInput);
  
  getDiv.appendChild(crtUl);
  
  let crtButton = document.createElement('button');
  listTodo();
  crtButton.innerText ="Add";
  getDiv.appendChild(crtButton)
  crtButton.addEventListener("click",addTodo);
  crtFilter.addEventListener("click",function(){
    listTodo(crtFilter.checked);
  });
}


const addTodo =()=>{
  
  toDos.push({
    'title':crtInput.value,
    'done':false,
    
  });
  
  listTodo();
}

const listTodo=(filter?:boolean)=>{
  crtUl.innerHTML = '';
  for(const todo of toDos.sort((a, b) => a.title.localeCompare(b.title))) {
    if((filter && !todo.done)){
      continue;
    }
    let crtLi = document.createElement('li');
    let checkInput = document.createElement('input');
    checkInput.setAttribute("type","checkbox");
    checkInput.checked = todo.done;
    crtLi.appendChild(checkInput);
    checkInput.addEventListener("click",function(){
      if(checkInput.value){
        todo.done = checkInput.checked;
        console.log(todo);
      }
    });
    let crtSpan = document.createElement("span");
    crtSpan.innerHTML = "Title:" + todo.title;
    crtLi.appendChild(crtSpan);
    crtUl.appendChild(crtLi);

    
     
  }
}
crtToDo();
/*
const addToDoList = () => {
   let int = document.querySelector('crtInput')?.value;
   let ulElement = document.querySelector('crtUl');
   let toDosList = " ";

   for( let i=0; i<toDos.length;i++){
     if(toDos[i].title == int && toDos[i].done){
       toDosList += "<li>" + toDos[i].title + "</li>" + "<br>" + "<li>" + toDos[i].done + "</li>";
     }
   }
    document.querySelector('ulElement').innerHTML = toDosList;

  }

  addToDoList();
  */
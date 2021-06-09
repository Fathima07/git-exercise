const getDiv = document.getElementById("to-do");

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
  let crtInput = document.createElement("input");
  crtInput.setAttribute("type","text");
  crtInput.innerHTML= " ";
  getDiv.appendChild(crtInput);
  let crtUl = document.createElement("ul");
  getDiv.appendChild(crtUl)

  for(const todo of toDos) {
    let crtLi = document.createElement('li');
    let checkInput = document.createElement('input');
    checkInput.setAttribute("type","checkbox");
    checkInput.checked = todo.done;
    crtLi.appendChild(checkInput);
    crtUl.appendChild(crtLi);
     crtLi.textContent = "Title:" + todo.title;
     
  }
  
  let crtButton = document.createElement('button');
  crtButton.innerText ="Add";
  getDiv.appendChild(crtButton)
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
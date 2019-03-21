function constructCard(parentNode, data)
{
  let card = document.createElement('DIV');
  card.className = 'card';

  let h4 = document.createElement('H4');
  let h4txt = document.createTextNode("Username: " + data.username);
  h4.appendChild(h4txt);
  card.appendChild(h4);
  
  let id = document.createElement("P");
  let idtxt = document.createTextNode("ID: " + data.id);
  id.appendChild(idtxt);
  card.appendChild(id);

  let name = document.createElement("P");
  let nametxt = document.createTextNode("Name: " + data.name);
  name.appendChild(nametxt);
  card.appendChild(name);

  let email = document.createElement("P");
  let emailtxt = document.createTextNode("E-mail: " + data.email);
  email.appendChild(emailtxt);
  card.appendChild(email);

  let web = document.createElement("P");
  let webtxt = document.createTextNode("Web: " + data.website);
  web.appendChild(webtxt);
  card.appendChild(web);

  let div = document.createElement("DIV");
  let edit = document.createElement("BUTTON");
  let edittxt = document.createTextNode("Edit");
  edit.appendChild(edittxt);
  
  let del = document.createElement("BUTTON");
  let deltxt = document.createTextNode("Delete");
  del.appendChild(deltxt);
  
  div.appendChild(edit);
  div.appendChild(del);

  card.appendChild(div);

  parentNode.appendChild(card);
}

const appDiv = document.getElementById('container');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const getData = document.getElementById('getData');

getData.addEventListener('click', (event) => {
   console.log("Get Data clicked...");
}); 

const main = document.getElementsByTagName('main')[0];


getData.addEventListener('click', (event) => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if(response.status !== 200)
    {
      main.innerHTML = `Oops, seems there is something wrong!`;
      return;
    }
    else {
      response.json().then((data) => {
        for(let i = 0; i < data.length; i++) {
          constructCard(main, data[i]);
        }
      
       // main.innerHTML = JSON.stringify(data);
       // console.log(data);
      }); 
    }
  })
  .catch( err => {
    console.log(err);
  })
});

const postDataBtn = document.getElementById("postData");

postDataBtn.addEventListener("click", (event) => {
  let modalForm = document.getElementsByClassName("modal-form")[0];
  modalForm.style.display = "block";
  // console.log(modalForm);  
});

const modal = document.getElementById("modal-form");

window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = "none";
  } 
}

document.getElementById("cancel").addEventListener("click", (event) => {
  document.getElementsByClassName("modal-form")[0].style.display = "none";
});

document.getElementById("closeButton").addEventListener("click", (event) => {
  document.getElementsByClassName("modal-form")[0].style.display = "none";
});

document.getElementById("post").addEventListener("click", (event) => {
  const username = document.querySelector('input[name="username"]').value;
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const web = document.querySelector('input[name="web"]').value;
  document.getElementsByClassName("modal-form")[0].style.display = "none";

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
     // id: 11, 
      username: username,
      name: name,
      email: email,
      website: web
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
  .then(json => console.log(json));

  // console.log(`Uname: ${username}, Name: ${name}, E-mail: ${email}, Web: ${web}`);
});
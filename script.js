function openApp(app){
  let win = document.getElementById("window");
  let title = document.getElementById("title");
  let content = document.getElementById("content");

  win.style.display = "block";

  if(app==="explorer"){
    title.innerText="Arquivos";
    content.innerHTML="<p>Seu sistema fake 😎</p>";
  }

  if(app==="browser"){
    title.innerText="Browser";
    content.innerHTML="<iframe src='https://google.com' style='width:100%;height:100%'></iframe>";
  }
}

function closeApp(){
  document.getElementById("window").style.display="none";
}

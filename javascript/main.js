var bookmarkInputs = document.getElementById("inputText");
var urlInputs = document.getElementById("floatingInput");
var visit = document.getElementById("visit");

var container = [];

function getData() {
  var urls = {
    bookName: bookmarkInputs.value,
    url: urlInputs.value,
  };
  container.push(urls);
  display(container);
  clear();
}

function display(list) {
  var cartona = `
     <div class="container-md w-100 d-flex bg-white border-bottom ">
        <div class="col d-flex justify-content-center my-3 ">
          <div class="d-inline ">Index</div>
        </div>
        <div class="col d-flex justify-content-center my-3 ">
          <div class="d-inline ">Website Name</div>
        </div>
        <div class="col d-flex justify-content-center my-3 ">
          <div class="d-inline">Visit</div>

        </div>
        <div class="col d-flex justify-content-center my-3 ">
          <div class="d-inline">Delete</div>
        </div>
      </div>
  
  `;
  for (let i = 0; i < list.length; i++) {
    cartona += `
          <div class="container-md w-100 d-flex bg-white border-bottom">
        <div class="col d-flex justify-content-center my-3">
          <div class="d-inline ">${i + 1}</div>
        </div>
        <div class="col d-flex justify-content-center my-3 ">
          <div class="d-inline ">${list[i].url}</div>
        </div>
        <div class="col d-flex justify-content-center my-3">
            <a  href=https://${
              list[i].url
            }  target="_blank" class="btn btn-visit">
            <i class="fa-solid fa-eye pe-2"></i> 
            Visit</a>
        </div>
        <div class="col d-flex justify-content-center my-3 ">
             <a onclick="remove(${i})" class="btn btn-danger ">
             <i class="fa-solid fa-trash-can"></i> Delete</a>
        </div>
      </div>`;
  }
  document.getElementById("display").innerHTML = cartona;
}

function clear() {
  bookmarkInputs.value = "";
  urlInputs.value = "";
}

function remove(index) {
  console.log(index);
  container.splice(index, 1);
  display(container);
}

function validation(elemet) {
  var regex = {
    inputText: /^[A-z][a-z]{0,11}$/,
    floatingInput: /^(https:\/\/|http:\/\/)?www.[a-z0-9]{1,}\.com$/,
  };
  console.log(elemet.classList);
  if (regex[elemet.id].test(elemet.value) == true) {
    console.log("matched");
    elemet.classList.add("is-valid");
    elemet.classList.remove("is-invalid");
  } else {
    console.log("not matched");
    elemet.classList.add("is-invalid");
    elemet.classList.remove("is-valid");
  }
}

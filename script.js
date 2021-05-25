// Load the storaged tasks

document.addEventListener("DOMContentLoaded", () => {  
  
  var all_storage = JSON.parse(localStorage.getItem("storage_list")); 
  
  if(all_storage){    
    all_storage.forEach(element => {

      var full_list = []

      let li = document.createElement("li");
      let task = element;
      var t = document.createTextNode(task);
      li.appendChild(t);
      full_list.push(task);
      localStorage.setItem('storage_list', JSON.stringify(full_list));

      document.getElementById("tasklist").appendChild(li);

      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let item = this.parentElement;
          var index = full_list.indexOf(task);
          full_list.splice(index,1);
          item.style.display = "none";          
          
      }
    }
      
    });      
    }});

// Create a "close" button and append it to each list item

var mytasks = document.getElementsByTagName("LI");

var i;

for( i=0 ; i < mytasks.length ; i++ ) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mytasks[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var item = this.parentElement;
    item.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button and update the storage

var full_list = [];

function addNewElement() {
    var li = document.createElement("li");
    var task = document.getElementById("newTask").value;
    var t = document.createTextNode(task);
    li.appendChild(t);
    full_list.push(task);
    localStorage.setItem('storage_list', JSON.stringify(full_list));
    
    if (task === '') {
      alert("There is no task to add!");
    } else {
      document.getElementById("tasklist").appendChild(li);
    }
    
    document.getElementById("newTask").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var item = this.parentElement;
        var index = full_list.indexOf(task);
        full_list.splice(index,1);
        item.style.display = "none";
      }
    }
  }

// Update the storaged list every click.

  document.addEventListener("click", () => {  

  localStorage.removeItem('storage_list');
  localStorage.setItem('storage_list', JSON.stringify(full_list));

  })




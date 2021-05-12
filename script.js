// Load the storaged tasks

onload = function(){
ul = document.getElementById("tasklist");
var oldTask = JSON.parse(localStorage.getItem("oldTasks"));
console.log(oldTask)
 }

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

// Create a new list item when clicking on the "Add" button

function addNewElement() {
    var li = document.createElement("li");
    var task = document.getElementById("newTask").value;
    var t = document.createTextNode(task);
    li.appendChild(t);
    
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
        item.style.display = "none";
      }
    }
  }

// Storage all the tasks implemented

var tsks = document.getElementsByTagName("LI");
var i;

for ( i = 0; i < tsks.length; i++) {
    localStorage.setItem("oldTasks", JSON.stringify(tsks[i]));
}




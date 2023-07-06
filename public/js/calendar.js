// Calendar data
var events = [];

// Create calendar
function createCalendar() {
  var calendar = document.getElementById("calendar");
  var currentDate = new Date();
  
  for (var i = 0; i < 6; i++) {
    var monthContainer = document.createElement("div");
    monthContainer.className = "month-container";
    calendar.appendChild(monthContainer);
    
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    
    var monthHeader = document.createElement("h2");
    monthHeader.innerText = getMonthName(month) + " " + year;
    monthContainer.appendChild(monthHeader);
    
    var table = document.createElement("table");
    monthContainer.appendChild(table);
    
    var headerRow = document.createElement("tr");
    table.appendChild(headerRow);
    
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (var j = 0; j < days.length; j++) {
      var th = document.createElement("th");
      th.innerText = days[j];
      headerRow.appendChild(th);
    }
    
    var firstDay = new Date(year, month, 1).getDay();
    var totalDays = new Date(year, month + 1, 0).getDate();
    var date = 1;
    
    for (var row = 0; row < 6; row++) {
      var tr = document.createElement("tr");
      table.appendChild(tr);
      
      for (var col = 0; col < 7; col++) {
        var td = document.createElement("td");
        
        if (row === 0 && col < firstDay) {
          td.innerText = '';
        } else if (date > totalDays) {
          break;
        } else {
          td.innerText = date;
          td.dataset.date = year + '-' + (month + 1) + '-' +("0" + date).slice(-2);
          td.addEventListener("click", function() {
            showEventModal(this.dataset.date);
          });
          date++;
        }
        
        tr.appendChild(td);
      }
    }
    
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
}

// Get month name
function getMonthName(month) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month];
}

// Show event modal
function showEventModal(date) {
  var eventModal = document.getElementById("eventModal");
  eventModal.style.display = "block";
  
  var eventDate = document.getElementById("eventDate");
  eventDate.value = date;
}

// Add event
function addEvent() {
  var eventTitle = document.getElementById("eventTitle").value;
  var eventDate = document.getElementById("eventDate").value;
  
  if (eventTitle && eventDate) {
    events.push({ title: eventTitle, date: eventDate });
    alert("Event added successfully!");
    closeEventModal();
  } else {
    alert("Please enter event details!");
  }
}

// Close event modal
function closeEventModal() {
  var eventModal = document.getElementById("eventModal");
  eventModal.style.display = "none";
}

// Initialize calendar
createCalendar();
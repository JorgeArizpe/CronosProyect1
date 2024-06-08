// SIDEBAR TOGGLE ############################################
document.addEventListener("DOMContentLoaded", function(event) {
   
	const showNavbar = (toggleId, navId, bodyId, headerId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId),
	bodypd = document.getElementById(bodyId),
	headerpd = document.getElementById(headerId)
	
	// Validate that all variables exist
	if(toggle && nav && bodypd && headerpd){
	toggle.addEventListener('click', ()=>{
	// show navbar
	nav.classList.toggle('show')
	// change icon
	toggle.classList.toggle('bx-x')
	// add padding to body
	bodypd.classList.toggle('body-pd')
	// add padding to header
	headerpd.classList.toggle('body-pd')
	})
	}
	}
	
	showNavbar('header-toggle','nav-bar','body-pd','header')
	
	/*===== LINK ACTIVE =====*/
	const linkColor = document.querySelectorAll('.nav_link')
	
	function colorLink(){
	if(linkColor){
	linkColor.forEach(l=> l.classList.remove('active'))
	this.classList.add('active')
	}
	}
	linkColor.forEach(l=> l.addEventListener('click', colorLink))
	
	 // Your code to run since DOM is loaded and ready
	});
// SIDEBAR TOGGLE ############################################

function convertToEvents(calendarCronos) {
    // Lanza un error si el argumento no es un array
    if (!Array.isArray(calendarCronos)) {
      throw new TypeError('calendarCronos debe ser un arreglo');
    }
  
    // Transforma cada elemento del arreglo en un objeto adecuado para eventos
    return calendarCronos.map(step => ({
      title: step.descripcion,
      start: new Date(step.fecha_de_los_pasos).toISOString(), // Convierte la fecha a formato ISO
      end: (new Date(step.fecha_de_los_pasos).toISOString()) // Convierte la fecha a formato ISO
    }));
  }
  

// Pasar los datos de calendarCronos al JavaScript



   document.addEventListener('DOMContentLoaded', function () {
    // Aquí puedes agregar más código que utilice dataArray
    //var dataArray2 = dataArray
    var dataArray1 = JSON.parse(dataArray);
    //console.log(dataArray2);
    console.log(dataArray1);  // Esto debería mostrar tu array
// Pasar los datos de calendarCronos al JavaScript
    console.log("dead");
    const events = convertToEvents(dataArray1);

const calendarEl3 = document.getElementById("calendar23");
//get today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
}
if(mm<10) {
    mm = '0'+mm
}
today = yyyy + '-' + mm + '-' + dd;
console.log(today);


// necesitamos hacerlo un poco a la izq el calendario
//calendarEl.style.marginLeft = "-1rem";
const calendar4 = new FullCalendar.Calendar(calendarEl3, {
    themeSystem: 'bootstrap5',
    initialView: "dayGridMonth",
    initialDate: today,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: events,
    eventColor: '#a5834a',
    eventDisplay: 'block',
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
  });

  calendar4.render();

});
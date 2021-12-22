console.log=("Script loaded!")
var form1 = document.getElementById("form-1"); 
var name = document.getElementById("name");

function writeFile (data){
		const dive = document.getElementById()
		var text = '<div class = "card" p-3>' + '<h3>' + data.name+ '<h3>' + 'div>'
		div.innerHTML += text
	}

	const list = []


form1.addEventListener("submit", function(event){
	var name = form1.elements["name"].value
	event.preventDefault();
	list.push(form1.elements['name'].value)
	form1.elements['name'].value =""

	localStorage.setItem('users', list)
	console.log(list)

});
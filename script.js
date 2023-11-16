// Cache the DOM
var buton = document.getElementById("buton")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("image")
var asteptari = document.getElementById("asteptari")

var an= document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()


//Add even listener to button

//Add event listener on birthyear to display age
an.addEventListener("mouseover", displayAge)

function displayAge ()
{
		an.innerHTML = year -an.innerHTML
		
}	

buton.addEventListener("click", altaViata)

function altaViata()
{
		nume.innerHTML = "Functie: Frog"
		prenume.innerHTML = "Locul de munca: Big Pond"
		asteptari.innerHTML = "Experiete: <ol> <li> Jumping </li> <li> Catching flies</li></ol>"
		
		
		img.src= "frog.jpg"
		img.style.opacity = "70%"
		img.style.borderWitdh = "25px"
		img.style.height = "200px"
		img.style.width = "300px"
		img.align = "center"
		
		body.style.backgroundColor = "orange"
		body.style.color = "blue"
		
		
}

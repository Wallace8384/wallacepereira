const btn = docunent.querySelector('#submitbtn')
const header = document.querySelector('h1')

btn.addEventListener("click", function(event){
	evente.prevenDefault()

	const name = document.querySelector('#name').value
	const email = document.querySelector('#email').value
	const fone = document.querySelector('#fone').value

	console.table([name,email,fone])
})

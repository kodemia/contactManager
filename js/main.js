function editField(selectedField){
	console.log("fhield")
	$(selectedField).closest("span").siblings(".data-label, .form-group").toggleClass("d-none")
}

function showModal(modalId){
	$(modalId).modal("show")
}
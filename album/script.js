var selectedRow = null

function onFormSubmit(event) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["pictures"] = document.getElementById("pictures").value;
    formData["description"] = document.getElementById("description").value;
    formData["number"] = document.getElementById("number").value;
    formData["collection"] = document.getElementById("collection").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.pictures;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.collection;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("pictures").value = selectedRow.cells[0].innerHTML;
    document.getElementById("description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("collection").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.pictures;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.collection;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("pictures").value = '';
    document.getElementById("description").value = '';
    document.getElementById("number").value = '';
    document.getElementById("collection").value = '';
    selectedRow = null;
}
// upload and delete image section
var form = document.getElementById(form)
var parentDiv = document.getElementById(result)
form.addEventListener('submit',function (event) {
    event.preventDefault()
    var reader = new FileReader()
    var name = document.getElementById("Image").files[0].name
    reader.addEventListener('load', function () {
        if (this.result && localStorage) {
            window.localStorage.setItem(name,this.result)
            alert("Image stored in local storage")
            parentDiv.innerHTML = ''
            showImages()
        }
        else {
          alert("Not successful")  
        }
    })


reader.readAsDataurl(document.getElementById('image'.files[0]))

console.log(name)
})
function showImages() {
    for (let i =0; i < window.localStorage.length; i++) {
        let res =window.localStorage.getItem(window.localStorage.key(i))
        var image =new Image()
        image.src = res;
        parentDiv.appendChild(image)

    }
}
function remove () {
    window.localStorage.clear()
    parentDiv.innerHTML =''
}
showImages()
const swiper = new Swiper('.swiper', {
    autoplay: {
        dalay:3000,
        disableOnInteraction: false,
    },
    
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.bundle.min.js"
/*
<div class="container text-center">
    <div class="row align-items-start">
      <div class="col">
        <div class="row container border">
          <button class="btn btn-dark btn-block" data-bs-toggle="modal" data-bs-target="#listModal">Liste Ekle</button>
          <div class="col-md-1">


*/
/*
    const updateButon = document.querySelectorAll(".btn.btn-warning.edit-button");
    const duzenleList;
    updateButon.forEach(function(click){
       let inputButon=document.querySelectorAll(".form-control");
       inputButon.forEach(function(focus){
      focus.addEventListener("click",function(){
        duzenleList=focus.textContent;});
          click.inputButon.textContent=duzenleList;
       });

    });
*/


    //commit test
    document.addEventListener('DOMContentLoaded', function() {
      const addListButton = document.getElementById('addListButton');
      const listNameInput = document.getElementById('listNameInput');
      const listGroup = document.getElementById('listGroup');

      addListButton.addEventListener('click', function() {
        const listName = listNameInput.value.trim();

        if (listName !== '') {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
          listItem.innerHTML = `
            <div class="ms-2 me-auto">
              ${listName}
            </div>
            <button class="btn btn-danger delete-button">Sil</button>
            <button class="btn btn-warning edit-button" data-bs-toggle="modal" data-bs-target="#editModal-${listGroup.childElementCount + 1}">Düzenle</button>
          `;

          listGroup.appendChild(listItem);
          listNameInput.value = '';

          const deleteButton = listItem.querySelector('.delete-button');
          deleteButton.addEventListener('click', function() {
            listItem.remove();
          });

          const editButton = listItem.querySelector('.edit-button');
          const editNameInput = document.getElementById(`editNameInput-${listGroup.childElementCount}`);
          const saveEditButton = listItem.querySelector('.save-edit-button');

          editButton.addEventListener('click', function() {
            const itemText = listItem.querySelector('.ms-2');
            editNameInput.value = itemText.innerText;
          });

          saveEditButton.addEventListener('click', function() {
            const newName = editNameInput.value.trim();
            if (newName !== '') {
              const itemText = listItem.querySelector('.ms-2');
              itemText.innerText = newName;
              const editModal = bootstrap.Modal.getInstance(document.getElementById(`editModal-${listGroup.childElementCount}`));
              editModal.hide();
            }
          });
        }
      });

      const deleteButtons = document.querySelectorAll('.delete-button');
      deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          const listItem = button.closest('.list-group-item');
          listItem.remove();
        });
      });
    });
    document.addEventListener('DOMContentLoaded', function() {
  const updateButtons = document.querySelectorAll(".btn.btn-warning.edit-button");

  updateButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const listItem = button.closest(".list-group-item");
      const itemText = listItem.querySelector('.ms-2');

      const editModal = bootstrap.Modal.getInstance(document.getElementById(`editModal-${listItem.getAttribute('data-bs-target')}`));
      const editNameInput = editModal.getElementByClassName('form-control')[0];

      editNameInput.value = itemText.innerText.trim();
    });
  });
});



   

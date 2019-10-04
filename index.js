'use strict';

function addItems() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let userInput = $('#shopping-list-entry').val();
    $('ul').append(`<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
}

function checkItems() {
  $('.shopping-list').on('click', '.shopping-item-toggle',function() {
    const itemToToggle = $(event.target).parent().parent().find('.shopping-item');
    itemToToggle.toggleClass('shopping-item__checked');
    console.log(itemToToggle);
    console.log('beep');
  });

}

function deleteItems() {
  $('.shopping-list').on('click', '.shopping-item-delete',function() {
    const itemToDelete = $(event.target).closest('li');
    itemToDelete.remove();
  });
}

function shoppingList() {
  deleteItems();
  addItems();
  checkItems();
}

$(shoppingList);
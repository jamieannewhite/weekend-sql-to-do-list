console.log('js');

$(document).ready(function () {
    console.log('JQready');
    setupClickListeners();
    getTodo();
    $('#view-todo').on('click', '.deleteBtn', deleteTodo);


    /*     setupClickListeners();
     */
});

function setupClickListeners() {
    $("#add-task-button").on('click', function () {
        console.log('button clicked');
        let todoSend = {
            // call saveToDo with the new obejct
            name: $('#task-name-in').val(),
            type: $('#task-type-in').val(),
            date: $('#task-due-in').val(),
            notes: $('#task-notes-in').val(),
            

        };
        saveToDo(todoSend);
    });
    $('#viewTodo').on('click', '.deleteBtn', deleteTodo);

};

//POST REQUEST SAVE TODO
function saveToDo(newTodo) {
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTodo
    }).then((response) => {
        console.log('POST new todo');
        getTodo();
    }).catch(function (error) {
        console.log(error);
    })
}

//GET TODO
function getTodo() {
    console.log('in getTodo');
    $('#view-todo').empty();
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).then(function (response) {
            console.log('aaah', response);
            appendTodo(response);
           /*  //append to dom 
            for (let i = 0; i < response.length; i++) {
                $('#view-todo').append(`
            <tr data-todo-id="${response[i].id}">
                <td>${response[i].name}</td>
                <td>${response[i].type}</td>
                <td>${response[i].date}</td>
                <td>${response[i].notes}</td>
                <td><button class ="deleteBtn">DELETE</button></td>
            `);

            } */
        }).catch(function (error) {
            console.log('error in GET', error);
        });
    };

    //APPEND TO DOM
     function appendTodo(response) {
        $('#view-todo').empty();
        for (let i = 0; i < response.length; i++) {
            let todo = response[i];
            let $tr = $('<tr></tr>');
            $tr.data('todo', todo.id);
            $tr.append(`<td>${todo.task_name}</td>`);
            $tr.append(`<td>${todo.task_type}</td>`);
            $tr.append(`<td>${todo.task_due}</td>`);
            $tr.append(`<td>${todo.task_notes}</td>`);
            $tr.append(`<td><button class ="completeBtn">COMPLETE</button></td>`);
            $tr.append(`<td><button class ="deleteBtn">DELETE</button></td>`);
        
            $('#view-todo').append($tr);
        };


     };

     function deleteTodo (){
         let todoDelete = $(this).closest('tr').data('todo');
         console.log(todoDelete);
         $.ajax({
            method: 'DELETE',
            url: `/todo/${todoDelete}` //change the URL based on what you want to delete
            //data: {id: idToDelete} will not work in DELETE
        }).then(function (response) {
            console.log(response);
            getTodo;
    
        }).catch(function (error) {
    
        });


     };
$(document).ready(function() {
    var calendar = $('#calendar').fullCalendar({
        // ... (resto del código JavaScript)
    });

    $('#btn-add-event').click(function() {
        // ... (código para agregar eventos)
    });

    $('#btn-save-event').click(function() {
        // ... (código para guardar eventos)
    });

    $('#calendar').on('click', '.delete-btn', function() {
        // ... (código para eliminar eventos)
    });
});

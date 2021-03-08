//CALENDAR
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        initialDate: new Date(), //'2020-09-12' ,
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        // editable: true,
        // selectable: true,
        events: [{
            title: 'Piura',
            start: '2021-03-08',
            end: '2021-03-08'
        }, {
            title: 'Sechura',
            start: '2021-03-20',
            end: '2021-03-20',
            color: '#dd4b39'
        }, {
            title: 'Paita',
            start: '2021-03-10',
            end: '2021-03-10',
            color: '#011455'
        }, {
            title: 'La Union',
            start: '2021-03-08',
            end: '2021-03-08',
            color: '#ff9f89'
        }, {
            title: 'Colan',
            start: '2021-03-20',
            end: '2021-03-20',
            color: 'rgb(6, 143, 6)'
        }, {
            title: 'Catacaos',
            start: '2021-03-20',
            end: '2021-03-20',
            color: 'rgb(255, 7, 81)'
        }]
    });

    calendar.render();
});
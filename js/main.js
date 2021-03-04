/*==========DataTable============*/
$(".tablas").DataTable({
    "language": {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    }
});


// link active
$('.menu_link').on('click', function() {
    $('.menu_link').removeClass('active');
    $(this).addClass('active');
});

// mapa antenas
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxvbnNvYWxhbWEiLCJhIjoiY2tsa2h4eGd4MDFqZjJvbnp6MndtNjFjMyJ9.C016LuwWfitjB2p6PCuQAQ'; // replace this with your access token
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alonsoalama/cklkjcoi60kxa17k83whvtvge', // replace this with your style URL
    center: [-80.84850048649241, -5.139506344893334],
    zoom: 8
});
// code from the next step will go here
map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['antenas'] // replace this with the name of the layer
    });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    var popup = new mapboxgl.Popup({
            offset: [0, -15]
        })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
        .addTo(map);
});


// char antenas-clientes 
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Piura', 'Colán', 'Sechura', 'La Unión', 'Paita'],
        datasets: [{
            label: 'Mis clientes',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [50, 25, 72, 30, 100]
        }]
    },

    // Configuration options go here
    options: {}
});


// chart ventas
new Chart(document.getElementById("myLineChart"), {
    type: 'line',
    data: {
        labels: ['2020-08', '2020-09', '2020-10', '2020-11', '2020-12', '2021-01', '2021-02'],
        datasets: [{
            data: [1500, 1600, 1700, 1750, 1800, 1850, 1900],
            label: "Mis ventas",
            borderColor: "#3e95cd",
            fill: false
        }]
    },
    options: {
        // title: {
        //     display: true,
        //     text: 'Grafica de mis ventas'
        // }
    }
});


/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.getElementsByClassName('collap')
var i

for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')
            // const rotate = document.getElementsByClassName('flecha')
            // $(rotate).addClass('rotate');

        $(this).find('.flecha').toggleClass('rotate');
    })

}
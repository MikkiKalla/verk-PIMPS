// Rendering with Handlebars
function render(template, data, target) {
    var target = document.getElementById("yield")
    $.get('/assets/templates/' + template + ".handlebars", function (temp) {
        var templates = Handlebars.compile(temp);
        target.innerHTML = templates(data);
    })
};
Router.autoRun = true;
Router.on('route', function () {
    console.log('go to ' + this.path);
});
Router.on('beforeRender', function () {
    console.log('before ' + this.path);
});
Router.on('afterRender', function () {
    console.log('after ' + this.path);
});
// Declare not found route
Router.notFound = function () {
    this.render($('#not-found').html());
};
let xhr = new XMLHttpRequest();


Router.route('/movie/:id', function () {
    var target = document.getElementById("yield")
    $.getJSON("https://api.themoviedb.org/3/movie/" + this.params.id + "?api_key=fdf806fd1275ea7699d8e2ad53e054e2", function(data) {
        console.log(data);
        render('movie', {data: data})

    });

    this.on('leave', function () {
        console.log('good bye Home');
    });
});
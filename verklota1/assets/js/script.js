$(document).ready(function () {
    $('.splash').css('opacity', '1'); // doing this with jQuery for ease

    // here are the basics, just like your existing code
    $(".splash").hover(function () {
        $(this).fadeOut('slow'); // you could also use 
    });
});

let r = new XMLHttpRequest();
r.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=fdf806fd1275ea7699d8e2ad53e054e2");
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;

  // const getGenre = new XMLHttpRequest();
  // r.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=fdf806fd1275ea7699d8e2ad53e054e2&language=en-US", true);
  // r.onreadystatechange = function () {
  // if (r.readyState != 4 || r.status != 200) return;
  
  const response = JSON.parse(r.responseText);
  
  let movieList = document.querySelector('.popular-list')

  const IdInfo = new generalInfo();

  for (let movie of response.results) {


    console.log(movie);
    const image_path = "http://image.tmdb.org/t/p/original"; //poster path
    const poster_loc = image_path + movie.poster_path;
    const movie_title = movie.title;
    const rating = movie.vote_average;
    const genre = movie.genre_ids;
    const id = movie.id;
    const getGenre = IdInfo.getGenres(genre);



$(document).ready(function(){
	$('.superslider').slick({
		arrows: false,
		dots: true,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    dots: false,
	});

  $(document).foundation();

});


$(document).ready(function(){
	$('.superslider').slick({
		arrows: false,
		dots: true,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    dots: false,
	});

$(document).foundation();

});
    let movieStr = `\
      <div class="slide-content image"><a href="/#/movie/${id}"><img src="${poster_loc}"></a> 
        <div class="textOverlayBg">
          <div class="skew"> 
            <h3 class="textOverlayH3">${movie_title}</h3> 
            <a class="textOverlayA" href="#">Felicity Jones | Diego Luna | Forest Whitaker</a> 
            <p class="textOverlayP">${getGenre}</p> 
            <div class="textOverlayC circleBase type2"><h4 class="rating"><strong>${rating}</strong></h4></div> 
          </div> 
        </div> 
      </div>
    `;

    movieList.innerHTML += movieStr;

  }

$(movieList).slick({
  arrows: true,
  dots: false,    
  infinite: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
         slidesToShow: 3.05,
         slidesToScroll: 1,
         arrows: false,
         dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.05,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    },
    {
       breakpoint: 480,
       settings: {
         slidesToShow: 1.05,
         slidesToScroll: 1,
         arrows: false,
         dots: false
       }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
  ]

});


};
r.send();


class generalInfo { 
  constructor(movieID) {
    this.cast = " ";
    this.genres = " ";
    this.movideID = movieID;

  }
  getGenres(IDs){
   let movieGenres = [ ]; 
    movieGenres = genres.filter(function(genre){
      return IDs.indexOf(genre.id) > -1;
    });
    console.log(movieGenres);
    let genreString = " ";
    movieGenres.forEach(function(movieGenre){
      genreString += movieGenre.name + ", ";
    });
    return genreString;    
  }
 } 

// $(document).ready(function(){
// 	$('.superslider').slick({
// 		arrows: false,
// 		dots: true
// 	});

// });

// $('.responsive').slick({
//   arrows: true,
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 2,

//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3.05,
//         slidesToScroll: 1,
//         arrows: false,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2.05,
//         slidesToScroll: 1,
//         arrows: false,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1.05,
//         slidesToScroll: 1,
//         arrows: false,
//         dots: false
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });



let rating = null;
let rating_button;

var rating_1 = document.querySelector('.one');
rating_1.addEventListener('click', clicked_1);


var rating_2 = document.querySelector('.two');
rating_2.addEventListener('click', clicked_2);


var rating_3 = document.querySelector('.three');
rating_3.addEventListener('click', clicked_3);


var rating_4 = document.querySelector('.four');
rating_4.addEventListener('click', clicked_4);


var rating_5 = document.querySelector('.five');
rating_5.addEventListener('click', clicked_5);

var submit_button = document.querySelector('.submit');
submit_button.addEventListener('click', submitted);

var ratings = [rating_1, rating_2, rating_3,rating_4, rating_5];


function clear_all(rating_selected)
{
    ratings.forEach(my_rating => {
       if(my_rating !== rating_selected){
        
        my_rating.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        my_rating.style.color = 'rgb(149, 158, 172, 1)';
       } 
    });
}
function clicked_1(e){
    rating = 1;
    rating_button = rating_1;
    
    rating_1.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating_1.style.opacity = '100%';
    rating_1 .style.color = 'hsl(0, 0%, 100%)';
    clear_all(e.srcElement);

}


function clicked_2(e){
    rating = 2;
    rating_button = rating_2;

    rating_2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating_2.style.opacity = '100%';
    rating_2 .style.color = 'hsl(0, 0%, 100%)';
    clear_all(e.srcElement);

}

function clicked_3(e){
    rating = 3;
    rating_button = rating_3;
    
    rating_3.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating_3.style.opacity = '100%';
    rating_3 .style.color = 'hsl(0, 0%, 100%)';
    clear_all(e.srcElement);

}

function clicked_4(e){
    rating = 4;
    rating_button = rating_4;
    
    rating_4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating_4.style.opacity = '100%';
    rating_4 .style.color = 'hsl(0, 0%, 100%)';
    clear_all(e.srcElement);

}

function clicked_5(e){
    rating = 5;
    rating_button = rating_5;
    // console.log(rating_button)
    rating_5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating_5.style.opacity = '100%';
    rating_5 .style.color = 'hsl(0, 0%, 100%)';
    clear_all(e.srcElement);
    // console.log(e);
    // console.log(e.srcElement);

}

var rating_card = document.querySelector('.rating-state');

var thank_you_card = document.querySelector('.thank-you-state');

var show_rating = document.querySelector('.show-rating');

function submitted(e){
    if(rating == null)
    {
        var error_space = document.querySelector('.error')
        error_space.innerHTML = '*Please Select a rating first';
        err
    }
    
    else{
        rating_card.style.display = 'none';
        show_rating.textContent = rating;
        thank_you_card.style.display = 'block';
    }
        
    
}

// Add Responsiveness to the website
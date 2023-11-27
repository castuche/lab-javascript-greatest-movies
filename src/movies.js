// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map(movie => movie.director);
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filteredArray = moviesArray.filter(movie => movie.director==="Steven Spielberg" && movie.genre.includes("Drama"));
    return filteredArray.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0) {
        return 0;
    }
    else {
    let filteredMoviesArray = moviesArray.filter(movie => typeof movie.score==="number");
    if (filteredMoviesArray.length===0){
        return 0;
        }
    let scoreArray = filteredMoviesArray.map(movie => movie.score);
    let totalScore = scoreArray.reduce((accumulator,currentValue) => accumulator + currentValue);
    
    return Math.round(totalScore / moviesArray.length * 100) / 100; 
    }
}
console.log (scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}
console.log (dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedArray = moviesArray.toSorted((a,b) => {
        if (a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year) {
            return 1;
        }
        else {
            let lowerCaseA=a.title.toLowerCase();
            let lowerCaseB=b.title.toLowerCase();
            if(lowerCaseA<lowerCaseB){
                return -1;
            }
            else if(lowerCaseA>lowerCaseB){
                return 1;
            }
            else {return 0;
            }
        }   
        })
    return orderedArray;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleArray = moviesArray.map(movie => movie.title);
    let orderedArray = titleArray.toSorted((a,b) => {
            let lowerCaseA=a.toLowerCase();
            let lowerCaseB=b.toLowerCase();
            if(lowerCaseA<lowerCaseB){
                return -1;
            }
            else if(lowerCaseA>lowerCaseB){
                return 1;
            }
            else {return 0;
            }
        })

   let arrayOf20 = orderedArray.splice(0,20);
   return arrayOf20;
}
console.log();

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minuteArray = moviesArray.map(function (movie) {
        let hours = parseInt(movie.duration.substring(0, movie.duration.indexOf('h'))); 
        let minutes = 0;
        if (movie.duration.substring(movie.duration.indexOf('h') + 1).length>0)
        {minutes=parseInt(movie.duration.substring(movie.duration.indexOf('h') + 1));}
        let totalMinutes= hours*60 + minutes;
/* here i don't understand why I can't simply write movie.duration=totalMinutes. 
It would apparently alterate the original array, but i don't see why. I used this alternative 
below, but I don't  understand it :( */
        return {
            ...movie,
            duration: totalMinutes}
     })
     return minuteArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
}

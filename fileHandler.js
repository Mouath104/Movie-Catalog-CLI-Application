function LogMovie(){
    const fs = require('fs')
    fs.readFile('movies.json','utf-8',
        (err,data)=>{
            if(err){
                console.log(err)
            }
            console.log(data,'\n\n')
        }
    )
}

function AddMovie(){

    const fs = require('fs');
    const readline = require('readline');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question('Enter the title of the movie: ', (title) => { //i don't get paid enough to implement limitations on the inserting sorry xD
      rl.question('Enter the director of the movie: ', (director) => {
        rl.question('Enter the release year of the movie: ', (releaseYear) => {
          rl.question('Enter the genre of the movie: ', (genre) => {
            const newMovie = {
              title: title,
              director: director,
              release_year: parseInt(releaseYear),
              genre: genre
            };
            
  //i know it's messy, but i tried to add promise, await/async :D.          
  function Adding(){
    return new Promise(
      (res,rej)=>{
        fs.readFile('movies.json', 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading JSON file:', err);
            rl.close();
            return;
          }
          const movies = JSON.parse(data); // Parse the JSON data
          movies.movies.push(newMovie);
          const updatedData = JSON.stringify(movies, null, 2);
          fs.writeFile('movies.json', updatedData, (err) => {
            if (err) {
              console.error('Error writing to JSON file:', err);
            } else {
              console.log('Movie added and saved successfully!');
            }
            rl.close();
          });
        });
        console.log(res)
      }
    )
  }

  async function DoAdding(){
    await Adding()
  }

  DoAdding()


          });
        });
      });
    });

}

function UpdateMovie(){

  const fs = require('fs');
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the index of the movie you want to update: ', (index)=>{
    rl.question('Enter the title of the movie: ', (title) => { 
      rl.question('Enter the director of the movie: ', (director) => {
        rl.question('Enter the release year of the movie: ', (releaseYear) => {
          rl.question('Enter the genre of the movie: ', (genre) => {
            const UpdatedMovie = {
              title: title,
              director: director,
              release_year: parseInt(releaseYear),
              genre: genre
            };
          
//i know it's messy, but i tried to add promise, await/async :D.          
function updating(){
  return new Promise(
    (res,rej)=>{
      fs.readFile('movies.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading JSON file:', err);
          rl.close();
          return;
        }
        const movies = JSON.parse(data); // Parse the JSON data
        movies.movies[index]=UpdatedMovie
        const updatedData = JSON.stringify(movies, null, 2);
        fs.writeFile('movies.json', updatedData, (err) => {
          if (err) {
            console.error('Error writing to JSON file:', err);
          } else {
            console.log('Movie added and saved successfully!');
          }
          rl.close();
        });
      });
      console.log(res)
    }
  )
}

async function Doupdating(){
  await updating()
}

Doupdating()


        });
      });
    });
  });
})

}


function DeleteMovie() {
  const fs = require('fs');
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the index of the movie you want to Delete: ', (index) => {

    function Deleting() {
      return new Promise((resolve, reject) => {
        fs.readFile('movies.json', 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading JSON file:', err);
            rl.close();
            reject(err);
            return;
          }
          const movies = JSON.parse(data); // Parse the JSON data
          movies.movies.splice(index, 1);
          const updatedData = JSON.stringify(movies, null, 2);
          fs.writeFile('movies.json', updatedData, (err) => {
            if (err) {
              console.error('Error writing to JSON file:', err);
              reject(err);
            } else {
              console.log('Movie deleted and saved successfully!');
              resolve();
            }
            rl.close();
          });
        });
      });
    }

    async function DoDeleting() {
      try {
        await Deleting();
      } catch (error) {
        console.error('Error:', error);
      }
    }

    DoDeleting();
  });
}




function MovieSearching() {
  const fs = require('fs');
  fs.readFile('movies.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
    const movies = JSON.parse(data); // Parse the JSON data
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let FilteredMovies = [];
    rl.question('Enter the Category you want to search by: [title(1), Directer(2), Year Released(3), or Genre(4)]: ', (index) => {
      if (index === "1") {
        rl.question("Enter the title: ", (titlePara) => {
          FilteredMovies = movies.movies.filter(movie => movie.title === titlePara);
          if (FilteredMovies.length === 0) {
            console.log("No movies found.");
          } else {
            console.log("Filtered movies:\n", FilteredMovies);
          }
          rl.close();
        });
      } else if (index === "2") {
        rl.question("Enter the Directer: ", (directorPara) => {
          FilteredMovies = movies.movies.filter(movie => movie.director === directorPara);
          if (FilteredMovies.length === 0) {
            console.log("No movies found.");
          } else {
            console.log("Filtered movies:\n", FilteredMovies);
          }
          rl.close();
        });
      } else if (index === "3") {
        rl.question("Enter the Realse Year: ", (release_yearPara) => {
          FilteredMovies = movies.movies.filter(movie => movie.release_year === release_yearPara);
          if (FilteredMovies.length === 0) {
            console.log("No movies found.");
          } else {
            console.log("Filtered movies:\n", FilteredMovies);
          }
          rl.close();
        });
      } else if (index === "4") {
        rl.question("Enter the Genre: ", (genrePara) => {
          FilteredMovies = movies.movies.filter(movie => movie.genre === genrePara);
          if (FilteredMovies.length === 0) {
            console.log("No movies found.");
          } else {
            console.log("Filtered movies:\n", FilteredMovies);
          }
          rl.close();
        });
      } else {
        console.log("Only from 1-4");
        rl.close();
      }
    });
  });
}


module.exports = {LogMovie,AddMovie,UpdateMovie,DeleteMovie,MovieSearching}
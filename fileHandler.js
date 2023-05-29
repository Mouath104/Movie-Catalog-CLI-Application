function LogMovie(){
    const fs = require('fs')
    fs.readFile('movies.json','utf-8',
        (err,data)=>{
            if(err){
                console.log(err)
            }
            console.log(data)
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

module.exports = {LogMovie,AddMovie}
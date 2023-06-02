async function FetchMovies (){
    try{
        const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=4eba9c1")
        if(!res.ok){
            throw new Error("Failed to fetch Movies")
        }
        const fetchedMovie = await res.json()

        //adding the Fetched movie to the FIle
        
        const fs = require('fs')
        fs.readFile('movies.json', 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading JSON file:', err);
              rl.close();
              return;
            }
            const movies = JSON.parse(data); // Parse the JSON data
            movies.movies.push(fetchedMovie);
            const updatedData = JSON.stringify(movies, null, 2);
            fs.writeFile('movies.json', updatedData, (err) => {
              if (err) {
                console.error('Error writing to JSON file:', err);
              } else {
                console.log('Movie added and saved successfully!');
              }
            });
          });
        console.log("Error Fetching Movies: ",Err)
    }
    
   
}

module.exports = {FetchMovies}
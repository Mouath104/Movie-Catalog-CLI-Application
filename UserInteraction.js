//User Interaction
const {LogMovie,AddMovie,UpdateMovie,DeleteMovie,MovieSearching} = require('./fileHandler') //Logs Movies from JSON file
const {FetchMovies} = require('./API_Requests')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
let f=1
function Menu(){
    console.log(
        "\n\n---------------------------------------\n",
        "Welcome, Here you the Movie Catalog: \n",
        "--------------------------------------\n",
        "1.Display Movie Catalog.\n", //use async/await or promises when reading from files
        "2.Add New Movie.\n", //use async/await or promises when writing to files
        "3.Update Movie Details\n", //use async/await or promises when updating to files
        "4.Delete Movie\n", //use async/await or promises when deleting to files
        "5.Search and Filter\n", //use search by either title,genre,date realse and director
        "6.Fetch addtional Movie Data\n", //use async/await or promises
        "---------------------------------------\n",
        "7.Quit(or q|Q)\n",
        "---------------------------------------\n",
        "Note1: Don't worry of the duplicated Chars in CLI, it won't e stored that way.(use ur common sense :D)",
        "Note2: After Every choice, end the App manally by CTRL+C (i tried my best)",
        "---------------------------------------\n",

    )

    rl.question('choose: ', (choice) => {
        if(choice==="1"){ //there is an issue, it loges the data from the file and keep going, ignoring the function as it's async.
            LogMovie()
            // console.log("1.Display Movie Catalog.\n")
            // Menu() // i was trying to make it looping
        }else if(choice==="2"){
            // console.log("2.Add New Movie.\n")
            AddMovie()
            // Menu()
        }else if(choice==="3"){
            UpdateMovie()
            // console.log("3.Update Movie Details\n")
            // Menu()
        }else if(choice==="4"){
            DeleteMovie()
            // console.log("4.Delete Movie\n")
            // Menu()
        }else if(choice==="5"){
            MovieSearching()
            // console.log("5.Search and Filter\n")
            // Menu()
        }else if(choice==="6"){
            FetchMovies()
            // console.log("6.Fetch addtional Movie Data\n")
            // Menu()
        }else if(choice==="7"||choice.toLowerCase()==="q"){
            rl.close();
        }else{
            console.log("Invalid Choice, TRy Again!")
            Menu()
        }
    
    });
    
}//end menu

Menu()

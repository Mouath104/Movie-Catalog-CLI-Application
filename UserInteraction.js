//User Interaction
const {LogMovie} = require('./fileHandler') //Logs Movies from JSON file
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
        "5.Search and Filter\n", // use "fetch" to fetch addtional data - use OMDB API
        "6.Fetch addtional Movie Data\n", //use async/await or promises
        "---------------------------------------\n",
        "7.Quit(or q|Q)\n",
        "---------------------------------------\n",

    )

    rl.question('choose: ', (choice) => {
        if(choice==="1"){ //there is an issue, it loges the data from the file and keep going, ignoring the function as it's async.
            LogMovie()
            // console.log("1.Display Movie Catalog.\n")
            Menu()
        }else if(choice==="2"){
            console.log("2.Add New Movie.\n")
            Menu()
        }else if(choice==="3"){
            console.log("3.Update Movie Details\n")
            Menu()
        }else if(choice==="4"){
            console.log("4.Delete Movie\n")
            Menu()
        }else if(choice==="5"){
            console.log("5.Search and Filter\n")
            Menu()
        }else if(choice==="6"){
            console.log("6.Fetch addtional Movie Data\n")
            Menu()
        }else if(choice==="7"||choice.toLowerCase()==="q"){
            rl.close();
        }else{
            console.log("Invalid Choice, TRy Again!")
            Menu()
        }
    
    });
    
}//end menu

Menu()

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

module.exports = {LogMovie}
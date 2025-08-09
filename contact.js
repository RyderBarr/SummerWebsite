const fs = require('fs')

function email()
{

    let name = document.getElementById('name').value 
    let phone = document.getElementById('phone').value 
    let email = document.getElementById('email').value 
    let message = document.getElementById('message').value

    // file path to use
        const path = './data/messages.json'

    // parse the JSON into an object
        const fileContent = JSON.parse(fs.readFileSync(path, 'utf8'))

    // set current ID
        let currentID = 1;

    // update current ID
        for(let user of fileContent)
        {

            if(user.id >= currentID)
            {

                currentID++
            
            } 

        }

        let commaLocations = [-1]
                    
        names = []

    // locates the commas seperating the names
        for (x in name)
        {
                        
            if (score[x] == ',')
            {
                        
                commaLocations.push(x)
                        
            }
                        
        }
        
    // adds the scores to the templist
        for(let i = 1; i <= commaLocations.length; i++)
        {
        
            names.push(score.substring(commaLocations[i-1]/1+1,commaLocations[i]))
        
        }

    
    // add new user to the object
        fileContent.push({id:currentID, name:names, phone:phone, email:email, message:message})

    
    const content = JSON.stringify(fileContent,null,4)

    console.log(content)

    // writing the message to json
        fs.writeFileSync(path, content,'utf-8')
    
}
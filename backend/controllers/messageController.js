
const nodemailer = require("nodemailer");

//Sends a email from the recipe app inbox to my email
async function sendMessage(userMessage){

  console.log("userMessage", userMessage);
//  email content :
    const output =`
     <p></p> You have a new contact request </p>
     <h3>Contact details: </h3>
     <ul>
      <li>Name: ${userMessage.name}</li>
      <li>Email: ${userMessage.email}</li> 
     </ul>
    <h3>Message:</h3>
    <p>${userMessage.message}</p>
    `
    let transporter = nodemailer.createTransport({      
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'recipeapp0@gmail.com', 
          pass: '1517malka', 
        },
        tls: {
          rejectUnauthorized: false,
        }
      });
    
      let mailOptions = {
        from: 'Recipe App', 
        to: 'malka0987654@gmail.com', 
        subject: "New message from recipe app", 
        text: "Hello world?", 
        html: output , 
      }

      transporter.sendMail(mailOptions, (error, info)=>{

        if(error){
          return console.log(error)
        }
        return  info.messageId;
          
      })    
}

// sends users recipe to his friends

async function shareRecipe(info){

  console.log("info51", info);
//  email content :
    const output =`
    ${info.message}
    <h2>Try my ${info.recipe.title} recipe</h2>
     <h3>Description:</h3>
     <p>${info.recipe.description}</p>
     <h3>Ingredients:</h3>
     <div>${info.recipe.ingredients}</div>
     <h3>Preparations:</h3>
     <div>${info.recipe.preparations}</div>
     <h4>Good luck!!</h4>
    `
    let transporter = nodemailer.createTransport({      
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'recipeapp0@gmail.com', 
          pass: '1517malka', 
        },
        tls: {
          rejectUnauthorized: false,
        }
      });
    
      let mailOptions = {
        from: info.email, 
        to: info.to, 
        subject: `A recipe sent from ${info.email} `, 
        text: "Hello world?", 
        html: output , 
      }

      transporter.sendMail(mailOptions, (error, info)=>{

        if(error){
          return console.log(error)
        }
        return  info.messageId;
          
      })    
}
module.exports ={ sendMessage ,shareRecipe}
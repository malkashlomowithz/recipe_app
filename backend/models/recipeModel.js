const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique : false
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    preparations: {
        type: String,
        required: true
    },
    servings: {
        type: Number,
        required: false
    },
    preparation_time:{
        type: String,
        required: false
    },
    file:{    
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
        required: true
    }
});
// Add a default image to all added recipes according to the category.
RecipeSchema.pre('save', function() {
    
    switch(this.category){
     case "soups":
        this.file = `SOUPS.JPG`
        break;
     case "side_dishes":
        this.file = `SIDE_DISHES.JPG`
        break;
     case "pies":
         this.file = `PIES.JPG`         
        break;
     case "salads":
         this.file = `SALAD.JPG`
        break;
     case "spreads":
         this.file = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pat%C3%A9.jpg/1200px-Pat%C3%A9.jpg`
        break;
     case "fish":
         this.file =  `https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/1/FNM_060112-Duff-Goldman-Spanish-Style-Grilled-Fish-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371606208411.jpeg`  
        break;
     case "meat":
         this.file = `https://therecipecritic.com/wp-content/uploads/2018/09/easy_mongolian_beefhero-500x500.jpg`    
        break; 
     case "dairy":
         this.file = `https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-1foodgroups_dairy_detailfeature.jpg?sfvrsn=23510b0_6`   
        break; 
     case "desserts":
         this.file = `DESSERTS.JPG`    
        break;
     case "breads": 
         this.file = `BRED.JPG`   
        break;
     case "cookies":
         this.file = `COOKIES.JPG`
        break;
     case "cakes":
         this.file = `https://magazine.shufersal.co.il/media/4621/800_600_oct5-%D7%A2%D7%95%D7%AA%D7%A7_460x410.jpg`   
        break; 
         default: 
        this.file = `https://www.badatz.biz/wp-content/uploads/2014/12/%D7%90%D7%95%D7%9B%D7%9C.jpg`
        break;
    }
});
 

// Export Recipe Model
module.exports = mongoose.model('Recipe', RecipeSchema);

// https://www.paypal.com/myaccount/profile/seller-tools
// var axios = require('axios');
// var data = JSON.stringify({
//   "intent": "CAPTURE",
//   "purchase_units": [
//     {
//       "amount": {
//         "currency_code": "USD",
//         "value": "126.00"
//       }
//     }
//   ]
// });

// var config = {
//   method: 'post',
//   url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

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
         this.file = `SPREADS.JPG`
        break;
     case "fish":
         this.file = `FISH.JPG`  
        break;
     case "meat":
         this.file = `MEAT.JPG`    
        break; 
     case "dairy":
         this.file = `DAIRY.JPG`   
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
         this.file = `CAKES.JPG`   
        break; 
         default: 
        this.file = `CAKES.JPG`
        break;
    }
});
 

// Export Recipe Model
module.exports = mongoose.model('Recipe', RecipeSchema);

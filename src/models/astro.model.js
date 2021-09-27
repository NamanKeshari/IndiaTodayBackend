const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const AstroSchema = new Schema(
  {
    urlSlug: String,
    namePrefix: String,
    firstName: String,
    lastName: String,
    aboutMe: String,
    profliePicUrl: String,
    experience: Number,
    languages: [String],
    minimumCallDuration: Number,
    minimumCallDurationCharges: Number,
    additionalPerMinuteCharges: Number,
    isAvailable: Boolean,
    rating: Number,
    skills: [String],
    isOnCall: Boolean,
    images: {
      large: {
        imageUrl: String,
        id: Number,
      },
      medium: {
        imageUrl: String,
        id: Number,
      },
    },
    availability: {
      days: [String],
      slot: {
        toFormat: String,
        fromFormat: String,
        from: String,
        to: String,
      },
    },
  },
  {
    timestamps: true,
  }
);
const AstroModel = model("Astro", AstroSchema);
module.exports = AstroModel;

/*

   "id":31,
   "urlSlug":"anshika-saxena",
   "namePrefix":null,
   "firstName":"anshika",
   "lastName":"saxena",
   "aboutMe":"Hello I am here",
   "profliePicUrl":null,
   "experience":1.0,
   "languages":[
      
   ],
   "minimumCallDuration":5,
   "minimumCallDurationCharges":50.0,
   "additionalPerMinuteCharges":10.0,
   "isAvailable":true,
   "rating":null,
   "skills":[
      
   ],
   "isOnCall":false,
   "images":{
      "large":{
         "imageUrl":"",
         "id":92
      },
      "medium":{
         "imageUrl":"https://tak-astrotak-av-dev.s3.ap-south-1.amazonaws.com/astro-images/agents/1.png",
         "id":123
      }
   },
   "availability":{
      "days":[
         "MON",
         "WED",
         "THU",
         "FRI"
      ],
      "slot":{
         "toFormat":"PM",
         "fromFormat":"AM",
         "from":"10",
         "to":"7"
      }
   }
*/

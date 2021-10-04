const mongoose = require("mongoose");

mongoose
  //.connect("mongodb://localhost/playground")
  .connect("mongodb://localhost/newDB")
  .then(() => console.log("connected to the playground DB ....."))
  .catch((err) => console.error("couldnot connect to the mongoDB"));

//Schemas have different types which include:
/**
 * String
 * Number
 * Boolean
 * Array
 * Date
 * Boolean
 * ObjectID
 * Buffer
 */

// First creat a  schema
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 25 },
  author: String,
  tags: {
    type: Array,
    //custom validators
    validate: {
      // to mak it async; we set isAsync == true, and pass a callback function
      isAsync: true,
      validator: function (v, callback) {
        setTimeout(() => {
          //Do some async work
          const result = v && v.length > 0;
          callback(result);
        }, 1000);
      },
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  Price: {
    type: Number,
    required: function () {
      return this.isPublished;
    }, //this validator doesnt use arrow functions: arrow functions don't have their own this
  },
  Category: {
    type: String,
    required: true,
    enum: ["ML", "NLP", "SR", "CG", "WebApp"],
  },

  /**
   * Other schema properties:
   * lowercase: set to true or false
   * uppercase: set to true or false
   * trim: set to true or false
   * get: set to a function: this can set a value to
   * set: set to a function
   */
});

//To create classes we compile the schemas into models
const Course = mongoose.model("Course", courseSchema); //course class

async function createCourse() {
  const course = new Course({
    name: "Sasha vs Alexa copy",
    author: "Frank Ben",
    tags: ["Asistant", "Machine learning", "natural Language processing"],
    date: 31 / 03 / 2021,
    isPublished: false,
    Price: 100,
    Category: "NLP",
  });

  //Save the course object created
  try {
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    for (field in ex.errors) // e.error is the error component
      console.log(ex.errors[field]);
  }
}

/**finding items from a database
 * *********************************************
 */
// async function getCourses() {
//   const courses1 = await Course.find({ author: "Ntambaazi Tonny" });
//   const courses2 = await Course.find({ author: "Sasha Tonny" });
//   const courses3 = await Course.find({ author: "Frank Ben" });

//   console.log(courses1);
//   console.log(courses2);
//   console.log(courses3);
// }
createCourse();
//getCourses();

//Updating documents in a database:

/**
 * The Query first approach
 * Query first,
 * find by ID,
 * modif the properties,
 * save
 *
 * *There is also another method where we update first: here, we:
 * The update first approach
 * Optinally: get the updated document
 * Update ddirectly
 */

//finsing by ID

// async function updateCourse(id) {
//   const cours = await Course.findById(id);
//   if (!cours) return;

//   cours.set({
//     isPublished: false,
//     author: "another Author",
//   });

//   const result = await cours.save();
//   console.log(result);
// }

// updateCourse("610dbce6d9b2f73844fcc6ce");

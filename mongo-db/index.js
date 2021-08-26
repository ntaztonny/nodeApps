const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
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
  name: { type: String, required: true },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

//To create classes we compile the schemas into models
const Course = mongoose.model("Course", courseSchema); //course class

async function createCourse() {
  const course = new Course({
    name: "Sasha vs Alexa",
    author: "Frank Ben",
    tags: ["Asistant", "Machine learning", "natural Language processing"],
    date: 31 / 03 / 2021,
    isPublished: true,
  });

  //Save the course object created
  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses1 = await Course.find({ author: "Ntambaazi Tonny" });
  const courses2 = await Course.find({ author: "Sasha Tonny" });
  const courses3 = await Course.find({ author: "Frank Ben" });

  console.log(courses1);
  console.log(courses2);
  console.log(courses3);
}
//createCourse();
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

async function updateCourse(id) {
  const cours = await Course.findById(id);
  if (!cours) return;

  cours.set({
    isPublished: false,
    author: "another Author",
  });

  const result = await cours.save();
  console.log(result);
}

updateCourse("610dbce6d9b2f73844fcc6ce");

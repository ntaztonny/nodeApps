const mongose = require("mongoose");

mongose
  .connect("mongodb://localhost/mongo-exercises")
  .then(console.log("Connected to the mongo-exercisesDB"))
  .catch((e) => {
    console.error(e);
  });

const courseSchema = new mongose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
  _v: Number,
});

const myCourse = mongose.model("course", courseSchema);

async function getCourses() {
  const result = await myCourse
    .find({ isPublished: true })
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort("-name");
  //.select({ name: 1, author: 1 });
  console.log(result);
}

getCourses();

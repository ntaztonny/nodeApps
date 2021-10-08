//
/**We can use references (also known as normalization)and also embedded documents (also called denormalization)
 * there should be trade offs in the method we prefer to use. forexample, query performance vs consistency
 * For normalized relationships: there is automatic updates but it won't be sure for the embedded documents.
 * Embedded give better performance while the normalized system gives jbetter consistency
 */
//1. Using references or Normalization
let author = {
  name: "Tonny",
};

let course = {
  author: "id",
  //authors: ["id1", "id2", "id3", "id4"],
};

//2. Using embedded documents or denormalisation
let course = {
  author: {
    name: "Tonny",
  },
};

//3: we can use an hybrid approach; useful if you need a snapshot of the data

let author = {
  name: "Tonny",
  //and all other properties
};

let course = {
  author: {
    id: "ref",
    name: "Tonny",
  },
};

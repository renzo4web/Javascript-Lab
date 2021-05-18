const showProperties = (obj) => {
  for (const key in obj) {
    typeof obj[key] === "string" && console.log(key, obj[key]);
  }
};

const ob = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(ob);

export const test = (name) => {
  const h1 = document.createElement("h1");

  h1.textContent = `Hey mi name is ${name}`;
  document.body.append(h1);
};

import "../css/components.css";
export const test = (name) => {
  const h1 = document.createElement('h1');

  h1.textContent = `This is a test from  ${name}`;
  document.body.append(h1);
};

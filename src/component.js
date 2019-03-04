export default (text = "Hello world123456fr") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};

export default (text = "Hello world123456") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};

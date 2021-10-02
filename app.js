const codeInputs = {
  html: document.querySelector('#html'),
  css: document.querySelector('#css'),
  js: document.querySelector('#js')
};

const code = document.getElementById("output").contentWindow.document;

function compile() {
  const PREFIX = "livecode-";
  const data = ["html", "css", "js"].map((key) => {
    const prefixedKey = PREFIX + key;
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
  });
  setInitial(data);
  document.body.onkeyup = function () {
    localStorage.setItem("livecode-html", JSON.stringify(codeInputs.html.value));
    localStorage.setItem("livecode-css", JSON.stringify(codeInputs.css.value));
    localStorage.setItem("livecode-js", JSON.stringify(codeInputs.js.value));
    code.open();
    code.writeln(
      codeInputs.html.value +
        "<style>" +
        codeInputs.css.value +
        "</style>" +
        "<script>" +
        codeInputs.js.value +
        "</script>"
        );
    code.close();
  };
};
    
function setInitial(data) {
  let htmlContent = data[0] || "";
  let cssContent = data[1] || "";
  let jsContent = data[2] || "";
  codeInputs.css.value = cssContent;
  codeInputs.js.value = jsContent;
  codeInputs.html.value = htmlContent;
  code.open();
  code.writeln(
    htmlContent +
    "<style>" +
    cssContent +
    "</style>" +
    "<script>" +
    jsContent +
    "</script>"
    );
  code.close();
}

function displayMsgCopied(e) {
  const temp = e.target.innerHTML;
  e.target.innerText = 'Copied!';
  setTimeout( () => {
    e.target.innerHTML = temp
  }, 800)
};

function copyCode(code) {
  code.select();
  document.execCommand("copy");
};
  
compile();
  
document.querySelectorAll(".control").forEach((control) =>
  control.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.toggle("collapse");
    e.target.classList.toggle("close");
    e.target.parentElement.querySelector("h2").classList.toggle("hidden");
  })
);

document.querySelectorAll(".clear").forEach((clear) =>
  clear.addEventListener("click", (e) => {
    const ele = e.target.classList[1];
    document.querySelector(`#${ele}`).value = "";
    localStorage.setItem(`livecode-${ele}`, JSON.stringify(""));
    compile();
  })
);

for (let input of Object.keys(codeInputs)) {
  document.querySelector(`.copy-${input}`).addEventListener('click', (e) => {
    displayMsgCopied(e);
    copyCode(codeInputs[input]);
  })
}
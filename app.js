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
  codeInputs.html.value = data[0] || "";
  codeInputs.css.value = data[1] || "";
  codeInputs.js.value = data[2] || "";

  document.body.onkeyup = function () {
    writeInIframe();

    localStorage.setItem("livecode-html", JSON.stringify(codeInputs.html.value));
    localStorage.setItem("livecode-css", JSON.stringify(codeInputs.css.value));
    localStorage.setItem("livecode-js", JSON.stringify(codeInputs.js.value));
  };
  writeInIframe();
};
    
function writeInIframe() {
  code.open();
  code.writeln(
    codeInputs.html.value +
      "<style>" +
      codeInputs.css.value +
      "</style>" +
      "<script>" +
      codeInputs.js.value  +
      "</script>"
      );
  code.close();
};

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

compile()
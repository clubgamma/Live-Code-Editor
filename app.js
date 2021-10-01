var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var code = document.getElementById("output").contentWindow.document;
function compile() {
	const PREFIX = "livecode-";
	const data = ["html", "css", "js"].map((key) => {
		const prefixedKey = PREFIX + key;
		const jsonValue = localStorage.getItem(prefixedKey);
		if (jsonValue != null) return JSON.parse(jsonValue);
	});
	setInitial(data);
	document.body.onkeyup = function () {
		localStorage.setItem("livecode-html", JSON.stringify(html.value));
		localStorage.setItem("livecode-css", JSON.stringify(css.value));
		localStorage.setItem("livecode-js", JSON.stringify(js.value));
		console.log("keyup");
		code.open();
		code.writeln(
			html.value +
				"<style>" +
				css.value +
				"</style>" +
				"<script>" +
				js.value +
				"</script>"
		);
		code.close();
	};
}

function setInitial(data) {
	html.value = data[0] || "";
	css.value = data[1] || "";
	js.value = data[2] || "";
	code.open();
	code.writeln(
		data[0] ||
			"" + "<style>" + data[1] ||
			"" + "</style>" + "<script>" + data[2] ||
			"" + "</script>"
	);
	code.close();
}

compile();

document.querySelectorAll(".control").forEach((control) =>
	control.addEventListener("click", (e) => {
		e.target.parentElement.parentElement.classList.toggle("collapse");
		e.target.classList.toggle("close");
	})
);

function compile() {
	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("output").contentWindow.document;
	document.body.onkeyup = function () {
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

compile();

document.querySelectorAll(".control").forEach((control) =>
	control.addEventListener("click", (e) => {
		e.target.parentElement.parentElement.classList.toggle("collapse");
		e.target.classList.toggle("close");
	})
);

const dark = document.getElementById("dark");
	const a = document.querySelectorAll("a");
	const body = document.body;

	const isDarkMode = localStorage.getItem("darkMode") === "enabled";

	if (isDarkMode) {
		body.classList.add("darkmode");
		a.forEach((link) => {
			link.classList.add("darkmodep");
		});
		dark.checked = true;
	}
	dark.addEventListener("change", () => {
		if (dark.checked) {
			body.classList.toggle("darkmode");
			a.forEach((link) => {
				link.classList.add("darkmodep");
			});
			localStorage.setItem("darkMode", "enabled");
		} else {
			body.classList.remove("darkmode");
			a.forEach((link) => {
				link.classList.remove("darkmodep");
			});

			localStorage.setItem("darkMode", "disabled");
		}
	});
//your JS code here. If required.
// Set a cookie
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Get a cookie
function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

// Apply saved preferences
function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// Save form preferences into cookies
document.getElementById("customizer").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;

  setCookie("fontsize", fontsize);
  setCookie("fontcolor", fontcolor);

  applyPreferences();
});

// Run on page load
window.onload = applyPreferences;

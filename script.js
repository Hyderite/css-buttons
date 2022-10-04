function linkToWebsite() {
  window.open("https://hyderite.repl.co");
}

// Add class name "language-css"  to every code element
// so that it can be automatically highlighted
// by highlight.js
const codeElements = document.querySelectorAll("code");

for (const codeElement of codeElements) {
  codeElement.classList.add("language-css");
}

// Apply syntax highlighting using highlight.js
hljs.highlightAll();

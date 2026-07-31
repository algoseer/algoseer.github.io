// Renders the CODE_PROJECTS array (see /data/code.js) into #code-list.
function renderCode() {
  var mount = document.getElementById("code-list");
  if (!mount || typeof CODE_PROJECTS === "undefined") return;
  var html = CODE_PROJECTS.map(function (p) {
    return '<div class="code-project">' +
      '<h2><a href="' + p.repo + '">' + p.name + "</a></h2>" +
      "<p>" + p.description + "</p>" +
      '<a href="' + p.repo + '"><img class="code-graphic" src="' + p.image +
      '" alt="' + p.imageAlt + '" loading="lazy" /></a>' +
      "</div>";
  }).join("");
  mount.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderCode);

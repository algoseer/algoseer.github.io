// Renders the UPDATES array (see /data/updates.js) into #updates-list.
function renderUpdates() {
  var mount = document.getElementById("updates-list");
  if (!mount || typeof UPDATES === "undefined") return;
  var html = UPDATES.map(function (u) {
    var link = u.link
      ? ' <a href="' + u.link + '">(' + u.linkText + ")</a>"
      : "";
    return "<li><span class=\"date\">" + u.date + "</span>" + u.text + link + "</li>";
  }).join("");
  mount.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderUpdates);

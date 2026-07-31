// Site-wide navigation, defined once and rendered on every page.
// To add/remove/reorder a nav link, edit NAV_SECTIONS below -- no HTML changes needed.
var NAV_SECTIONS = [
  {
    category: "Research",
    items: [
      { label: "Patents", href: "/research/patents.html" },
      { label: "Publications", href: "/research/index.html" }
    ]
  },
  {
    category: "Code",
    items: [
      { label: "Code", href: "/code.html" }
    ]
  },
  {
    category: "Interest",
    items: [
      { label: "Photoblog", href: "https://algoseer.tumblr.com/" }
    ]
  },
  {
    category: "Links",
    items: [
      { label: "SAIL", href: "https://sail.usc.edu" },
      { label: "USC", href: "https://www.usc.edu" },
      { label: "IIT Kharagpur", href: "https://www.iitkgp.ac.in" }
    ]
  }
];

function normalizePath(path) {
  return path.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
}

function renderNav() {
  var mount = document.getElementById("site-nav");
  if (!mount) return;
  var here = normalizePath(window.location.pathname);
  var html = "";
  NAV_SECTIONS.forEach(function (section) {
    html += '<div class="nav-category">' + section.category + "</div>";
    section.items.forEach(function (item) {
      var isCurrent = item.href.indexOf("http") !== 0 &&
        normalizePath(item.href) === here;
      html += '<div class="nav-item"><a href="' + item.href + '"' +
        (isCurrent ? ' aria-current="page"' : "") + ">" + item.label + "</a></div>";
    });
  });
  mount.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderNav);

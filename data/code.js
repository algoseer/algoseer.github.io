// Code/projects list, shown on /code.html.
// To add a project, add one object here -- no HTML changes needed.
var CODE_PROJECTS = [
  {
    name: "Largest Empty Sector Angle (LESA)",
    description: "A simple, purely geometric method for detecting the boundary " +
      "(hull) of a 2D point cloud: for each point, find the largest empty " +
      "angular gap to its neighbors -- boundary points have one big gap, " +
      "interior points don't. Python reimplementation of the method from " +
      "Kumar &amp; Narayanan, ICASSP 2014.",
    repo: "https://github.com/algoseer/largest-empty-sector-angle",
    image: "https://raw.githubusercontent.com/algoseer/largest-empty-sector-angle/master/examples/demo_output.png",
    imageAlt: "LESA demo: a hand silhouette, its per-point LESA heatmap, and two extracted hull overlays"
  }
];

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove active class from buttons
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show current tab and mark button as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

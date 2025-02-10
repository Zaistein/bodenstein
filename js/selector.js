document.addEventListener("DOMContentLoaded", function () {
    function showGroup(groupClass) {
        document.querySelectorAll(".group").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll("." + groupClass).forEach(element => {
            element.style.display = "block";
        });
    }

    document.getElementById("showGroup1").addEventListener("click", function () {
        showGroup("group1");
    });

    document.getElementById("showGroup2").addEventListener("click", function () {
        showGroup("group2");
    });

    document.getElementById("showGroup3").addEventListener("click", function () {
        showGroup("group3");
    });

    document.getElementById("showAll").addEventListener("click", function () {
        document.querySelectorAll(".group").forEach(element => {
            element.style.display = "block";
                });
            });
});
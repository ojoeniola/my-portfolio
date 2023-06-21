        var skilllinks = document.getElementsByClassName(skill - links);
        var skillparent = document.getElementsByClassName(skill - parent);

        function opentab(tabname) {
            for (skill - link of skill - links) {
                skill - link.classList.remove("sub-link");
            }
            for (skill - parent of skill - parents) {
                skill - parent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("sub-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
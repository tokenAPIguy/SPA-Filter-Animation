"use strict";

const filterList = document.querySelector(".filter");
const filterBtns = filterList.querySelectorAll(".filter-btn");
const conferences = document.querySelectorAll(".conference");

filterBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filter = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterConferences(filter);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterConferences(filter);
    });
  });
});

const updateActiveButton = (newButton) => {
  // find previously active button && remove the active class
  filterList.querySelector(".active").classList.remove("active");

  // add the active class to new button
  newButton.classList.add("active");
};

const filterConferences = (conferenceFilter) => {
  // get each conference category
  conferences.forEach((conference) => {
    const conferenceCategory = conference.getAttribute("data-category");

    // check if that category matches the filter
    if (conferenceFilter === "all" || conferenceFilter === conferenceCategory) {
      conference.removeAttribute("hidden");
    } else {
      conference.setAttribute("hidden", "");
    }
  });
};

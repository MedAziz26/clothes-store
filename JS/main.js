document.getElementById("searchButton").addEventListener("click", function() {
    const searchSection = document.getElementById("searchSection");
    if (searchSection.style.display === "none" || searchSection.style.display === "") {
        searchSection.style.display = "flex";
    } else {
        searchSection.style.display = "none";
    }
});
// /////////////////////////////////////////
// SHOWING THE DROPDOWN
const clothingDropdown = document.querySelector('.clothingDropdown');
const dropdown = document.querySelector('.dropdown');

clothingDropdown.addEventListener('mouseover', () => {
  dropdown.style.display = 'flex';
});

let timeoutId = null;

dropdown.addEventListener('mouseover', () => {
  clearTimeout(timeoutId);
  dropdown.style.display = 'flex';
});

dropdown.addEventListener('mouseout', () => {
  timeoutId = setTimeout(() => {
    dropdown.style.display = 'none';
  }, 500);
});
////////////////////////////////////////////
// elegant scroll favourite outfits


const pageSection = document.getElementById('page');


const pageContents = pageSection.innerHTML;
pageSection.innerHTML += pageContents;

const scrollLeftButton = document.createElement('button');
scrollLeftButton.textContent = '<';
const scrollRightButton = document.createElement('button');
scrollRightButton.textContent = '>';

pageSection.parentNode.insertBefore(scrollLeftButton, pageSection);
pageSection.parentNode.appendChild(scrollRightButton);

scrollLeftButton.addEventListener('click', () => {
  pageSection.scrollBy({
    top: 0,
    left: -500,
    behavior: 'smooth'
  });

  if (pageSection.scrollLeft < 200) {
    pageSection.scrollLeft = pageSection.scrollWidth / 2;
  }
});

scrollRightButton.addEventListener('click', () => {
  pageSection.scrollBy({
    top: 0,
    left: 500,
    behavior: 'smooth'
  });

  if (pageSection.scrollLeft > pageSection.scrollWidth / 2) {
    pageSection.scrollLeft = 0;
  }
});

// /////////////////////////////////////////////////

const navLogo2Img = document.querySelector('.nav-logo2 img');
const navLogo2_2 = document.querySelector('.nav-logo2-2');
const nav2 = document.querySelector('.nav2');
const navLogo2 = document.querySelector('.nav-logo2');

function toggleNav() {
  if (window.innerWidth <= 990) {
    nav2.style.display = nav2.style.display === 'none' ? 'flex' : 'none';
    navLogo2.style.display = navLogo2.style.display === 'none' ? 'flex' : 'none';
    navLogo2_2.style.display = navLogo2_2.style.display === 'none' ? 'flex' : 'none';
  }
}

navLogo2Img.addEventListener('click', toggleNav);
navLogo2_2.addEventListener('click', toggleNav);


// main nav's buttons

const navLogo1 = document.querySelector('.nav-logo1');
const navLogo1_2 = document.querySelector('.nav-logo1-2');
const navList1Toggled = document.querySelector('.nav-list1Toggled');

navLogo1.addEventListener('click', () => {
  if (window.matchMedia("(max-width: 625px)").matches) {
    navLogo1.style.display = 'none' ? 'flex' : 'none';
    navList1Toggled.style.display = 'block';
    navLogo1_2.style.display = 'flex';
  }
});

navLogo1_2.addEventListener('click', () => {
  if (window.matchMedia("(max-width: 625px)").matches) {
    navLogo1_2.style.display = 'none';
    navLogo1.style.display = 'flex';
    navList1Toggled.style.display = 'none';
  }
});
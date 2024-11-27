// photo slide
const slider = document.querySelector('.slider');
let index = 0;

function slideImages() {
  const totalImages = document.querySelectorAll('.slider img').length;
  index = (index + 1) % totalImages; // Loop back to the first image
  slider.style.transform = `translateX(-${index * 100}%)`; // Slide horizontally
}

setInterval(slideImages, 3000); // Change image every 3 seconds


// array for additional members
const newTeamMembers = [
    {
        name: "David Ali",
        role: "Data Scientist",
        description: "Passionate about data visualization and AI. Proficient in Microsoft PowerBI.",
        image: "images/ali.png",
    },
    {
        name: "Hadassah Nwauba",
        role: "Product Manager",
        description: "Specializes in managing software and products development processes.",
        image: "images/hadassah.png",
    },
    {
        name: "Queen Adeoye",
        role: "UI/UX designer",
        description: "Specializes in creating user-centered designs.",
        image: "images/queen.png",
    },
    {
        name: "Nnamdi Agozie",
        role: "Software Engineer",
        description: "Full Stack software engineer. Specializes in developing scalable and secure software solutions.",
        image: "images/agozie.png",
    },];

// add event listener to "load more button"
document.getElementById("load-more-btn").addEventListener("click", function () {
    const teamContanier = document.getElementById("team-section");

    //add team members dynamically
    newTeamMembers.forEach((member) => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member"); //assigns class for every team member

        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}"/>
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <a>About</a>
        `;

        teamContanier.appendChild(memberDiv);
    });

    //hide the button after displaying
    this.style.display = "none";
});


// script for displaying and validating forms

// Function to show a form
function showForm(formId) {
    document.getElementById(formId).style.display = "block";
    document.getElementById("overlay").style.display = "block";
}


// Function to hide all forms
function hideForms(formId) {
    document.getElementById("contact-form-container").style.display = "none";
    document.getElementById("signup-form-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


// Event listeners for showing forms
document.querySelector(".nav-bar a[href='#contact-us']").addEventListener("click", function (e) {
    e.preventDefault();
    showForm("contact-form-container");
});


document.querySelector(".nav-bar a[href='#sign-up']").addEventListener("click", function (e) {
    e.preventDefault();
    showForm("signup-form-container");
});


// Event listener for hiding forms when clicking outside
document.getElementById("overlay").addEventListener("click", hideForms);


// Javascript for validating the forms

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const member = document.getElementById("member").value;
    const description = document.getElementById("description").value;

    if (!member || !description) {
        alert("Please fill in all fields!");
    } else {
        alert(`Request sent to ${member}: ${description}`);
        hideForms(); // hide forms after submission
    }
});


// Sign-up form validation
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields!");
    } else {
        alert(`Sign-up successful! Welcome, ${name}.`);
        hideForms(); // Hide form after submission
    }
});
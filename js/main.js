
/* ==========================================
   EDUVANCE ACADEMY
   Main JavaScript
========================================== */

/* ==========================================
   1. EDITABLE WEBSITE CONFIGURATION
   Change these details for the real client.
========================================== */

const academy = {
    name: "Eduvance Academy",
    location: "Dera Bassi, Punjab, India",
    phone: "9876543210",
    email: "hello@example.com",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    whatsapp: "919876543210"
};


/* ==========================================
   2. NAVIGATION
========================================== */

const navigation = `
<header class="site-header">

    <a href="index.html" class="brand">
        <div class="brand-icon">E.</div>
        <div class="brand-text">
            <strong>EDUVANCE</strong>
            <small>ACADEMY</small>
        </div>
    </a>

    <nav class="nav-links" id="navLinks">
        <a href="index.html">Home</a>
        <a href="courses.html">Courses</a>
        <a href="faculty.html">Faculty</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
    </nav>

    
<div class="nav-actions">

    <button class="theme-toggle"
            id="themeToggle"
            aria-label="Switch color theme"
            title="Switch theme">
        ☀
    </button>

    <a href="contact.html" class="btn btn-primary">
        Enquire Now →
    </a>

    <button class="menu-toggle"
            id="menuToggle"
            aria-label="Toggle navigation"
            aria-expanded="false">
        ☰
    </button>

</div>


</header>
`;

document.getElementById("site-header").innerHTML = navigation;


// Highlight current page
const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }

});


// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

/* ==========================================
   DARK / LIGHT THEME SWITCHER
========================================== */

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("eduvance-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

function updateThemeIcon() {
    themeToggle.textContent =
        document.body.classList.contains("light-theme")
        ? "☾"
        : "☀";
}

updateThemeIcon();

// Switch themes
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    localStorage.setItem(
        "eduvance-theme",
        isLight ? "light" : "dark"
    );

    updateThemeIcon();

});


menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu when clicking a link
navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });

});


/* ==========================================
   3. FOOTER
========================================== */

const footer = `
<footer class="site-footer">

    <div class="footer-grid">

        <div class="footer-brand">
            <a href="index.html" class="brand">
                <div class="brand-icon">E.</div>
                <div class="brand-text">
                    <strong>EDUVANCE</strong>
                    <small>ACADEMY</small>
                </div>
            </a>

            <p>
                Building strong foundations through
                quality education, expert guidance
                and student-focused learning.
            </p>
        </div>

        <div class="footer-column">
            <h4>Quick Links</h4>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="faculty.html">Our Faculty</a>
            <a href="contact.html">Contact</a>
        </div>

        <div class="footer-column">
            <h4>Our Courses</h4>
            <a href="courses.html">Class 10</a>
            <a href="courses.html">Medical</a>
            <a href="courses.html">Non-Medical</a>
            <a href="courses.html">Commerce</a>
        </div>

        <div class="footer-column">
            <h4>Get In Touch</h4>
            <a href="tel:+${academy.phone}">+91 ${academy.phone}</a>
            <a href="mailto:${academy.email}">${academy.email}</a>
            <a href="${academy.instagram}" target="_blank"
               rel="noopener noreferrer">Instagram ↗</a>
            <a href="contact.html">Dera Bassi, Punjab</a>
        </div>

    </div>

    <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Eduvance Academy. Demo website.</p>
        <p>Designed with purpose. Built for learning.</p>
    </div>

</footer>
`;

document.getElementById("site-footer").innerHTML = footer;


/* ==========================================
   4. COURSE DATABASE
========================================== */

const courses = [

    {
        id: "class10",
        name: "Class 10",
        icon: "🎓",
        description: "Strong academic foundations and complete school syllabus preparation.",
        subjects: ["Mathematics", "Science", "English", "SST"],
        duration: "Full academic session"
    },

    {
        id: "medical",
        name: "Medical",
        icon: "🧬",
        description: "Build strong concepts in science and prepare for medical entrance examinations.",
        subjects: ["Physics", "Chemistry", "Biology", "NEET"],
        duration: "Class 11 & 12"
    },

    {
        id: "nonmedical",
        name: "Non-Medical",
        icon: "⚛️",
        description: "Develop problem-solving skills and master Physics, Chemistry and Mathematics.",
        subjects: ["Physics", "Chemistry", "Mathematics", "JEE"],
        duration: "Class 11 & 12"
    },

    {
        id: "commerce",
        name: "Commerce",
        icon: "📊",
        description: "Understand business, financial concepts and accounting fundamentals.",
        subjects: ["Accountancy", "Economics", "Business Studies"],
        duration: "Class 11 & 12"
    },

    {
        id: "neet",
        name: "NEET Preparation",
        icon: "🩺",
        description: "Focused preparation for medical entrance examinations.",
        subjects: ["Biology", "Physics", "Chemistry"],
        duration: "Entrance preparation"
    },

    {
        id: "jee",
        name: "JEE Preparation",
        icon: "📐",
        description: "Strengthen problem-solving and conceptual understanding for engineering entrances.",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        duration: "Entrance preparation"
    }

];


/* ==========================================
   5. GENERATE COURSE CARDS
========================================== */

function createCourseCard(course) {

    return `
        <article class="course-card reveal">

            <div class="course-icon">
                ${course.icon}
            </div>

            <h3>${course.name}</h3>

            <p>${course.description}</p>

            <div class="course-tags">
                ${course.subjects.map(subject =>
                    `<span>${subject}</span>`
                ).join("")}
            </div>

            <a href="contact.html">
                Enquire About Course →
            </a>

        </article>
    `;
}


// Homepage courses
const homeCourses = document.getElementById("homeCourses");

if (homeCourses) {

    homeCourses.innerHTML = courses
        .slice(0, 4)
        .map(createCourseCard)
        .join("");

}


// All courses page
const allCourses = document.getElementById("allCourses");

if (allCourses) {

    function showCourses(filter = "all") {

        const filteredCourses = courses.filter(course => {

            return filter === "all" || course.id === filter;

        });

        allCourses.innerHTML = filteredCourses
            .map(createCourseCard)
            .join("");

        observeRevealElements();

    }

    document.querySelectorAll(".filter-btn").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".filter-btn").forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            showCourses(button.dataset.filter);

        });

    });

    showCourses();

}


/* ==========================================
   6. FACULTY DATABASE
   Demo profiles: replace before publishing.
========================================== */

const faculty = [

    {
        name: "Faculty Member 01",
        subject: "Physics Faculty",
        qualification: "M.Sc. Physics · Demo",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
        instagram: ""
    },

    {
        name: "Faculty Member 02",
        subject: "Chemistry Faculty",
        qualification: "M.Sc. Chemistry · Demo",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600",
        instagram: ""
    },

    {
        name: "Faculty Member 03",
        subject: "Mathematics Faculty",
        qualification: "M.Sc. Mathematics · Demo",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
        instagram: ""
    },

    {
        name: "Faculty Member 04",
        subject: "Biology Faculty",
        qualification: "M.Sc. Biology · Demo",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
        instagram: ""
    },

    {
        name: "Faculty Member 05",
        subject: "Commerce Faculty",
        qualification: "M.Com · Demo",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
        instagram: ""
    },

    {
        name: "Faculty Member 06",
        subject: "English Faculty",
        qualification: "M.A. English · Demo",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
        instagram: ""
    }

];


/* ==========================================
   7. GENERATE FACULTY CARDS
========================================== */

function createFacultyCard(teacher) {

    const social = teacher.instagram
        ? `<a href="${teacher.instagram}"
              target="_blank"
              rel="noopener noreferrer">Instagram ↗</a>`
        : "";

    return `
        <article class="faculty-card reveal">

            <img src="${teacher.image}"
                 alt="Demo portrait of ${teacher.name}"
                 loading="lazy">

            <div class="faculty-info">

                <h3>${teacher.name}</h3>

                <p class="faculty-subject">
                    ${teacher.subject}
                </p>

                <p>${teacher.qualification}</p>

                ${social}

            </div>

        </article>
    `;
}


// Homepage faculty
const homeFaculty = document.getElementById("homeFaculty");

if (homeFaculty) {

    homeFaculty.innerHTML = faculty
        .slice(0, 3)
        .map(createFacultyCard)
        .join("");

}


// All faculty
const allFaculty = document.getElementById("allFaculty");

if (allFaculty) {

    allFaculty.innerHTML = faculty
        .map(createFacultyCard)
        .join("");

}


/* ==========================================
   8. CONTACT FORM
   Opens WhatsApp with enquiry details.
   No backend is needed for this demo.
========================================== */

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("studentName").value.trim();

        const phone = document.getElementById("studentPhone").value.trim();

        const email = document.getElementById("studentEmail").value.trim();

        const course = document.getElementById("studentCourse").value;

        const message = document.getElementById("studentMessage").value.trim();

        if (!/^[6-9][0-9]{9}$/.test(phone)) {
            alert("Please enter a valid 10-digit Indian mobile number.");
            return;
        }

        const whatsappMessage = `
Hello ${academy.name},

I would like to enquire about admission.

Student Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Course: ${course}

Message: ${message || "No additional message"}

Please share further details.
        `;

        const whatsappURL =
            `https://wa.me/${academy.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

}


/* ==========================================
   9. SCROLL REVEAL ANIMATION
========================================== */

function observeRevealElements() {

    const elements = document.querySelectorAll(".reveal:not(.visible)");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    elements.forEach(element => observer.observe(element));

}


// Add reveal animation to relevant sections
document.querySelectorAll(
    ".section-heading, .section-image, .section-content, .why-card, .faculty-card, .course-card"
).forEach(element => {

    element.classList.add("reveal");

});

observeRevealElements();


// Handle image loading errors gracefully
document.addEventListener("error", event => {

    if (event.target.tagName === "IMG") {
        event.target.style.visibility = "hidden";
    }

}, true);


/* ==========================================
   END OF MAIN JAVASCRIPT
========================================== */

console.log("Eduvance Academy website loaded successfully!");

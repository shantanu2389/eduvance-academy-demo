
/* =====================================================
   EDUVANCE ACADEMY
   Main JavaScript
   Website demonstration project
===================================================== */


/* =====================================================
   1. WEBSITE CONFIGURATION

   Change these values when making a real client website.

   Keep whatsapp empty until a real number is available.
   Format: country code + number, without + or spaces.

   Example: "919876543210"
===================================================== */

const academy = {

    name: "Eduvance Academy",

    location: "Dera Bassi, Punjab, India",

    phone: "",

    email: "",

    instagram: "",

    facebook: "",

    whatsapp: ""

};


/* =====================================================
   2. HELPER FUNCTIONS
===================================================== */

function safeExternalLink(url) {

    if (!url || !url.trim()) {
        return "";
    }

    return url.trim();

}


function getSavedTheme() {

    try {
        return localStorage.getItem("eduvance-theme");
    } catch (error) {
        return null;
    }

}


function saveTheme(theme) {

    try {
        localStorage.setItem("eduvance-theme", theme);
    } catch (error) {
        console.warn("Theme preference could not be saved.");
    }

}


/* =====================================================
   3. NAVIGATION
===================================================== */

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

        <button
            class="theme-toggle"
            id="themeToggle"
            aria-label="Switch color theme"
            title="Switch theme">

            ☀

        </button>


        <a href="contact.html" class="btn btn-primary nav-cta">

            Enquire Now →

        </a>


        <button
            class="menu-toggle"
            id="menuToggle"
            aria-label="Toggle navigation"
            aria-expanded="false">

            ☰

        </button>

    </div>

</header>

`;


const headerContainer = document.getElementById("site-header");

if (headerContainer) {

    headerContainer.innerHTML = navigation;

}


/* =====================================================
   4. DEMO NOTICE
===================================================== */

if (headerContainer) {

    headerContainer.insertAdjacentHTML(

        "afterend",

        `

        <div class="demo-banner">

            <span>DEMO WEBSITE</span>

            <p>
                Eduvance Academy is a sample website concept.
                Institute details and content are illustrative.
            </p>

        </div>

        `

    );

}


/* =====================================================
   5. ACTIVE NAVIGATION
===================================================== */

const currentPage =

    window.location.pathname.split("/").pop() || "index.html";


document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

        link.setAttribute("aria-current", "page");

    }

});


/* =====================================================
   6. MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    document.addEventListener("click", event => {

        const clickedInsideMenu =

            navLinks.contains(event.target) ||

            menuToggle.contains(event.target);


        if (!clickedInsideMenu) {

            navLinks.classList.remove("open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* =====================================================
   7. DARK / LIGHT THEME
===================================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = getSavedTheme();


if (savedTheme === "light") {

    document.body.classList.add("light-theme");

}


function updateThemeIcon() {

    if (!themeToggle) return;

    const isLight =

        document.body.classList.contains("light-theme");


    themeToggle.textContent = isLight ? "☾" : "☀";

    themeToggle.setAttribute(

        "aria-label",

        isLight ? "Switch to dark theme" : "Switch to light theme"

    );

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");


        const isLight =

            document.body.classList.contains("light-theme");


        saveTheme(isLight ? "light" : "dark");

        updateThemeIcon();

    });

}


/* =====================================================
   8. FOOTER
===================================================== */

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

                A modern academic website concept
                for school coaching, stream-specific
                learning and entrance preparation.

            </p>

        </div>



        <div class="footer-column">

            <h4>Quick Links</h4>

            <a href="index.html">Home</a>

            <a href="about.html">About Us</a>

            <a href="faculty.html">Teaching Areas</a>

            <a href="contact.html">Contact</a>

        </div>



        <div class="footer-column">

            <h4>Programs</h4>

            <a href="courses.html">Class 10</a>

            <a href="courses.html">Medical</a>

            <a href="courses.html">Non-Medical</a>

            <a href="courses.html">Commerce</a>

            <a href="courses.html">NEET & JEE</a>

        </div>



        <div class="footer-column">

            <h4>Contact</h4>

            <a href="contact.html">Admission Enquiry</a>

            <a href="contact.html">Dera Bassi, Punjab</a>

            ${academy.phone

                ? `<a href="tel:+91${academy.phone}">+91 ${academy.phone}</a>`

                : ""

            }

            ${academy.email

                ? `<a href="mailto:${academy.email}">${academy.email}</a>`

                : ""

            }

        </div>


    </div>


    <div class="footer-bottom">

        <p>
            © ${new Date().getFullYear()}
            Eduvance Academy. Demonstration website.
        </p>

        <p>
            Designed with purpose. Built for learning.
        </p>

    </div>

</footer>

`;


const footerContainer = document.getElementById("site-footer");

if (footerContainer) {

    footerContainer.innerHTML = footer;

}


/* =====================================================
   9. COURSE DATA

   Add or edit courses here.
===================================================== */

const courses = [

    {

        id: "class10",

        name: "Class 10 Foundation",

        icon: "🎓",

        description:
            "Build a strong foundation for board examinations through structured school syllabus preparation.",

        subjects: [
            "Mathematics",
            "Science",
            "English",
            "Social Science"
        ],

        duration: "Class 10"

    },


    {

        id: "medical",

        name: "Medical Stream",

        icon: "🧬",

        description:
            "Develop a clear understanding of science subjects and prepare for higher academic goals.",

        subjects: [
            "Physics",
            "Chemistry",
            "Biology"
        ],

        duration: "Class 11 & 12"

    },


    {

        id: "nonmedical",

        name: "Non-Medical Stream",

        icon: "⚛️",

        description:
            "Strengthen analytical and problem-solving skills through science and mathematics.",

        subjects: [
            "Physics",
            "Chemistry",
            "Mathematics"
        ],

        duration: "Class 11 & 12"

    },


    {

        id: "commerce",

        name: "Commerce Stream",

        icon: "📊",

        description:
            "Understand business, accounting, economics and financial concepts.",

        subjects: [
            "Accountancy",
            "Economics",
            "Business Studies"
        ],

        duration: "Class 11 & 12"

    },


    {

        id: "neet",

        name: "NEET Preparation",

        icon: "🩺",

        description:
            "Prepare for medical entrance examinations with focused subject practice and conceptual learning.",

        subjects: [
            "Physics",
            "Chemistry",
            "Biology"
        ],

        duration: "Entrance Preparation"

    },


    {

        id: "jee",

        name: "JEE Preparation",

        icon: "📐",

        description:
            "Build problem-solving ability and subject fundamentals for engineering entrance examinations.",

        subjects: [
            "Physics",
            "Chemistry",
            "Mathematics"
        ],

        duration: "Entrance Preparation"

    }

];


/* =====================================================
   10. COURSE CARD GENERATOR
===================================================== */

function createCourseCard(course) {

    return `

        <article class="course-card reveal">

            <div class="course-icon">

                ${course.icon}

            </div>


            <span class="course-duration">

                ${course.duration}

            </span>


            <h3>

                ${course.name}

            </h3>


            <p>

                ${course.description}

            </p>


            <div class="course-tags">

                ${course.subjects.map(subject =>

                    `<span>${subject}</span>`

                ).join("")}

            </div>


            <a href="contact.html">

                Enquire About Program →

            </a>

        </article>

    `;

}


/* =====================================================
   11. HOMEPAGE COURSE CARDS
===================================================== */

const homeCourses = document.getElementById("homeCourses");


if (homeCourses) {

    homeCourses.innerHTML = courses

        .map(createCourseCard)

        .join("");

}


/* =====================================================
   12. ALL COURSES + FILTERS
===================================================== */

const allCourses = document.getElementById("allCourses");


if (allCourses) {


    function showCourses(filter = "all") {

        const filteredCourses = courses.filter(course => {

            return filter === "all" || course.id === filter;

        });


        allCourses.innerHTML = filteredCourses.length

            ? filteredCourses.map(createCourseCard).join("")

            : "<p>No programs found.</p>";


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


/* =====================================================
   13. TEACHING AREAS

   These are sample subject categories.
   They are NOT real teacher profiles.
===================================================== */

const teachingAreas = [

    {

        name: "Physics",

        icon: "⚛️",

        subject: "Science & Problem Solving",

        description:
            "Conceptual understanding, numerical practice and application-based learning.",

        tags: ["Mechanics", "Electricity", "Optics"]

    },


    {

        name: "Chemistry",

        icon: "🧪",

        subject: "Physical, Organic & Inorganic",

        description:
            "Understand chemical concepts, reactions and their applications.",

        tags: ["Physical", "Organic", "Inorganic"]

    },


    {

        name: "Mathematics",

        icon: "📐",

        subject: "Mathematical Reasoning",

        description:
            "Develop logical thinking and problem-solving skills through practice.",

        tags: ["Algebra", "Calculus", "Geometry"]

    },


    {

        name: "Biology",

        icon: "🧬",

        subject: "Life Sciences",

        description:
            "Explore biological concepts, diagrams and application-based questions.",

        tags: ["Botany", "Zoology", "Genetics"]

    },


    {

        name: "Commerce",

        icon: "📊",

        subject: "Business & Finance",

        description:
            "Learn accounting, economics and business fundamentals.",

        tags: ["Accounts", "Economics", "Business"]

    },


    {

        name: "English",

        icon: "📚",

        subject: "Language & Communication",

        description:
            "Improve grammar, reading comprehension and written communication.",

        tags: ["Grammar", "Writing", "Literature"]

    }

];


/* =====================================================
   14. TEACHING AREA CARD GENERATOR
===================================================== */

function createTeachingCard(area) {

    return `

        <article class="faculty-card teaching-card reveal">

            <div class="teaching-icon">

                ${area.icon}

            </div>


            <div class="faculty-info">

                <span class="sample-label">
                    SAMPLE SUBJECT AREA
                </span>


                <h3>

                    ${area.name}

                </h3>


                <p class="faculty-subject">

                    ${area.subject}

                </p>


                <p>

                    ${area.description}

                </p>


                <div class="course-tags">

                    ${area.tags.map(tag =>

                        `<span>${tag}</span>`

                    ).join("")}

                </div>

            </div>

        </article>

    `;

}


/* =====================================================
   15. HOMEPAGE TEACHING AREA PREVIEW
===================================================== */

const homeFaculty = document.getElementById("homeFaculty");


if (homeFaculty) {

    homeFaculty.innerHTML = teachingAreas

        .slice(0, 3)

        .map(createTeachingCard)

        .join("");

}


/* =====================================================
   16. ALL TEACHING AREAS
===================================================== */

const allFaculty = document.getElementById("allFaculty");


if (allFaculty) {

    allFaculty.innerHTML = teachingAreas

        .map(createTeachingCard)

        .join("");

}


/* =====================================================
   17. CONTACT FORM

   If WhatsApp is configured, the enquiry opens WhatsApp.

   If not configured, an honest demo message is displayed.

   No information is stored or sent to a server.
===================================================== */

const enquiryForm = document.getElementById("enquiryForm");


if (enquiryForm) {


    enquiryForm.addEventListener("submit", event => {


        event.preventDefault();


        const name =

            document.getElementById("studentName").value.trim();


        const phone =

            document.getElementById("studentPhone").value.trim();


        const email =

            document.getElementById("studentEmail").value.trim();


        const course =

            document.getElementById("studentCourse").value;


        const message =

            document.getElementById("studentMessage").value.trim();



        if (!/^[6-9][0-9]{9}$/.test(phone)) {

            alert("Please enter a valid 10-digit Indian mobile number.");

            return;

        }



        if (!name || !course) {

            alert("Please complete all required fields.");

            return;

        }



        const whatsappMessage = `

Hello ${academy.name},

I would like to enquire about admission.

Student Name: ${name}

Phone: ${phone}

Email: ${email || "Not provided"}

Program: ${course}

Message: ${message || "No additional message"}

Please share further details.

        `;



        const whatsappNumber =

            academy.whatsapp.replace(/\D/g, "");



        if (whatsappNumber) {


            const whatsappURL =

                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


            window.open(

                whatsappURL,

                "_blank",

                "noopener,noreferrer"

            );


        } else {


            alert(

                "This is a demonstration enquiry form.\n\n" +

                "A real institute can connect this form " +

                "to its WhatsApp number, email or enquiry system."

            );

        }


    });

}


/* =====================================================
   18. FLOATING WHATSAPP BUTTON

   Only appears when a real WhatsApp number is configured.
===================================================== */

if (academy.whatsapp.trim()) {


    const whatsappButton = document.createElement("a");


    const whatsappNumber =

        academy.whatsapp.replace(/\D/g, "");


    whatsappButton.href =

        `https://wa.me/${whatsappNumber}`;


    whatsappButton.className = "floating-whatsapp";


    whatsappButton.target = "_blank";


    whatsappButton.rel = "noopener noreferrer";


    whatsappButton.setAttribute(

        "aria-label",

        "Chat with the academy on WhatsApp"

    );


    whatsappButton.innerHTML = "☏";


    document.body.appendChild(whatsappButton);

}


/* =====================================================
   19. BACK TO TOP BUTTON
===================================================== */

const backToTop = document.createElement("button");


backToTop.className = "back-to-top";


backToTop.type = "button";


backToTop.setAttribute("aria-label", "Back to top");


backToTop.innerHTML = "↑";


document.body.appendChild(backToTop);



window.addEventListener("scroll", () => {


    if (window.scrollY > 450) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});



backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   20. SCROLL REVEAL ANIMATION
===================================================== */

function observeRevealElements() {


    const elements =

        document.querySelectorAll(".reveal:not(.visible)");



    if (!("IntersectionObserver" in window)) {


        elements.forEach(element => {

            element.classList.add("visible");

        });


        return;

    }



    const observer = new IntersectionObserver(

        (entries, observerInstance) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add("visible");


                    observerInstance.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.10

        }

    );



    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =====================================================
   21. ADD REVEAL CLASSES
===================================================== */

document.querySelectorAll(

    ".section-heading, " +
    ".section-image, " +
    ".section-content, " +
    ".why-card, " +
    ".faculty-card, " +
    ".course-card, " +
    ".cta-section"

).forEach(element => {

    element.classList.add("reveal");

});


observeRevealElements();


/* =====================================================
   22. IMAGE ERROR HANDLING
===================================================== */

document.addEventListener("error", event => {


    if (event.target.tagName === "IMG") {


        event.target.classList.add("image-error");


        event.target.alt = "Image unavailable";


    }

}, true);


/* =====================================================
   23. FINAL MESSAGE
===================================================== */

console.log(

    "Eduvance Academy demo website loaded successfully."

);


const courseDetails = document.querySelector('#course-details');
function displayCourseDetails(course) {
        courseDetails.innerHTML = `
        <button id="closeModal" aria-label="Close">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;
        courseDetails.showModal();

        courseDetails.querySelector('#closeModal').addEventListener('click', () => {
                courseDetails.close();
        });
}

// Close the modal when the user clicks outside of it (on the backdrop)
courseDetails.addEventListener('click', (event) => {
        if (event.target === courseDetails) {
                courseDetails.close();
        }
});

const coursesContainer = document.querySelector(".courses-card");

courses.forEach((course) => {
        const card = document.createElement("button");
        card.classList.add("course-card");
        card.addEventListener('click', () => {
                displayCourseDetails(course);
        });
        card.textContent = `${course.subject} ${course.number}`;

        coursesContainer.appendChild(card);
});

const allCoursesButton = document.querySelector("#all-courses");
const wddCoursesButton = document.querySelector("#wdd-courses");
const cseCoursesButton = document.querySelector("#cse-courses");

allCoursesButton.addEventListener("click", () => {
        coursesContainer.innerHTML = " ";
        courses.forEach((course) => {
                const card = document.createElement("button");
                card.classList.add("course-card");
                card.addEventListener('click', () => {
                        displayCourseDetails(course);
                });
                card.textContent = `${course.subject} ${course.number}`;

                if (course.completed) {
                        card.textContent = `✓ ${course.subject} ${course.number}`;
                        card.classList.add("completed")
                }
                coursesContainer.appendChild(card);
                calculateCredits(courses);
        });

});

wddCoursesButton.addEventListener("click", () => {
        const wddCourses = courses.filter((course) => course.subject === "WDD");

        coursesContainer.innerHTML = " ";
        wddCourses.forEach((course) => {
                const card = document.createElement("button");
                card.classList.add("course-card");
                card.addEventListener('click', () => {
                        displayCourseDetails(course);
                });
                card.textContent = `${course.subject} ${course.number}`;

                if (course.completed) {
                        card.textContent = `✓ ${course.subject} ${course.number}`;
                        card.classList.add("completed")
                }
                coursesContainer.appendChild(card);
                calculateCredits(wddCourses);

        });
});


cseCoursesButton.addEventListener("click", () => {
        const cseCourses = courses.filter((course) => course.subject === "CSE");

        coursesContainer.innerHTML = " ";
        cseCourses.forEach((course) => {
                const card = document.createElement("button");
                card.classList.add("course-card");
                card.addEventListener('click', () => {
                        displayCourseDetails(course);
                });
                card.textContent = `${course.subject} ${course.number}`;

                if (course.completed) {
                        card.textContent = `✓ ${course.subject} ${course.number}`;
                        card.classList.add("completed")
                }
                coursesContainer.appendChild(card);
                calculateCredits(cseCourses);

        });
});

const creditTotal = document.querySelector(".credit-total");

function calculateCredits(courseList) {
        const total = courseList.reduce((sum, course) => {
                return sum + course.credits;
        }, 0);

        creditTotal.textContent = `The total credits for the course listed above is ${total} `;
}


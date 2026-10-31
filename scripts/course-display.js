const coursesContainer = document.querySelector(".courses-card");

courses.forEach((course) => {
        const card = document.createElement("article");
        card.classList.add("course-card");
        card.textContent = `${course.subject} ${course.number}`;
        coursesContainer.appendChild(card);
});
const allCoursesButton = document.querySelector("#all-courses");
const wddCoursesButton = document.querySelector("#wdd-courses");
const cseCoursesButton = document.querySelector("#cse-courses");

allCoursesButton.addEventListener("click", () => {
        coursesContainer.innerHTML = " ";
        courses.forEach((course) => {
                const card = document.createElement("article");
                card.classList.add("course-card");
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
                const card = document.createElement("article");
                card.classList.add("course-card");
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
                const card = document.createElement("article");
                card.classList.add("course-card");
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
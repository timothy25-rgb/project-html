document.addEventListener("DOMContentLoaded", () => {
  const infoForm = document.getElementById("infoForm");
  const surveyForm = document.getElementById("surveyForm");
  const goTopLink = document.getElementById("goTopLink");

  // Smooth scroll back to top
  if (goTopLink) {
    goTopLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Handle Name & Major form submission
  if (infoForm) {
    infoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameVal = document.getElementById("name").value.trim();
      const majorVal = document.getElementById("major").value.trim();

      if (!nameVal || !majorVal) {
        alert("Please fill in both Name and Major first.");
        return;
      }

      alert(`Information saved:\nName: ${nameVal}\nMajor: ${majorVal}`);
    });
  }

  // Handle Survey Review submission
  if (surveyForm) {
    surveyForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked')?.value || "-";
      const grade = document.getElementById("grade").value;
      const semester = document.getElementById("semester").value;
      const struggling = Array.from(
        document.querySelectorAll('input[name="struggling"]:checked')
      ).map((el) => el.value);
      const likedDay = document.querySelector('input[name="liked_day"]:checked')?.value || "-";
      const comments = document.getElementById("comments").value.trim();

      console.log("Survey Submission:", {
        email,
        gender,
        grade,
        semester,
        struggling,
        likedDay,
        comments,
      });

      alert("Thank you! Your survey review has been submitted.");
    });
  }
});
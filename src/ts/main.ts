import "../css/style.css";

fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    const app = document.querySelector<HTMLDivElement>("#app")!;

    app.innerHTML = `
      <div>
        <h1>${data.personalDetails.fullName}</h1>
        <p>Email: <a href="mailto:${data.personalDetails.email}">${data.personalDetails.email}</a></p>
        <p>Phone: ${data.personalDetails.phone}</p>
        <p>LinkedIn: <a href="${data.personalDetails.linkedinProfile}" target="_blank">${
      data.personalDetails.linkedinProfile
    }</a></p>
        <p>GitHub: <a href="${data.personalDetails.githubProfile}" target="_blank">${
      data.personalDetails.githubProfile
    }</a></p>
        <p>Portfolio: <a href="${data.personalDetails.portfolio}" target="_blank">${
      data.personalDetails.portfolio
    }</a></p>

        <h2>Summary</h2>
        <p>${Array.isArray(data.summary) ? data.summary.join("<br>") : data.summary}</p>

        <h2>Work Experience</h2>
        ${data.workExperience
          .map(
            (job: any) => `
          <div class="job">
            <h3>${job.jobTitle} at ${job.company}</h3>
            <p>${job.location}</p>
            <p>${job.startDate} - ${job.endDate || "Present"}</p>
            <ul>
              ${job.responsibilities.map((responsibility: string) => `<li>${responsibility}</li>`).join("")}
            </ul>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  })
  .catch((error) => console.error("Error loading JSON:", error));

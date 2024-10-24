(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();fetch("/data.json").then(e=>e.json()).then(e=>{const t=document.querySelector("#app");t.innerHTML=`
      <div>
        <h1>${e.personalDetails.fullName}</h1>
        <p>Email: <a href="mailto:${e.personalDetails.email}">${e.personalDetails.email}</a></p>
        <p>Phone: ${e.personalDetails.phone}</p>
        <p>LinkedIn: <a href="${e.personalDetails.linkedinProfile}" target="_blank">${e.personalDetails.linkedinProfile}</a></p>
        <p>GitHub: <a href="${e.personalDetails.githubProfile}" target="_blank">${e.personalDetails.githubProfile}</a></p>
        <p>Portfolio: <a href="${e.personalDetails.portfolio}" target="_blank">${e.personalDetails.portfolio}</a></p>

        <h2>Summary</h2>
        <p>${Array.isArray(e.summary)?e.summary.join("<br>"):e.summary}</p>

        <h2>Work Experience</h2>
        ${e.workExperience.map(i=>`
          <div class="job">
            <h3>${i.jobTitle} at ${i.company}</h3>
            <p>${i.location}</p>
            <p>${i.startDate} - ${i.endDate||"Present"}</p>
            <ul>
              ${i.responsibilities.map(l=>`<li>${l}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `}).catch(e=>console.error("Error loading JSON:",e));

let skills = [
    {
        name: "Web Design",
        percentage: 90
    },
    {
        name: "Landing & Sales Page Design",
        percentage: 84
    },
    {
        name: "App Design",
        percentage: 67
    },
    {
        name: "SaaS Design",
        percentage: 71
    },
    {
        name: "Web Development",
        percentage: 86
    },
    {
        name: "App Development",
        percentage: 56
    },
    {
        name: "Email Designing",
        percentage: 79
    },
    {
        name: "Research",
        percentage: 75
    }
];

function generateSkillHTML() {
    let skillHTML = ``;
    let serviceHTML=`;`
    skills.forEach((skill) => {
        skillHTML += `
        <div class="skill">
            <div class="skillText">
                <h4>${skill.name}</h4>
                <h3>${skill.percentage}%</h3>
            </div>
            <div class="skillBar">
                <div class="skillBarFill" style="width: ${skill.percentage}%;"></div>
            </div>
        </div>
        `;
    });

    serviceHTML+=`<option value="default">--Select Service--</option>`
    skills.forEach((service)=>
        {
            serviceHTML+=`
                <option value="${service.name}">${service.name}</option>

            `;
        });

    document.querySelector('.js-form-services').innerHTML = serviceHTML;
    document.querySelector('.js-skills-section').innerHTML = skillHTML;
}

document.addEventListener('DOMContentLoaded', generateSkillHTML);
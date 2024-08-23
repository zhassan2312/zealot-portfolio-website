let portfolioProjects = [
    {
        image: 'Assets/Images/portfolio1.png',
        name: 'Codexcue Landing Page',
        link: ''
    },
    {
        image: 'Assets/Images/portfolio2.png',
        name: 'Lincoln Recovery Landing Page'
    },
    {
        image: 'Assets/Images/portfolio3.png',
        name: 'NERC Website Redesign'
    },
    {
        image: 'Assets/Images/portfolio4.png',
        name: 'Pharmacity App Design'
    },
    {
        image: 'Assets/Images/portfolio5.png',
        name: 'Digital Agecny'
    },
    {
        image: 'Assets/Images/portfolio6.png',
        name: 'Bookshire Website Redesign'
    },
    {
        image: 'Assets/Images/portfolio7.png',
        name: 'Profit App Design'
    }
];

function generatePortfolioHTML() {
    let portfolioHTML = ``;

    portfolioProjects.forEach((project) => {
        portfolioHTML += `
        <div class="portfolioImageWrapper">
            <img src="${project.image}" alt="Portfolio Image" class="portfolioImage">
            <div class="portfolioImageOverlay">
                <p>${project.name}</p>
            </div>
        </div>
        `;
    });

    document.querySelector('.js-portfolio-container').innerHTML = portfolioHTML;
}

document.addEventListener('DOMContentLoaded', generatePortfolioHTML);
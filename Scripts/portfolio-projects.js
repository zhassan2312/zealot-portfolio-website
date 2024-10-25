let portfolioProjects = [
    {
        image: 'https://mir-s3-cdn-cf.behance.net/projects/404/c8fd99183329297.Y3JvcCwyMjg4LDE3OTAsMCww.png',
        name: 'TravelTrend',
        link: ''
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:1400/0*wnwNT5rcIoZwNkgZ.jpg',
        name: 'Fintech Service'
    },
    {
        image: 'https://assets.decktopus.com/webflow/templates/ux-case-study-template/1.webp',
        name: 'Dechtopus'
    },
    {
        image: 'https://blog.uxfol.io/wp-content/uploads/2024/01/rebeca-ux-portfolio-example.png',
        name: 'Moin Folio'
    },
    {
        image: 'https://mir-s3-cdn-cf.behance.net/projects/404/7586b1120916609.Y3JvcCwyNDkwLDE5NDgsMTU0LDA.png',
        name: 'Whiskers'
    },
    {
        image: 'https://blog.tubikstudio.com/wp-content/uploads/2023/05/case-study-physica-magazine-tubik-design.jpg',
        name: 'Physica'
    },
    {
        image: 'https://theuxda.com/storage/app/media/thumb/4d7/428/aef/ENBD%20-%20UX%20Case%20Study%20HERO__width_1024.jpg',
        name: 'Thexuda'
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
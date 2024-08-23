let faqs = [
    {
        question: 'What is your design process?',
        answer: 'Our design process begins with understanding your business goals and target audience. We then create wireframes and prototypes, followed by visual design and iterative feedback until the final design is approved.'
    },
    {
        question: 'How do you approach landing page design?',
        answer: 'We focus on creating landing pages that are visually appealing and conversion-focused. Our approach includes clear CTAs, compelling copy, and optimized layouts to drive user action.'
    },
    {
        question: 'What elements make a successful sales page?',
        answer: 'A successful sales page includes a strong value proposition, persuasive content, social proof, and a clear call-to-action. We also ensure the design supports seamless user flow and quick load times.'
    },
    {
        question: 'Can you design custom SaaS dashboards?',
        answer: 'Yes, we specialize in designing custom SaaS dashboards that are user-friendly, data-driven, and scalable. We prioritize intuitive navigation and a clean, modern interface.'
    },
    {
        question: 'What is your approach to app design?',
        answer: 'Our app design process involves thorough research, user persona development, wireframing, prototyping, and usability testing to create intuitive and visually appealing mobile and web apps.'
    },
    {
        question: 'Do you provide responsive web design?',
        answer: 'Absolutely. All of our web designs are fully responsive, ensuring they perform well on desktops, tablets, and mobile devices. We focus on creating a seamless user experience across all platforms.'
    },
    {
        question: 'How do you handle web development projects?',
        answer: 'We use modern development frameworks and best practices to build fast, secure, and scalable websites. Our process includes front-end and back-end development, testing, and deployment.'
    },
    {
        question: 'Do you offer ongoing support and maintenance?',
        answer: 'Yes, we offer ongoing support and maintenance services to ensure your website or app stays updated, secure, and optimized. We provide regular updates, bug fixes, and performance monitoring.'
    }
];

function generatefaqHTML() {
    let faqHTML = ``;

    faqs.forEach((faq, index) => {
        faqHTML += `
            <div class="faq">
                <div class="faqHeader" data-index="${index}">
                    <div class="faqHeaderContent">
                        <div class="pointerIcon"></div>
                        <h4>${faq.question}</h4>
                    </div>
                    <img src="Assets/Icons/chevron-right-active.svg" alt="Plus" class="sideIcon">
                </div>
                <p class="faqBodyText">${faq.answer}</p>
            </div>
        `;
    });

    document.querySelector('.js-faqs').innerHTML = faqHTML;

    // Add event listeners to each faqHeader
    document.querySelectorAll('.faqHeader').forEach(header => {
        header.addEventListener('click', function() {
            // Remove active class from all pointerIcons
            document.querySelectorAll('.pointerIcon').forEach(icon => icon.classList.remove('active'));

            // Add active class to the clicked pointerIcon
            this.querySelector('.pointerIcon').classList.add('active');

            // Get the selected FAQ
            const index = this.getAttribute('data-index');
            const selectedFaq = faqs[index];

            // Populate the answerSection with the selected FAQ's question and answer
            document.querySelector('.answerSection h4').innerText = selectedFaq.question;
            document.querySelector('.answerSection p').innerText = selectedFaq.answer;

            // Show the answerSection
            document.querySelector('.answerSection').style.display = 'flex';
        });
    });
}

document.addEventListener('DOMContentLoaded', generatefaqHTML);
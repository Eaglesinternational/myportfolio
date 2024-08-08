
/***************** floating nav******************* */
const floatingNavs = document.querySelectorAll('.floating__nav a');

const removeActiveClass = ()=>{
    floatingNavs.forEach(nav =>{
        nav.classList.remove('active');
    })
}


floatingNavs.forEach(nav => {
    nav.addEventListener("click", ()=>{
        removeActiveClass();
        nav.classList.add('active');
        
    })
})
/***************************resume***********************8888888 */

const resumeRight = document.querySelector('.resume__right');
const experienceContent = `

                <h4>Experience</h4>
                <p>
                With a robust background in full stack web development, I have had the opportunity to work on a diverse range of projects that have honed my technical skills and creative problem-solving abilities.
                </p>
             
                <ul>
                    <li>
                        <h6>2018 - 2019</h6>
                        <h5>Intern</h5>
                        <p>Mobile Telecom Company</p>
                    </li>
                    <li>
                        <h6>2019 - 2021</h6>
                        <h5>Freelance Web Design</h5>
                        <p>Fiverr and Upwork</p>
                    </li>
                    <li>
                        <h6>2021 - 2022</h6>
                        <h5>Frontend Developer</h5>
                        <p>IMS</p>
                    </li>
                    <li>
                        <h6>2022 - 2024</h6>
                        <h5>Fullstack Freelance</h5>
                        <p>Self Employed</p>
                    </li>
                </ul>
`
const experienceBtn = document.querySelector('.experience__btn');
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add('primary')
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
});
resumeRight.innerHTML = experienceContent;

// EDUCATION

const educationBtn = document.querySelector('.education__btn');
const educationContent = `
    <h4>Education</h4>
     <p>
        My academic background in Electrical Electronics Engineering provided me with a strong foundation in problem-solving and analytical thinking. During my studies, I developed a keen interest in coding and software development, which led me to pursue self-directed learning in this field. Through dedication and hands-on expereince, I have successfully transitioned into a proficient full stack web developer, continually expanding my skill set and staying abreast of the latest industry trends
    </p>
                <ul>
                    <li>
                        <h5>College Education</h5>
                        <p>
                            HND IN ELECTRICAL ELECTRONICS ENGINEERING, 2011
                        </p>
                    </li>
                    <li>
                        <h5>Frontend Education</h5>
                        <p>
                            Driven by my passion for web development, I embarked on a self-directed learning journey to master front-end technologies. Through online courses, tutorials and hands-on project, I have gained proficiency in HTML, CSS, Javascript and various front-end frameworks.
                        </p>
                    </li>
                    <li>
                        <h5>Backend Education</h5>
                        <p>
                           Alongside my front-end development skills, I have pursued self-directed learning in back-end technologies to become a well-rounded full stack developer. Through online courses, tutorials and practical projects, I have gained expertise in PHP, Laravel, MySQL and server management.
                        </p>
                    </li>
                </ul>
`
educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className = 'resume__right education'
    educationBtn.classList.add('primary')
     // remove classes from other buttons
     aboutBtn.classList.remove('primary')
     skillsBtn.classList.remove('primary')
     experienceBtn.classList.remove('primary')
})

// skills
const skillsBtn = document.querySelector('.skills__btn');
const skillsContent = `
 <h4>Skills</h4>
               <p>
                With a strong foundation in Electrical Electronics Engineering and over three years of self-taught programming, I have developed a diverse skill set. Below are some of the key skills that I bring to the table
               </p>
               <ul>
               <li style="font-size: 3rem !important; padding: 1rem !important"><img src="./assests/node.png" alt=""></li>
                <li><img src="./assests/html.jpg" alt=""></li>
                <li><img src="./assests/laravel.jpg" alt=""></li>
                <li><img src="./assests/css.jpg" alt=""></li>
                <li><img src="./assests/my.jpg" alt=""></li>
                <li><img src="./assests/bootsrap.jpg" alt=""></li>
                <li><img src="./assests/php.png" alt=""></li>
                <li><img src="./assests/react.jpg" alt=""></li>
                <li><img src="./assests/git.jpg" alt=""></li>
               </ul>
`
skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = 'resume__right skills'
    skillsBtn.classList.add('primary')
     // remove classes from other buttons
     aboutBtn.classList.remove('primary')
     educationBtn.classList.remove('primary')
     experienceBtn.classList.remove('primary')
})

// about me
const aboutBtn = document.querySelector('.about__btn');
const aboutContent = `
 <h4>About me</h4>
              <p>
               Hello! I'm Daniel, a self-taught full-stack developer based in Cotonou with a background in Electrical Electronics Engineering. With over three years of programming experience. My journey into coding began out of curiosity and passion and it has grown into a fulfilling career.
              </p>
              <ul>
                <li>
                    <h6>Name: </h6>
                    <h5>Daniel Ogbonnaya</h5>
                </li>
                <li>
                    <h6>Experience:</h6>
                    <h5>6+ years</h5>
                </li>
                <li>
                    <h6>Email:</h6>
                    <h5>ekebu4real@yahoo.com</h5>
                </li>
                <li>
                    <h6>Nationality:</h6>
                    <h5>Nigerian</h5>
                </li>
                <li>
                    <h6>Freelance & collabs:</h6>
                    <h5>Available</h5>
                </li>
                <li>
                    <h6>Languages</h6>
                    <h5>English</h5>
                    <h5>French</h5>
                </li>
                <li>
                    <h6>Phone:</h6>
                    <h5>+229 67810731</h5>
                </li>
                <li>
                    <h6>Linkedin</h6>
                    <h5>Ekebuisi Ogbonnaya</h5>
                </li>
              </ul>
`

aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = 'resume__right about'
    aboutBtn.classList.add('primary')
     // remove classes from other buttons
     skillsBtn.classList.remove('primary')
     educationBtn.classList.remove('primary')
     experienceBtn.classList.remove('primary')
})


// MIXIYUP(PROJECTS SECTION)

const containerEl = document.querySelector('.projects__container');
let mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
})
mixer.filter('*')

// swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  breakpoints: {
    600:{
        slidesPerView: 2
    }, 1024: {
        slidesPerView: 3
    }
  }
  });

  //FAQS

  const faqs = document.querySelectorAll('.faqs__item');
  faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        const p = faq.querySelector('p');
        const icon = faq.querySelector('.faqs__icon')
        if(p.classList.contains('show')){
            p.classList.remove('show')
            icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
        } else{
            p.classList.add('show')
             icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
        }
    })
  })

  //themes

  const themeToggler = document.querySelector('.nav__theme-btn')

  themeToggler.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-varables')
    if(document.body.classList == ''){
        themeToggler.innerHTML = ` <i class="fa-solid fa-moon"></i>`
        window.localStorage.setItem('portfolio-theme', '')
    }else{
        themeToggler.innerHTML = ` <i class="fa-solid fa-sun"></i>`
        window.localStorage.setItem('portfolio-theme', 'dark-theme-varables')
    }
  })

  // use theme from local storage on page load

  const bodyClass = window.localStorage.getItem('portfolio-theme');
  document.body.className = bodyClass;
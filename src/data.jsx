//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  // companies icons
  import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
  import UpworkBrandIcon from './assets/img/brands/upwork.png';
  import FiverBrandIcon from './assets/img/brands/fiverr.png';
  import BehanceBrandIcon from './assets/img/brands/behance.png';
  import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
  
  // projects images
  import Project1 from './assets/img/projects/p1.PNG';
  import Project2 from './assets/img/projects/p2.PNG';
  import Project3 from './assets/img/projects/p3.PNG';
  import Project4 from './assets/img/projects/p4.PNG';
  import Project5 from './assets/img/projects/p5.PNG';
  import Project6 from './assets/img/projects/p6.PNG';
  
  // skills images
  import SkillImg1 from './assets/img/skills/html5.png';
  import SkillImg2 from './assets/img/skills/js.png';
  import SkillImg3 from './assets/img/skills/reactjs.png';
  import SkillImg4 from './assets/img/skills/nodejs.png';
  import SkillImg5 from './assets/img/skills/git.png';
  import SkillImg6 from './assets/img/skills/css3.png'
  import SkillImg7 from './assets/img/skills/Tailwind.png'
  import SkillImg8 from './assets/img/skills/MongoDB.png'
  
  // testimonial images
  import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
  import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
  import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    // {
    //   name: 'testimonials',
    //   href: 'testimonials',
    // },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiYoutube />,
      href: '',
    },
    {
      icon: <FiInstagram />,
      href: '',
    },
    {
      icon: <FiGithub />,
      href: '',
    },
    {
      icon: <FiDribbble />,
      href: '',
    },
  ];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      link : 'https://bbc-travel.netlify.app/',
      name: 'project name 1',
      category: 'Front-End Development',
    },
    {
      id: '2',
      image: Project2,
      link : 'https://weather-api-react-responsive.netlify.app/',
      name: 'project name 2',
      category: 'Front-End Development',
    },
    {
      id: '3',
      image: Project3,
      link : 'https://api-for-api.netlify.app/',
      name: 'project name 3',
      category: 'Front-End Development',
    },
    {
      id: '4',
      image: Project4,
      link : 'https://beaches-react.netlify.app/',
      name: 'project name 4',
      category: 'Full Stack Development',
    },
    {
      id: '5',
      image: Project5,
      link : 'https://cloud-manegement.netlify.app/',
      name: 'project name 5',
      category: 'Full Stack Development',
    },
    {
      id: '6',
      image: Project6,
      link : 'https://mubashircoding.github.io/Crypto-Tracker/',
      name: 'project name 6',
      category: 'Full Stack Development',
    },
  ];
  
  // projects
  export const projectsNav = [

    {
      name: 'ALL',
    },
    {
      name: 'Full Stack Development',
    },
    {
      name: 'Front-End Development',
    },

  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
  ];
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'SEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage3,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at mubashirkaiser2009@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Ontario, Canada',
      description: 'Serving clients worldwide',
    },
  ];
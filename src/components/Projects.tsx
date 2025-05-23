import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {  Github } from "lucide-react";
import appimg from "../Assests/appimg.png";
import ecommerceimg from "../Assests/ecommerceimg.png";
import jassmediaimg from "../Assests/jassmediaimg.png";
import project1img from "../Assests/project1img.png";
import smarteduimg from "../Assests/smarteduimg.png";
import stockimg from "../Assests/stockimg.png";
import todoimg from "../Assests/todoimg.png";
import vmsimg from "../Assests/vmsimg.png";
import timerimg from "../Assests/timerimg.png";
import gymimg from "../Assests/gymimg.png";
import Phnapk from "../Assests/pcapk.png";
//import postifyimg from "../Assests/postifyimg.png";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Ecommerce platform using Reactjs, CSS, Node.js, and MongoDB with responsive for mobile view. With cart funtionality where you can add product to the cart along with quantity increment and decrement.",
    image: ecommerceimg,
    technologies: "MERN Stack",
    githubLink: "https://github.com/KARAN-M077/ecommerce-MERN_STACK",
  },
  {
    title: "Vehicle management system",
    description:
      "Collaboratively developed a Vehicle Management System using the MERN stack. I designed the sign-in form with UI and validation, and created API endpoints for storing and retrieving data from MongoDB. This project aimed to streamline vehicle tracking and management.",
    image: vmsimg,
    technologies: "MERN Stack",
    githubLink: "https://github.com/KARAN-M077/KEC-VMS",
  },
  // {
  //   title: "Postify - Social Media App",
  //   description:
  //     "Developed a social media app using React, Node.js, and MongoDB, enabling users to create posts to share their ideas . I implemented the user authentication system, designed the UI for the feed , and created the API endpoints for post creation and interaction. This project showcased my ability to develop user-centric applications and deliver seamless user experiences.",
  //   image: postifyimg,
  //   technologies: "MERN Stack",
  //   githubLink: "https://github.com/KARAN-M077/Postify",
  // },
  {
    title: "Event Registration",
    description:
      "Event registration platform using HTML, CSS, Node.js, and MongoDB. Created intuitive forms to collect user details and implemented an admin page for efficient data management",
    image: project1img,
    technologies: "HTML & NodeJS",
    githubLink: "https://github.com/KARAN-M077/Event_Management",
  },
  {
    title: "Gym Influencer Website",
    description:
      "I created a modern and user-friendly UX for a gym website using React and Tailwind CSS, focusing on responsiveness and accessibility. The website highlights the gym’s services, such as personal training, group classes, and wellness programs, making it easy for users to explore and engage with the content.",
    image: gymimg,
    technologies: "React & TailWind CSS",
    githubLink: "https://github.com/KARAN-M077/Gym_site",
  },
  {
    title: "Medical Care APP",
    description:
      "I developed a modern, responsive, and accessible medical care application using React Native, designed to streamline the process of booking doctor appointments and managing personal health records. The app prioritizes user experience, ensuring seamless navigation and interaction across various devices",
    image: Phnapk,
    technologies: "ReactNative",
    githubLink: "https://github.com/KARAN-M077/Savemom_Task",
  },
  {
    title: "Freelance Project",
    description:
      "For a freelance project, a client approached us through LinkedIn and provided the UI design for a company landing page. Our task was to develop the UI and implement a feedback form using Nodemailer. My contributions included developing half of the UI and creating the feedback form with Nodemailer. The project resulted in a polished landing page that effectively met the client's needs and facilitated user feedback.",
    image: jassmediaimg,
    technologies: "React",
    githubLink: "https://github.com/KARAN-M077/jassmedia_freelance",
  },
  {
    title: "Diseases Identifier APP UI",
    description:
      "Plant disease identifier app with Flutter and Dart, allowing users to upload samples and receive accurate results. Leveraging Flutter's UI and Dart's functionality, I ensured a seamless user experience.",
    image: appimg,
    technologies: "Flutter",
    githubLink: "https://github.com/KARAN-M077/Plant_diseases_identifier_APP_UI",
  },
  {
    title: "Stock Management APP ",
    description:
      "For a consultancy project, our team of two developed a stock management app for a textile shop, enhancing inventory tracking and operational efficiency. My role focused on design and frontend development using Flutter and Dart, creating a user-friendly and responsive interface. Key features included real-time inventory tracking, search and filtering options and detailed reporting. The app significantly improved inventory accuracy and operational efficiency for the client.",
    image: stockimg,
    technologies: "Flutter",
    githubLink: "https://github.com/KARAN-M077/Stock_Management",
  },
  {
    title: "Timer",
    description:
      "JavaScript-based timer project, showcasing my adeptness in JavaScript programming. Through meticulous coding, I ensured the functionality and efficiency of the timer, demonstrating my commitment to delivering quality solutions. This project underscored my proficiency in JavaScript and my capability to develop practical applications.",
    image: timerimg,
    technologies: "HTML & JS",
    githubLink: "https://github.com/KARAN-M077/Mytimer",
  },
  {
    title: "Smart Education",
    description:
      "My primary focus was on frontend development. I took the lead in designing and implementing critical components such as the admin page and all frontend forms, including login and sign-up functionalities.",
    image: smarteduimg,
    technologies: "MERN Stack",
    githubLink: "https://github.com/KARAN-M077/SIH_Project_UI",
  },
  {
    title: "To-DO List (UI)",
    description:
      "In our group project, I led the development of key features including the settings page, login, and sign-up functionality. My responsibilities involved designing intuitive user interfaces and implementing secure authentication processes. These contributions played a crucial role in enhancing the overall usability and functionality of the application. Through collaborative efforts, we delivered a polished product to our users.",
    image: todoimg,
    technologies: "React",
    githubLink: "https://github.com/KARAN-M077/Google_Hackathon_TO-DOproject_UI",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto lg:px-24 px-10 bg-gray-50 py-10 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
            (
              { title, description, image, technologies, githubLink },
              index
            ) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-fit transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col justify-around">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-5 mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {technologies}
                      </span>
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center  text-white bg-black px-4 py-1 rounded-full "
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{description}</p>

                  <div className="flex space-x-4">
                    {/* <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a> */}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

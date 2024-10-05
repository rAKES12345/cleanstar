"use client";
import './Home.css';
import Navbar from '@/Navbar/Navbar';
import Image from 'next/image';
import rightImage from '../../assets/rightside.jpg';
import expert from '../../assets/expert.jpg';
import aboutImage from '../../assets/about1.jpg';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import { FaHome, FaBuilding, FaIndustry, FaHammer,FaWrench } from 'react-icons/fa'; // Importing icons
import React ,{useState} from 'react';
import testimonial from '../../assets/testimonial.jpg';
import feedback1 from '../../assets/feedback1.jpg';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';
import Link from 'next/link';

const HomeScreen = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation check
    if (!formData.fullname || !formData.email || !formData.service || !formData.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
    try {
      const response = await fetch('https://prabhatech.com/cleanstar_backend/appointments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Form successfully submitted:', result);
  
        // Optionally, reset form after successful submission
        setFormData({
          fullname: '',
          email: '',
          service: '',
          message: '',
        });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const servicesData = [
    {
        title: "Grease Trap Cleaning",
        description: "Professional grease trap cleaning to ensure efficient waste management and compliance with health standards.",
        icon: <FaWrench />, // Replace with a specific icon for grease trap cleaning
    },
    {
        title: "Drain Line Jetting",
        description: "High-pressure water jetting services for clearing blocked drain lines and restoring proper flow.",
        icon: <FaWrench />, // Replace with a specific icon for drain line jetting
    },
    {
        title: "Sump Pit Cleaning",
        description: "Comprehensive cleaning of sump pits to prevent flooding and ensure proper drainage.",
        icon: <FaWrench />, // Replace with a specific icon for sump pit cleaning
    },
    {
      title: "Industrial Cleaning Services",
      description: "Expert cleaning services for factories and large facilities, ensuring compliance with safety regulations.",
      icon: <FaIndustry />,
  },
    {
        title: "Sewage Water Removing",
        description: "Safe and effective removal of sewage water to protect your property and health.",
        icon: <FaWrench />, // Replace with a specific icon for sewage water removal
    },
    {
        title: "Lift Station Cleaning",
        description: "Expert cleaning of lift stations to maintain optimal performance and prevent failures.",
        icon: <FaWrench />, // Replace with a specific icon for lift station cleaning
    },
    {
        title: "Grease Trap Supply & Installation",
        description: "Supply and installation of high-quality grease traps for effective waste management.",
        icon: <FaWrench />, // Replace with a specific icon for grease trap supply & installation
    },
    {
        title: "Kitchen Duct Cleaning",
        description: "Thorough cleaning of kitchen ducts to improve air quality and reduce fire risks.",
        icon: <FaWrench />, // Replace with a specific icon for kitchen duct cleaning
    },
    {
        title: "Water Tank Cleaning",
        description: "Professional cleaning of water tanks to ensure safe and clean water supply.",
        icon: <FaWrench />, // Replace with a specific icon for water tank cleaning
    },
];


const pricingData = [
  {
    head: "Residential",
    price: "25.00",
    description: [
      "Carpet Cleaning",
      "Bathroom Cleaning",
      "Floor Cleaning",
      "Bedroom Cleaning",
    ],
    image: rightImage,
    icon: <FaHome />, // Added icon for Residential
  },
  {
    head: "Commercial",
    price: "50.00",
    description: [
      "Office Cleaning",
      "Window Cleaning",
      "Floor Cleaning",
      "Bathroom Cleaning",
    ],
    image: rightImage,
    icon: <FaBuilding />, // Added icon for Commercial
  },
  {
    head: "Industrial",
    price: "100.00",
    description: [
      "Factory Cleaning",
      "Heavy Equipment Cleaning",
      "Warehouse Maintenance",
    ],
    image: rightImage,
    icon: <FaIndustry />, // Added icon for Industrial
  },
  {
    head: "Special Services",
    price: "75.00",
    description: [
      "Post-Construction Cleaning",
      "Deep Cleaning",
      "Eco-Friendly Cleaning",
    ],
    image: rightImage,
    icon: <FaHammer />, // Added icon for Special Services
  },
];


  const projectsData = [
    {
      image: service1,
      heading: "Residential Service",
      description: "Office Cleaning",
    },
    {
      image: service2,
      heading: "Commercial Service",
      description: "Building Maintenance",
    },
    {
      image: service3,
      heading: "Industrial Service",
      description: "Factory Cleaning",
    },
    {
      image: service4,
      heading: "Post-Construction ",
      description: "Thorough cleaning for newly built or renovated spaces.",
    },
  ];

  const services = [
    { value: "Grease Trap Cleaning", label: "Grease Trap Cleaning" },
    { value: "Drain Line Jetting", label: "Drain Line Jetting" },
    { value: "Sump Pit Cleaning", label: "Sump Pit Cleaning" },
    { value: "Sewage Water Removing", label: "Sewage Water Removing" },
    { value: "Lift Station Cleaning", label: "Lift Station Cleaning" },
    { value: "Grease Trap Supply & Installation", label: "Grease Trap Supply & Installation" },
    { value: "Kitchen Duct Cleaning", label: "Kitchen Duct Cleaning" },
    { value: "Water Tank Cleaning", label: "Water Tank Cleaning" },
  ];

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="slide1">
          <div className="slide1left">
            <div className="sub-head"><span>Fast and</span> efficient service</div>
            <div className="main-head">
              <div className="main-head-s1">Cleaning</div>
              <div className="main-head-s2">Excellence</div>
              <div className="main-head-s3">Guaranteed!</div>
            </div>
            <button className="learn-more-btn" ><Link href="/Services" style={{textDecoration:"none"}} >Learn More</Link></button>
          </div>
          <div className="slide1right">
            <Image className='slide1RightImg' src={rightImage} alt="Image not found" layout="responsive" />
          </div>
        </div>

        <div className="online-appointment">
          <div className="appointment-inputs">
            <span className="appointment-title">Online Appointment</span>
            <form className="appointmentForm" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="fullname" // Updated name attribute
          value={formData.fullname} // Updated state
          onChange={handleChange}
          placeholder="Enter Full Name" // Updated placeholder
        />

        <input
          className="input"
          type="email" // Updated input type to email for better validation
          name="email" // Updated name attribute
          value={formData.email} // Updated state
          onChange={handleChange}
          placeholder="Enter Email" // Updated placeholder
        />
     
        <select
          className="select"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a Service</option>
          {services.map((val, ind) => (
            <option key={ind} value={val.value}>
              {val.label}
            </option>
          ))}
        </select>

        <input
          className="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        


        <button className="button" type="submit ">Submit</button>
          
      </form>
          </div>
        </div>

        <div className="about-our-company">
          <div className="left-image">
            
            <div className='left-image-sub'>
              <Image className='left-image-sub-image' src={aboutImage} alt="About Our Company" layout="fill" objectFit="cover" />
              </div>
          </div>
          <div className="right-content">
            <div className="about-title">
              <span>About </span>Our Company
            </div>
            <div className="about-subtitle">Our Success Cleaning<br /> Up Your Mess</div>
            <div className="about-description">

            At Clean star tanks, containers & crates cleaning services est, we are dedicated to providing top-quality, reliable cleaning solutions for a diverse range of clients across uae. With years of experience in the industry, we specialize in maintaining and servicing essential infrastructure, from residential and commercial water tanks to.</div>

            <div className="service-outer">
            {servicesData.slice(0, 4).map((service, index) => (
              <div className="service" key={index}>
                <div className="service-title">{service.title}</div>
                <div className="service-description">{service.description}</div>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="banner">
  <div className="bannerScroll">
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
  </div>
</div>

        <div className='our-success'>
          <div><span>Our </span> Popular Services</div>
          <div>Our Success Cleaning <br /> Up Your Mess</div>
          <div className="cardsContainer">
            {
              servicesData.map((val, ind) => {
                return <CardItem
                  key={ind}
                  src={rightImage}
                  icon={val.icon}
                  cardHead={val.title} // Changed to val.title for consistency
                  cardDescription={val.description}   
                />
              })
            }
          </div>
        </div>


        <div className='why-head'>
          <div className="why-title">
            <span>Why </span> Choose Klenar
          </div>
          <div className="why-subtitle">
            Expert House Cleaning<br /> Service You Can Trust
          </div>
          <div className="why-choose-cleaner">
            <div className="why-left">  
              <div className="why-progress">
                <Progress
                  headings={[
                    "Every Customer is Special",
                    "Customer Support Live Chat",
                    "Enjoy Discounts in Fees",
                  ]}
                  descriptions={[
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                  ]}
                />
                <Progress
                  headings={[
                    "High-Quality Cleaning Services",
                    "Flexible Scheduling",
                    "Eco-Friendly Products",
                  ]}
                  descriptions={[
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                  ]}
                />
              </div>
            </div>
            <div className="why-right">
              <Image className="whyRightImage" src={expert} alt="Klenar Cleaning Service" />
            </div>
          </div>
        </div>
        

        <div className="package-outer">
  <div className="package">
    <div>
      <div><span>Our </span> Affordable Package</div>
      <div>Special Pricing Package<br />No Hidden Charge</div>
    </div>
    <div className='button-outer'>
      <button>Monthly</button>
      <button>Yearly</button>
    </div>
  </div>
  <div className="pricing-cards">
    {pricingData.map((pricing, index) => (
      <PricingCard
        key={index}
        icon={pricing.icon} // Add icon prop here
        cardHead={pricing.head}
        cardPrice={pricing.price}
        cardDescription={pricing.description}
      />
    ))}
  </div>
</div>


        <ClientFeedback />
        <div className="completed-projects">
          <div className="project-header">
            <div><span>Some </span> Completed Projects</div>
            <div>Every Project is Different<br />Every Client Special</div>
          </div>
          <div className="projects-container">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.image}
                heading={project.heading}
                description={project.description}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;

const CardItem = ({ icon, cardHead, cardDescription }) => {
  return (
    <div className="card">
      <div className='card-left'>
        <div className='card-left-icon'>{icon}</div> 
      </div>
      <div className='card-right'>
        <div className="cardHead">{cardHead}</div>
        <div className="cardDescription">{cardDescription}</div>
        <div className="cardFooter">Read Details</div>
      </div>
    </div>
  );
};

const feedbackData = [
  {
    text: "Erat dapibus interdum consequat eleifend. Porttitor iaculis per lectus ornare dolor pede. Metus urna faucibus montes duis conds imentum congue.",
    author: "Shon Toy",
    title: "Chief Marketing Officer",
    img: "service1.jpg", // Add the path for image
    testimonialImg: "testimonial1.jpg", // Add the path for the client image
  },
  {
    text: "A different feedback here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
    title: "Marketing Lead",
    img: "service2.jpg", // Different image for new author
    testimonialImg: "testimonial2.jpg", // Different image for new testimonial
  },
  
];

function ClientFeedback() {

  // Use state to track the current feedback index
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  // Get the current feedback from the array
  const { text, author, title, img, testimonialImg } = feedbackData[currentFeedbackIndex];

  const handleNext = () => {
    setCurrentFeedbackIndex((prevIndex) => 
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentFeedbackIndex((prevIndex) => 
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="client-feedback-container">
      <div className="image-section">
        <Image
          src={feedback1}
          alt="Client washing with excitement"
          className="feedback-image"
        />
      </div>
      <div className="text-section">
        <div className="section-title">
          <span>Customer </span> Statement
        </div>
        <div className="title" style={{ textAlign: "start" }}>
          Our Client Feedback
        </div>
        <p className="feedback-text">
          {text}
        </p>
        <div className="author-info">
          <Image src={feedback1} alt={author} className="author-image" />
          <div className="author-details">
            <p className="author-name">{author}</p>
            <p className="author-title">{title}</p>
          </div>
        </div>
      </div>
      <div className="navigation-arrows">
        <button className="arrow-button-next" onClick={handleNext}>❯</button>
        <button className="arrow-button-prev" onClick={handlePrev}>❮</button>
      </div>
    </div>
  );
}



const PricingCard = ({ icon, cardHead, cardPrice, cardDescription }) => {
  return (
    <div className="pricing-card">
      {icon && <div className="card-icon">{icon}</div>} {/* Icon wrapper */}
      <div className="cardHead">{cardHead}</div>
      <div className="cardPrice">${cardPrice}</div>
      <div className="cardDescription">
        {cardDescription.map((val, ind) => (
          <div key={ind}> {val}</div>
        ))}
      </div>
      <div className="cardFooter">Get Services</div>
    </div>
  );
};


const ProjectCard = ({ src, heading, description }) => {
  return (
    <div className="project-card">
      <Image src={src} alt={heading} />
      <div className='project-card-footer'>
        <div>
          <div className="heading">{heading}</div>
          <div className="description">{description}</div>
        </div>
        <div className='add-icon'>+</div>
      </div>
    </div>
  );
};

const Progress = ({ headings, descriptions }) => {
  return (
    <div className="progressContainer">
      {headings.map((heading, index) => (
        <div key={index} className="progressItem">
          <div className="progressBar">
            <div className="progressCircle"></div>
            <div className="progressLine"></div>
          </div>
          <div className="progressContent">
            <h3>{heading}</h3>
            <p>{descriptions[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

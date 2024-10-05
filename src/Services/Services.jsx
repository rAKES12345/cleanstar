"use client";
import React, { useState, useEffect } from "react"; // Importing useState and useEffect
import Navbar from "@/Navbar/Navbar";
import styles from './Services.module.css'; // Importing CSS Module
import Image from "next/image";

import s9 from '../../assets/service9.jpg';
import s10 from '../../assets/service10.jpg';
import s11 from '../../assets/service11.jpg';
import s12 from '../../assets/service12.jpg';
import s13 from '../../assets/service13.jpg';
import s14 from '../../assets/service14.jpg';

import feedback1 from '../../assets/feedback1.jpg';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';










// Kitchen Duct Cleaning
// Water Tank Cleaning

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Grease Trap Cleanings',
      description:
        'Buscipit tincidunt duis antino gravida nam tellusy nascetur neque vulpuits aenean is scelerisque ultrces muscle mass and matter order commo.',
      imageUrl: s9,
      icon: '🏠',
    },
    {
      id: 2,
      title: 'Drain Line Jetting',
      description:
        'Buscipit tincidunt duis antino gravida nam tellusy nascetur neque vulpuits aenean is scelerisque ultrces muscle mass and matter order commo.',
      imageUrl: s10,
      icon: '🏥',
    },
    {
      id: 3,
      title: 'Sump Pit Cleaning',
      description:
        'Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.',
      imageUrl: s11,
      icon: '🧼',
    },
    {
      id: 4,
      title: 'Sewage Water Removing',
      description:
        'Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.',
      imageUrl: s12,
      icon: '🪟',
    },
    {
      id: 5,
      title: 'Lift Station Cleaning',
      description:
        'Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque.',
      imageUrl: s13,
      icon: '🏢',
    },
    {
      id: 6,
      title: 'Grease Trap Supply & Installation',
      description:
        'Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit.',
      imageUrl: s14,
      icon: '🏭',
    },
  ];

  // Sample feedback data
  const feedBackData = [
    {
      id: 1,
      name: "John Doe",
      title: "Business Owner",
      feedback: "Excellent service! Highly recommend. The team was professional and paid great attention to detail, ensuring that every corner of my office was spotless. I will definitely be using their services again in the future.",
      avatar: service1 // Replace with the actual path to the avatar
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Homeowner",
      feedback: "They did a fantastic job cleaning my house! The staff was friendly and punctual, and they left my home looking brand new. I appreciated their commitment to using eco-friendly products as well.",
      avatar: service2 // Replace with the actual path to the avatar
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Office Manager",
      feedback: "Reliable and thorough service every time. We have used their cleaning services for over a year now, and they never disappoint. Their team is efficient and takes pride in their work, which is evident in the results.",
      avatar: service3 // Replace with the actual path to the avatar
    },
    
    
];


  return (
    <div>
      <Navbar text1="Our" text2="Services" path1="Home" path2="Services" />

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.headerSection}>
          <div className={styles.sectionTitle}><span>Our </span> Best Services</div>
          <div className={styles.title}>Quality Cleaning Making <br /> you Much Happy</div>
        </div>

        {/* Cards Container */}
        <div className={styles.cardsContainer}>
          {servicesData.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <Image
                src={service.imageUrl}
                alt={service.title}
                className={styles.serviceImage}
                width={200}
                height={200}
                objectFit="cover"
              />
              <div className={styles.cardContent}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.serviceTitle}>{service.title}</div>
                <div className={styles.serviceDescription}>{service.description}</div>
                <button className={styles.learnMoreBtn}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className={styles.feedBackOuter}>
        <div className={styles.feedbackContainer}>
          <div className={styles.feedbackHeader}>
            <div className={styles.feedbackTag}>
            Our Popular Services</div>
            <div className={styles.feedbackHeading}>Customer Says About
            Our Service</div>
          </div>
          <div className={styles.feedbackCards}>
            {/* Rendering feedback cards */}
            {feedBackData.map((feedback,ind) => (
              <div className={styles.feedbackCard} key={ind}>
                <div style={{display:'flex',flexDirection:"row"}}>
                <Image src={feedback.avatar} alt="Avatar" className={styles.avatar} />
                <div>

                  <div className={styles.feedbackCardTitle}>{feedback.name}</div>
                  <div className={styles.business}>{feedback.title}</div>
                </div>
                </div>
                  <div className={styles.feedbackDescription}>{feedback.feedback}</div>
                <span className={styles.quoteIcon}>“</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.feedBackForm}>
          <FeedBackForm />
        </div>
      </div>
    </div>
  );
};

const FeedBackForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name1: '',
    name2: '',
    service: '',
    message: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name1) tempErrors.name1 = "First name is required.";
    if (!formData.name2) tempErrors.name2 = "Last name is required.";
    if (!formData.service) tempErrors.service = "Please choose a service.";
    if (!formData.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  // API call using useEffect after successful submission
  useEffect(() => {
    if (isSubmitted) {
      const postData = async () => {
        try {
          const response = await fetch('https://your-api-endpoint.com/appointments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Error submitting form.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      postData();
      setIsSubmitted(false);  // Reset the form submission status
    }
  }, [isSubmitted, formData]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Free Estimate</div>
      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name1"
          placeholder="First Name"
          value={formData.name1}
          onChange={handleChange}
        />
        {errors.name1 && <div className={styles.error}>{errors.name1}</div>}

        <input
          type="text"
          name="name2"
          placeholder="Last Name"
          value={formData.name2}
          onChange={handleChange}
        />
        {errors.name2 && <div className={styles.error}>{errors.name2}</div>}

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="" disabled>Choose Service</option>
          <option value="House Cleaning">House Cleaning</option>
          <option value="Hospital Cleaning">Hospital Cleaning</option>
          <option value="Carpet Cleaning">Carpet Cleaning</option>
          <option value="Window Cleaning">Window Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Industrial Cleaning">Industrial Cleaning</option>
        </select>
        {errors.service && <div className={styles.error}>{errors.service}</div>}

        <textarea
          name="message"
          placeholder="Write Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <div className={styles.error}>{errors.message}</div>}

        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default Services;

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn } from '../utils/motion';

import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";
import linkedInIcon from "../assets/linkedin.png";

const Contact = () => {
  const formRef = useRef(null);
  const [form,setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

// template_sc4fcyd
// service_0mju28t
// user_bZ5ZdERCoFPJHnHCQcU2k
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs.send(
      "service_0mju28t",
      "template_sc4fcyd",
      {
        from_name: form.name,
        to_name: "Godson",
        from_email: form.email,
        to_email: "godsonemmanuel07@gmail.com",
        message: form.message,
      },
      "user_bZ5ZdERCoFPJHnHCQcU2k"
    ).then(() => {
      setLoading(false);
      alert("Thank You. I will get back you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
      setLoading(false);

      console.log(error);

      alert("Something went wrong.");
    })
  }

  return (
    <motion.div className="bg-black-200 p-10 rounded-3xl w-full">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left','tween',0.2,1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending...' : 'Send' }
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <div className="mt-12 flex flex-col gap-8">

            <div className='flex flex-row items-center mb-2'>
              <div className='bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400 w-9 h-9'>
                <FaPhoneAlt />
              </div>
              &nbsp;&nbsp;7978008810
            </div>
            <div className='flex flex-row items-center mb-2'>
              <div className='bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400 w-9 h-9'>
                <FaEnvelope />
              </div>
              &nbsp;&nbsp;godsonemmanuel07@gmail.com
            </div>

            <div className='flex flex-col items-center mb-2'>
              <p className={styles.sectionSubText}>Social Media Links</p>

              <div className='flex flex-rows gap-10 justify-between items-center mt-5'>
                <div className='w-[80px] h-[80px] flex items-center justify-center'>
                  <a href='https://github.com/godsy07' target='_blank' title='Github Link'>
                    <img src={githubIcon} className="w-full h-full object-contain" />
                  </a>
                </div>
                <div className='w-[80px] h-[80px] flex items-center justify-center'>
                  <a href='https://www.instagram.com/godsy__07/' target='_blank' title='Instagram Link'>
                    <img src={instagramIcon} className="w-full h-full object-contain" />
                  </a>
                </div>
                <div className='w-[80px] h-[80px] flex items-center justify-center'>
                  <a href='https://www.linkedin.com/in/godsy07/' target='_blank' title='LinkedIn Link'>
                    <img src={linkedInIcon} className="w-full h-full object-contain" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Contact, "contact")
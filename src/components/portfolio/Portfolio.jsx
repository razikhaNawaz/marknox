import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React eCommerce App",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A simple ecommerce website where we can add products to the cart and made the cart user specific. Added page protection from unauthotrized acces.",
    link: "https://github.com/razikhaNawaz/eCommerceComplete",
  },
  {
    id: 2,
    title: "Next.js meetup App",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Designed a Meetups website with secure data storage using MongoDB. Optimized performance with Next JS for server-side rendering.",
    link: "https://nextjs-project-eta-sandy.vercel.app/",
  },
  {
    id: 3,
    title: "Mailbox App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developed a mailbox client with React JS, Redux Toolkit, React Router, and Firebase. Enabled users to send/receive emails and track unread messages, with Firebase for data storage. Managed state efficiently using Redux and maintained version control with GitHub.",
    link: "https://mailbox-app-ten.vercel.app/",
  },
  {
    id: 4,
    title: "Expense Tracker",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Built with HTML, CSS, JavaScript, React, Redux, React Router, and Firebase. Firebase supports database, authentication, and hosting, allowing long-term data retention. Premium users can download their expenses in Excel format.",
    link: "https://expensetracker-jinehwfnd-razikhanawazs-projects.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.link, "_blank")}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects Done</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

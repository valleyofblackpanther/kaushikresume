import { BiDownArrow } from "react-icons/bi";
import Card from "../Card";
import Card1 from "../Card1";
import SkillSetCard from "../SkillSetCard";
import "./index.css";
import Footer from "../Footer";

const cardsData = [
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656042508/icons/ukraine_i3xlp0.png",
    heading: "Ukraine Final",
    description: "I was the senior engineer of the Ukraine Final website.",
    link: "https://github.com/valleyofblackpanther/Ukraine-Final",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656045577/icons/iss_z3jvfu.jpg",
    heading: "ISS-HUB",
    description:
      "With the help of ISS tracking API, and Nasa API. I made an interactive website where people could see the ISS over our planet revolving. ",
    link: "https://github.com/valleyofblackpanther/IssHUB",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040356/icons/djangoproject_qiywtm.png",
    heading: "Django",
    description:
      "I am a contributor to Django open source community in github. I interacted with the django maintainers and made my own contribution to django source code.",
    link: "https://github.com/django/django",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656045629/icons/message_pxkciy.jpg",
    heading: "Messager",
    description:
      "This was a messaging application which helps user to instantly interact with each other.",
    link: "https://github.com/valleyofblackpanther/CodeTest-Spri/tree/main/CodeTest%2FTask3",
  },
];

const pressAndMoreData = [
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656046073/icons/glitch_nqddya.jpg",
    heading: "Glitch Hobbyists Club",
    description:
      "I founded a computer club in my university for students who were interested in learning and creating applications, I acted as a mentor to 8-10 students in the beginning. I mentored them to create responsive websites, and made them understand the importance of a community in tech world. ",
    link: "https://chat.whatsapp.com/EyLRYkS3WCrGW10mWSfNPf",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656046312/icons/spritle_hbm62f.svg",
    heading: "Spritle",
    description:
      "I worked at Spritle for three months as a software engineer intern. During my period, I made some serious contribution tothe comapanies growth. I interacted with the clients, and understood what they really need, through our application. I was involved in atleast five projects at sprilte. I shared the role of being a technical writer too.",
    link: "https://www.spritle.com",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656046065/icons/wat_cmz2o7.jpg",
    heading: "WAT",
    description:
      "WAT is a startup company, I was the CTO of this startup and senior engineer. I had the role to create a mobile application, and handle atleast 9 interns who worked under me. My role as CTO came with a lot of responsibilites but that didn't disturb me with my college education. I learnt a lot from my role in this entrepreneurial world.",
    link: "https://www.linkedin.com/in/web-arch-tech",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656046413/icons/gfg_a1ttsg.png",
    heading: "GeeksForGeeks",
    description:
      "When I was in the first year of college, I did a lot of technical writing for other comapnies but one of them was GeeksForGeeks. I published articles about cache oblivious algorithms, I wrote atleast two articles about this topic.",
    link: "https://auth.geeksforgeeks.org/user/kaushikam12/articles",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656046055/icons/pennind_jtflo0.jpg",
    heading: "pennind",
    description:
      "This is my own blogging website where I publish technical articles, and other social articles.",
    link: "https://kaushikam12.wixsite.com/pennind",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656046546/icons/monte_carlo_price_1-636x310-2_wwofhj.png",
    heading: "Research Intern",
    description:
      "I worked as a research intern with a professor at my university. The research was about Monte carlo methods, wherein my role was to create a computing model which calculates the probability of the atoms next interaction with other atoms.",
    link: "",
  },
];

const Home = () => (
  <>
    <div className="home-bg-container">
      <div className="name-container">
        <div>
          <h1 className="home-name">Hello, I'm Kaushik</h1>
          <p className="description">web & mobile Developer</p>
        </div>
        <img
          src="https://res.cloudinary.com/ds9yqxonj/image/upload/v1655663244/Screenshot_from_2022-06-19_22-33-31__1_-removebg_myfqpn.png"
          alt="image"
          className="avatar"
        />
      </div>
      <div className="down-container">
        <a href="#details">
          <BiDownArrow className="arrow-button" />
        </a>
      </div>
      <div className="about-container minusTenDegrees" id="details">
        <h1 className="tenDegrees">
          I'm a college student,{" "}
          <span className="delyaDesign">
            computer programmer, and an entrepreneur .
          </span>
          <br /> I enjoy designing and developing software.
        </h1>
      </div>

      <div className="skills-container minusTenDegrees">
        <div className="h-d tenDegrees">
          <h1 className="heading blueColor">Projects</h1>
          <p className="sub-heading">Click on to Visit</p>
        </div>

        <ul className="ul-container tenDegrees">
          {cardsData.map((eachItem) => (
            <Card each={eachItem} />
          ))}
        </ul>
      </div>
      <div className="press-more-container minusTenDegrees">
        <div className="h-d tenDegrees">
          <h1 className="heading whiteColor">Experiences</h1>
        </div>

        <ul className="ul-container tenDegrees">
          {pressAndMoreData.map((eachItem) => (
            <Card1 each={eachItem} />
          ))}
        </ul>
      </div>
      {/* <div className="skill-set-container minusTenDegrees">
        <div className="h-d tenDegrees">
          <h1 className="heading blueColor">SkillSet</h1>
        </div>

        <ul className="ul-skillSet-container tenDegrees">
          {skillSetData.map((eachItem) => (
            <SkillSetCard each={eachItem} />
          ))}
        </ul>
      </div> */}
      <div className="minusTenDegrees">
        <h1 className="whiteColor font">SkillSet</h1>
      </div>
      <div class="container minusTenDegrees p-t-b">
        <div class="box tenDegrees">
          <span></span>
          <div class="content">
            <h2>Languages & Frameworks</h2>
            <div className="name-img-container">
              <h1 className="name-language">Javscript</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040134/icons/javascript_hewmpj.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">Django</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040356/icons/djangoproject_qiywtm.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">python</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040192/icons/python_pqucdn.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">PHP</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040205/icons/php_beksvj.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">React JS</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040178/icons/react_oa7pul.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">Node JS</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040220/icons/node-js_ao98c2.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">Html</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040244/icons/html5_cosvyf.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">CSS</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040259/icons/css3_bq0bbf.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">MySQL</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656042176/icons/mysql_zuzyxy.png"
                alt="JS"
                className="img-language"
              />
            </div>
          </div>
        </div>
        <div class="box tenDegrees">
          <span></span>
          <div class="content">
            <h2>Libraries & Tools</h2>
            <div className="name-img-container">
              <h1 className="name-language">Express</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656041589/icons/express_mrpdg4.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">p5.js</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656041602/icons/p5_yncjvf.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">jQuery</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656041919/icons/jquery_ccu52h.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">Flutter</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656042127/icons/flutter_rr5zaj.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language blue-color">three.js</h1>
            </div>
          </div>
        </div>
        <div class="box tenDegrees">
          <span></span>
          <div class="content">
            <h2>Skills & Services</h2>
            <div className="name-img-container">
              <h1 className="name-language">github</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656040307/icons/github_uwsqpd.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">firebase</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656042156/icons/firebase_bpibk7.png"
                alt="JS"
                className="img-language"
              />
            </div>
            <div className="name-img-container">
              <h1 className="name-language">Mangodb</h1>
              <img
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1656042143/icons/mongodb_npx6zd.png"
                alt="JS"
                className="img-language"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Home;

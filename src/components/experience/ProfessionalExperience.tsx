import { BsPatchCheckFill } from "react-icons/bs";

const ProfessionalExperience = () => {
  return (
    <section id="professional-experience">
      <h5>What I have Done</h5>
      <h2>Internship Experience</h2>
      <div className="experience__container container grid grid-cols-1 gap-[2rem] max-sm:gap-[1rem]">
        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Data Science Intern</h3>
          <h4 className="text-light">Personifwy | Remote, Bangalore, India</h4>
          <p className="text-light">June 2023 – August 2023</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
            Credit card Fraud Exploratory Data Analysis: Analysed credit-related data to support risk assessment and fraud prevention, using Python for data cleaning,
            visualization, and modelling, contributing to reducing financial risks like loan defaults and credit card fraud.
            </li>
            <li>
              Decision-Making Analytics Implementation: Built machine learning models
              using Python libraries such as Pandas, NumPy, Matplotlib, Scrapy,
              and Scikit-Learn, achieving an 18% increase in model accuracy.
            </li>
          </ul>
        </div>

        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">
          J.P. Morgan Software Engineering Virtual Experience
          </h3>
          <h4 className="text-light">
            Forage | Remote, India
          </h4>
          <p className="text-light">August 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Stock Price Analytic Dashboard: Set up a dev environment, fixed repository issues, and used JPMorgan Chase’s Perspective library to create a live data
              visualization for traders.
            </li>
            <li>
              Software Tools: Use Git for version control and managing code changes. JPMorgan Chase's open-source library for data visualization and use other tools to make website frontend Python, Javascript, Typescript, React, HTML, NodeJS, nvm. 
            </li>
          </ul>
        </div>

        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">KPMG AU Data Analytics Consulting Virtual Internship</h3>
          <h4 className="text-light">Forage | Remote, India</h4>
          <p className="text-light">May 2024 </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Power BI Dashboards: Completed a KPMG AU Data Analytics simulation, assessing data quality, targeting high-value customers, and developing
              visual dashboards to communicate findings. 
            </li>
            <li>
              Presentation Skills: Developed interactive
              Power BI dashboards, enhancing data visualization and
              decision-making resulting in a 20% boost in report efficiency and
              15% improvement in decision-making accuracy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;

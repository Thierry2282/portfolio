import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow, github } from "../assets/icons"; // Assuming you have a GitHub icon in your assets
import styles from '../../src/styles/Projects.css?inline'; // Adjust path as needed

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-700 mt-2 leading-relaxed text-lg'>
        Welcome to my portfolio. Here, you will find a selection of projects I particularly enjoyed building, as they best represent my passion for development. Each one presented an opportunity to learn and push my boundaries, much like my contributions to the open-source world. Feel free to explore the code for these projects; your feedback and ideas for improvement are greatly appreciated.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <div
                className={`${styles.descriptionPoints} mt-2 text-slate-700 text-lg`}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <div className='mt-5 flex items-center gap-4 font-poppins'>
                {/* <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 flex items-center'
                >
                  Live Link
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain ml-1'
                  />
                </Link> */}
                <Link
                  to={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 flex items-center'
                >
                  GitHub
                  <img
                    src={github}
                    alt='github'
                    className='w-4 h-4 object-contain ml-1'
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-300' />

      <CTA />
    </section>
  );
};

export default Projects;

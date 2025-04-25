import React from 'react';

const projects = [
  {
    title: 'Shopify Website',
    description: "Cloned the UI of the Shopify Website using TailwindCSS.",
    imgUrl: "https://thegenielab.com/cdn/shop/articles/Shopify-website-design-Choose-theme.jpg?v=1687681661",
    link: "https://shopifytailwindclone.netlify.app/"
  },
  {
    title: 'Rode Website',
    description: "Cloned the UI of the Rode Website using TailwindCSS.",
    imgUrl: "https://i.ytimg.com/vi/pbtICjfGaFc/maxresdefault.jpg",
    link: "https://rodeui-clone.netlify.app/"
  },
  {
    title: 'Patym Website',
    description: "Cloned the UI of the Patym Website using TailwindCSS.",
    imgUrl: "https://www.figma.com/community/resource/a67553e0-0133-4a5e-ac53-3c0a7b5a8d5f/thumbnail",
    link: "https://paytm-tailwind-css.netlify.app/"
  },
  {
    title: 'Ineuron Website',
    description: "Cloned the UI of the Ineuron Website using TailwindCSS.",
    imgUrl: "https://internship.ineuron.ai/images/internship-portal-thumbnail.png",
    link: "https://inueron-2.netlify.app/"
  },
  {
    title: 'Blog Application',
    description: "Built a Blog appilication using React.js, TailwindCSS, React-Redux, React-hook-forms and Appwrite.",
    imgUrl: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "https://my-react-blogapp.netlify.app/"
  }
];

function ProjectsSection() {
  return (

    <section id="projects" className="py-16 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-1/5 h-1/5 bg-yellow-300 opacity-40 rounded-full transform -translate-x-1/4 z-0"></div>
      <div className="absolute top-0 right-0 w-1/5 h-1/5 bg-pink-300 opacity-40 rounded-full transform translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-yellow-300 opacity-40 rounded-full transform -translate-x-1/4 translate-y-1/4 z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/5 h-1/5 bg-pink-300 opacity-40 rounded-full transform translate-x-1/4 translate-y-1/4 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-1/5 h-1/5 bg-purple-400 opacity-40 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl block mb-8 text-blue-950 font-extrabold font-sans">...My Projects...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:p-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.imgUrl} alt={project.title} className="w-full h-56 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900">{project.title}</h3>
                  <p className='text-gray-600'>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

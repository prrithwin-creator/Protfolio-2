import { color } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/CSS3.png";
import js from "../assets/JavaScript.png";
import react from "../assets/React.png";
import node from "../assets/Node.js.png";
import express from "../assets/Express.png";
import mongodb from "../assets/MongoDB.png";
import tailwindcss from "../assets/TailwindCSS.png";
import vitejs from "../assets/Vite.js.png";


const Skills = ({darkMode}) => {

const skills=[
{name:'HTML',icon:html, level:95,
  color:'from-orange-500 to-amber-500'},
{name:'CSS3',icon:css, level:90,
  color:'from-blue-500 to-sky-500'},
{name:'JavaScript',icon:js, level:85,
  color:'from-yellow-300 to-orange-500'},
{name:'React',icon:react, level:80,
  color:'from-cyan-500 to-blue-500'},
{name:'Node.js',icon:node, level:75,
  color:'from-green-500 to-emerald-500'},
{name:'Express',icon:express, level:70,
  color:'from-gray-500 to-gray-700'},
{name:'MongoDB',icon:mongodb, level:65,
  color:'from-green-500 to-green-700'},
{name:'TailwindCSS',icon:tailwindcss, level:60,
  color:'from-teal-500 to-cyan-500'},
{name:'Vite.js',icon:vitejs, level:80,
  color:'from-purple-500 to-pink-500'},

]


return (
 
<section id='skills'
 style={{
    background: darkMode
    ? 'linear-linear(to bottom, #000000, #111827)'
    : 'linear-linear(to bottom, #f3f4f6, #e5e7eb)',
    borderColor: darkMode ? '#374151' : '#d1d5db'
   }}
 className='py-14 relative overflow-hidden'>
<div className='py-14 relative overflow-hidden'>
<div className='container px-5 py-14 mx-auto'>
<div className='text-center mb-20' data-aos='fade-up'>
<h1
className='sm:text-4xl text-3xl font-bold title-font
mb-4'
style={{
color: darkMode ? 'white' : '#1f2937'
}}>My<span
style={{
background: 'linear-gradient(to right, #f97316, #f59e0b)',
WebkitBackgroundClip: 'text',
backgroundClip: 'text',
color: 'transparent'
}}> Skills
</span></h1>
<p className='text-gray-600 dark:text-gray-300'>have strong skills in HTML, CSS, JavaScript, 
  Node.js, Express.js,React.js, MongoDB, and Tailwind CSS .I can build<br/> 
  responsive, dynamic, and full-stack web applications with modern technologies.</p>
</div>

<div className='flex flex-wrap -m-4'
data-aos='fade-up'
data-aos-delay='200'>
{skills.map((skill, index) => (
<div
key={index}
className='p-4 lg:w-1/4 md:w-1/2 w-full'
data-aos='fade-up'
data-aos-delay={`${300 + index * 100}`}>
<div
style={{
background: darkMode
? 'linear-gradient(to bottom right, #1f2937, #111827)'
: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
borderColor: darkMode ? '#374151' : '#e5e7eb'
}}
className='h-full p-6 rounded-2xl border
hover:border-orange-500/50 transition-all
duration-300 hover :- translate-y-2 group
hover:shadow-[0_0_30px_rgb(255, 165,0,0,0.15)]'
>
<div className="flex items-center mb-6">
<div
style={{
background: darkMode
? 'linear-gradient(to bottom right, #374151, #1f2937)'
: 'linear-gradient(to bottom right, #ffffff, #e5e7eb)',
}}
className='w-16 h-16 rounded-xl p-3 flex
items-center justify-center
group-hover:scale-110 transition-transform
duration-300'>
<img src={skill.icon} alt={skill.name}
className="w-full h-full object-container" />
</div>

  <h3
                            className="text-xl font-bold ml-4"
                            style={{
                                color: darkMode ? 'white' : '#1f2937'
                            }}>
                            
                               {skill.name} 
                            </h3>

                        </div>

                        <div className="mb-2 flex justify-between
                        items-center">
                            <span
                            className="font-medium"
                            style={{
                                color: darkMode ? '#d1d5db' : '#6b7280'
                            }}>
                               Proficiency
                            </span>
                            <span
                            className= 'font-bold inline-block'
                           style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                             color: 'transparent'
                           }} 
                          >
                                  {skill.level}%
                            </span>
                             </div>
                             {/* progress bar */}
                          <div
                            className="w-full rounded-full h-3 overflow-hidden"
                            style={{
                            backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                          }}
                          >
                    <div
                      className={`h-full rounded-full bg-gradient-to-r
                     ${skill.color} transition-all duration-1000 ease-out`}
                     style={{ width: `${skill.level}%` }}
                    />
                 </div>

                {/* bottom line */}
                  <div
                   className={`mt-6 pt-4 border-t
                   ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                   >
                    <div className="h-1 rounded-full opacity-70 
                    group-hover:w-full  transition-all duration-500 w-1/3"
                    style={{
                        background: 'linear-gradient(to right, #f97316, #f59e0b)'
                    }}>

                    </div>
                   </div>

                    </div>

                    </div>
                  ))}
                </div>

            </div>

        </div>

   </section>
  );
};

export default Skills
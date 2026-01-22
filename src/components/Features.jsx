// export default function Features() {
//   const features = [
//     "🥋 Discipline & Confidence",
//     "🎭 Creativity & Expression",
//     "♟ Logical Thinking & Focus",
//     "🏆 Competitions & Recognition"
//   ];

//   return (
//     <section className="features">
//       <h2>Why Choose Move N Leap?</h2>
//       <div className="feature-grid">
//         {features.map((item) => (
//           <div className="feature-card" key={item}>
//             {item}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// 2nd

// import { Users, Trophy, Calendar, Award } from 'lucide-react';

// export default function Features() {
//   const features = [
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Expert Instructors",
//       description: "Learn from certified professionals passionate about nurturing young talent"
//     },
//     {
//       icon: <Trophy className="w-8 h-8" />,
//       title: "Competitions & Events",
//       description: "Regular contests to showcase skills and build confidence on stage"
//     },
//     {
//       icon: <Calendar className="w-8 h-8" />,
//       title: "Flexible Schedule",
//       description: "After-school programs designed to fit your family's busy lifestyle"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Skill Development",
//       description: "Build discipline, creativity, critical thinking, and teamwork"
//     }
//   ];

//   return (
//     <section className="py-20 px-6 md:px-12 relative">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
//           Why Choose <span className="text-purple-600">Move N Leap?</span>
//         </h2>
//         <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
//           We create a nurturing environment where every child can explore their passions and reach their full potential
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-400"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Users, Trophy, Calendar, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals passionate about nurturing young talent",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80" // Teacher with students
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitions & Events",
      description: "Regular contests to showcase skills and build confidence on stage",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80" // Trophy/competition
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "After-school programs designed to fit your family's busy lifestyle",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80" // Calendar/planning
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Skill Development",
      description: "Build discipline, creativity, critical thinking, and teamwork",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" // Kids learning together
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Why Choose <span className="text-purple-600">Move N Leap?</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          We create a nurturing environment where every child can explore their passions and reach their full potential
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-400 h-80"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="p-8 relative z-10 h-full flex flex-col justify-end">
                <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-opacity-30 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white drop-shadow-lg">{feature.title}</h3>
                <p className="text-white text-sm drop-shadow-md opacity-90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
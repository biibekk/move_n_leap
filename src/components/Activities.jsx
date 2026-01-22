// export default function Activities() {
//   const activities = ["Taekwondo", "Dance", "Drama", "Chess"];

//   return (
//     <section className="activities">
//       <h2>Our Activities</h2>
//       <div className="activity-grid">
//         {activities.map((activity) => (
//           <div className="activity-card" key={activity}>
//             {activity}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// 2nd

// import { Swords, Footprints, Drama, Crown } from 'lucide-react';

// export default function Activities() {
//   const activities = [
//     { name: "Taekwondo", icon: <Swords className="w-12 h-12" />, color: "from-red-500 to-orange-500", description: "Master martial arts & discipline" },
//     { name: "Dance", icon: <Footprints className="w-12 h-12" />, color: "from-pink-500 to-purple-500", description: "Express yourself through movement" },
//     { name: "Drama", icon: <Drama className="w-12 h-12" />, color: "from-blue-500 to-indigo-500", description: "Build confidence on stage" },
//     { name: "Chess", icon: <Crown className="w-12 h-12" />, color: "from-yellow-500 to-amber-600", description: "Sharpen strategic thinking" }
//   ];

//   return (
//     <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
//           Explore Our <span className="text-purple-600">Activities</span>
//         </h2>
//         <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
//           From physical fitness to creative expression and mental agility - we offer programs that cater to every interest
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {activities.map((activity, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
//               <div className="p-8 relative z-10">
//                 <div className={`w-20 h-20 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
//                   {activity.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-center mb-3 text-gray-800">{activity.name}</h3>
//                 <p className="text-center text-gray-600">{activity.description}</p>
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-lg text-gray-700 mb-4">...and many more exciting programs!</p>
//           <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//             View All Activities
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Swords, Footprints, Drama, Crown } from 'lucide-react';

export default function Activities() {
  const activities = [
    { 
      name: "Taekwondo", 
      icon: <Swords className="w-12 h-12" />, 
      color: "from-red-500 to-orange-500", 
      description: "Master martial arts & discipline",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80" // Taekwondo image
    },
    { 
      name: "Dance", 
      icon: <Footprints className="w-12 h-12" />, 
      color: "from-pink-500 to-purple-500", 
      description: "Express yourself through movement",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80" // Dance image
    },
    { 
      name: "Drama", 
      icon: <Drama className="w-12 h-12" />, 
      color: "from-blue-500 to-indigo-500", 
      description: "Build confidence on stage",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80" // Drama/theater image
    },
    { 
      name: "Chess", 
      icon: <Crown className="w-12 h-12" />, 
      color: "from-yellow-500 to-amber-600", 
      description: "Sharpen strategic thinking",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80" // Chess image
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Explore Our <span className="text-purple-600">Activities</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          From physical fitness to creative expression and mental agility - we offer programs that cater to every interest
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer h-80"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${activity.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="p-8 relative z-10 h-full flex flex-col justify-end">
                <div className={`w-20 h-20 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-3 text-white drop-shadow-lg">{activity.name}</h3>
                <p className="text-center text-white drop-shadow-md font-medium">{activity.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">...and many more exciting programs!</p>
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Activities
          </button>
        </div>
      </div>
    </section>
  );
}
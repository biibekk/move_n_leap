import Hero from "./components/Hero";
import Features from "./components/Features";
import Activities from "./components/Activities";
import CTA from "./components/CTA";

export default function App() {
  return (
    <>
      <Hero />
      <Features />
      <Activities />
      <CTA />
    </>
  );
}

// 2nd - without components

// import { useState, useEffect } from 'react';
// import { Sparkles, Trophy, Users, Calendar, Award, Swords, Drama, Crown, Footprints } from 'lucide-react';

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
//       <Hero />
//       <Features />
//       <Activities />
//       <CTA />
//     </div>
//   );
// }

// function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <header className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
//       </div>

//       {/* Navbar */}
//       <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6">
//         <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
//           <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
//             <Sparkles className="w-8 h-8 text-yellow-300" />
//             Move N Leap
//           </h1>
//         </div>
//         <button className={`px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
//           Free Trial
//         </button>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
//         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
//             Where Kids Learn,
//             <br />
//             <span className="text-yellow-300">Grow & Shine</span>
//             <Sparkles className="inline w-12 h-12 ml-2 text-yellow-300 animate-bounce" />
//           </h2>
//           <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto">
//             An after-school academy offering Taekwondo, Dance, Drama, Chess & more. Build confidence, make friends, and discover new talents!
//           </p>
//           <button className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse">
//             Book a Free Trial Class →
//           </button>
//         </div>

//         {/* Floating elements */}
//         <div className="absolute bottom-10 left-10 animate-bounce delay-500">
//           <Trophy className="w-16 h-16 text-yellow-300 opacity-50" />
//         </div>
//         <div className="absolute top-32 right-20 animate-bounce delay-1000">
//           <Award className="w-12 h-12 text-pink-300 opacity-50" />
//         </div>
//       </div>
//     </header>
//   );
// }

// function Features() {
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

// function Activities() {
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

// function CTA() {
//   return (
//     <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

//       <div className="max-w-4xl mx-auto text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
//           Ready to Start the Journey?
//         </h2>
//         <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto">
//           Join hundreds of happy families and give your child the gift of learning, growth, and endless fun!
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//           <button className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 shadow-2xl">
//             Book Your Free Trial
//           </button>
//           <button className="px-10 py-5 bg-white bg-opacity-20 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border-2 border-white">
//             Learn More
//           </button>
//         </div>

//         <div className="flex flex-wrap justify-center gap-8 text-white">
//           <div className="flex items-center gap-2">
//             <Trophy className="w-6 h-6 text-yellow-300" />
//             <span className="font-semibold">Award-Winning Programs</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Users className="w-6 h-6 text-yellow-300" />
//             <span className="font-semibold">500+ Happy Students</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Award className="w-6 h-6 text-yellow-300" />
//             <span className="font-semibold">Certified Instructors</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
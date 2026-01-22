// export default function Hero() {
//   return (
//     <header className="hero">
//       <nav className="navbar">
//         <h1 className="logo">Move N Leap</h1>
//         <button className="btn">Free Trial</button>
//       </nav>

//       <div className="hero-content">
//         <h2>Where Kids Learn, Grow & Shine ✨</h2>
//         <p>
//           An after-school academy offering Taekwondo, Dance, Drama, Chess & more.
//         </p>
//         <button className="btn primary">Book a Free Trial Class</button>
//       </div>
//     </header>
//   );
// }



// 2nd 

// import { useState, useEffect } from 'react';
// import { Sparkles, Trophy, Award } from 'lucide-react';

// export default function Hero() {
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


// 3rd

// import { useState, useEffect } from 'react';
// import { Sparkles, Trophy, Award } from 'lucide-react';

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <header className="relative min-h-screen overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src="https://cdn.coverr.co/videos/coverr-children-playing-in-a-classroom-5336/1080p.mp4" type="video/mp4" />
//           {/* Fallback to image if video doesn't load */}
//         </video>
        
//         {/* Fallback Background Image (shown if video fails) */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80')" }}
//         ></div>
//       </div>

//       {/* Dark Gradient Overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-purple-900/85 to-indigo-900/90"></div>

//       {/* Animated accent elements */}
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
//           <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
//             Where Kids Learn,
//             <br />
//             <span className="text-yellow-300">Grow & Shine</span>
//             <Sparkles className="inline w-12 h-12 ml-2 text-yellow-300 animate-bounce" />
//           </h2>
//           <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto drop-shadow-lg">
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


// 4th

import { useState, useEffect } from 'react';
import { Sparkles, Trophy, Award } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-children-playing-in-a-classroom-5336/1080p.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
        </video>
        
        {/* Fallback Background Image (shown if video fails) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80')" }}
        ></div>
      </div>

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-purple-900/85 to-indigo-900/90"></div>

      {/* Animated accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-center items-center px-6 md:px-12 py-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-300" />
            Move N Leap
          </h1>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            Where Kids Learn,
            <br />
            <span className="text-yellow-300">Grow & Shine</span>
            <Sparkles className="inline w-12 h-12 ml-2 text-yellow-300 animate-bounce" />
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto drop-shadow-lg">
            An after-school academy offering Taekwondo, Dance, Drama, Chess & more. Build confidence, make friends, and discover new talents!
          </p>
           <button className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse">
            Book a Free Trial Class →
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 animate-bounce delay-500">
          <Trophy className="w-16 h-16 text-yellow-300 opacity-50" />
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-1000">
          <Award className="w-12 h-12 text-pink-300 opacity-50" />
        </div>
      </div>
    </header>
  );
}
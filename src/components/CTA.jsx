// export default function CTA() {
//   return (
//     <section className="cta">
//       <h2>Give Your Child the Best After-School Experience</h2>
//       <p>Contact us today to book a free trial class.</p>
//       <button className="btn primary">Contact Now</button>
//     </section>
//   );
// }

import { Trophy, Users, Award } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Ready to Start the Journey?
        </h2>
        <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of happy families and give your child the gift of learning, growth, and endless fun!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 shadow-2xl">
            Book Your Free Trial
          </button>
          <button className="px-10 py-5 bg-white bg-opacity-20 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border-2 border-white">
            Learn More
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-300" />
            <span className="font-semibold">Award-Winning Programs</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-yellow-300" />
            <span className="font-semibold">500+ Happy Students</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-300" />
            <span className="font-semibold">Certified Instructors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
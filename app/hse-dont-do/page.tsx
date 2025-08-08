import Image from "next/image";

export default function HSEDontDoPage() {
  const dontDoItems = [
    {
      number: "1",
      text: "Don't act until safety Risk is clearly assessed",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      number: "2", 
      text: "Don't act until safety Controls are well-prepared",
      color: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      number: "3",
      text: "Don't act until safety Tools are ready for the job", 
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      number: "4",
      text: "Don't act until safety Condition is secured",
      color: "bg-orange-600 hover:bg-orange-700"
    },
    {
      number: "5",
      text: "Don't act until safety Skills is well-obtained",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                HSE DON'TS UNTIL DO'S
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                5 Don'ts until 5 Dos & HSE Observation Program
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-0">
        {/* Introduction Tile */}
        <div className="bg-slate-800 text-white p-8 mb-6 hover:bg-slate-700 transition-colors duration-200 cursor-pointer group">
          <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-blue-400 mr-4"></div>
            <h2 className="text-2xl font-light tracking-wide">Program Overview</h2>
          </div>
          <p className="text-slate-300 leading-relaxed font-light text-lg">
            To improve HSE awareness in HCML, we implement:
          </p>
          <div className="mt-4 bg-blue-600 p-4 rounded">
            <h3 className="text-white font-medium text-xl text-center">
              5 Don'ts until 5 Dos & HSE Observation Program
            </h3>
          </div>
        </div>

        {/* HSE Image Tile */}
        <div className="grid grid-cols-1  gap-6 mb-8">
          {/* <div className="bg-slate-700 text-white p-8 hover:bg-slate-600 transition-colors duration-200 cursor-pointer group lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-yellow-400 mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">HSE Awareness Program</h2>
            </div>
            <div className="relative h-48 mb-4 rounded overflow-hidden">
              <Image
                src="/images/hse-dont-do/hcml-HSE-01-EN-DontDo.png"
                alt="HSE Don'ts until Do's Program"
                fill
                className="object-contain bg-white"
              />
            </div>
            <p className="text-slate-300 font-light">
              Our comprehensive HSE awareness program focusing on preventive safety measures.
            </p>
          </div> */}

          <div className="bg-green-600 text-white p-8 hover:bg-green-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Safety First</h2>
            </div>
            <p className="text-green-100 leading-relaxed font-light mb-4">
              Every action requires proper safety assessment and preparation before execution.
            </p>
            <div className="text-center">
              <div className="text-4xl font-light text-green-200 mb-2">5</div>
              <div className="text-green-300 font-light text-sm tracking-wide">CRITICAL STEPS</div>
            </div>
          </div>
        </div>

        {/* Don'ts until Do's Items */}
        <div className="space-y-4 mb-8">
          {dontDoItems.map((item, index) => (
            <div
              key={index}
              className={` p-6 transition-all ${item.color} duration-300 cursor-pointer group transform hover:scale-[1.02] hover:shadow-lg rounded-lg`}
            >
              <div className="flex text-white items-center">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mr-6 border-2 border-white border-opacity-50">
                  <span className="text-2xl font-bold ">{item.number}</span>
                </div>
                
                {/* Arrow Shape Background */}
                <div className="flex-grow relative">
                  <div className="bg-white/20 rounded-r-lg p-4 pr-8 relative backdrop-blur-sm border border-white border-opacity-30">
                    {/* Arrow Point */}
                    <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-[20px] border-l-white border-l-opacity-40 border-y-[24px] border-y-transparent"></div>
                    <p className=" font-semibold text-lg leading-relaxed pr-4">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-orange-500 text-white p-8 hover:bg-orange-600 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Risk Assessment</h2>
            </div>
            <p className="text-orange-100 leading-relaxed font-light">
              Comprehensive evaluation of potential hazards and safety risks before any operational activity.
            </p>
          </div>

          <div className="bg-purple-600 text-white p-8 hover:bg-purple-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Safety Controls</h2>
            </div>
            <p className="text-purple-100 leading-relaxed font-light">
              Implementation of proper safety measures and control systems to mitigate identified risks.
            </p>
          </div>

          <div className="bg-teal-600 text-white p-8 hover:bg-teal-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Proper Tools</h2>
            </div>
            <p className="text-teal-100 leading-relaxed font-light">
              Ensuring all necessary safety equipment and tools are available and properly maintained.
            </p>
          </div>
        </div>

        {/* Bottom Action Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-600 text-white p-8 hover:bg-red-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Secure Conditions</h2>
            </div>
            <p className="text-red-100 leading-relaxed font-light mb-4">
              Verification that all safety conditions are met and the work environment is secure for operations.
            </p>
            <div className="bg-red-700 p-4 rounded">
              <p className="text-white font-medium text-center">Environment Secured</p>
            </div>
          </div>

          <div className="bg-indigo-600 text-white p-8 hover:bg-indigo-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Safety Skills</h2>
            </div>
            <p className="text-indigo-100 leading-relaxed font-light mb-4">
              Ensuring personnel have the necessary training, competency, and skills to perform tasks safely.
            </p>
            <div className="bg-indigo-700 p-4 rounded">
              <p className="text-white font-medium text-center">Competency Verified</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-slate-900 text-white p-8 text-center">
          <h3 className="text-3xl font-light tracking-wide mb-4">
            <span className="text-blue-400 font-normal">Think Before You Act</span> - Safety First
          </h3>
          <p className="text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            The 5 Don'ts until 5 Dos program ensures that every action is preceded by proper safety assessment, preparation, and verification.
          </p>
        </div>
      </div>
    </div>
  );
}

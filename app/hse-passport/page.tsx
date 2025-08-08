import Image from "next/image";

export default function HSEPassportPage() {
  const passportFeatures = [
    {
      title: "Personal Information",
      description: "Complete identification and contact details",
      color: "bg-blue-600 hover:bg-blue-700",
      icon: "👤"
    },
    {
      title: "Training Records",
      description: "Comprehensive HSE training history and certifications",
      color: "bg-green-600 hover:bg-green-700",
      icon: "📚"
    },
    {
      title: "Medical Fitness",
      description: "Health clearance and medical examination status",
      color: "bg-purple-600 hover:bg-purple-700",
      icon: "🏥"
    },
    {
      title: "Competency Assessment",
      description: "Skills evaluation and competency verification",
      color: "bg-orange-600 hover:bg-orange-700",
      icon: "✅"
    },
    {
      title: "Authorization Level",
      description: "Access permissions and work authorization scope",
      color: "bg-red-600 hover:bg-red-700",
      icon: "🔐"
    },
    {
      title: "Emergency Contact",
      description: "Critical emergency contact information",
      color: "bg-teal-600 hover:bg-teal-700",
      icon: "📞"
    }
  ];

  const requirements = [
    "Valid HSE Training Certificate",
    "Medical Fitness Certificate",
    "Competency Assessment Pass",
    "Emergency Response Training",
    "Site-Specific Orientation"
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                HSE PASSPORT
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Health, Safety & Environment Identification System
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
            <h2 className="text-2xl font-light tracking-wide">HSE Passport System</h2>
          </div>
          <p className="text-slate-300 leading-relaxed font-light text-lg mb-4">
            The HSE Passport is a comprehensive identification and verification system that ensures all personnel meet the required health, safety, and environmental standards before accessing work sites.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="text-white font-medium mb-2">Purpose</h3>
              <p className="text-slate-300 text-sm font-light">Standardized HSE verification system</p>
            </div>
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="text-white font-medium mb-2">Scope</h3>
              <p className="text-slate-300 text-sm font-light">All personnel and contractors</p>
            </div>
          </div>
        </div>

        {/* HSE Passport Image Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-700 text-white p-8 hover:bg-slate-600 transition-colors duration-200 cursor-pointer group lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-yellow-400 mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">HSE Passport Template</h2>
            </div>
            <div className="relative h-64 mb-4 rounded overflow-hidden">
              <Image
                src="/images/hse-passport/hcml-HSE-01-EN-Pasport.png"
                alt="HSE Passport Template"
                fill
                className="object-contain bg-white"
              />
            </div>
            <p className="text-slate-300 font-light">
              Official HSE passport format containing all required identification and verification elements.
            </p>
          </div>

          <div className="bg-indigo-600 text-white p-8 hover:bg-indigo-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Verification</h2>
            </div>
            <p className="text-indigo-100 leading-relaxed font-light mb-4">
              Each passport undergoes rigorous verification to ensure compliance with HSE standards.
            </p>
            <div className="text-center">
              <div className="text-4xl font-light text-indigo-200 mb-2">✓</div>
              <div className="text-indigo-300 font-light text-sm tracking-wide">VERIFIED</div>
            </div>
          </div>
        </div>

        {/* Passport Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {passportFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} text-white p-8 transition-colors duration-200 cursor-pointer group hover:scale-105 transform transition-transform`}
            >
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-white mr-4"></div>
                <h2 className="text-xl font-light tracking-wide">{feature.title}</h2>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{feature.icon}</div>
              </div>
              <p className="text-white text-opacity-90 leading-relaxed font-light text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="bg-slate-800 text-white p-8 mb-8 hover:bg-slate-700 transition-colors duration-200">
          <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-red-400 mr-4"></div>
            <h2 className="text-2xl font-light tracking-wide">Passport Requirements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-4 text-white">Mandatory Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="font-light">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-700 p-6 rounded">
              <h3 className="text-xl font-medium mb-4 text-white">Validity Period</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300 font-light">Training Certificates</span>
                  <span className="text-white font-medium">2 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 font-light">Medical Fitness</span>
                  <span className="text-white font-medium">1 Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300 font-light">Site Authorization</span>
                  <span className="text-white font-medium">As Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-600 text-white p-6 hover:bg-blue-700 transition-colors duration-200 cursor-pointer group text-center">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-lg font-medium mb-2">Step 1</h3>
            <p className="text-blue-100 font-light text-sm">Application Submission</p>
          </div>
          
          <div className="bg-green-600 text-white p-6 hover:bg-green-700 transition-colors duration-200 cursor-pointer group text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-lg font-medium mb-2">Step 2</h3>
            <p className="text-green-100 font-light text-sm">Document Verification</p>
          </div>
          
          <div className="bg-orange-600 text-white p-6 hover:bg-orange-700 transition-colors duration-200 cursor-pointer group text-center">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-lg font-medium mb-2">Step 3</h3>
            <p className="text-orange-100 font-light text-sm">Approval & Issuance</p>
          </div>
          
          <div className="bg-purple-600 text-white p-6 hover:bg-purple-700 transition-colors duration-200 cursor-pointer group text-center">
            <div className="text-3xl mb-3">🎫</div>
            <h3 className="text-lg font-medium mb-2">Step 4</h3>
            <p className="text-purple-100 font-light text-sm">Passport Activation</p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-600 text-white p-8 hover:bg-yellow-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Important Notes</h2>
            </div>
            <ul className="space-y-3 text-yellow-100">
              <li className="flex items-start">
                <span className="text-yellow-200 mr-2">•</span>
                <span className="font-light">Passport must be carried at all times on site</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-200 mr-2">•</span>
                <span className="font-light">Regular renewal required before expiration</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-200 mr-2">•</span>
                <span className="font-light">Report any changes in medical condition</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-600 text-white p-8 hover:bg-red-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Compliance</h2>
            </div>
            <p className="text-red-100 leading-relaxed font-light mb-4">
              All personnel must maintain valid HSE passport status to ensure workplace safety and regulatory compliance.
            </p>
            <div className="bg-red-700 p-4 rounded">
              <p className="text-white font-medium text-center">Mandatory Compliance</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-slate-900 text-white p-8 text-center">
          <h3 className="text-3xl font-light tracking-wide mb-4">
            <span className="text-blue-400 font-normal">HSE Passport</span> - Your Safety Identity
          </h3>
          <p className="text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            The HSE Passport system ensures that every individual on our sites has the proper training, medical clearance, and authorization to work safely and effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function HSEPolicyPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                HSE POLICY
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Health, Safety, Environment Management Commitment
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto p-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Company Overview Tile - Spans 2 columns */}
          <div className="bg-blue-600 text-white p-8 hover:bg-blue-700 transition-colors duration-200 cursor-pointer group md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Company Overview</h2>
            </div>
            <p className="text-blue-100 leading-relaxed font-light mb-4">
              Husky-CNOOC Madura Limited operating in Indonesia, performs its managerial and supporting activities in Jakarta, and conducts offshore oil and gas exploration and exploitation in the Contract Area of Madura Strait, East Java.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Operations Base</h3>
                <p className="text-blue-100 text-sm font-light">Jakarta - Management & Support</p>
              </div>
              <div className="bg-blue-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Contract Area</h3>
                <p className="text-blue-100 text-sm font-light">Madura Strait, East Java</p>
              </div>
            </div>
          </div>

          {/* Policy Image Tile */}
          <div className="bg-slate-800 text-white p-8 hover:bg-slate-900 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">HSE Policy</h2>
            </div>
            <div className="relative h-32 mb-4 rounded overflow-hidden">
              <Image
                src="/images/hse-policy/policy.jpg"
                alt="HSE Policy Implementation"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-slate-300 font-light text-sm">
              Our comprehensive HSE policy framework guides all operational activities.
            </p>
          </div>

          {/* Core Commitment Tile */}
          <div className="bg-green-600 text-white p-8 hover:bg-green-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Our Commitment</h2>
            </div>
            <p className="text-green-100 leading-relaxed font-light mb-4">
              We execute activities comply with the prevailing HSE laws and regulations. Pollution prevention, energy conservation and protection of health and safety will have equal priority.
            </p>
            <div className="text-center">
              <div className="text-3xl font-light text-green-200 mb-2">Equal</div>
              <div className="text-green-300 font-light text-sm tracking-wide">PRIORITY</div>
            </div>
          </div>

          {/* HSE Management System Tile */}
          <div className="bg-purple-600 text-white p-8 hover:bg-purple-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">HSE Management System</h2>
            </div>
            <p className="text-purple-100 leading-relaxed font-light mb-4">
              Improving our HSE management system and carrying our "continual improvement" plan.
            </p>
            <div className="space-y-3">
              <div className="bg-purple-700 p-3 rounded">
                <p className="text-purple-100 text-sm font-light">System Enhancement</p>
              </div>
              <div className="bg-purple-700 p-3 rounded">
                <p className="text-purple-100 text-sm font-light">Continual Improvement</p>
              </div>
            </div>
          </div>

          {/* Training & Awareness Tile */}
          <div className="bg-orange-500 text-white p-8 hover:bg-orange-600 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Training & Awareness</h2>
            </div>
            <p className="text-orange-100 leading-relaxed font-light">
              Internally promoting our HSE management policy and providing HSE management training to all employees to improve their HSE management consciousness and technical skills.
            </p>
          </div>

          {/* Safe Workplace Tile */}
          <div className="bg-indigo-600 text-white p-8 hover:bg-indigo-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Safe Workplace</h2>
            </div>
            <p className="text-indigo-100 leading-relaxed font-light mb-4">
              Providing our employees with a safe workplace, including reliable equipment and facilities and personal protection equal to or exceeding government standards.
            </p>
            <div className="bg-indigo-700 p-4 rounded">
              <p className="text-white font-medium text-center">Above Government Standards</p>
            </div>
          </div>

          {/* Risk Management Tile - Spans 2 columns */}
          <div className="bg-red-600 text-white p-8 hover:bg-red-700 transition-colors duration-200 cursor-pointer group md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Risk Management & Safety Evaluation</h2>
            </div>
            <p className="text-red-100 leading-relaxed font-light mb-6">
              Conducting risk identification, hazard analysis and safety evaluation on each phase of operations from design to construction to operation, and integrating the results to any modification plans.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Risk Identification</h3>
                <p className="text-red-100 text-sm font-light">Comprehensive hazard analysis</p>
              </div>
              <div className="bg-red-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Safety Evaluation</h3>
                <p className="text-red-100 text-sm font-light">All operational phases covered</p>
              </div>
              <div className="bg-red-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Integration</h3>
                <p className="text-red-100 text-sm font-light">Results inform modifications</p>
              </div>
            </div>
          </div>

          {/* Equipment Inspection Tile */}
          <div className="bg-teal-600 text-white p-8 hover:bg-teal-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Equipment Inspection</h2>
            </div>
            <p className="text-teal-100 leading-relaxed font-light mb-4">
              Conducting HSE management inspection on newly built, upgraded and modified equipments. Periodically inspect and evaluate facilities and equipments in use.
            </p>
            <div className="space-y-3">
              <div className="bg-teal-700 p-3 rounded">
                <p className="text-teal-100 text-sm font-light">New Equipment Inspection</p>
              </div>
              <div className="bg-teal-700 p-3 rounded">
                <p className="text-teal-100 text-sm font-light">Periodic Evaluation</p>
              </div>
            </div>
          </div>

          {/* Emergency Preparedness Tile */}
          <div className="bg-cyan-600 text-white p-8 hover:bg-cyan-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Emergency Preparedness</h2>
            </div>
            <p className="text-cyan-100 leading-relaxed font-light mb-4">
              Performing timely revisions to the emergency plan, establishing emergency supplies and equipment, and periodically organizing emergency exercises.
            </p>
            <div className="text-center">
              <div className="text-3xl font-light text-cyan-200 mb-2">Minimize</div>
              <div className="text-cyan-300 font-light text-sm tracking-wide">INJURIES & POLLUTION</div>
            </div>
          </div>

          {/* Contractor Management Tile */}
          <div className="bg-emerald-600 text-white p-8 hover:bg-emerald-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Contractor Management</h2>
            </div>
            <p className="text-emerald-100 leading-relaxed font-light">
              Offering HSE information to contractors and requesting them to establish HSE management system comply with industrial standard and provide ongoing training to their employees.
            </p>
          </div>

          {/* Community Relations Tile */}
          <div className="bg-violet-600 text-white p-8 hover:bg-violet-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Community Relations</h2>
            </div>
            <p className="text-violet-100 leading-relaxed font-light mb-4">
              Maintaining friendly relationships with government agencies, local communities and the public, and cooperating closely with them on HSE management.
            </p>
            <div className="bg-violet-700 p-4 rounded">
              <h3 className="text-white font-medium text-center">Positive Environment</h3>
            </div>
          </div>

          {/* Additional Commitments Tile - Spans full width */}
          <div className="bg-slate-700 text-white p-8 hover:bg-slate-800 transition-colors duration-200 cursor-pointer group col-span-full">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Additional Commitments</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded">
                <h3 className="text-white font-medium mb-2">Employee Participation</h3>
                <p className="text-slate-300 text-sm font-light">Encouraging employees to participate in HSE management activities and scientific research.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded">
                <h3 className="text-white font-medium mb-2">Clean Work Environment</h3>
                <p className="text-slate-300 text-sm font-light">Keeping work sites clean to create a good environment for the health and safety of our employees.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded">
                <h3 className="text-white font-medium mb-2">Clean Energy Production</h3>
                <p className="text-slate-300 text-sm font-light">Production of clean energy and protection of the environment will be our overriding goal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-slate-900 text-white p-8 text-center">
          <h3 className="text-3xl font-light tracking-wide mb-4">
            Committed to <span className="text-blue-400 font-normal">HSE Excellence</span>
          </h3>
          <p className="text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Through systematic management and continuous improvement, we ensure the highest standards of health, safety, and environmental protection in all our operations.
          </p>
        </div>
      </div>
    </div>
  )
} 
import { Metadata } from 'next'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'HSE Philosophy | Husky-CNOOC Madura Limited',
  description: 'Our commitment to Health, Safety, and Environmental excellence through comprehensive philosophy and systematic management.',
}

const philosophyPoints = [
  {
    title: 'Corporate Culture & Core Competitiveness',
    description: 'We will improve our HSE management by benchmarking our operations with those of international oil companies. We value our HSE management system as a key component of our culture and competitive strength. HSE performance is one of the foundations for the company\'s growth and development.',
    icon: '🏢'
  },
  {
    title: 'HSE Awareness',
    description: 'We will strive to proactively pursue HSE excellence rather than reacting to the prevailing laws, regulations, industrial standards, and the applicable procedures.',
    icon: '🎯'
  },
  {
    title: 'Continual Improvement',
    description: 'HSE management is not a short-term project. It requires persistence and continual improvement. We believe, "We can always do it better".',
    icon: '📈'
  },
  {
    title: 'Value of Employees',
    description: 'Employees are our most valuable resources and assets.',
    icon: '👥'
  },
  {
    title: 'Assignment of Responsibility',
    description: 'We are committed to integrate HSE management into every operation and position by setting objectives and its implementation. The ultimate responsibility for HSE management lies with the management.',
    icon: '🎭'
  },
  {
    title: 'Systematic Management & Risk Control',
    description: 'We shall develop system for routine management of HSE, promote the "5 Do Not Safety Rules", and manage risk to an acceptable level.',
    icon: '⚙️'
  },
  {
    title: 'Management of Contractors',
    description: 'Management and supervision of contractors are an important part of HSE management process to achieve Win-Win cooperation.',
    icon: '🤝'
  },
  {
    title: 'Environmental Protection',
    description: 'Endeavor to use clean and harmless materials, energy, and protect environment and natural resources.',
    icon: '🌱'
  },
  {
    title: 'Internal Monitoring',
    description: 'Internal Audit is an important way to evaluate and supervise HSE management.',
    icon: '🔍'
  },
  {
    title: 'Reflection of Quality',
    description: 'HSE management and its performance are a reflection of our comprehensive overall quality.',
    icon: '💎'
  },
  {
    title: 'Economics & Social Responsibility',
    description: 'HSE management is not only a matter of economics return, but also our commitment to social responsibility.',
    icon: '🌍'
  }
]

export default function HSEPhilosophyPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                HSE PHILOSOPHY
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Health, Safety, Environment & Sustainable Development
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto p-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Introduction Tile - Spans 2 columns */}
          <div className="bg-blue-600 text-white p-8 hover:bg-blue-700 transition-colors duration-200 cursor-pointer group md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Our Commitment</h2>
            </div>
            <p className="text-blue-100 leading-relaxed font-light mb-4">
              The protection of health, safety, conservation of the environment, and sustainable development apart from being disciplined subject to legislation, constitutes an asset and an added value within our organization, both as a philosophy and as awareness that they are essential and integral part of our products and services and hence in the achievement of company objectives.
            </p>
            <p className="text-blue-100 leading-relaxed font-light">
              Therefore, <span className="text-white font-medium">Husky-CNOOC Madura Limited</span> sets its Health, Safety and Environmental Philosophy as follows:
            </p>
          </div>

          {/* Core Values Tile */}
          <div className="bg-green-600 text-white p-8 hover:bg-green-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Core Values</h2>
            </div>
            <div className="space-y-4 text-green-100 font-light">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">Excellence in HSE Performance</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">Continuous Improvement</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">Employee Safety First</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">Environmental Stewardship</p>
              </div>
            </div>
          </div>

          {/* Corporate Culture Tile */}
          <div className="bg-purple-600 text-white p-8 hover:bg-purple-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Corporate Culture & Core Competitiveness</h2>
            </div>
            <p className="text-purple-100 leading-relaxed font-light">
              We will improve our HSE management by benchmarking our operations with those of international oil companies. We value our HSE management system as a key component of our culture and competitive strength. HSE performance is one of the foundations for the company's growth and development.
            </p>
          </div>

          {/* HSE Awareness Tile */}
          <div className="bg-orange-500 text-white p-8 hover:bg-orange-600 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">HSE Awareness</h2>
            </div>
            <p className="text-orange-100 leading-relaxed font-light">
              We will strive to proactively pursue HSE excellence rather than reacting to the prevailing laws, regulations, industrial standards, and the applicable procedures.
            </p>
            <div className="mt-4 text-center">
              <div className="text-3xl font-light text-orange-200 mb-2">Excellence</div>
              <div className="text-orange-300 font-light text-sm tracking-wide">PROACTIVE APPROACH</div>
            </div>
          </div>

          {/* Continual Improvement Tile */}
          <div className="bg-indigo-600 text-white p-8 hover:bg-indigo-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Continual Improvement</h2>
            </div>
            <p className="text-indigo-100 leading-relaxed font-light mb-4">
              HSE management is not a short-term project. It requires persistence and continual improvement.
            </p>
            <div className="bg-indigo-700 p-4 rounded">
              <p className="text-white font-medium text-center">"We can always do it better"</p>
            </div>
          </div>

          {/* Value of Employees & Responsibility Tile */}
          <div className="bg-teal-600 text-white p-8 hover:bg-teal-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Value of Employees</h2>
            </div>
            <p className="text-teal-100 leading-relaxed font-light mb-4">
              Employees are our most valuable resources and assets.
            </p>
            <div className="space-y-3">
              <div className="bg-teal-700 p-3 rounded">
                <p className="text-teal-100 text-sm font-light">Assignment of responsibility</p>
              </div>
              <div className="bg-teal-700 p-3 rounded">
                <p className="text-teal-100 text-sm font-light">Management accountability</p>
              </div>
            </div>
          </div>

          {/* Management Systems Tile - Spans 2 columns */}
          <div className="bg-red-600 text-white p-8 hover:bg-red-700 transition-colors duration-200 cursor-pointer group md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Systematic Management & Risk Control</h2>
            </div>
            <p className="text-red-100 leading-relaxed font-light mb-6">
              We shall develop system for routine management of HSE, promote the "5 Do Not Safety Rules", and manage risk to an acceptable level.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Risk Management</h3>
                <p className="text-red-100 text-sm font-light">Systematic risk assessment and control</p>
              </div>
              <div className="bg-red-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Safety Rules</h3>
                <p className="text-red-100 text-sm font-light">5 Do Not Safety Rules implementation</p>
              </div>
              <div className="bg-red-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Routine Management</h3>
                <p className="text-red-100 text-sm font-light">Systematic HSE management processes</p>
              </div>
            </div>
          </div>

          {/* Contractors Management Tile */}
          <div className="bg-cyan-600 text-white p-8 hover:bg-cyan-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Management of Contractors</h2>
            </div>
            <p className="text-cyan-100 leading-relaxed font-light mb-4">
              Management and supervision of contractors are an important part of HSE management process to achieve Win-Win cooperation.
            </p>
            <div className="text-center">
              <div className="text-3xl font-light text-cyan-200 mb-2">Win-Win</div>
              <div className="text-cyan-300 font-light text-sm tracking-wide">COOPERATION</div>
            </div>
          </div>

          {/* Environmental Protection Tile */}
          <div className="bg-emerald-600 text-white p-8 hover:bg-emerald-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Environmental Protection</h2>
            </div>
            <div className="relative h-32 mb-4 rounded overflow-hidden">
              <Image
                src="/images/hse-philosophy/DSC2074R-e1568690508250.jpg"
                alt="HSE Environmental Protection"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-emerald-100 leading-relaxed font-light">
              Endeavor to use clean and harmless materials, energy, and protect environment and natural resources.
            </p>
          </div>

          {/* Monitoring & Quality Tile */}
          <div className="bg-violet-600 text-white p-8 hover:bg-violet-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Internal Monitoring</h2>
            </div>
            <p className="text-violet-100 leading-relaxed font-light mb-4">
              Internal Audit is an important way to evaluate and supervise HSE management.
            </p>
            <div className="bg-violet-700 p-4 rounded mb-4">
              <h3 className="text-white font-medium text-center">Reflection of Quality</h3>
            </div>
            <p className="text-violet-100 text-sm font-light text-center">
              HSE management and its performance are a reflection of our comprehensive overall quality.
            </p>
          </div>

          {/* Social Responsibility Tile */}
          <div className="bg-slate-800 text-white p-8 hover:bg-slate-900 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Social Responsibility</h2>
            </div>
            <p className="text-slate-300 leading-relaxed font-light mb-6">
              HSE management is not only a matter of economics return, but also our commitment to social responsibility.
            </p>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-light text-blue-400 mb-2">Economic</div>
                <div className="text-slate-400 font-light text-sm tracking-wide">SUSTAINABILITY</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-green-400 mb-2">Social</div>
                <div className="text-slate-400 font-light text-sm tracking-wide">RESPONSIBILITY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-slate-900 text-white p-8 text-center">
          <h3 className="text-3xl font-light tracking-wide mb-4">
            Excellence Through <span className="text-blue-400 font-normal">HSE Leadership</span>
          </h3>
          <p className="text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Our HSE philosophy guides every decision and action, ensuring sustainable operations that protect our people, environment, and communities.
          </p>
        </div>
      </div>
    </div>
  )
}

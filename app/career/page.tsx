import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Career in HCML
              </h1>
              {/* <p className="text-lg text-gray-300 mt-1">
                Stay informed with the latest updates
              </p> */}
            </div>
          </div>
        </div>
      </header>
      <div className="text-gray-800 p-6 flex items-center justify-center">
        <div className="max-w-7xl w-full border border-yellow-400 bg-yellow-50 p-6  shadow-md">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-yellow-500 w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold text-yellow-800">
              Recruitment Fraud Disclaimer
            </h1>
          </div>
          <p className="mb-4">
            Please be aware of recruitment frauds that claim to represent{" "}
            <strong>Husky-CNOOC Madura Limited (HCML)</strong>:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              HCML <strong>never requests payments</strong> from applicants at
              any stage of the recruitment process.
            </li>
            <li>
              HCML <strong>does not appoint travel agents</strong>,
              representatives, or individuals to collect payments for
              transportation (land, sea, or air) on behalf of the company.
            </li>
            <li>
              <strong>Official job vacancies</strong> from HCML are only
              published through this website,{" "}
              <a
                href="https://www.petromindo.com"
                className="text-blue-600 underline"
              >
                Petromindo.com
              </a>
              , or on{" "}
              <a
                href="https://www.linkedin.com"
                className="text-blue-600 underline"
              >
                LinkedIn
              </a>
              .
            </li>
            <li>
              All email communications will originate from an official HCML
              email address with the domain <strong>@hcml.co.id</strong>.
            </li>
          </ul>
          <p className="mb-4">
            If you find any suspicious or fraudulent recruitment activity under
            the name of HCML, please report it immediately and provide
            supporting evidence to:
          </p>
          <p className="text-sm font-medium text-gray-900">
            📧{" "}
            <a
              href="mailto:info@hcml.co.id"
              className="text-blue-600 underline"
            >
              info@hcml.co.id
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20">
        <Link
          href="https://recruitment.hcml.co.id/"
          target="_blank"
          className="
            group relative inline-flex items-center justify-center
            px-8 py-4 bg-[#f6c700] text-[#1a2238] 
            font-bold text-lg tracking-wide uppercase
            transition-all duration-300 ease-out
            hover:bg-[#e5b500] hover:shadow-lg hover:shadow-[#f6c700]/25
            hover:scale-[1.02] active:scale-[0.98]
            before:absolute before:inset-0 before:bg-white/20 
            before:transition-opacity before:duration-300 before:opacity-0
            hover:before:opacity-100
            overflow-hidden
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            🚀 View Career Opportunities
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Link>
      </div>
      
    </div>
  );
}

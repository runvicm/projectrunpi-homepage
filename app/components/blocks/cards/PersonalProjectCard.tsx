import type { ReactNode } from "react";

export interface ProjectProps {
 title: String;
 icon: ReactNode;
 status: string;
 description: string;
 url: string | undefined;
}

export const PersonalProjectCard = ({ title, icon, status, description, url }: ProjectProps ) => {
  const isActive = status === 'prod' || status === 'dev';
  return (
    <div className={`bg-white border-2 rounded-xl p-8 text-center transition-all
      ${isActive
        ? 'border-teal-100 hover:border-teal-300 hover:shadow-lg'
        : 'border-gray-100 hover:border-gray-200'
      }`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 
        ${isActive ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-400'}`}
      >
          <div>
            {icon}
          </div>
      </div>

      <h4 className="text-2xl font-bold text-gray-900 mb-2">{title}</h4>

      {status === 'prod' && <p className="text-gray-500 text-sm mb-6">{description}</p>}
      {status === 'dev'  && <p className="text-teal-600 font-medium mb-4">Under Development</p>}
      {status === 'soon' && <p className="text-gray-400 font-medium">Coming Soon</p>}

      {status && (
        <a href={url} className="inline-block px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition">
          Learn More
        </a>
      )}
    </div>
  );
}
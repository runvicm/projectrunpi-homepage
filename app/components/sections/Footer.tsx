import { COPYRIGHT, DESCRIPTION, FOOTNOTE, SITE_NAME } from "~/constant/app"
import { ContactMeForm } from "../blocks/footer/ContactMeForm"
import { Sns } from "../blocks/footer/Sns"
import { FootNav } from "../blocks/footer/FootNav"

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        
        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-4">
            {SITE_NAME}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {DESCRIPTION}
          </p>
        </div>
        <FootNav />
        <Sns />
        <ContactMeForm />
      </div>

      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400 text-sm">{COPYRIGHT}</p>
        <p className="text-gray-500 text-xs mt-2">{FOOTNOTE}</p>
      </div>
    </div>
  </footer>
)
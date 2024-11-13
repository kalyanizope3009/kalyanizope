import { Link } from "react-scroll";
import { Section } from "../page";
import { motion } from "framer-motion";

// Sidebar Component
type SidebarProps = {
    sections: Section[];
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    activeSection: string;
    setActiveSection: (section: string) => void;
  };
  
export default function Sidebar({ sections, isMenuOpen, setIsMenuOpen, activeSection, setActiveSection }: SidebarProps) {
    return (
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-gradient-to-r from-blue to-pink-50 text-gray-800 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:sticky md:top-0 md:h-screen md:w-64 md:p-8 p-4`}
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQGhqFaYq6EpxA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1727585219165?e=1732147200&v=beta&t=auGdO5SgzyrYGpHO_kY4KNBwyh3FSTKYkksEFR54mds"
            alt="Your Headshot"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Kalyani</h2>
        </div>
        <nav>
          <ul className="space-y-4">
            {sections.map(({ id, label }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={id}
                  smooth
                  duration={500}
                  hashSpy
                  spy
                  onSetActive={() => setActiveSection(id)}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className={`block p-3 border border-black cursor-pointer whitespace-nowrap ${
                    activeSection === id
                      ? "text-black font-bold border-2 transition-all ease-in-out duration-200"
                      : "text-gray-700 hover:text-black hover:font-bold hover:border-2 transition-all ease-in-out duration-200"
                  }`}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
// Header Component
export type HeaderProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
  };
  
  export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
    return (
      <header className="md:hidden fixed bottom-4 left-4 z-50 flex justify-between items-center p-4 border-black border-2 rounded-full shadow-lg">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </header>
    );
  }
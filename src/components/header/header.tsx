import { useContext } from "react";
import { AppContext } from "../../App";

const Header = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <header className="py-8">
      <div className="container">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
          <a
            className="transition-none"
            href="#"
            onClick={() => {
              setActiveNav("#");
            }}
          >
            <div className="Logo">
              <img 
              src="/src/assets/logo-removebg-preview.webp" 
              alt="Logo" 
              width={50} 
              height={10}
              className="w-40 h-30"
              />
            </div>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tramakrishna3012/My_Portfolio/blob/main/T.Rama_Krishna.pdff"
              download="T.Rama_Krishna_Resume.pdf"
              className="btn-header h-[48px] rounded-full px-6 text-sm font-medium text-white flex items-center justify-center"
            >
              Download Resume
            </a>
            <a href="#contact">
              <button
                className="btn-header h-[48px] rounded-full px-6 text-sm font-medium text-white"
                onClick={() => {
                  setActiveNav("#contact");
                }}
              >
                Work with Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
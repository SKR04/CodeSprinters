
export default function Header() {
    return (
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="flex items-center">
              {/* Logo */}
              <a href="/" className="block" aria-label="Cruip">
                <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  {/* Your SVG path here */}
                </svg>
              </a>
  
              {/* Title */}
              <p className="ml-2 text-purple-600 text-lg font-bold" >HireM</p>
            </div>
  
            {/* Desktop navigation links */}
            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center ">
                <li>
                  <a href="/FrydePage" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-2">
                    Fryde AI
                  </a>
                </li>
                <li>
                  <a href="/WorkforceAnalysisPage" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                    Workflow Analysis
                  </a>
                </li>
                <li>
                  <a href="/ForecastedHiringPage" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                    Forecasted Hiring
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  

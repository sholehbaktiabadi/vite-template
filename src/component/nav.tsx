import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex py-10 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="container">
          <div className="flex flex-row">
            <div className="basis-1/2 text-start">
              <a href="" className="text-xl rounded-lg text-slate-50 font-medium px-5 py-3 hover:bg-slate-200">
                Logo
              </a>
            </div>
            <div className="basis-1/2 text-end">
              {[
                ["Home", "/Home"],
                ["Tentang Kami", "/Tentang Kami"],
                ["Service", "/Service"],
                ["Contact", "/Contact"],
              ].map(([title, url]) => (
                <a
                  href={url}
                  className="text-xl rounded-lg px-5 py-3 mx-2 my-10 text-slate-50 font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

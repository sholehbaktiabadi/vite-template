import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="container-lg bg-slate-900 h-auto py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-8 justify-center z-0">
            <div className="p-8 col-start-1 col-span-2">
              <p className="font-bold text-white">
                CV. Laradesk Teknologi Solusi
              </p>
              <br />
              <p className="text-slate-400">
                Kami adalah inovator kreatif dalam dunia teknologi dan
                advertising. Dengan semangat kami yang tak terbatas dalam
                merangkul perkembangan terkini, kami mempersembahkan
                solusi-solusi luar biasa untuk membawa bisnismu mencapai
                kesuksesan
              </p>
            </div>
            <div className="p-8">
              <p className="font-medium text-white text-bold">Navigation</p>
              <br />
              <ul className="list-none">
                <li>
                  <a
                    className="underline decoration-1 text-slate-400"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-1 text-slate-400"
                    href="/service"
                  >
                    Layanan
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-1 text-slate-400"
                    href="/contact"
                  >
                    Kontak
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-1 text-slate-400"
                    href="/about"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-8">
              <p className="font-medium text-white text-bold">Follow Us</p>
              <br />
              <ul className="list-none">
                <li>
                  <a
                    className="underline decoration-1 text-slate-400"
                    href="https://www.instagram.com/laratech.id"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

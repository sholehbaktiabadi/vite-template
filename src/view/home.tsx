import React from "react";

function Home() {
    const title = 'Content Creator'
    const subtitle = 'subtitle'
    const content = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'
    const data = [{title,subtitle,content}, {title,subtitle,content}, {title,subtitle,content}, {title,subtitle,content}, {title,subtitle,content}, {title,subtitle,content}]
    return (
    <>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-8 justify-center text-center">
            {
                data.map(res => 
                  <div className="bg-slate-100 m-2 p-8 rounded-[15px] drop-shadow-lg">
                    <p className="font-medium">{res.title}</p>
                    <p className="font-reguler">{res.subtitle}</p>
                    <p className="font-light">{res.content}</p>
                  </div>    
                )
            }
        </div>
      </div>
    </>
  );
}
export default Home;

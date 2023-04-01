import React from "react";
import MainContent from "./MainContent";
import Header from "./Header";
import Services from "./Services";
import Content from "./Content";
import Footer from "./Footer";


function Page() {
    return(
     <div>
       <Header />
       <MainContent />
       <Services />
       <Content />
       <Footer />
     </div>
    );
   }

   export default Page;
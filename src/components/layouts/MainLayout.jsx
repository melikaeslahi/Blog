import Header from "../Header";
import Footer from "../Footer";

const MainLayout =({children}) =>{
    return (
        <>
           <section>
             <Header />
               {children}
             <Footer />
           </section>
        </>
    );
}
export default MainLayout;
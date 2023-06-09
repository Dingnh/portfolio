import cn from "classnames";
import Container from "./Container";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ className, children }: any) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-16 p-4 sm:p-8 md:py-16 h-full",
        "w-full max-w-full lg:max-w-screen-xl mx-auto"
      )}
    >
      <Navbar />
      <Container className={className}>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;

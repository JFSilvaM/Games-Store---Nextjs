import Container from "@/components/container";
import Footer from "@/components/footer";
import TopBar from "@/components/top-bar/top-bar";

const BasicLayout = ({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,
}) => (
  <>
    <TopBar isOpenSearch={isOpenSearch} />

    <Container fluid={isContainer} paddingTop={relative}>
      {children}
    </Container>

    <Footer />
  </>
);

export default BasicLayout;

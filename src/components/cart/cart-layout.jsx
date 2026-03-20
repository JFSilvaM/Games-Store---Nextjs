import HeaderCart from "@/components/cart/components/header-cart";
import Container from "@/components/container";
import Footer from "@/components/footer";

const CartLayout = ({ children }) => (
  <>
    <HeaderCart />

    <Container paddingTop fluid>
      {children}
    </Container>

    <Footer />
  </>
);

export default CartLayout;

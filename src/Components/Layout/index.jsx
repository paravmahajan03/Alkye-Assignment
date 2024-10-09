import Footer from "../Footer";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

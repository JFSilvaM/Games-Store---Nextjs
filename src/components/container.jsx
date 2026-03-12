const Container = ({ children, fluid, paddingTop, className }) => (
  <div
    className={`w-full ${className || ""} ${fluid ? "mx-auto max-w-7xl" : ""} ${paddingTop ? "pt-24" : ""}`}
  >
    {children}
  </div>
);

export default Container;

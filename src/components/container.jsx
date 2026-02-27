const Container = ({ children, fluid, paddingTop }) => (
  <div
    className={`w-full ${fluid ? "mx-auto max-w-7xl" : ""} ${paddingTop ? "pt-24" : ""}`}
  >
    {children}
  </div>
);

export default Container;

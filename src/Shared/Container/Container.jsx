


const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
      <div>
        {children}
      </div>
    </div>
  );
};

export default Container;
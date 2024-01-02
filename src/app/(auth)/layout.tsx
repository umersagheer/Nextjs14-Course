const AuthRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h2>Auth Route Layout</h2>
      <p>This is define once in the Route group of auth </p>
    </>
  );
};

export default AuthRoutesLayout;

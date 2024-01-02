const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h2>Featured Products</h2>
      {children}
      <p>This page has its own layout too.</p>
    </>
  );
};

export default ProductDetailsLayout;

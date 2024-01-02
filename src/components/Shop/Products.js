import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = useSelector((state) => state.products.products);
  const productContent = products.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        /> */}
        {productContent}
      </ul>
    </section>
  );
};

export default Products;

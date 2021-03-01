import Product from "../product/Product";

function Products(props) {
  const productList = [
    {
      image:
        "https://m.media-amazon.com/images/I/51ZUlGbKU8L._AC_UL480_FMwebp_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71zA2rGvXOL._AC_UL480_FMwebp_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 2,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71ukF5GzMSL._AC_UL480_FMwebp_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 3,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81ltcO0I0fL._AC_UL480_FMwebp_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71PU6zubb2L._AC_UL480_FMwebp_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71gXqALLg+L._AC_UL480_FMwebp_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 6,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/712Wp2KGHYL._AC_UL480_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 7,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71ffqsebByL._AC_UL480_QL65_.jpg",
      title: "T-Shirt",
      description: "Price: $9.95",
      id: 8,
    },
  ];

  const getProducts = () => {
    const products = productList.map((product, index) => {
      return (
        <Product
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      );
    });
    return products;
  };
  return (
    <>
      <h1>Products</h1>
      <div className="container">
        <div className="row">{getProducts()}</div>
      </div>
    </>
  );
}
export default Products;

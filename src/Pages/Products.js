import Product from '../product/Product';
import Navbar from "../Navbar/Navbar";

function Products(props) {

    const productList = [
        {
            image: 'https://m.media-amazon.com/images/I/51ZUlGbKU8L._AC_UL480_FMwebp_QL65_.jpg',
            title: 'T-Shirt',
            description: 'Price: $9.95',
            id: 1
        },
        {
            image: 'https://m.media-amazon.com/images/I/71zA2rGvXOL._AC_UL480_FMwebp_QL65_.jpg',
            title: 'T-Shirt',
            description: 'Price: $9.95',
            id: 2
        },
        {
            image: 'https://m.media-amazon.com/images/I/71ukF5GzMSL._AC_UL480_FMwebp_QL65_.jpg',
            title: 'T-Shirt',
            description: 'Price: $9.95',
            id: 3
        },
        {
            image: 'https://m.media-amazon.com/images/I/81ltcO0I0fL._AC_UL480_FMwebp_QL65_.jpg',
            title: 'T-Shirt',
            description: 'Price: $9.95',
            id: 4
        },
        {
            image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
            title: 'The King of Drugs',
            description: 'Price: $9.99',
            id: 5
        },
        {
            image: 'https://damonza.com/wp-content/uploads/portfolio/fiction/Seeds-of-Hatred_1b.jpg',
            title: 'Seeds of Hatred',
            description: 'Price: $5.95',
            id: 6
        },
        {
            image: 'data:image/jpeg;base64,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',
            title: 'David Pascal',
            description: 'Price: $8.99',
            id: 7
        },
        {
            image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847',
            title: 'Memory',
            description: 'Price: $39.95',
            id: 8
        }
    ]

    const getProducts = () => {
        const products = productList.map((product, index) => {
            return <Product 
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
            />
        })
        return products
    }
    return <>
        <div className="container">
            <Navbar/>
            <div className="row">
                {getProducts()}
            </div>
        </div>
    </>
}
export default Products;
import Cards from "./Cards";
import './CSS/body-home.css';

const Body = () =>{
    const data = [{"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20},
                {"name":"Shampoo", "price": 100, "discount":10},
                {"name": "Apple", "price": 200, "discount":20}];
    return(
        <div className="body-home">
            {data.map(e =>
                <Cards props = {e} />
            )}
            <div className="back-to-top">
                <a href="#">
                <button>Back to top</button>
                </a>
            </div>
        </div>
    )
}

export default Body;
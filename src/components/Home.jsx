import "./style.css"
import CardsData from "./CardData"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import toast from 'react-hot-toast';
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
    const [cartData, setCartData] = useState(CardsData);
    const dispatch = useDispatch();


    // add to cart 
    const sendData = (e) => {
        dispatch(addToCart(e))
        toast.success("Item added Successfully In Your Cart")
    }

    return (
        <>
            <section className="item_section mt-4 container">
                <h2 className="px-4" style={{ fontWeight: 400 }}>Restaurants in Pune Open now</h2>
                <div className="row mt-2 d-flex justify-content-around align-items-center">

                    {
                        cartData.map((element) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                        <Card.Img variant='top' className='cd' src={element.imgdata} />

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className="mt-2">{element.dish}</h4>
                                                <span>{element.rating}4.1 &nbsp;★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5 className="mt-2">{element.address}</h5>
                                                <span>₹ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className="limg" alt="" />
                                                <Button style={{ width: "150px", background: "#ff3054db", border: "none" }}
                                                    variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={() => sendData(element)}
                                                >Add TO Cart</Button>
                                                <img src={element.delimg} className='laimg' alt="" />
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Home
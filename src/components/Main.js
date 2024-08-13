import React from "react";
import heroImg from "../assets/jennie.png";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import italian from "../assets/italian.jpg";
import italian2 from "../assets/italian2.jpg";
import restaurant from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {

const testimonials = [
  {
    username: "John Doe",
    rating: 5,
    review: "Amazing service! Highly recommend.",
    imgSrc: italian, 
  },
  {
    username: "Jane Smith",
    rating: 4,
    review: "Great experience, but room for improvement.",
    imgSrc: italian, 
  },
  {
    username: "Mike Johnson",
    rating: 5,
    review: "Absolutely fantastic!",
    imgSrc: italian,
  },
  {
    username: "John Johnson",
    rating: 5,
    review: "Good food!",
    imgSrc: italian, 
  },
];
const specials = [
  {
    imgSrc: food1, 
    name: 'Dish 1',
    price: '$12.99',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis',
    orderLink: '#', 
  },
  {
    imgSrc: food2,
    name: 'Dish 2',
    price: '$15.99',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis',
    orderLink: '#',
  },
  {
    imgSrc: food3,
    name: 'Dish 3',
    price: '$9.99',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis',
    orderLink: '#',
  },
  {
    imgSrc: food4,
    name: 'Dish 4',
    price: '$19.99',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis',
    orderLink: '#',
  },
  {
    imgSrc: food5,
    name: 'Dish 5',
    price: '$11.99',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis',
    orderLink: '#',
  },
];

  return (
    <>
    <Header></Header>
    <main>
      <section className="hero">
        <div className="left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis 
                rutrum suspendisse tellus. Arcu vitae placerat tempor nulla elementum risus habitasse. Natoque hac ad sociosqu.</p>
            <Link to="/reserve-table"><button aria-label="On Click">Reserve a table</button></Link>
        </div>
        <img src={restaurant} style={{height:"200px", width:"250px"}} alt="restaurant img"/>
      </section>
      <section className="highlights">
        <div className="top">
            <h2>Specials</h2>
            <button aria-label="On Click">Order online</button>
        </div>
        <div className="specials_items_container">
        {specials.map((special, index) => (
        <div key={index} className="specials_item">
          <img src={special.imgSrc} alt={special.name}/>
          <div className="specials_item_bottom">
            <div className="specials_item_top">
              <h3>{special.name}</h3>
              <h4>{special.price}</h4>
            </div>
            <p>{special.description}</p>
            <a href={special.orderLink} aria-label="On Click">Order online</a>
          </div>
        </div>
      ))}
      </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials_items_container">
          {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonials_item">
            <h4>{testimonial.username}</h4>
            <div className="img_rating">
              <img
                src={testimonial.imgSrc}
                alt={`${testimonial.username}'s avatar`}
                style={{ height: "50px", width: "50px" }}
              />
              <h4>{`Rating: ${testimonial.rating}`}</h4>
            </div>
            <p>{testimonial.review}</p>
          </div>
        ))}
        </div>
      </section>
      <section className="about">
        <div className="left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis 
            rutrum suspendisse tellus. Arcu vitae placerat tempor nulla elementum risus habitasse. Natoque hac ad sociosqu.
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt natoque porta facilisis 
                rutrum suspendisse tellus. Arcu vitae placerat tempor nulla elementum risus habitasse. Natoque hac ad sociosqu.</p>
        </div>
        <div className="images">
            <img className="img_back" src={italian} alt="owner1"/>
            <img className="img_front" src={italian2} alt="owner2"/>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
};

export default Main;

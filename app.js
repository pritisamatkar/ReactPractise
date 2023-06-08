import React from 'react';
import ReactDOM from 'react-dom/client';


const styleCard = {
    backgroundColor: "#f0f0f0",
};
function Header() {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHx9WwWC9AbeoXPzdwuWQ8oCTdLae-w72q4RoZQ5LUpX7ZRw&s' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const Body = () =>{
    return (
        <div className='body'>
            <div className='search'> Search</div>
            <div className='restContainer'>
             < RestaurantCard 
             resName = "Meghana Foods"
             cuisins = "Biryani, North-indian"
             />
             < RestaurantCard 
             resName = "KFC Foods"
             cuisins = "Chiken fast-food"
             />
            
            </div>
        </div>
    )
}
const RestaurantCard = (props) =>{
    //destructuring props
    const { resName, cuisins} = props;
    console.log(props);
    return ( 
        <div className='rest-card' style={styleCard}>
            <img  alt ="rest-logo"className='rest-logo' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yfyo8aklppbwdplv7ofp' />
            <h3>{resName}</h3>
            <h4>{cuisins}</h4>
            <h4>4.5 stars</h4>
            <h4>35 mins</h4>
        </div>
    )
}
const AppLayout = () =>{
    return (
    <div className='app'>
        <Header />
        <Body />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
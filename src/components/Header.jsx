import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './../context/StateProvider';
import { auth } from '../config/firebase';


function Header(props) {
    const [{basket,user}] = useStateValue();
    // console.log(basket);

    const login = () => {
        auth.signOut();
    }
    return (
        <div className = 'header'>
            {/* Logo on the left */}
            <Link to='/'>
                <img 
                className = 'header__logo' 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""/>
            </Link>
            
            {/* Search Box */}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 4 Links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user &&`/login`} className = 'header__link'>
                     <div onClick = {login} className="header__option">
                    <span className = "header__optionLineOne">Hello {user?.email}</span>
                         <span className = "header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                     </div>
                 </Link>
                {/* 2nd link */}
                <Link to='/' className = 'header__link'>
                     <div className="header__option">
                         <span className = "header__optionLineOne">Returns</span>
                         <span className = "header__optionLineTwo">& Orders</span>
                     </div>
                 </Link>
                {/* 3rd link */}
                <Link to='/' className = 'header__link'>
                     <div className="header__option">
                         <span className = "header__optionLineOne">Your</span>
                         <span className = "header__optionLineTwo">Prime</span>
                     </div>
                 </Link>
                 {/* 3rd link */}
            {/* Basket icon with number */}
             <Link to = "/checkout" className = 'header__link' >
                 <div className="header__optionBasket">
                     {/* Shoping basket icon */}
                   <ShoppingBasketIcon/>
                     {/* Number of items in the basket */}
                   <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                 </div>
             </Link>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import Logout from '../assets/logout2.png';
import UserProfile  from '../assets/userprofile.png';

const NavigationBar = () => {

	const navigate = useNavigate();

    const handleLogout = () => {

    
    
        localStorage.removeItem("token");
        navigate("/login");
    }
	return (
		<nav className="navbar">

			<div className="navbar-container">

				<div className="navbar-brand">
					<span className="retail">Retail</span>
					<span className="edge">Edge</span>
				</div>

				<ul className="navbar-menu" >

					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/products">Products</Link>
					</li>

					<li>
						<Link to="/categories">Categories</Link>
					</li>

					<li>
						<Link to="/profile">Profile</Link>
					</li>

				</ul>

				<div className="navbar-profile">
					{/* <span className="profile-name">Dinuka</span> */}
                    <img src={UserProfile} alt="User Profile" className="profile-image" />
                    
                </div>

				<div className="logout-icon" onClick={handleLogout}>
					<img src={Logout} alt="Logout" />
				</div>




			</div>

		</nav>
	);
};

export default NavigationBar;
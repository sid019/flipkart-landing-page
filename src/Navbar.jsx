import './Navbar.css';
import plus from './plus_img.png';

function Navbar() {
    return(<>
    <div className='navCom'>
            <div className="leftNav">
            <h2>FlipKart</h2>
            <h5>Explore <span className='plus'>Plus</span>
            <img src={plus} alt="plus_img" width="10"/></h5>
            </div>
            <div className="middleNav">
                <input type="text" title='Search for product,brands and more' placeholder="Search for product,brands and more"/>
            </div>
            <div className="rightNav">
                <h3 className="navLogo">Logo</h3>
                <h3> Become a Seller</h3>
                <div>
                <h3 className="navMore">More
                <select  >
                    <option></option>
                </select>
                </h3>
                </div>
                <h3>Cart</h3>
            </div>
        </div>

    </>)
}
export default Navbar;
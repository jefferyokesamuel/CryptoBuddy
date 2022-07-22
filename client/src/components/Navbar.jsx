
import logo from '../../images/logo.png';

const NavbarItem = ({title, classProps}) => {

}

const Navbar = () => {
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className="md:flex-0.5 flex-initial justify-center items-center">
                <img src={logo} alt="log" className='w-32 cursor-pointer' />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">

            </ul>
        </nav> 
    )
}
export default Navbar
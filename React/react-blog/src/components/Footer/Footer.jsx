const Footer = () => {
    return ( 
        <footer className="bg-gray-900 text-white py-4 mt-8 w-full">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        <div className="para text-center md:text-left">
            <p className="text-sm">&copy; Shashwat - All Rights Reserved</p>
        </div>
        <div className="icon flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
        </div>
    </div>
</footer>


     );
}
 
export default Footer;
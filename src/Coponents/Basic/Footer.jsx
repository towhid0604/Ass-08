const Footer = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="text-center pt-5">
          <h4 className="text-4xl font-bold mb-3">Gadget Heaven</h4>
          <p className="text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
          <div className="flex w-full flex-col">
            <div className="divider"></div>
          </div>
        </div>
        <footer className="footer text-gray-600 p-10 flex justify-evenly">
          <nav className="">
            <h6 className="footer-title text-black">Services</h6>
            <a className="link link-hover ">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title text-black">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title text-black">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

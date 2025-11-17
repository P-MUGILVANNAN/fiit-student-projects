import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">ShopEase</h5>
            <p className="text-light">
              Your one-stop destination for all your shopping needs. 
              We offer quality products with fast delivery and excellent customer service.
            </p>
            <div className="d-flex">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">SHOP</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">All Products</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">New Arrivals</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Featured</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Discounts</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">SUPPORT</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Returns</a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">ACCOUNT</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">My Account</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Order History</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Wishlist</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Newsletter</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">CONTACT</h6>
            <ul className="list-unstyled text-light">
              <li className="mb-2">
                <small>1234 Street Name, City</small>
              </li>
              <li className="mb-2">
                <small>Email: info@shopease.com</small>
              </li>
              <li className="mb-2">
                <small>Phone: (555) 123-4567</small>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />

        {/* Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">
              &copy; 2025 ShopEase. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end">
              <a href="#" className="text-light text-decoration-none me-3 small">Privacy Policy</a>
              <a href="#" className="text-light text-decoration-none me-3 small">Terms of Service</a>
              <a href="#" className="text-light text-decoration-none small">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
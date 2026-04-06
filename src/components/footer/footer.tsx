const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold text-white mb-2">Monkey Wears</h4>
          <p>Your go-to fashion destination.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Follow Us</h4>
          <p>Instagram | Facebook</p>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">© 2026 Monkey Wears</div>
    </footer>
  );
};

export default Footer;

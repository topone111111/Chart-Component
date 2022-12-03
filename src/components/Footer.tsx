const Footer = () => {
  return (
    <footer className="card__footer">
      <div className="total">
        <h3 className="total__date">Total this month</h3>
        <div className="total__amount">$478.33</div>
      </div>

      <div className="gain">
        <span className="gain__amount">+2.4%</span>
        <h3 className="gain__date">from last month</h3>
      </div>
    </footer>
  );
};

export default Footer;

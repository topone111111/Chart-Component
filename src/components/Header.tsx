const Header = () => {
  return (
    <header className="header">
      <div className="header__balance">
        <h4 className="header__title">My balance</h4>
        <span className="header__amount">$921.48</span>
      </div>
      <img
        className="header__logo"
        src="/assets/logo.svg"
        alt="logo"
        title="logo"
      />
    </header>
  );
};

export default Header;

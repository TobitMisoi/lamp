/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <nav className="header">
        <h1>Random</h1>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <code>search</code>
          <span>0.00</span>
          <span>Menu</span>
        </div>
      </nav>
      <article>
        <div className="content">
          <div className="content-detail">
            <h3>New Arrival</h3>
            <h1>Cat Tee</h1>
            <button>Start Shopping</button>
          </div>
          <div className="content-image">
            <img
              src="https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80"
              alt=""
            />
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;

import { Link, Outlet } from "react-router-dom";

const Women = () => {
  return (
    <div>
      <p>Women Items:</p>
      <ul>
        <li>
          <Link to="grooming">Grooming</Link>
        </li>
        <li>
          <Link to="shirt">Shirt</Link>
        </li>
        <li>
          <Link to="trouser">Trouser</Link>
        </li>
        <li>
          <Link to="jewellery">Jewellery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Women;

import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Info from "./assets/info.svg";
import Account from "./assets/account_circle.svg";
import Logout from "./assets/logout.svg";
import './styles.css';

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">Publicar</a>
          </li>
          <li>
            <a href="#" className="item_link item__link--ativo">
              <img src={Feed} alt="" />
              <strong>Feed</strong>
            </a>
          </li>
          <li>
            <a href="#" className="item_link">
              <img src={Info} alt="" />
              <strong>Info</strong>
            </a>
          </li>
          <li>
            <a href="#" className="item_link">
              <img src={Account} alt="" />
              <strong>Conta</strong>
            </a>
          </li>
          <li>
            <a href="#" className="item_link">
              <img src={Logout} alt="" />
              <strong>Logout</strong>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

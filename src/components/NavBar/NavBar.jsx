import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { ButtonGroup, Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import logo from '../../assets/logo-restaurante.jpeg'
import "@fontsource/dancing-script";

function NavBar() {
    return (
        <div className="header" id="arriba">
            <nav class="navbar navbar-expand-sm navegacion">
                <h1 className="titulo">Elegantis</h1>
                <NavLink to='/' >
                    <img src={logo} alt="Logo de restaurante italiano" class="img-menu"/>
                </NavLink>
                <div class="enlaces container-fluid">
                    <div class="collapse navbar-collapse parte-nav" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <div class="menu menu-pages">
                                    <NavLink className="texto-nav nav-link" to='/'>Inicio</NavLink>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div class="menu">
                                    <Dropdown className="texto-nav" as={ButtonGroup}>
                                        <NavLink className="texto-nav nav-link" to={'/carta'}>Carta</NavLink>
                                        <Dropdown.Toggle className="button-carta" id="dropdown-split-basic" />
                                        <DropdownMenu className="nav-item">
                                            <Dropdown.Item><NavLink to={'/carta/Pizza'} className="texto-nav nav-link">Pizzas</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink to={'/carta/Sandwich'} className="texto-nav nav-link">Sandwiches</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink to={'/carta/Pasta'} className="texto-nav nav-link">Pastas</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink to={'/carta/Sopa'} className="texto-nav nav-link">Sopas</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink to={'/carta/Al plato'} className="texto-nav nav-link">Al plato</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink to={'/carta/Bebida'} className="texto-nav nav-link">Bebidas</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink to={'/carta/Postre'} className="texto-nav nav-link">Postres</NavLink></Dropdown.Item>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </li>
                            <li class="nav-item">
                                <NavLink className="texto-nav nav-link" to='/nosotros'>Nosotros</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="texto-nav nav-link" to='/size-guide'>Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='cartContainer'>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar
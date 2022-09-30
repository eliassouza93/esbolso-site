import { useState } from "react"
import { Link } from "react-router-dom"
import style from './Menu.module.scss'
 
export default function Menu() {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Contato',
        to: '/contato'
    }, {
        label: 'Produtos',
        to: './produtos'
    }, {
        label: 'Sobre',
        to: './sobre'
    }]
 
    return (
        <div >
       
 
            <ul className={style.nav}>
                <div className={style.navMenu}>
                    {rotas.map((rota, index) => (
                        <ul className={style.navItem} key={index}>
                            <Link className={style.navItem} to={rota.to}> {rota.label} </Link>
                        </ul>
                    ))}

                </div>
                <div className={style.mobile}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>

            </ul>

        </div>
    )
}
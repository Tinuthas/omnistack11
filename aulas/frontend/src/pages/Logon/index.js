import React from 'react'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form action="">
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" type="text"/>
                    <button type="submit">Entra</button>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}
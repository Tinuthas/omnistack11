import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('')

    async function handleLogin(e) {
        e.preventDefault()

        try{
            const response = await api.post('session', {id})

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
        }catch(err){
            alert(`Falha no login, tente novamente.`)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input 
                        placeholder="Sua ID" 
                        type="text"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entra</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                     </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Contato.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contato() {
    return (
        <div className={style.pai}>

            <form className={style.formulario}>
                <label htmlFor="nome">Nome
                    <input type="text" placeholder='digíte seu nome' className={style.nome} />
                </label>
                <label className={style.msg__pai} htmlFor="nome">Mensagem
                    <input type="text" placeholder='digíte sua mensagem' className={style.msg} />
                </label>
                <div className={style.btn__pai} >
                    <button className={style.btn}>Enviar</button>
                </div>

            </form>

        </div>
    )
}
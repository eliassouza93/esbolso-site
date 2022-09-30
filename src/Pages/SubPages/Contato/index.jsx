import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Contato.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contato() {
    return (
        <div className={style.pai}>
            <h1>Contato</h1>

            <h4>Fale sobre você</h4>
            <div>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                    
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Salvar  " />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>

        </div>
    )
}
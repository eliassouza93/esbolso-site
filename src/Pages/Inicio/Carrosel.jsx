import Carousel from 'react-bootstrap/Carousel';
import style from './Inicio.module.scss'
import copo from '../../Assets/copo.jpg'
import tabua from '../../Assets/tabua.jpg'
import viva from '../../Assets/aguaviva.jpg'
 

function UncontrolledExample() {
    return (
        <div className={style.todos}>
            <Carousel className={style.teste} >
                <Carousel.Item className={style.item}>
                    <img
                        className="d-block w-100"
                        src={copo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tabua}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={viva}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3> </h3>
                        <p>

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;
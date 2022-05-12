import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const TelaInicial = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(() => {
        apiDeputados.get('deputados/').then(resultado => {
            console.log(resultado.data)
            setDeputados(resultado.data.dados)
        })
    }, [])

    return (
        <div>
            
            <h1>Deputados </h1>

            { !deputados.length && <h1>Carregando... Aguarde</h1>}

            
<Row>
    {deputados.map(item => (
        <Col >
            <Card>
                <Card.Img variant="top" src={item.urlFoto } />
                <Card.Body>
                        <Card.Title>Nome: {item.nome} </Card.Title>
                        <Card.Text>Pertido: {item.siglaPartido}</Card.Text>
                        <Card.Text>Estado: {item.siglaUf}</Card.Text>

                        <Link className="btn btn-danger" to={'/detalhesdeputados/' + item.id}>
                            Ver Detalhes
                        </Link>

                </Card.Body>
            </Card>
        </Col>
    ))}
</Row>


        </div>
    )
}

export default TelaInicial
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'


const DeputadosDetalhes = () => {

    const params = useParams()
    const [deputado, setDeputado] = useState({})
   


    useEffect(() => {
        apiDeputados.get('deputados/' + params.id ).then(resultado => {
            setDeputado(resultado.data.dados)
            console.log(resultado.data)
        })
     
    }, [])

    return (
        <div>
            {!deputado.id && <h1>Carregando... Aguarde!</h1>}

            {deputado.id &&
                <div>
                    <h1>{deputado.nome}</h1>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Nome: </strong>{deputado.ultimoStatus.nome}</p>
                            <p><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido}</p>
                            <p><strong>Estado: </strong>{deputado.ultimoStatus.siglaUf}</p>
                            <p><strong>Email </strong>{deputado.ultimoStatus.email}</p>

                            <Link className='btn btn-danger' to={-1 }> VOLTAR </Link>
                        </Col>


                       
                    </Row>
                    
                </div>
            }
        </div>
    )
}

export default DeputadosDetalhes
import React,{useState,useEffect} from 'react'
import { Container, Row, Col, CardBody, Card, Form, InputGroup, Input, CardFooter, Button } from 'reactstrap'

export default function CreateEmployee() {
    const [showLoading, setshowLoading] = useState(false);
    const [empployee, setempployee] = useState({Name:'',Departement:'',Age:'',City:'',Country:'', Gender:''});


    const insertEmployee = (e) =>{
        e.preventDefault();
        const data = {
            Name:empployee.Name,
            Departement:empployee.Departement,
            Age:empployee.Age,
            City:empployee.City,
            Country:empployee.Country,
            Gender:empployee.Gender
        };
        console.log(data);
    }

    const onChange = (e) =>{
        e.persist();
        setempployee({...empployee,[e.target.name]: e.target.value});
    }


    return (
        <div className="animated fadein">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Form onSubmit={insertEmployee}>
                                <h1>Register</h1>
                                <InputGroup className="mb-4">
                                    <Input type="text" name="Name" id="Name" placeholder="Name" value={empployee.Name} onChange={onChange}/>
                                </InputGroup>
                                <InputGroup className="mb-4">
                                    <Input type="text" name="Departement" id="Departement" placeholder="Departement" value={empployee.Departement} onChange={onChange}/>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input type="text" name="Country" id="Country" placeholder="Country" value={empployee.Country} onChange={onChange}/>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input type="text" name="City" id="City" placeholder="City" value={empployee.City} onChange={onChange}/>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input type="text" name="Gender" id="Gender" placeholder="Gender" value={empployee.Gender} onChange={onChange}/>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input type="text" name="Age" id="Age" placeholder="Age" value={empployee.Age} onChange={onChange}/>
                                </InputGroup>
                                <CardFooter className="p-4">
                                    <Row>
                                        <Col xs="12" sm="6">
                                            <Button type="submit" className="btn btn-info mb-01" block><span>Save</span></Button>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Button className="btn btn-info mb-01" block><span>Cancel</span></Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

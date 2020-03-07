import React from 'react'
import { useState, useEffect } from 'react'  
import {Col,Row,Card,CardHeader, CardBody, Table} from 'reactstrap'

export default function EmployeeList() {

    const [data, setdata] = useState([])
    const employeeDumy = [
        {Id: '1', Name:'Indo Gusmas',Departement:'IT',Age:'25 tahun',City:'Jakarta',Country:'Indonesia', Gender:'Laki-laki'},
        {Id: '2', Name:'Indo Gusmas',Departement:'IT',Age:'25 tahun',City:'Jakarta',Country:'Indonesia', Gender:'Laki-laki'},
        {Id: '3', Name:'Indo Gusmas',Departement:'IT',Age:'25 tahun',City:'Jakarta',Country:'Indonesia', Gender:'Laki-laki'},
        {Id: '4', Name:'Indo Gusmas',Departement:'IT',Age:'25 tahun',City:'Jakarta',Country:'Indonesia', Gender:'Laki-laki'}
    ];

    useEffect(()=>{
        console.log('use Efffect');
        setdata(employeeDumy);
    },[]);

    return (
        <div className="animated fadein">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify">Employee List</i>
                            </CardHeader>
                            <CardBody>
                                <Table hover bordered striped responsive size="sm">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Departement</th>
                                            <th>Age</th>
                                            <th>City</th>
                                            <th>Country</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item, idx)=>{
                                                return<tr>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Departement}</td>
                                            <td>{item.Age}</td>
                                            <td>{item.City}</td>
                                            <td>{item.Country}</td>
                                            <td>{item.Gender}</td>
                                            <td>
                                                delete
                                            </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}

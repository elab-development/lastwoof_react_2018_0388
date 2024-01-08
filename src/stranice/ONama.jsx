import React from 'react';
import andrea from '../slike/andrea.jpg';
import ivana from '../slike/ivana.jpg';
import {Col, Row, Image} from "react-bootstrap";


const ONama = () => { 

    const ONama=[

        {
            id:1,
            imeprezime: "Ivana Milidragovic",
            brojgodina: "23",
            opis:"Student Fakulteta organizacionih nauka u Beogradu.",
            slika: ivana
        },

        {
            id:2,
            imeprezime: "Andrea Tambur",
            brojgodina: "24",
            opis: "Student Fakulteta organizacionih nauka u Beogradu.",
            slika: andrea

        }

    ];

    return (
       <>
        <div className="header">
                <h1>O nama</h1>
            </div>
       <Row>

       {
                    ONama.map(mi => (
                        <Col key={mi.id}>
                            
                            <h1>
                                {
                                    mi.imeprezime
                                
                                }
                            </h1>

                            <p>
                                {
                                    mi.brojgodina
                                } godine
                            </p>

                            <Image widht={600} height={400}  src={mi.slika}>

                            </Image>
                            
                            <p>
                                {
                                    mi.opis
                                }
                            </p>
                            
                             </Col>
                    ))
                }

       </Row>
       </>
    );
};

export default ONama;

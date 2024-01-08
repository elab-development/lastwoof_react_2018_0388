import React from 'react';
import vucko from '../slike/vucko.jpeg';
import sara from '../slike/sara.jpeg';
import lav from '../slike/lav.jpeg';
import macka from '../slike/macka.jpeg';
import {Col, Row} from "react-bootstrap";
import PoslednjiPozdravKartica from "../komponente/PoslednjiPozdravKartica";
import {Link} from "react-router-dom";

const Pocetna = () => {

    const pozdravi = [
        {
            id: 1,
            ime: "Vucko",
            pozdrav: "Voleli smo te kao clana porodice, bio si nam najbolji prijatelj.",
            slika: vucko
        },
        {
            id: 2,
            ime: "Sara",
            pozdrav: "Nikada necemo zaboraviti tvoju dobrotu i vernost.",
            slika: sara
        },
        {
            id: 3,
            ime: "Lav",
            pozdrav: "Neka ti je laka zemlja, bices nam uvek u srcu.",
            slika: lav
        },
        {
            id: 4,
            ime: "Prle",
            pozdrav: "Razbicemo casu iz kuhinje kao da si tu.",
            slika: macka
        },
    ];

    return (
        <>
            <div className="header">
                <h1>Dobrodosli na sajt LastWoof</h1>
            </div>
            <Row className="mt-3">
                <h1 className="text-center">Poslednji pozdrav</h1>
            </Row>
            <Row className="mt-3">

                {
                    pozdravi.map(pozdrav => (
                        <Col key={pozdrav.id}> <PoslednjiPozdravKartica  ime={pozdrav.ime} pozdrav={pozdrav.pozdrav} slika={pozdrav.slika} /> </Col>
                    ))
                }

            </Row>

            <Row className="mt-3">
                <h3>Pogledajte neke od nasih <Link to="/usluge">usluga</Link></h3>
            </Row>
        </>
    );
};

export default Pocetna;
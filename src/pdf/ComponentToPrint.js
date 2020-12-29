import React, { Component } from 'react'
import invoice1 from './invoice_1.PNG'
import invoice2 from './invoice_2.PNG'
import invoice3 from './invoice_3.PNG'

export class ComponentToPrint extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <img src={invoice1} />
                <img src={invoice2} />
                <h2>Muhammad Bilal Firoz</h2>
                <h4>H.42, St.15, DHA-PHASE II, Islamabad</h4>
                <h4>bilal@hoocontrols.com | +92-342-7132753</h4>
                <img src={invoice3} />
                <img src={invoice1} />
                <img src={invoice2} />
                <img src={invoice3} />
            </div>


        );
    }
}

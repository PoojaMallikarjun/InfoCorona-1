import React, { Component } from 'react';
import './card-style.css';

const columnHeader = ['State', 'TotalIndianNational', 'TotalForeigNational', 'Cured', 'Death']

class IndStats extends Component {

    constructor() {
        super();
        this.state = {
            totalCases: "",
            noOfIndianNationalCase: "",
            noOfForeignNationalCase: "",
            activeCases: "",
            totalCuredCase: "",
            totalDeath: "",
            dateOfUpdate: "",
            timeOfUpdate: "",
            states: [],
            TotalIndianNationalCases: [],
            TotalForeignNationalCases: [],
            CuredCase: [],
            DeathCase: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3002/indStats`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                let res = data.message;

                this.setState({
                    totalCases: res.totalCases,
                    noOfIndianNationalCase: res.noOfIndianNationalCase,
                    noOfForeignNationalCase: res.noOfForeignNationalCase,
                    activeCases: res.activeCases,
                    totalCuredCase: res.totalCuredCase,
                    totalDeath: res.totalDeath,
                    dateOfUpdate: res.dateOfUpdate,
                    timeOfUpdate: res.timeOfUpdate,
                    states: res.states,
                    TotalIndianNationalCases: res.TotalIndianNationalCaseslist,
                    TotalForeignNationalCases: res.TotalForeignNationalCaseslist,
                    CuredCase: res.CuredCaseslist,
                    DeathCase: res.DeathCaseslist
                })
            })
    }


    getTableData() {
        let res = [];
        let state = this.state.states
        let indNat = this.state.TotalIndianNationalCases
        let forNat = this.state.TotalForeignNationalCases
        let cure = this.state.CuredCase
        let death = this.state.DeathCase

        for (var i = 0; i < state.length; i++) {
            res.push(
                <tr >
                    <td key={i}>{state[i]}</td>
                    <td key={i}>{indNat[i]}</td>
                    <td key={i}>{forNat[i]}</td>
                    <td key={i}>{cure[i]}</td>
                    <td key={i}>{death[i]}</td>
                </tr>
            )
        }
        return res;
    }


    getHead() {
        let res = [];

        for (var i = 0; i < columnHeader.length; i++) {
            res.push(<th id={columnHeader[i]}>{columnHeader[i]}</th>)
        }
        return res

    }


    render() {
        const { totalCases, activeCases, noOfIndianNationalCase, noOfForeignNationalCase, totalCuredCase, totalDeath, dateOfUpdate, timeOfUpdate } = this.state
                     
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-center shadow">
                            <div className="card-body text-dark">
                                <h4 className="card-title">IND Statics</h4>
                                <p style={{ fontsize: 20 }} className="card-text text-secondary" >Total Cases : {totalCases} </p>
                                <p className="card-text text-secondary">ActiveCases : {activeCases}</p>
                                <p className="card-text text-secondary">DateOfUpdate : {dateOfUpdate}</p>
                                <p className="card-text text-secondary">TimeOfUpdate: {timeOfUpdate}</p>
                                <p className="card-text text-secondary">NoOfIndianCase: {noOfIndianNationalCase}</p>
                                <p className="card-text text-secondary">NoOfForeignCase: {noOfForeignNationalCase}</p>
                                <p className="card-text text-secondary">NoOfCuredCase: {totalCuredCase}</p>
                                <p className="card-text text-secondary">NoOfDeath: {totalDeath}</p>
                                <table>
                                    <thead>
                                        <tr>{this.getHead()}</tr>
                                    </thead>
                                    <tbody>
                                        {this.getTableData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default IndStats;

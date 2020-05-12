import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import MainLayout from './MainLayout';


class charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loanrequest: '',
            creditscore: ''
        }
        this.state = {
            chartData:  {
                labels: ['Credit Score', 'Loan Request'],
                datasets:[
                    {
                        label: ['Credit Scores','Loan Requests'],
                        data: [],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                          ]
                    }
                ]
            }
        }
    }

        
    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition: 'bottom'
    }

    render() {
        return (
            <MainLayout>
            <div className='charts'>
                <Bar 
                data={this.state.chartData} 
                options={{
                   title: {
                       display: this.props.displayTitle,
                       text: 'Applicants credentials',
                       fontSize: 25
                   },
                   legend: {
                       display:this.props.displayLegend,
                       position: this.props.legendPosition
                   }
                }}/>
            </div>
            </MainLayout>
        )
    }
}
export default charts;
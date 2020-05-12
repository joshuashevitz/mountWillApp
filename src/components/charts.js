import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import MainLayout from './MainLayout';
import axios from 'axios';

class charts extends Component {
    constructor(props) {
        super(props);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeApplicant = this.onChangeApplicant.bind(this);
        this.onChangeLOanRequest = this.onChangeLOanRequest.bind(this);
        this.onChangeCreditScore = this.onChangeCreditScore.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.state = {
            username: '',
            loanrequest: 0,
            address: '',
            email: '',
            creditscore: 800,
            date: new Date(),
            users:[]
        }
        this.state = {
            username: '',
            loanrequest: '',
            creditscore: ''
        }

    }
    componentDidMount() {
        axios.get('http://localhost:5000/users/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                username: res.data.username,
                loanrequest: res.data.loanrequest,
                creditscore: res.data.creditscore,
                address: res.data.address,
                email: res.data.email,
                users:[],
                    chartData:  {
                        labels: ['Expected Average', 'Applicant Info'],
                        datasets:[
                            {
                                label: ['Loan Requests'],
                                data: [1000000, res.data.loanrequest],
                                backgroundColor:[
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)',
                                    'rgba(255, 99, 132, 0.6)'
                                  ],
                                  borderWidth:1,
                                  borderColor: '#777',
                                  hoverBorderWidth:3,
                                  hoverBorderColor:'#000'
                            },
                         
                        ]
                    },
                    chartData2:  {
                        labels: ['Expected Average', 'Applicant Info'],
                        datasets:[
                            {
                                label: ['Credit Score'],
                                data: [700, res.data.creditscore],
                                backgroundColor:[
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)'
                                  ],
                                  height:50,
                                  width: 25,
                                  borderWidth:1,
                                  borderColor: '#777',
                                  hoverBorderWidth:3,
                                  hoverBorderColor:'#000'
                            },
            
                        ]
                    }
                
            })
             console.log(res.data.username);
             console.log(res.data.creditscore);

            })

       
    }
    
    onChangeApplicant(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeLOanRequest(e) {
        this.setState({
        loanrequest: e.target.value    
        });
    }
    onChangeDate(date) {
      this.setState({
        date: date
      });
    }
    onChangeAddress(e) {
        this.setState({
           address: e.target.value 
        });
    } 
    onChangeEmailAddress(e) {
      this.setState({
        email: e.target.value
      });
    }
    onChangeCreditScore(e) {
      this.setState({
         creditscore: e.target.value 
      });
  } 
        
    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition: 'bottom',

    }

    render() {
        return (
            <MainLayout>
            <div className='charts'>
                <Bar 
                data={this.state.chartData} 
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false,
                    borderWidth: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    title: {
                       display: this.props.displayTitle,
                       text: 'Applicants Loan Request',
                       fontSize: 25,
                      maintainAspectRatio: false
                   },
                   legend: {
                       display:this.props.displayLegend,
                       position: this.props.legendPosition
                   },
                   layout: {
                       padding: {
                        left: 100,
                        right: 100   
                       }
                   },
                   tooltips: {
                       enabled: true
                   }
                }}/>
                  <Pie 
                data={this.state.chartData2} 
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false,
                    borderWidth: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    title: {
                       display: this.props.displayTitle,
                       text: 'Applicants credentials',
                       fontSize: 25,
                      
                   },
                   legend: {
                       display:this.props.displayLegend,
                       position: this.props.legendPosition
                   },
                   layout: {
                    padding: {
                     left: 100,
                     right: 100   
                    }
                },
                tooltips: {
                    enabled: true
                }
                }}/>

            </div>
            </MainLayout>
        )
    }
}
export default charts;
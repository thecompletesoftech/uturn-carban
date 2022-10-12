import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import './Dashboard.css'
import { IoIosArrowDown } from 'react-icons/io';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";

const Dashbaord = () => {

    const weather_data = {
        "01d": "clear sky (day)",
        "01n": "clear sky (night)",
        "02d": "few clouds (day)",
        "02n": "few clouds (night)",
        "03d": "scattered clouds",
        "04d": "broken clouds",
        "09d": "shower rain",
        "10d": "rain (day time)",
        "10n": "rain (night time)",
        "11d": "thunderstorm",
        "13d": "snow",
        "50d": "mist",
    };


    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };


    const [indexoverview, Setindexoverview] = useState(0);

    const [location, setLocation] = useState([]);
    const [cityName, setcityName] = useState("Bengaluru");
    const [cityId, setcityId] = useState([]);
    const [enviromets, setenviromets] = useState([]);

    const getapi = (event) => {
        var data = event.target.value;
        if (data == "") {
            return;
        }
        const config = {
            header: {
                "Content-type": "application/json",
            }
        }
        axios.get(`https://uturn-api.raeex.com/v1/environments/locations?q=${data}`)
            .then((response) => {
                setLocation(response.data.data.cities)

            })
    }

    const environments = (data) => {
        if (data == "") {
            return;
        }
        const config = {
            header: {
                "Content-type": "application/json",

            }
        }
        axios.get(`https://uturn-api.raeex.com/v1/environments?locationId=${data}`)
            .then((response) => {
                setenviromets(response.data.data)
                // console.log("sdjkjkcgb", response.data.data)
            })
    }


    useEffect(() => {
        citydata({
            "id": "63354b11f76e8a0531d28c22",
            "name": "Albany, Western Australia, Australia"
        });
        attemptPlay();
    }, [])

    const citydata = (data) => {
        setcityName(data.name);
        setcityId(data.id);
        setLocation([]);
        environments(data.id);
    }

    const Rightcard = (props) => {
        return (
            <>
                <div className="mb-2">
                    <div className="row" style={{
                        justifyContent: 'space-around',
                        display: 'flex'
                    }}>

                        <ul className="col-md-12">
                            <li className="window mt-2">{props.text}</li>
                        </ul>

                        {/* </div> */}
                    </div>
                </div>
            </>
        )
    }

    const Rightcity = (props) => {
        return (
            <>
                <div className="row">
                    <div className="col-md-3 text-left">
                        <p>{props.index}</p>
                    </div>
                    <div className="col-md-6 text-left">
                        <p>{props.cityName}</p>
                    </div>
                    <div className="col-md-3 ">
                        <p className="text-center" style={{ background: "#FBE46E", fontWeight: "400", borderRadius: '10px' }}>{props.aqi}</p>
                    </div>
                </div>

            </>
        )
    }



    return (
        <>
            <div style={{
                overflow: 'hidden',

            }}>

                <header className="fixed-top" >
                    <section className="w3l-header-4">
                        <div className="container">
                            <Navbar />
                        </div>
                    </section>
                </header>

                <section className="w3l-main-slider" id="home">
                    <div className="" >
                        <div className="">
                            <div className="item">
                                <li>
                                    <div className="slider-info banner-view bg bg2">
                                        <div className="banner-info p-5" style={{
                                            marginTop: '70px',

                                        }}>

                                            <video
                                                playsInline
                                                loop
                                                muted
                                                alt="All the devices"
                                                src="../assets/video/earth.webm"
                                                ref={videoEl}
                                                style={{
                                                    width: '100%',

                                                }} />



                                            <button class="btn">Locate Me</button>

                                        </div>

                                    </div>

                                </li>

                            </div>

                        </div>

                    </div>
                </section>

                <div className="row">
                    <div className="col-md-8">

                        <div className="mb-2 pl-5">
                            <div className="row">
                                <h3 className="title-big">
                                    <b style={{
                                        fontSize: '30px',
                                    }}> Air quality in <span style={{
                                        color: '#5EB23F'
                                    }}>{cityName} </span></b>
                                </h3>
                                <p>Air quality index(AQI) and {enviromets?.pollution?.mainUs} air pollution in {cityName}</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 pl-5 mt-2">

                        <div class="form-group has-search">
                            <span className="fa fa-search form-control-feedback" style={{
                                fontSize: '12px'
                            }}></span>
                            <input className="form-control" placeholder="Search" onChange={getapi} style={{
                                width: '350px',
                                fontSize: '12px'
                            }} />
                            <ul style={{ position: 'absolute', zIndex: '1' }}>
                                {
                                    location.map((data, index) => (
                                        <li key={index} onClick={() => citydata(data)} style={{ background: 'white', padding: '5px', textAlign: 'center', width: '300px', borderBottom: 'solid 0.1px' }}>{data.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="pl-5 pr-5 mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card" style={{
                                boxShadow: '0px 0px 10px 0px #00000040'
                            }}>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div style={{ height: '200px', width: '200px' }}>


                                                <div class="set-size charts-container">
                                                    <div class="pie-wrapper progress-70 style-2">
                                                        <span class="label" data-from="0" data-to="100" data-speed="1500" style={{
                                                            boxShadow: '0px 0px 10px 0px #00000040'
                                                        }}>{enviromets?.pollution?.aqiUs}</span>
                                                        <div class="pie">
                                                            <div class="left-side half-circle" ></div>
                                                            <div class="right-side half-circle"
                                                                style={{
                                                                    border: `0.1em solid ${enviromets?.pollution?.aqiLevelWithDescUs?.color} `,
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <div class="shadow"></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-4 padding-0 text-left" style={{
                                            marginTop: '83px'
                                        }}>
                                            <p className="lineavq">Live AQI Index</p>
                                            <p className="modrate">{enviromets?.pollution?.aqiLevelWithDescUs?.concernLevel}</p>
                                        </div>
                                        <div className="col-md-4 padding-0">
                                            <img src={`../assets/treeicon/${enviromets?.pollution?.aqiLevelWithDescUs?.concernLevel}.png`} style={{
                                                height: '205px'
                                            }} />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{
                                boxShadow: '0px 0px 10px 0px #00000040',
                                height: '36.5vh',
                                overflowY: 'scroll'
                            }}>
                                <div className="card-body">
                                    <div className="p-2 justify-content-left">

                                        <p className="healthstyle">Health Recommendations</p>
                                        <p className="pollution">How to protect from air pollution in {cityName}?</p>

                                        <Rightcard image={`../assets/images/p3.jpg`} text={`${enviromets?.pollution?.aqiLevelWithDescUs?.measures} `} />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pl-5 pr-5 mb-5 mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card" style={{
                                boxShadow: '0px 0px 10px 0px #00000040'
                            }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-11">
                                            <h3 className="pl-5 pt-1 qual">
                                                <b style={{
                                                    fontSize: '20px',

                                                    fontFamily: 'Inter'
                                                }}>Over <span style={{
                                                    color: '#5EB23F'
                                                }}>View</span></b>
                                            </h3>
                                            <p className="pl-5 pt-1 qual">What is the current air quality in {cityName}?</p>
                                        </div>
                                        <div className="col-md-1">
                                            <IoIosArrowDown style={{
                                                fontSize: '23px'
                                            }} />
                                        </div>
                                    </div>

                                    <div className="row pl-5 pr-3 mt-3">

                                        <div className="col-md-3 tab" ><p onClick={() => Setindexoverview(0)} className="text-center tab-active"
                                            style={{
                                                backgroundColor: indexoverview == 0 ? ` ${enviromets?.pollution?.aqiLevelWithDescUs?.color}` : "",
                                                borderTopRightRadius: '10px',
                                                borderTopLeftRadius: '10px',
                                                fontSize: '14.3px',
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: '500'
                                            }} >Air Quality</p></div>
                                        <div className="col-md-3 tab"><p onClick={() => Setindexoverview(1)} className="text-center tab-active" style={{
                                            backgroundColor: indexoverview == 1 ? ` ${enviromets?.pollution?.aqiLevelWithDescUs?.color}` : "",
                                            borderTopRightRadius: '10px',
                                            borderTopLeftRadius: '10px',
                                            fontSize: '14.3px',
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: '500'
                                        }}>Weather</p></div>
                                        {/* 
                                            <div className="col-md-3 tab"><p onClick={() => Setindexoverview(2)} className="text-center tab-active1" style={{ backgroundColor: indexoverview == 2 ? '#FBBA6E' : "" }}>Historical Data</p></div>
                                            <div className="col-md-3 tab"><p onClick={() => Setindexoverview(3)} className="text-center tab-active1" style={{ backgroundColor: indexoverview == 3 ? '#E75A58' : "" }}>Historical Graph</p></div> 
                                        */}
                                        <hr style={{
                                            marginTop: '-15.5px',
                                            width: '710px',
                                            color:'#C8C8C8'
                                        }} />
                                    </div>
                                    {indexoverview == 0 ?
                                        <div>

                                            <div className="row pl-5 pr-5 mt-3">
                                                <div className="card"
                                                    style={{
                                                        width: '50vw',
                                                        boxShadow: '0px 0px 10px 0px #00000040',
                                                        borderRadius: '10px'
                                                    }}>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="justify-content-center">
                                                                    <p id="textchange">Air Pollution Level</p>
                                                                    <div style={{
                                                                        borderLeft: '1px solid #CECECE',
                                                                        height: '70px',
                                                                        position:'absolute',
                                                                        top:'3px',
                                                                        left:'200px'
                                                                    }}></div> 
                                                                    <p style={{
                                                                        // fontSize: '15px',
                                                                        marginTop: '-12px',
                                                                        paddingLeft: '15px',
                                                                    }} className="pointtext">{enviromets?.pollution?.aqiLevelWithDescUs?.concernLevel}</p>

                                                                </div>

                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="justify-content-center">
                                                                    <p id="textchange">Air Quality Index</p>
                                                                    <div style={{
                                                                        borderLeft: '1px solid #CECECE',
                                                                        height: '70px',
                                                                        position:'absolute',
                                                                        top:'3px',
                                                                        left:'200px'
                                                                    }}></div> 
                                                                    <p style={{
                                                                        
                                                                        marginTop: '-12px',
                                                                        paddingLeft: '25px'
                                                                    }} className="pointtext">{enviromets?.pollution?.aqiUs} US AQI</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="justify-content-center">
                                                                    <p id="textchange">Main Pullutant</p>
                                                                    <p 
                                                                    className="pointtext"
                                                                    style={{
                                                                       
                                                                        marginTop: '-12px',
                                                                        paddingLeft: '15px'
                                                                    }}>{enviromets?.pollution?.mainUs}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row pl-5 pr-5 mt-3" style={{
                                                marginLeft: '-20px'
                                            }}>
                                                <div className="col-md-6">
                                                    <div className="card" style={{
                                                        boxShadow: '0px 0px 10px 0px #00000040',
                                                        borderRadius: '10px',
                                                        height: "200px"

                                                    }}>
                                                        <div className="card-body">
                                                            <div>
                                                                <p style={{
                                                                    marginTop: '10px',
                                                                    marginLeft: '15px'
                                                                }}><b>Description</b></p>
                                                                <ul>
                                                                    <li>
                                                                        {enviromets?.pollution?.aqiLevelWithDescUs?.aqDesc}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card" style={{
                                                        boxShadow: '0px 0px 10px 0px #00000040',
                                                        borderRadius: '10px',
                                                        height: "200px"

                                                    }}>
                                                        <div className="card-body">
                                                            <div>
                                                                <p><b>Who needs to be concerned?</b></p>
                                                                <ul>
                                                                    <li>
                                                                        {enviromets?.pollution?.aqiLevelWithDescUs?.concernedPeople}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        :
                                        indexoverview == 1 ?
                                            <>

                                                <div className="row pl-4 pr-4 mt-3 ml-2">
                                                    <div className="col-md-8">
                                                        <p><b>Weather</b></p>
                                                        <hr style={{
                                                            width: '670px'
                                                        }} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p><b> {weather_data[`${enviromets?.weather?.ic}`]}</b></p>
                                                    </div>
                                                </div>
                                                <div className="row pl-4 pr-4 mt-3 ml-2">
                                                    <div className="col-md-8">
                                                        <p>Temperature</p>
                                                        <hr style={{
                                                            width: '670px'
                                                        }} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-5">{enviromets?.weather?.tp}°C</div>
                                                            <div className="col-md-3">
                                                                <img src={`../assets/ico/${enviromets?.weather?.ic}.png`} style={{ height: '25px' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row pl-4 pr-4 mt-3 ml-2">
                                                    <div className="col-md-8">
                                                        <p>Humidity</p>
                                                        <hr style={{
                                                            width: '670px'
                                                        }} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-5">{enviromets?.weather?.hu}%</div>
                                                            <div className="col-md-3"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row pl-4 pr-4 mt-3 ml-2">
                                                    <div className="col-md-8">
                                                        <p>Wind</p>
                                                        <hr style={{
                                                            width: '670px'
                                                        }} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-5">{enviromets?.weather?.wd}km/h</div>
                                                            <div className="col-md-3"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row pl-4 pr-4 mt-3 ml-2">
                                                    <div className="col-md-8">
                                                        <p>Pressure</p>
                                                        <hr style={{
                                                            width: '670px'
                                                        }} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-6">{enviromets?.weather?.pr}hpa</div>
                                                            <div className="col-md-3"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>

                                            :
                                            indexoverview == 2 ? <>

                                                <div className="card" style={{
                                                    boxShadow: '0px 0px 10px 0px #00000040',
                                                    borderRadius: '20px'
                                                }}>
                                                    <div className="card-body">
                                                        <div className="row pl-4 pr-4 mt-3 ml-2">
                                                            <div className="col-md-8">
                                                                <p><b>Timestamp</b></p>
                                                                <hr style={{
                                                                    width: '670px'
                                                                }} />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <p><b>2022-09-24T01:00:00.000Z</b></p>
                                                            </div>
                                                        </div>
                                                        <div className="row pl-4 pr-4 mt-3 ml-2">
                                                            <div className="col-md-8">
                                                                <p>AQI value based on US EPA standard</p>
                                                                <hr style={{
                                                                    width: '670px'
                                                                }} />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="row">
                                                                    <div className="col-md-4">42</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : indexoverview == 3 ? <>
                                                <div className="card" style={{
                                                    boxShadow: '0px 0px 10px 0px #00000040',
                                                    borderRadius: '20px',
                                                    padding: '20px'
                                                }}>
                                                    <Line
                                                        data={{
                                                            // x-axis label values
                                                            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                                            datasets: [
                                                                {
                                                                    label: "# of Calories Lost",
                                                                    // y-axis data plotting values
                                                                    data: [200, 300, 1300, 520, 2000, 350, 150],
                                                                    fill: false,
                                                                    borderWidth: 4,
                                                                    backgroundColor: "rgb(255, 99, 132)",
                                                                    borderColor: 'green',
                                                                    responsive: true
                                                                },
                                                            ],
                                                        }}
                                                    />
                                                </div>
                                            </> : ""
                                    }

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="card" style={{
                                boxShadow: '0px 0px 10px 0px #00000040',
                                height: '85vh',
                                overflowY: 'scroll'
                            }}>
                                <div className="card-body">
                                    <p style={{ color: "#5EB23F" }}><b>Live {cityName} AQI Ranking</b></p>
                                    <p><b>Live {cityName} AQI Ranking</b></p>
                                    <div className="row mt-3">
                                        <div className="col-md-5 text-center tab"><p>{cityName}</p></div>
                                        <div className="col-md-5  text-right tab"><p>All City</p></div>
                                        <hr style={{
                                            width: '260px'
                                        }} />
                                    </div>

                                    <div className="row">

                                        <div className="col-md-3" >
                                            <p style={{ fontFamily: "inter", fontSize: "15px", fontWeight: '400' }}><b>SL.No</b></p>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <p><b>City</b></p>
                                        </div>
                                        <div className="col-md-3">
                                            <p><b>US AQI</b></p>
                                        </div>

                                    </div>

                                    <Rightcity index={1} cityName={`jcfvbh`} aql={89} />



                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


                <Footer />

            </div>
        </>
    )
}
export default Dashbaord
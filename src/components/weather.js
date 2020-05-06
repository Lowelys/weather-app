import React from "react";
import "./../App.css"

let Info = (props) =>{

    return(<>
            { props.data.temp && <div className="infoWeath">
                <p>температура, °C: {props.data.temp}</p>
                <p>давление, мбар: {props.data.pressure}</p>
                <p>влажность, %: {props.data.humidity}</p>
                <p>скорость ветра, м/с: {props.data.windSpeed}</p>
            </div> }
        </>
    )
}

export default Info;
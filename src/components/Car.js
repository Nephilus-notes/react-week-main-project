import { Link } from 'react-router-dom'

export default function Car(props) {

    function buildTitleLink() {
        if (props.showLink) {
            return ( <h3><Link to={ `/inventory/${ props.car.uid }/${ props.car.id }` }>{ props.car.name }</Link></h3>)
        } else {
           return <h3>{ props.car.name }</h3>
        }
    }

    return (
        <div className="Car">
        { buildTitleLink() }
        <h4>Selling Price: ${ props.car.selling_price }</h4>
        <h4>Car Info:</h4>
        <p><strong>Year: </strong>{ props.car.year } | <strong> Mileage: </strong>{ props.car.km_driven }km
         | <strong> Seats:</strong> { props.car.seats }</p>
        <p><strong>Transmission Type:</strong> { props.car.transmission } | 
        <strong> Fuel Type:</strong> { props.car.fuel } | <strong>KMPL: </strong> { props.car.mileage }</p>
        <p><strong>Engine Type:</strong> { props.car.engine } |
        <strong> Max Horsepower :</strong> { props.car.max_power } |
        <strong> Torque: </strong> { props.car.torque }
        </p>
        <h4>Seller Info:</h4>
        <p><strong> Seller Type:</strong> { props.car.seller_type } | <strong>Owner:</strong> { props.car.owner }</p>
        <p><small>Name {props.car.username} </small></p></div>
    )}
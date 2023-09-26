const Route = ({route}) => {

    return (
        <div id="route">
            <p> {route.routeName} </p>
            <p> {route.distance} </p>
            <p> 3 hours </p>
            <p> {route.orders.length} </p>
        </div>
    )
}

export default Route;

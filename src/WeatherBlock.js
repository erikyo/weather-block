import { useCallback, useEffect, useState } from '@wordpress/element';
import { Loading } from './Loading';
import { WeatherDay } from './WeatherDay';
import { icons } from './assets/icons.js';
import './style.scss';

/**
 * WeatherBlock component that displays the weather for the current location
 *
 * @param { Object } props the block props
 * @param { string } props.lat the latitude of the location
 * @param { string } props.lon the longitude of the location
 * @param { number } props.daysDisplayed the amount of days forecast to display
 * @return { JSX.Element } the weather block
 */
export function WeatherBlock( { lat, lon, daysDisplayed = 1 } ) {
	const [ weatherData, setWeatherData ] = useState();
	const [ weatherLocation, setWeatherLocation ] = useState( {
		lat,
		lon,
	} );

	/**
	 * Utility function to fetch the location of the user
	 */
	const fetchLocation = useCallback( () => {
		// get the current location using geolocation api
		fetch( 'http://ip-api.com/json/', {
			'Access-Control-Allow-Origin': window.location.host,
		} )
			.then( ( res ) => res.json() )
			.then( ( response ) => {
				// then set the location
				if ( response.lat && response.lon ) {
					// set the location
					setWeatherLocation( {
						lat: Number( response.lat ),
						lon: Number( response.lon ),
					} );
				}
			} );
	}, [] );

	/**
	 * If the location changes and latitude and longitude are null fetch the location of the user
	 * otherwise set the current location
	 */
	useEffect( () => {
		// get the current location
		if ( ! lat || ! lon ) {
			fetchLocation();
		} else {
			setWeatherLocation( { lat, lon } );
		}
	}, [ lat, lon ] );

	/**
	 * If the location is set and latitude and longitude are not null, fetch the weather data
	 */
	useEffect( () => {
		if ( ! weatherLocation.lat || ! weatherLocation.lon ) {
			fetchLocation();
			return;
		}

		// convert object to url params
		const args = new URLSearchParams( {
			latitude: weatherLocation.lat,
			longitude: weatherLocation.lon,
			daily: 'weather_code',
			timezone: 'GMT',
			forecast_days: daysDisplayed,
		} );

		// get the weather data
		fetch( 'https://api.open-meteo.com/v1/forecast?' + args.toString(), {
			'Access-Control-Allow-Origin': window.location.host,
		} )
			.then( ( res ) => res.json() )
			.then( ( response ) => {
				// set the weather data
				setWeatherData( response );
			} );
	}, [ weatherLocation, daysDisplayed ] );

	return weatherLocation && weatherData ? (
		<div className="wp-block-blocchi-weather-block">
			{ weatherData.daily.time.map( ( currentDate, index ) => (
				<WeatherDay
					key={ index }
					weatherCode={ weatherData.daily.weather_code[ index ] }
					date={ currentDate }
					icon={ icons[ weatherData.daily.weather_code[ index ] ] }
				/>
			) ) }
		</div>
	) : (
		<Loading />
	);
}

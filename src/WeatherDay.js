import { getWeatherCode } from './utils';

/**
 * This component displays the weather for the day
 * @param {number} weatherCode the weather code
 * @param {string} date the current date
 * @param {string} icon the weather icon url
 * @return {JSX.Element} the weather for the day
 */
export const WeatherDay = ( { weatherCode, date, icon } ) => {
	const weather = getWeatherCode( weatherCode );

	return (
		<div className="weather_item">
			<img
				className="weather_item__icon"
				alt={ `${ weather } icon` }
				src={ icon }
			/>
			<p className="weather_item__title">{ weather }</p>
			<p className="weather_item__date_label">{ date }</p>
		</div>
	);
};

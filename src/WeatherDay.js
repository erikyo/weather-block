import { getWeatherCode } from './utils';
import { format } from '@wordpress/date';

/**
 * This component displays the weather for the day
 * @param {Object} props the Weather Day props
 * @param {number} props.weatherCode the weather code
 * @param {string} props.date the current date
 * @param {number} props.tempMin max temperature for the day
 * @param {number} props.tempMax min temperature for the day
 * @param {string} props.icon the weather icon
 * @return {JSX.Element} the weather for the day
 */
export const WeatherDay = ( { weatherCode, date, tempMin, tempMax, icon } ) => {
	const weather = getWeatherCode( weatherCode );
	const formattedDate = format( 'D d M', date );
	const day = format( 'D', date ).toLowerCase();

	return (
		<div
			className={ `weather_item weather_code--${ weatherCode } weather_day--${ day }` }
		>
			<p className="weather_item__date_label">{ formattedDate }</p>
			<img
				className="weather_item__icon"
				alt={ `${ weather } icon` }
				src={ icon }
			/>
			<p className="weather_item__title">{ weather }</p>
			<p className="weather_item__temp">
				<span className="weather_item__temp_min">
					{ tempMin } <span>°C</span>
				</span>
				/
				<span className="weather_item__temp_max">
					{ tempMax } <span>°C</span>
				</span>
			</p>
		</div>
	);
};

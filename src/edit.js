/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	Toolbar,
	ToolbarDropdownMenu,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { WeatherBlock } from './WeatherBlock';
import { calendar, mapMarker } from '@wordpress/icons';
import { useState } from '@wordpress/element';

/**
 * Event Meta block component:
 * Displays the link to the event
 *
 * @param {Object}   props               BlockEditProps < { metaKey: string } >	The block props
 * @param {boolean}  props.attributes    Whether the block is selected
 * @param {Function} props.setAttributes The block context
 * @return {JSX.Element}								              The link block
 */
export default function Edit( { attributes, setAttributes } ) {
	const { lat, lon, daysDisplayed } = attributes;
	const [ locationMode, setLocationMode ] = useState(
		lat && lon ? 'custom' : 'auto'
	);

	const displayedEventsOptions = [
		{
			title: '1 day',
			onClick: () => setAttributes( { daysDisplayed: 1 } ),
		},
		{
			title: '3 days',
			onClick: () => setAttributes( { daysDisplayed: 3 } ),
		},
		{
			title: '7 days',
			onClick: () => setAttributes( { daysDisplayed: 7 } ),
		},
		{
			title: '14 days',
			onClick: () => setAttributes( { daysDisplayed: 14 } ),
		},
	];

	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<BlockControls>
				<Toolbar label="Options">
					<ToolbarDropdownMenu
						icon={ calendar }
						label="Select a direction"
						controls={ displayedEventsOptions }
						onChange={ ( newDays ) =>
							setAttributes( { daysDisplayed: newDays } )
						}
					/>
				</Toolbar>
			</BlockControls>

			<InspectorControls key="setting">
				<PanelBody
					title={ __( 'Options', 'weather-block' ) }
					icon={ mapMarker }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Location Mode', 'weather-block' ) }
						value={ locationMode }
						options={ [
							{
								label: __( 'Auto', 'weather-block' ),
								value: 'auto',
							},
							{
								label: __( 'Custom', 'weather-block' ),
								value: 'custom',
							},
						] }
						onChange={ ( newMode ) => {
							setLocationMode( newMode );
							if ( newMode === 'auto' ) {
								setAttributes( {
									lat: false,
									lon: false,
								} );
							}
						} }
					/>
					{ locationMode === 'custom' && (
						<>
							<TextControl
								type={ 'number' }
								label={ __( 'Latitude', 'weather-block' ) }
								value={ lat ?? 0.0 }
								min={ -90 }
								max={ 90 }
								onChange={ ( newLat ) =>
									setAttributes( {
										...attributes,
										lat: newLat,
									} )
								}
							/>
							<TextControl
								type={ 'number' }
								label={ __( 'Longitude', 'weather-block' ) }
								value={ lon ?? 0.0 }
								min={ -180 }
								max={ 180 }
								onChange={ ( newLon ) =>
									setAttributes( {
										...attributes,
										lon: newLon,
									} )
								}
							/>
						</>
					) }
				</PanelBody>
			</InspectorControls>

			<WeatherBlock
				lat={ lat }
				lon={ lon }
				daysDisplayed={ daysDisplayed }
			/>
		</div>
	);
}

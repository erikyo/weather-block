import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * In this case, it renders a <div> element with the content of the block
 * @param {Object} props The save props
 * @param {Object} props.attributes The block attributes
 * @return {JSX.Element} The save element
 */
export default function save( { attributes } ) {
	const { daysDisplayed, lat, lon } = attributes;
	return (
		<div
			{ ...useBlockProps.save() }
			data-days-displayed={ daysDisplayed }
			data-lat={ lat }
			data-lon={ lon }
		/>
	);
}

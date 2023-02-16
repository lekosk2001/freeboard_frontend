import ProductAdd_presenter from "./ProductAdd_presenter";

interface Props {
	isEditing: boolean
}

export default function ProductAdd_container(
	props: Props
) {
	return (
		<ProductAdd_presenter isEditing={props.isEditing}></ProductAdd_presenter>

	);
}
import { useState } from "react";
import ProductAdd_presenter from "./ProductAdd_presenter";

interface Props {
	isEditing: boolean
}

export default function ProductAdd_container(props: Props) {
	const [files, setfles] = useState<File[]>([])

	return (
		<ProductAdd_presenter isEditing={props.isEditing}
			setfles={setfles}
			files={files} />

	);
}
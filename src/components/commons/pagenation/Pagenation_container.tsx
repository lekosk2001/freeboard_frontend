import React, { useState } from 'react';
import Pagenation_presenter from './Pagenation_presenter';

interface Props {
	refetch: (arg0: { page: number }) => any;
	count: number;
}

const Pagenation_container = (props: Props) => {
	const [pageNumber] = useState(10);
	const [startPage, setStartPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

	const onClickPage = (e: React.MouseEvent<HTMLDivElement>) => {
		setCurrentPage(Number(e.currentTarget.id));
		void props.refetch({ page: Number(e.currentTarget.id) });
	};

	const onClickPrev = () => {
		if (startPage > pageNumber) {
			setStartPage(startPage - pageNumber);
			void props.refetch({ page: startPage - pageNumber });
			setCurrentPage(startPage - pageNumber);
		}
	};

	const onClickNext = () => {
		if (startPage + pageNumber <= lastPage) {
			setStartPage(startPage + pageNumber);
			void props.refetch({ page: startPage + pageNumber });
			setCurrentPage(startPage + pageNumber);
		}
	};

	return (
		<Pagenation_presenter
			startPage={startPage}
			currentPage={currentPage}
			pageNumber={pageNumber}
			lastPage={lastPage}
			onClickPage={onClickPage}
			onClickPrev={onClickPrev}
			onClickNext={onClickNext}
			refetch={props.refetch}
		></Pagenation_presenter>
	);
};

export default Pagenation_container;

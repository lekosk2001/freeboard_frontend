import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import { PageButton, PageButtons } from './Pagenation_styles';

interface Props {
	refetch: (arg0: { page: number }) => void;
	startPage: number;
	currentPage: number;
	pageNumber: number;
	lastPage: number;
	onClickPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickNext: () => void;
	onClickPrev: () => void;
}
const Pagenation_presenter = (props: Props) => {

	return (
		<PageButtons>
			<LeftOutlined
				disabled={props.startPage === 1}
				onClick={props.onClickPrev}
				style={{
					padding: '5px',
					color: props.startPage === 1 ? '#BDBDBD' : 'inherit',
				}}
			/>

			{new Array(props.pageNumber).fill(1).map((_, index) => {
				if (props.startPage + index <= props.lastPage) {
					return (
						<PageButton
							key={String(props.startPage + index)}
							onClick={props.onClickPage}
							id={String(props.startPage + index)}
							active={
								index + props.startPage === props.currentPage
							}
						>
							{props.startPage + index}
						</PageButton>
					);
				} else {
					return <Fragment key={String(props.startPage + index)}></Fragment>;
				}
			})}

			<RightOutlined
				onClick={props.onClickNext}
				style={{
					padding: '5px',
					color:
						props.startPage + props.pageNumber > props.lastPage
							? '#BDBDBD'
							: 'inherit',
				}}
				disabled={props.startPage + props.pageNumber > props.lastPage}
			/>
		</PageButtons>
	);
};

export default Pagenation_presenter;

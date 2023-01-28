import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { PageButton, PageButtons } from './Pagenation_styles';

interface Props {
  refetch: any;
  count: number;
}

const Pagenation = (props: Props) => {
  const [pageNumber] = useState(5);
  const [startPage, setStartPage] = useState(1);
  const [, setCurrentPage] = useState(1);

  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurrentPage(Number(e.currentTarget.id));
    void props.refetch({ page: Number(e.currentTarget.id) });
  };

  const onClickPrev = () => {
    if (startPage > pageNumber) {
      setStartPage(startPage - pageNumber);
      void props.refetch({ page: startPage - pageNumber });
    }
  };

  const onClickNext = () => {
    if (startPage + pageNumber <= lastPage) {
      setStartPage(startPage + pageNumber);
      void props.refetch({ page: startPage + pageNumber });
    }
  };

  console.log(
    `lastPage : ${lastPage}, startPage : ${startPage}, pageNumber : ${pageNumber}`
  );
  return (
    <PageButtons>
      <LeftOutlined
        disabled={startPage === 1}
        onClick={onClickPrev}
        style={{
          padding: '5px',
          color: startPage === 1 ? '#BDBDBD' : 'inherit',
        }}
      />

      {new Array(pageNumber).fill(1).map((_, index) => {
        if (startPage + index <= lastPage) {
          return (
            <PageButton
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </PageButton>
          );
        } else {
          return <></>;
        }
      })}

      <RightOutlined
        onClick={onClickNext}
        style={{
          padding: '5px',
          color: startPage + pageNumber > lastPage ? '#BDBDBD' : 'inherit',
        }}
        disabled={startPage + pageNumber > lastPage}
      />
    </PageButtons>
  );
};

export default Pagenation;

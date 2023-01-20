import { useQuery } from '@apollo/client';
import BoardList_presenter from './BoardList_presenter'
import { FETCH_BOARDS } from './BoardList_queries';
import { useRouter } from 'next/router'

export default function BoardList_container() {
  
	const router = useRouter();

  const {data} = useQuery(FETCH_BOARDS,{
    variables:{
      page:1
    }
});


  const onClickBoardNew = () =>{
    router.push(`/boards/new`)
  }

  const onClickBoardDetail = (id) =>{
    router.push(`/boards/${id}`)
  }

  return (
    <BoardList_presenter
      data={data}
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
    />
  )
}

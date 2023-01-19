import { useQuery } from '@apollo/client';
import BoardList_presenter from './BoardList_presenter'
import { FETCH_BOARDS } from './BoardList_queries';

export default function BoardList_container() {
  const {data} = useQuery(FETCH_BOARDS,{
    variables:{
      page:1
    }
});

  return (
    <BoardList_presenter data={data}/>
  )
}

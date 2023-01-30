import { app } from '@/src/commons/firebase/firebaseSettings'
import { Button, Card, Input } from 'antd'
import { collection, addDoc, getDocs, getFirestore, query, orderBy, type DocumentData } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'


const index = () => {
    const { TextArea } = Input;
    const [data, setData] = useState<DocumentData>();

    const onclickSubmit = async () => {
        const board = collection(getFirestore(app), "board")
        await addDoc(board, {
            writer: input.writer,
            title: input.title,
            contents: input.contents,
            createdAt: new Date()
        })
        console.log(board)
    }

    const [input, setInput] = useState({
        writer: "",
        title: "",
        contents: ""
    })
    const onChangeInput = (e: any) => {
        setInput({ ...input, [e.target.id]: e.target.value })
        console.log(e.target.id + " : " + e.target.value)
    }

    useEffect(() => {
        // DocumentData

        const onFetch = async () => {
            const board = collection(getFirestore(app), "board")

            const result = await getDocs(query(board, orderBy("createdAt", "desc")))

            const items = result.docs.map(item => item.data());

            setData(items)

            console.log(items);
        }

        void onFetch()

    }, [])

    return (

        <div>
            {data?.map((item: any, i: number) => {
                return <Card key={item.createdAt} style={{ marginBottom: "20px" }}
                    title={item.writer}>
                    {item.title + " " + (i + 1)}
                </Card>
            }
            )}
            <Input id='title' onChange={onChangeInput} placeholder="제목" />
            <Input id='writer' onChange={onChangeInput} placeholder="작성자" />
            <TextArea id='contents' onChange={onChangeInput} placeholder="내용" rows={4} maxLength={6} />
            <Button onClick={onclickSubmit}>등록하기</Button>
        </div>
    )
}

export default index


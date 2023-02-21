import { useMutation } from '@apollo/client';
import { Button, Modal } from 'antd';
import { type ChangeEvent, useRef } from 'react';
import { UPLOAD_FILE } from '../../units/write/BoardWrite_queries';
import { checkFileValidation } from '../checkFileValidation';

interface Props {
    imgUrl: string,
    index: number,
    onChangeFileUrls: (fileUrl: string, index: number) => void;
}

const CustomUplaod = (props: Props) => {

    const fileRef = useRef<HTMLInputElement>(null)

    const onClickFile = () => {
        fileRef.current?.click()
    }

    const [uploadFile] = useMutation(UPLOAD_FILE);

    const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const isValid = checkFileValidation(file);
        if (!isValid) { return }
        if (isValid) {
            try {
                const result = await uploadFile({
                    variables: {
                        file
                    }
                })
                props.onChangeFileUrls(result.data.uploadFile.url, props.index)
            } catch (error) {
                if (error instanceof Error) {
                    Modal.error({ content: error.message })
                }
            }
        }
    }

    return (
        <>
            {props.imgUrl &&
                <>
                    <div
                        style={{ border: "1px solid #bdbdbd", cursor: "pointer", maxWidth: "180px", maxHeight: "180px" }}>
                        <img src={`https://storage.googleapis.com/${props.imgUrl}`}
                            onClick={onClickFile}
                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                        />
                    </div>

                    <input
                        id={String(props.index)}
                        style={{ display: "none" }}
                        ref={fileRef}
                        onChange={onChangeFile}
                        type="file"
                    />
                </>

            }
            {!props.imgUrl &&
                <div key={props.imgUrl + props.index}>
                    <Button style={{ width: "180px", height: "180px" }} onClick={onClickFile}>사진 업로드</Button>
                    <input
                        id={String(props.index)}
                        style={{ display: "none" }}
                        ref={fileRef}
                        onChange={onChangeFile}
                        type="file"
                    />
                </div>
            }
        </>
    )
}

export default CustomUplaod
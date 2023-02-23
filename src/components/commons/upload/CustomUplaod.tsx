import { Button } from 'antd';
import { type ChangeEvent, useRef, type Dispatch, type SetStateAction } from 'react';
import { checkFileValidation } from '../checkFileValidation';

interface Props {
    imgUrl: string,
    index: number,
    onChangeFileUrls: (fileUrl: string, index: number) => void;
    files: File[]
    setfles: Dispatch<SetStateAction<File[]>>
}

const CustomUplaod = (props: Props) => {
    const fileRef = useRef<HTMLInputElement>(null)

    const onClickFile = () => {
        fileRef.current?.click()
    }

    const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        if (!file) { return }

        const isValid = checkFileValidation(file);
        if (!isValid) { return }

        if (isValid) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (e) => {
                if (typeof e.target?.result === "string") {
                    props.onChangeFileUrls(e.target.result, props.index)
                    props.setfles([file])

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
                        <img src={props.imgUrl}
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
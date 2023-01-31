import { Modal } from "antd"


export const checkFileValidation = (file?:File) =>{

    if (!file?.size) {
        Modal.error({ content: "파일이 없습니다." })
        return false
    }
    
    if (file?.size > 5 * 1024 * 1024) {
        Modal.error({ content: "파일이 너무 큽니다. (최대 5mb)" })
        return false
    }
    
    if (!file.type.includes("jpg")&&!file.type.includes("jpeg")&&!file.type.includes("png")){
        
        Modal.error({ content: "jpg/jpeg/png 파일만 업로드 할 수 있습니다." })
        return false
    }
    
    return true
    
}

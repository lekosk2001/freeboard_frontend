import { type RcFile } from "antd/es/upload";

export const dateFormat = (createdAt: any) => {
	const date = new Date(createdAt);
	return new Intl.DateTimeFormat('kr-KO').format(date);
};

export const getBase64 = async (file: RcFile): Promise<string> =>
	await new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => { resolve(reader.result as string); };
		reader.onerror = (error) => { reject(error); };
	});

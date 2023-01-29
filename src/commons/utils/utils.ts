export const dateFormat = (createdAt: any) => {
	const date = new Date(createdAt);
	return new Intl.DateTimeFormat('kr-KO').format(date);
};

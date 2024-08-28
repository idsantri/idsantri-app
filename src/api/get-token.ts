import authStore from 'stores/auth-store';

const getToken = (): string => {
	const auth = authStore();
	const token =
		auth.getToken && (auth.getToken as string).length > 0
			? auth.getToken
			: 'FAIL TO GET TOKEN';
	return token;
};

export default getToken;

const useFetch = (
	urlBase = 'https://homework-18-1123c-default-rtdb.europe-west1.firebasedatabase.app/') => {
	const postHandler = (url, formData) => {
		return fetch(`${urlBase} ${url}`, {
			method: 'POST',
			body: JSON.stringify(formData),
		});
	};
	const getHanler = (url) => {
		return fetch(`${urlBase} ${url}`)
        .then((response) => response.json());
	};

	return {
		postHandler,
		getHanler,
	};
};

export default useFetch;
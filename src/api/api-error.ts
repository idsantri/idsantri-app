import axios from 'axios';
import { buildTextError } from 'src/utils/array-object';
import { notifyError } from 'src/utils/notify';

function apiError(error: unknown): void {
	// Check for axios.AxiosError type
	if (axios.isAxiosError(error)) {
		if (error.response) {
			const message = error.response.data?.message;
			if (message) {
				notifyError(buildTextError(message));
			} else {
				console.log(
					`Response error during ${error.config?.method?.toUpperCase()} ${error.config?.url}`,
					error,
				);
			}
		} else {
			// Handle general error, e.g., network error
			console.error(
				`General error during ${error.config?.method?.toUpperCase()} ${error.config?.url}`,
				error,
			);
		}
	} else {
		// Handle unexpected error types
		console.error('Unexpected error: ', error);
	}
}
export default apiError;

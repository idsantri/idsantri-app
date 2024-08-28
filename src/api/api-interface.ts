import { Ref } from 'vue';

interface GetParams {
	endPoint: string;
	loading?: Ref<boolean>;
	params?: object;
	notify?: boolean;
}

interface PostParams extends GetParams {
	data: object;
	confirm?: boolean;
	message?: string;
}

interface UpdateParams extends GetParams {
	data: object;
	confirm?: boolean;
	message?: string;
}

interface DeleteParams extends GetParams {
	message?: string;
}

interface DownloadParams extends GetParams {
	fileName?: string;
	confirm?: boolean;
	message?: string;
}

interface ListsParams {
	key: string;
	loading?: Ref<boolean>;
	loadingArray?: Ref<Record<string, boolean>>;
	sort?: boolean | 'asc' | 'desc' | null;
	url?: string;
}

interface ListsCustomParams extends ListsParams {
	params?: object;
	url: string;
}

export {
	GetParams,
	PostParams,
	UpdateParams,
	DeleteParams,
	DownloadParams,
	ListsParams,
	ListsCustomParams,
};

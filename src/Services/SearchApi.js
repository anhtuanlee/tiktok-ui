import * as httpRequest from '../untils/httpRequest';

export const SearchApi = async (q, type = 'less') => {
    const result = await httpRequest.get('users/search', {
        params: {
            q,
            type,
        },
    });
    return result;
};

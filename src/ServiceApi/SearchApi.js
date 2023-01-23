import * as request from '../untils/index';

export const SearchApi = async (q, type = 'less') => {
    const result = await request.get('users/search', {
        params: {
            q,
            type,
        },
    });
    return result;
};

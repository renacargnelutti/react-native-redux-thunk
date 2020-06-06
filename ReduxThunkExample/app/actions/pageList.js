
import { GET_PAGE_LIST } from '../constants/index';

export function setPageList(payload) {
    return {
        type: GET_PAGE_LIST,
        payload,
    };
};

export function getPageList() {
    return async (dispatch) => {
        try {
            const apiReq = await fetch('http://dummy.restapiexample.com/api/v1/employees', {
                method: 'GET'
            });

            let data = await apiReq.json()
            const payload = { employees: data.data };

            await dispatch(setPageList(payload));

            return apiReq || [];
        } catch (error) {
            console.error(error);
        }
    };
};

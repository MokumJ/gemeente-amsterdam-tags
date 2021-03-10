import { ApiDataEndpointConfig } from 'react-api-data';

const BASE_URL = 'https://603f90f7d9528500176054aa.mockapi.io';

//define api endpoints

export type EndpointConfigMap<T extends string> = {
    [key in T]: ApiDataEndpointConfig;
};
export type Endpoints = 'getLists' | 'createList' | 'createTag' | 'deleteList' | 'deleteTag';

export const endpointConfig: EndpointConfigMap<Endpoints> = {
    getLists: {
        url: `${BASE_URL}/list`,
        method: 'GET',
    },
    createList: {
        url: `${BASE_URL}/list`,
        method: 'POST',
    },
    createTag: {
        url: `${BASE_URL}/list/:listId/tag`,
        method: 'POST',
    },
    deleteList: {
        url: `${BASE_URL}/list/:listId`,
        method: 'DELETE',
    },
    deleteTag: {
        url: `${BASE_URL}/list/:listId/tag/:tagId`,
        method: 'DELETE',
    },
};

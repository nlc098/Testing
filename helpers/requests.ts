import { request, expect } from '@playwright/test';

const baseURL = 'http://automationexercise.com/api';

// Check Response Code Status
export async function checkResponseCode(responseBody, responseCodeStatus) {
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(responseCodeStatus);
}

// GET Request
export async function get(endpoint, requestData = {}) {
    const apiRequestContext = await request.newContext();

    // Construct query parameters from requestData
    const queryParams = new URLSearchParams(requestData).toString();
    const urlWithParams = `${baseURL}${endpoint}?${queryParams}`;
    
    const response = await apiRequestContext.get(urlWithParams, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    console.log(`[Status: ${response.status()}] GET -> ${urlWithParams}`);

    return response;
}

// POST Request
export async function post(endpoint, requestData = {}) {
    const apiRequestContext = await request.newContext();

    const response = await apiRequestContext.post(baseURL + endpoint, {
        data: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log(`[Status: ${response.status()}] POST -> ${baseURL}${endpoint}`);

    return response;
}

// PUT Request
export async function put(endpoint, requestData = {}) {
    const apiRequestContext = await request.newContext();

    const response = await apiRequestContext.put(baseURL + endpoint, {
        data: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log(`[Status: ${response.status()}] PUT -> ${baseURL}${endpoint}`);

    return response;
}

// DELETE Request
export async function reqDelete(endpoint) {
    const apiRequestContext = await request.newContext();
    
    const response = await apiRequestContext.delete(baseURL + endpoint, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log(`[Status: ${response.status()}] DELETE -> ${baseURL}${endpoint}`);

    return response;
}

export async function reqDeleteAccount(endpoint, requestData = {}) {
    const apiRequestContext = await request.newContext();
    
    const response = await apiRequestContext.delete(baseURL + endpoint, {
        data: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log(`[Status: ${response.status()}] DELETE -> ${baseURL}${endpoint}`);

    return response;
}
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
}

export function successResponse<T>(data: T, message = 'Success'): ApiResponse<T> {
    return {
        success: true,
        message,
        data,
    };
}

export function errorResponse(message = 'An error occurred'): ApiResponse<null> {
    return {
        success: false,
        message,
    };
}
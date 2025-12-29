export interface UsersResponse {
    data: User[];
    meta: Meta;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isActive: boolean;
    role: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Meta {
    total: number;
    limit: number;
    offset: number;
    count: number;
    page: number;
    totalPages: number;
}
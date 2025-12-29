export interface LeadResponse {
    data: Lead[];
    meta: Meta;
}

export interface Lead {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    statusId: string;
    userId: string;
    isActive: boolean;
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
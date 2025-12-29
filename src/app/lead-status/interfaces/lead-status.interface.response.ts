export interface LeadStatusResponse {
    data: LeadStatus[];
    meta: Meta;
}

export interface LeadStatus {
    id: string;
    name: string;
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
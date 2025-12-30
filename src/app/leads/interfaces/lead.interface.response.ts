import { User } from "../../auth/interfaces/user.interface";
import { LeadStatus } from "../../lead-status/interfaces/lead-status.interface.response";

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
    leadStatusId: string;
    userId: string;
    user: User;
    leadStatus: LeadStatus;
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
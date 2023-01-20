import { MonthlyRecord } from "./MonthlyRecord.model";

export interface Account {
    departmentCode: string,
    balance: number,
    monthlyRecords: MonthlyRecord[]
}
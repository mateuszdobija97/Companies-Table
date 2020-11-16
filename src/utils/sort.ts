import { EnhancedCompany } from "../pages/CompanyPage/CompanyPage.types";

export const sort = (type: string, key: string, list: EnhancedCompany[], sortDesc: boolean) : EnhancedCompany[] => {
    let sorted: EnhancedCompany[] = [];
    switch(type) {
        case 'string':
        if (sortDesc) {
            sorted = list.sort((a: any, b: any) => {
                if (a[key].toLowerCase() < b[key].toLowerCase()) return -1;
                if (a[key].toLowerCase() > b[key].toLowerCase()) return 1;
                return 0;
            });
        } else {
            sorted = list.sort((a: any, b: any) => {
                if (b[key].toLowerCase() < a[key].toLowerCase()) return -1;
                if (b[key].toLowerCase() > a[key].toLowerCase()) return 1;
                return 0;
            });
        }
        break;
    case 'number':
        if (sortDesc) {
            sorted = list.sort((a: any, b: any) => {
                return b[key] - a[key];
            });
        } else {
            sorted = list.sort((a: any, b: any) => {
                return a[key] - b[key];
            });
        }
        break;
    }
    return sorted;
}
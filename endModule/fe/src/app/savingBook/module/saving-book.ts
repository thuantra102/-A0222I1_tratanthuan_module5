// tslint:disable-next-line:no-empty-interface
import {Customer} from './customer';

export interface SavingBook {
    id?: number;
    openingDay?: Date ;
    startDay?: Date ;
    period?: number;
    deposit?: number;
    reference?: string;
    interestRate?: number;
    customer?: Customer;
}

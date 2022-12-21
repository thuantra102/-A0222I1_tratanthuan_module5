import {Customer} from "../../CustomerList/model/customer";
import {Facility} from "../../ListFacility/model/facility";

export interface Contract {
  id? : number;
  name?: string;
  customer? : Customer;
  facility? : Facility;
  dateStart? : Date;
  dateFinish? : Date;
  deposit? : number;
}

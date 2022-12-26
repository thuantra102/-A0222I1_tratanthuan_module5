import {Customer} from "../../CustomerList/model/customer";
import {Facility} from "../../ListFacility/model/facility";

export interface Contract {
  id? : number;
  name?: string;
  customerCode? : number;
  facilityCode? : number;
  dateStart? : Date;
  dateFinish? : Date;
  deposit? : number;
}

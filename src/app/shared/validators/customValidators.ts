import { FormControl } from "@angular/forms";

export class customValidators{
  static customDomainValidator(domain : string){
    return (control : FormControl) => {
      const email = control.value as string;
      if (email && !email.endsWith(`@${domain}`) ) {
        return {invalidDomain : true}
      }
      return null;
    }
  }
}
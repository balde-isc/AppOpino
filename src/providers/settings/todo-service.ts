import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from "../../config/url.servicios";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class TodoService {
 
  constructor(public http: HttpClient) {
    
  }

  public ingresar( opinion:string, motivo:string, locacion:any){
    let body = {
      opinion: opinion,
      motivo: motivo,
      locacion:locacion
    }
    
    let url = URL_SERVICIOS + "/add";
    return this.http.post( url, body ).map( data_resp=>{
                          console.log( data_resp );
                         });
    
  }    
}
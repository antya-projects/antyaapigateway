import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { CoinAttributesMySuffix } from './coin-attributes-my-suffix.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class CoinAttributesMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/coin-attributes';

    constructor(private http: Http) { }

    create(coinAttributes: CoinAttributesMySuffix): Observable<CoinAttributesMySuffix> {
        const copy = this.convert(coinAttributes);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(coinAttributes: CoinAttributesMySuffix): Observable<CoinAttributesMySuffix> {
        const copy = this.convert(coinAttributes);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<CoinAttributesMySuffix> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to CoinAttributesMySuffix.
     */
    private convertItemFromServer(json: any): CoinAttributesMySuffix {
        const entity: CoinAttributesMySuffix = Object.assign(new CoinAttributesMySuffix(), json);
        return entity;
    }

    /**
     * Convert a CoinAttributesMySuffix to a JSON which can be sent to the server.
     */
    private convert(coinAttributes: CoinAttributesMySuffix): CoinAttributesMySuffix {
        const copy: CoinAttributesMySuffix = Object.assign({}, coinAttributes);
        return copy;
    }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { ExchangeMySuffix } from './exchange-my-suffix.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ExchangeMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/exchanges';

    constructor(private http: Http) { }

    create(exchange: ExchangeMySuffix): Observable<ExchangeMySuffix> {
        const copy = this.convert(exchange);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(exchange: ExchangeMySuffix): Observable<ExchangeMySuffix> {
        const copy = this.convert(exchange);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<ExchangeMySuffix> {
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
     * Convert a returned JSON object to ExchangeMySuffix.
     */
    private convertItemFromServer(json: any): ExchangeMySuffix {
        const entity: ExchangeMySuffix = Object.assign(new ExchangeMySuffix(), json);
        return entity;
    }

    /**
     * Convert a ExchangeMySuffix to a JSON which can be sent to the server.
     */
    private convert(exchange: ExchangeMySuffix): ExchangeMySuffix {
        const copy: ExchangeMySuffix = Object.assign({}, exchange);
        return copy;
    }
}

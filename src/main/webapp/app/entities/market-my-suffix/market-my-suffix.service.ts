import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { MarketMySuffix } from './market-my-suffix.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MarketMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/markets';

    constructor(private http: Http) { }

    create(market: MarketMySuffix): Observable<MarketMySuffix> {
        const copy = this.convert(market);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(market: MarketMySuffix): Observable<MarketMySuffix> {
        const copy = this.convert(market);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<MarketMySuffix> {
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
     * Convert a returned JSON object to MarketMySuffix.
     */
    private convertItemFromServer(json: any): MarketMySuffix {
        const entity: MarketMySuffix = Object.assign(new MarketMySuffix(), json);
        return entity;
    }

    /**
     * Convert a MarketMySuffix to a JSON which can be sent to the server.
     */
    private convert(market: MarketMySuffix): MarketMySuffix {
        const copy: MarketMySuffix = Object.assign({}, market);
        return copy;
    }
}

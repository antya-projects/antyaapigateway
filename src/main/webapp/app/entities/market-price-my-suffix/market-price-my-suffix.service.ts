import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { MarketPriceMySuffix } from './market-price-my-suffix.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MarketPriceMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/market-prices';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(marketPrice: MarketPriceMySuffix): Observable<MarketPriceMySuffix> {
        const copy = this.convert(marketPrice);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(marketPrice: MarketPriceMySuffix): Observable<MarketPriceMySuffix> {
        const copy = this.convert(marketPrice);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<MarketPriceMySuffix> {
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
     * Convert a returned JSON object to MarketPriceMySuffix.
     */
    private convertItemFromServer(json: any): MarketPriceMySuffix {
        const entity: MarketPriceMySuffix = Object.assign(new MarketPriceMySuffix(), json);
        entity.timeStamp = this.dateUtils
            .convertDateTimeFromServer(json.timeStamp);
        return entity;
    }

    /**
     * Convert a MarketPriceMySuffix to a JSON which can be sent to the server.
     */
    private convert(marketPrice: MarketPriceMySuffix): MarketPriceMySuffix {
        const copy: MarketPriceMySuffix = Object.assign({}, marketPrice);

        copy.timeStamp = this.dateUtils.toDate(marketPrice.timeStamp);
        return copy;
    }
}

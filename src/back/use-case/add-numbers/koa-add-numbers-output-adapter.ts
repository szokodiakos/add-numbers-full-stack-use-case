import koa from 'koa';

import { KoaResult } from '../../koa/koa-result';
import { AddNumbersOutputAdapter } from '../../../common/use-case/add-numbers/add-numbers-output-adapter';
import { AddNumbersOutput } from '../../../common/use-case/add-numbers/add-numbers-output';

export class KoaAddNumbersOutputAdapter implements AddNumbersOutputAdapter<KoaResult> {
    handle(output: AddNumbersOutput): KoaResult {
        return {
            status: 200,
            payload: output.sum,
        };
    }
}

import koa from 'koa';
import { AddNumbersInputAdapter } from '../../../common/use-case/add-numbers/add-numbers-input-adapter';
import { AddNumbersInput } from '../../../common/use-case/add-numbers/add-numbers-input';

export class KoaAddNumbersInputAdapter implements AddNumbersInputAdapter<koa.Context> {
    handle(ctx: koa.Context): AddNumbersInput {
        const firstNumber = +ctx.params.firstNumber;
        const secondNumber = +ctx.params.secondNumber;

        return {
            firstNumber,
            secondNumber,
        };
    }
}

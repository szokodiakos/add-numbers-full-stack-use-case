import Koa from 'koa';
import Router from 'koa-router';

import { KoaHandler } from './koa/koa-handler';
import { Controller } from '../common/controller/controller';
import { KoaAddNumbersInputAdapter } from './use-case/add-numbers/koa-add-numbers-input-adapter';
import { BackAddNumbersUseCase } from './use-case/add-numbers/add-numbers-use-case';
import { KoaAddNumbersOutputAdapter } from './use-case/add-numbers/koa-add-numbers-output-adapter';

function main() {
    const app = new Koa();

    const addNumbersKoaHandler = new KoaHandler(
        new Controller(
            new KoaAddNumbersInputAdapter(),
            new BackAddNumbersUseCase(),
            new KoaAddNumbersOutputAdapter(),
        ),
    );

    const router = new Router();

    router.get('/add-numbers', addNumbersKoaHandler.handle.bind(addNumbersKoaHandler));

    app
        .use(router.routes())
        .use(router.allowedMethods());

    app.listen(3000, () => console.log('Backend started on 3000'));
}

main();

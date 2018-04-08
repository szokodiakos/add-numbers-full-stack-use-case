import koa from 'koa';

import { Controller } from "../../common/controller/controller";
import { KoaResult } from './koa-result';
import { KoaController } from './koa-controller';

export class KoaHandler<Input, Output> {
    constructor(
        private controller: KoaController<Input, Output>
    ) {}

    handle(ctx: koa.Context) {
        const { payload, status } = this.controller.handle(ctx);
        ctx.status = status;
        ctx.body = payload;
    }
}

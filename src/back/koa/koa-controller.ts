import koa from 'koa';

import { KoaResult } from './koa-result';
import { Controller } from '../../common/controller/controller';

export type KoaController<Input, Output> = Controller<koa.Context, Input, Output, KoaResult>;

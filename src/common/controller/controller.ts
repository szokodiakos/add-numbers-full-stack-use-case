import { InputAdapter } from "../use-case/input-adapter";
import { OutputAdapter } from "../use-case/output-adapter";
import { UseCase } from "../use-case/use-case";

export class Controller<Data, Input, Output, Result> {
    constructor(
        private inputAdapter: InputAdapter<Data, Input>,
        private useCase: UseCase<Input, Output>,
        private outputAdapter: OutputAdapter<Output, Result>,
    ) {}

    handle(data: Data): Result {
        const input = this.inputAdapter.handle(data);
        const output = this.useCase.handle(input);
        const result = this.outputAdapter.handle(output);
        return result;
    }
}

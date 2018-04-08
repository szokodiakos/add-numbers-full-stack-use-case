import { AddNumbersOutputAdapter } from "../../common/use-case/add-numbers/add-numbers-output-adapter";
import { AddNumbersOutput } from "../../common/use-case/add-numbers/add-numbers-output";
import { AddNumbersStore } from "./add-numbers-store";
import { StoreSumAction } from "./add-numbers-action";

export class ReduxAddNumbersOutputAdapter implements AddNumbersOutputAdapter<void> {
    constructor(
        private store: AddNumbersStore,
    ) {}

    handle(output: AddNumbersOutput): void {
        this.store.dispatch<StoreSumAction>({ type: 'STORE_SUM', sum: output.sum });
    }
}

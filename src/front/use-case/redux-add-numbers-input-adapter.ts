import { AddNumbersInputAdapter } from "../../common/use-case/add-numbers/add-numbers-input-adapter";
import { AddNumbersInput } from '../../common/use-case/add-numbers/add-numbers-input';
import { AddNumbersStore } from "./add-numbers-store";

export class ReduxAddNumbersInputAdapter implements AddNumbersInputAdapter<void> {
    constructor(
        private store: AddNumbersStore,
    ) {}

    handle(input: void): AddNumbersInput {
        const { firstNumber, secondNumber } = this.store.getState();
        return { firstNumber, secondNumber };
    }
}

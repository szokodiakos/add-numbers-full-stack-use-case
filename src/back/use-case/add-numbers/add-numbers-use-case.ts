import { AddNumbersUseCase } from "../../../common/use-case/add-numbers/add-numbers-use-case";
import { AddNumbersInput } from "../../../common/use-case/add-numbers/add-numbers-input";
import { AddNumbersOutput } from "../../../common/use-case/add-numbers/add-numbers-output";

export class BackAddNumbersUseCase implements AddNumbersUseCase {
    handle(input: AddNumbersInput): AddNumbersOutput {
        const sum = input.firstNumber + input.secondNumber;
        return { sum };
    }
}

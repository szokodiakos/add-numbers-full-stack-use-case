import { AddNumbersUseCase } from "../../common/use-case/add-numbers/add-numbers-use-case";
import { AddNumbersInput } from "../../common/use-case/add-numbers/add-numbers-input";
import { AddNumbersOutput } from "../../common/use-case/add-numbers/add-numbers-output";

export class FrontAddNumbersUseCase implements AddNumbersUseCase {
    handle(input: AddNumbersInput): AddNumbersOutput {
        throw new Error("Method not implemented.");
    }
}

import { UseCase } from "../use-case";
import { AddNumbersInput } from "./add-numbers-input";
import { AddNumbersOutput } from "./add-numbers-output";

export interface AddNumbersUseCase extends UseCase<AddNumbersInput, AddNumbersOutput> {}

import { OutputAdapter } from "../output-adapter";
import { AddNumbersOutput } from "./add-numbers-output";

export interface AddNumbersOutputAdapter<Result> extends OutputAdapter<AddNumbersOutput, Result> {}

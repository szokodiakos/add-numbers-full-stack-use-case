export interface OutputAdapter<Output, Result> {
    handle(output: Output): Result;
}

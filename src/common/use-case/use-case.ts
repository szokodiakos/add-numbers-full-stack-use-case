export interface UseCase<Input, Output> {
    handle(input: Input): Output;
}

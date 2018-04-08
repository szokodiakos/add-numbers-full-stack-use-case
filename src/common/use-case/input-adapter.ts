export interface InputAdapter<Data, Input> {
    handle(data: Data): Input;
}

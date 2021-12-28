import { AxiosResponse } from 'axios';

export type ResponseType<T> = AxiosResponse<{
    results: Omit<T, 'type'>[];
}>;

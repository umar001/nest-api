import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        return next.handle().pipe(
            map((data) => ({
                success: true,
                statusCode: response.statusCode,
                message: 'Request successful',
                data,
                timestamp: new Date().toISOString(),
                path: request.url,
            }))
        );
    }
}

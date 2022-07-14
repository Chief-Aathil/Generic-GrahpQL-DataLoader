import {
    createParamDecorator, ExecutionContext
} from '@nestjs/common'

export const InjectDataloaderv2 = createParamDecorator(
    async (data: any, context: ExecutionContext) => {
        return `data:${data}\ncontext:${context}`
    }
)
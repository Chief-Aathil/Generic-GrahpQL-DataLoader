import {
    createParamDecorator, ExecutionContext
} from '@nestjs/common'

export const InjectDataloader = createParamDecorator(
    async (data: any, context: ExecutionContext) => {
        return `data:${data}\ncontext:${context}`
    }
)
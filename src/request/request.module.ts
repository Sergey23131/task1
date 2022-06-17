import {Module} from '@nestjs/common';
import {RequestService} from './request.service';
import {HttpModule, HttpService} from "@nestjs/axios";

@Module({
    providers: [RequestService,HttpService],
    exports: [RequestService],
    imports:[RequestModule,HttpModule]
})
export class RequestModule {
}

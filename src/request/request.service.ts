import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        try {
           // console.log(request.body);

      return true;
    } catch (err) {
            throw new UnauthorizedException({message: 'user is not auth'})
        }
  }
}

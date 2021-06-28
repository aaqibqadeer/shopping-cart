import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const session = context.switchToHttp().getRequest().session;

    if (session.user) {
      return true;
    }

    return false;
  }
}

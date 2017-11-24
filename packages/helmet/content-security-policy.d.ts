/// <reference types="helmet" />
/// <reference types="express" />
import * as helmet from 'helmet';
import { NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
export declare class HelmetContentSecurityPolicyMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetContentSecurityPolicyConfiguration): void;
    private static options;
    resolve(...args: any[]): RequestHandler;
}

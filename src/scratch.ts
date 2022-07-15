// import { createParamDecorator, ExecutionContext, Injectable, Scope } from "@nestjs/common";
// import { GqlExecutionContext } from "@nestjs/graphql";
// import { InjectRepository } from "@nestjs/typeorm";
// import DataLoader, { BatchLoadFn } from "dataloader";
// import { K } from "handlebars";
// import { FindConditions, FindManyOptions, getRepository, ObjectLiteral , EntityTarget, BaseEntity, Repository} from "typeorm";


// const NEST_LOADER_CONTEXT_KEY = 'NEST_LOADER_CONTEXT_KEY';

// export const InjectLoader = createParamDecorator(
//   async <V extends Newable<any>, K = string>(inp: any, context: ExecutionContext) => {
//     let baseLoaderInput:GetDataloaderInput = {
//       resolveFieldName: context.getHandler().name,
//       resolveType:'one',
//     }
//     // const args = context.getArgs();
//     return getDataLoaderFromContext(baseLoaderInput, context);
//   },
// );

// export type Newable<T> = {
//   new(...args: any[]): T,
//   // new():T,
// };

// export interface InjectLoaderInput<Entity> {
//   // resolveFieldName: string,
//   resolveInput: Function | ResolveFindQueryObject<Entity> | FindManyOptions<Entity> | FindConditions<Entity>,
// }

// export interface GetDataloaderInput {
//   resolveFieldName: string,
//   resolveType: 'one' | 'many',

// }

// export interface ResolveFindQueryObject<Entity> {
//   // fromEntity: Newable<any>,
//   fieldName: string,
//   where?: FindConditions<Entity>[],
//   relations?: string[]



// }


// function getDataLoaderFromContext<V extends Newable<any>, K>(inp: GetDataloaderInput, inputContext: ExecutionContext) {
//   const context = GqlExecutionContext.create(inputContext).getContext();
//   const dataLoaderinput: any = {};
//   if (context[NEST_LOADER_CONTEXT_KEY][inp.resolveFieldName] === undefined) {
//     new BaseDataLoader<V, K>(dataLoaderinput)
//   }

// }

// @Injectable({scope:Scope.REQUEST})
// class BaseDataLoader<V extends Newable<any>, K = string>{
//   private dataloader: DataLoader<K, V> | DataLoader<K, V[]>;
//   private valueRepo: Repository<V>;
//   // private batchLoadFunction
//   //TODO: use BatchLoadFn<K,V or V[]> as return type
//   constructor(
//     inp: GetDataloaderInput,
//   ) {
//     this.valueRepo = this.getRepository(V)
//     //TODO: use strict types
//     this.dataloader = new DataLoader<any,any>(this.getBatchloadFunction(inp));
//   }
//   public getBatchloadFunction(input:any): any{
//     const values :V[]= this.getValues(input.keys);
//     if (input.resolveType === 'one') {
//       const map = new Map<K, V>();
//       values.forEach(value => {
        
//       })
//      }
//   }

//   private getValues( keys: K[]): V[]{
//     return []
//   }

//   private getRepository(type: Newable<V>): Repository<V> {
//     return getRepository(type);
//   }
//   public getDataLoader() {
//     return this.dataloader;
//   }
// }


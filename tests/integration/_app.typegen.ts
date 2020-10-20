/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import { core } from '../..'
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    title(...args: any): void
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    title(options: { escape: boolean }): void
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    body: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostSearchInput: {
    // input type
    body?: string | null // String
    title?: string | null // String
  }
}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Mutation: {}
  Post: {
    // root type
    body?: string | null // String
    title?: string | null // String
  }
  Query: {}
  Subscription: {}
  User: { firstName: string; lastName: string }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostSearchInput: NexusGenInputs['PostSearchInput']
  String: NexusGenScalars['String']
  Int: NexusGenScalars['Int']
  Float: NexusGenScalars['Float']
  Boolean: NexusGenScalars['Boolean']
  ID: NexusGenScalars['ID']
}

export interface NexusGenFieldTypes {
  Mutation: {
    // field return type
    createUser: NexusGenRootTypes['User'] | null // User
  }
  Post: {
    // field return type
    body: string | null // String
    title: string | null // String
  }
  Query: {
    // field return type
    foo: string | null // String
    searchPosts: Array<NexusGenRootTypes['Post'] | null> | null // [Post]
    user: NexusGenRootTypes['User'] | null // User
  }
  Subscription: {
    // field return type
    someBoolean: boolean | null // Boolean
    someField: number | null // Int
    someFields: Array<number | null> | null // [Int]
    someFloat: number | null // Float
    someID: string | null // ID
    someInt: number | null // Int
    someInts: Array<number | null> | null // [Int]
    someString: string | null // String
  }
  User: {
    // field return type
    firstName: string | null // String
    lastName: string | null // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: {
      // args
      firstName?: string | null // String
      lastName?: string | null // String
    }
  }
  Query: {
    searchPosts: {
      // args
      input?: NexusGenInputs['PostSearchInput'] | null // PostSearchInput
    }
    user: {
      // args
      id?: string | null // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = 'Mutation' | 'Post' | 'Query' | 'Subscription' | 'User'

export type NexusGenInputNames = 'PostSearchInput'

export type NexusGenEnumNames = never

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = 'Boolean' | 'Float' | 'ID' | 'Int' | 'String'

export type NexusGenUnionNames = never

export interface NexusGenTypes {
  context: any
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  allTypes: NexusGenAllTypes
  inheritedFields: NexusGenInheritedFields
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginSchemaConfig {}
}

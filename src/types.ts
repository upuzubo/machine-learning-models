export interface IModel {
  name: string;
  version: string;
  description: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  tags: string[];
  dependencies: string[];
  data: any[];
}

export interface IModelDefinition {
  name: string;
  description: string;
  version: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  tags: string[];
  dependencies: string[];
  data: any[];
}

export interface IModelDefinitionWithMetadata {
  name: string;
  description: string;
  version: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  tags: string[];
  dependencies: string[];
  data: any[];
  metadata: any;
}

export interface IModelMetadata {
  name: string;
  description: string;
  version: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  tags: string[];
  dependencies: string[];
  data: any[];
}